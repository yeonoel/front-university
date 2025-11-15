import styled from "styled-components";
import { colorBackground, colors, colorText } from "../../utils/styles/colors";
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useTheme } from "../../utils/hooks";

const CommentContainer = styled.div`
    background: ${({ isDarkMode }) => isDarkMode ? colorBackground.darkHover : colorBackground.lightHover};
    color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid rgba(139, 92, 246, 0.2);

    @media (max-width: 768px) {
        font-size: 12px;
    }

`;

const FirstLetterName = styled.div`
    font-weight: bold;
    font-size: 20px;
    background-color: orange;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HeaderComment = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    child:nth-child(2){
        magin-left: 20px;
    }
    line-height: 20px;
    font-size: 14px;
        
`;

const ContainerScoreCriteria = styled.div`
  display: flex;
  flex-wrap: wrap;       /* permet le retour à la ligne */
  gap: 12px;             /* espace entre les éléments */
  justify-content: space-between;
  margin-bottom: 10px;
`;


const ScoreCriteria = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 8px); /* 2 éléments par ligne */
  border-bottom: 1px solid black;
  box-sizing: border-box;
  margin-bottom: 10px;
  padding-bottom: 10px;

  p:nth-of-type(2) {
    font-weight: bold;
    display: flex;
    align-items: center;
    background-color: ${({note}) => colorBackground[note]};
    color: ${({note}) => colorText[note]};
    border-radius: 5px;
    height: 30px;
    width: 100px;
    justify-content: center;
    font-size: 15px;
  }

  @media (max-width: 768px) {
      p:nth-of-type(2) {
          height: 20px;
          width: 50px;
          font-size: 7px;
      }
  }
`;


const ContainerScoreCriteriaComment = styled.div`
    margin-top: 20px;
    .comment{
        font-style: italic;
        margin-bottom: 24px;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        transition: box-shadow 0.2s ease;
        color: ${({isDarkMode}) => isDarkMode ? colors.textPrimary : colors.textSecondary};
        
        &:hover {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }
    }
`;


function Comment({review}) {
    const {theme} = useTheme();
    const nomComplet = review.user.username;
    const nom =  nomComplet.slice(0,1).toUpperCase();

    const createdAt = new Date("2025-11-11T17:26:10.357Z");
    const dateRelative = formatDistanceToNow(createdAt, { addSuffix: true, locale: fr });

    return (
        <CommentContainer isDarkMode={theme === "dark"}>
             <HeaderComment>
                <FirstLetterName>
                    {nom}
                </FirstLetterName>
                <div>
                    <p>{nomComplet}</p>
                    <p>{dateRelative}</p>
                </div>
             </HeaderComment>
             <ContainerScoreCriteriaComment isDarkMode={theme === "dark"}>
                         <p className="comment">{review.comment}</p>
                         <ContainerScoreCriteria>
                            {
                                review.reviewScores.map((score) => (
                                    <ScoreCriteria note={score.value} key={score.id}>
                                        <p>{score.criteria.label}</p>
                                        <p>{score.value}</p>
                                    </ScoreCriteria>
                                ))
                            }
                         </ContainerScoreCriteria>                     
             </ContainerScoreCriteriaComment>            
        </CommentContainer>
    );
}

export default Comment;