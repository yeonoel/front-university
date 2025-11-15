import styled from "styled-components";
import { colors, colorBackground, colorText, getRatingColor } from "../../utils/styles/colors";
import { useNavigate } from "react-router-dom";
import { formatRatingDisplay } from "../../utils/rating/rating";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  background: ${({ isDarkMode }) => isDarkMode ? colors.backgroundDark : colors.backgroundLitlleLight};
  color: ${({ isDarkMode }) => isDarkMode ? colors.white : colors.slate900};
  border: 1px solid rgba(139, 92, 246, 0.2); /* purple-500 avec opacité */
  border-radius: 12px;
  width: 300px;
  height: 250px;
  transition: all 300ms ease;
  
  &:hover {
    cursor: pointer;
    background: ${({ isDarkMode }) => isDarkMode ? colorBackground.darkHover : colorBackground.lightHover};

    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.2);
    transform: translateY(-4px);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  overflow: hidden;

  h3 {
    flex: 1;
    font-size: 18px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.02em;
  }
`;

const CardImage = styled.img`
  flex-shrink: 0;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  object-fit: cover;
  background-color: ${colors.slate700};
  border: 2px solid rgba(139, 92, 246, 0.3);
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: space-between;

  .typesCle {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
      font-size: 11px;
      padding: 6px 12px;
      border-radius: 8px;
      font-weight: 600;
      white-space: nowrap;
      letter-spacing: 0.02em;
    }

    /* Type d'école */
    span:nth-child(1) {
      background-color: rgba(139, 92, 246, 0.1);
      color: #A78BFA; /* purple-400 */
      border: 1px solid rgba(139, 92, 246, 0.2);
    }

    /* Niveau de prix - UTILISE VOS VARIABLES EXISTANTES */
    span:nth-child(2) {
      background-color: ${({priceLevel}) => colorBackground[priceLevel] || 'rgba(139, 92, 246, 0.1)'};
      color: ${({priceLevel}) => colorText[priceLevel] || colors.textSecondary};
      border: 1px solid ${({priceLevel}) => colorText[priceLevel] ? `${colorText[priceLevel]}33` : 'rgba(139, 92, 246, 0.2)'};
    }

    /* Commune */
    span:nth-child(3) {
      background-color: rgba(59, 130, 246, 0.1);
      color: #60A5FA; /* blue-400 */
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
  }
`;

const FiliereText = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
    gap: 8px;
  }

  li {
    flex: 1;
    text-align: center;
    background-color: rgba(139, 92, 246, 0.05);
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 11px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid rgba(139, 92, 246, 0.1);
    transition: all 200ms ease;

    &:hover {
      background-color: rgba(139, 92, 246, 0.1);
      color: ${colors.textPrimary};
    }
  }
`;

const StyledNote = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 18px;
  color: ${({rating}) => getRatingColor(rating)};
  
  &::before {
    content: "★";
    font-size: 20px;
  }
`;

function Cards({school, id, name, logo, type, filieres, priceLevel, commune, isDarkMode}) {
  const navigate = useNavigate();
  const rating = parseFloat(formatRatingDisplay(school));

  const handleClick = () => {
    navigate(`/universite/${id}`);
  };

  return (
    <CardWrapper isDarkMode={isDarkMode} onClick={handleClick}>
      <CardHeader>
        <CardImage src={logo} alt={`Logo de ${name}`} />
        <h3>{name}</h3>
      </CardHeader>

      <CardContent priceLevel={priceLevel}>        
        <div className="typesCle">
          <span>{type}</span>
          <span>{priceLevel}</span>
          <span>{commune}</span>
        </div>
        
        <StyledNote rating={rating}>
          {formatRatingDisplay(school)}
        </StyledNote>
        
        <FiliereText>
          <ul>
            {filieres && filieres.slice(0, 3).map((filiere) => (
              <li key={filiere.id} title={filiere.name}>
                {filiere.name}
              </li>
            ))}
          </ul>
        </FiliereText>
      </CardContent>
    </CardWrapper>
  );
}

export default Cards;