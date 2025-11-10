import styled from "styled-components";
import trendingUp from "../../assets/trending-up.svg";
import clockThree from "../../assets/clock-three.svg";
import { useState } from "react";

const ToggleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background-color: #ffffffff;
  margin: 20px auto;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;

  const BtnToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent; /* bordure neutre pour la base */
  width: 50%;
  cursor: pointer;

  span {
    margin-left: 5px;
  }
    
  &.firstToggle {
      border-bottom: ${({isActive}) => isActive? "2px solid orange" : "none"};
            color: ${({isActive}) => isActive? "orange" : "none"};

    }
  &.secondToggle {
          border-bottom: ${({isActive}) => isActive? "2px solid orange" : "none"};
          color: ${({isActive}) => isActive? "orange" : "none"};
          img {
          color: "orange"
          }
  }`;

  const Icon = styled.img`

    svg{
      stroke: ${({ isActive }) => (isActive ? "red" : "#888")};
    transition: stroke 0.3s ease;
    }
  `;
  
function ToggleComment() {
  const [isClockThree, setIsClokThree] = useState(true);
  

 
  return (
    <ToggleContainer>
        <BtnToggle 
        isActive={isClockThree}
        onClick={() => setIsClokThree(true)} 
        className="firstToggle">
          <Icon src={clockThree} alt="logo de l'école" />  <span>Plus récents</span>
        </BtnToggle>
        <BtnToggle 
        className="secondToggle" 
        onClick={() => setIsClokThree(false)}
        isActive={!isClockThree}
        >
          <Icon src={trendingUp} alt="logo de l'école" /><span>Mieux noté</span>
        </BtnToggle>
    </ToggleContainer>
  );
}

export default ToggleComment;