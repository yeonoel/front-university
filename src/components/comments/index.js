import styled from "styled-components";
import { colorBackground, colorText } from "../../utils/styles/colors";

const CommentContainer = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 12px;
    }

`;

const FirstLetterName = styled.div`
    font-weight: bold;
    font-size: 20px;
    background-color: orange;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`;

const HeaderComment = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    child:nth-child(2){
        magin-left: 20px;
    }
        line-height: 10px;
`;

const ContainerScoreCriteria = styled.div`
  display: flex;
  flex-wrap: wrap;       /* permet le retour à la ligne */
  gap: 12px;             /* espace entre les éléments */
  justify-content: space-between;
`;


const ScoreCriteria = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  width: calc(50% - 8px); /* 2 éléments par ligne */
  border-bottom: 1px solid black;
  box-sizing: border-box;

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
    color: white;
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
`;


function Comment({review}) {
    const nomComplet = "Bamba alpha"
    const nom =  nomComplet.slice(0,1).toUpperCase();

    return (
        <CommentContainer>
             <HeaderComment>
                <FirstLetterName>
                    {nom}
                </FirstLetterName>
                <div>
                    <p>{nomComplet}</p>
                    <p>il ya 2jour</p>
                    
                </div>
             </HeaderComment>
             <ContainerScoreCriteriaComment>
            
                   
                         <p>{review.comment}</p>
                         <ContainerScoreCriteria>
                            {
                                review.scores.map((score) => (
                                    <ScoreCriteria note={score.value} key={score.id}>
                                        <p>{score.criteria.label} </p>
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