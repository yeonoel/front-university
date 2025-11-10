import styled from "styled-components";
import {colors, colorBackground, colorText } from "../../utils/styles/colors";
import { useNavigate } from "react-router-dom";
import { formatRatingDisplay } from "../../utils/rating/rating";


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 30px;
  background-color: ${colors.backgroundLight};
  border-radius: 5px;
  width: 300px;
  height: 250px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #ffffffff;
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  h3 {
    flex: 1; /* prend l'espace restant */
    font-size: 16px;
    font-weight: 600;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; /* coupe proprement les textes longs */
  }
`;

const CardImage = styled.img`
  flex-shrink: 0; /* empêche l’image de se réduire */
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #f5f5f5;
`;


const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;

  .typesCle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    span {
      font-size: 10px;
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 800;
    }

    /* différents backgrounds pour chaque span */
    span:nth-child(1) {
      background-color: #e4e4e7ff; /* Type: bleu */
      color: #706f6fff;
    }

    span:nth-child(2) {
       background-color:${({priceLevel}) => colorBackground[priceLevel]}; /* Commune: orange */
       color: ${({priceLevel}) => colorText[priceLevel]};
    }

    span:nth-child(3) {
      background-color: #c5d2f7ff; /* Prix: vert */
      color: #343871ff;
    }
  }
`;

const FiliereText = styled.div`
  ul {
    display: flex;
    justify-content: space-between; /* répartit les 3 éléments sur toute la largeur */
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    gap: 10px;
  }

  li {
    flex: 1; /* chaque élément prend une part égale */
    text-align: center; /* centre le texte dans sa case */
    background-color: #ececec;
    padding: 5px 8px;
    border-radius: 5px;
    font-size: 10px;
    white-space: nowrap; /* empêche le texte de couper */
    overflow: hidden; /* masque ce qui dépasse */
    text-overflow: ellipsis; /* ajoute "..." si c’est trop long */
  }
`;




const StyledNote = styled.span`
  font-weight: bold;
  color: #FFA500;
  margin-bottom: 10px;
`;


function Cards({school, id, name, logo, type, filieres, priceLevel, commune}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/universite/${id}`);
  }

  return (
    <CardWrapper onClick={handleClick}>
      <CardHeader>
        <CardImage src={logo} alt="Logo de l'université" className="card-logo" />
        <h3>{name}</h3>
      </CardHeader>

      <CardContent priceLevel={priceLevel}>        
        <div className="typesCle">
          <span>{type}</span>
          <span>{priceLevel}</span>
          <span>{commune}</span>
        </div>
        <StyledNote>{formatRatingDisplay(school)} </StyledNote>
        <FiliereText>
          <ul>
            {filieres && filieres.map((filiere) => (
              <li key={filiere.id}>{filiere.name}</li>
            ))}
          </ul>
        </FiliereText>

      </CardContent>
    </CardWrapper>
  )
}

export default Cards;