import styled from "styled-components";
import { useTheme } from "../../utils/hooks";
import { colors } from "../../utils/styles/colors";


const StyledSynthese = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 10px;
  padding: 20px 70px;
  color: ${({isDarkMode}) => isDarkMode ? colors.textPrimary : colors.textSecondary};
  background: ${({isDarkMode}) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};
  
  img {
      height: 20px;
        width: 20px;
        font-weight: bold;
    }
    span {
      font-size: 24px;
      font-weight: bold;
      margin-top: 5px;
    }
    p {
      font-size: 14px;
        margin-top: -2px;
        color: ${({isDarkMode}) => isDarkMode ? "#fff" : "555555"};
    `;


function Synthese({logo, note, label}) {
  const {theme} = useTheme();
  return (
    <StyledSynthese isDarkMode={theme === "dark"} >
      <img src={logo} alt="logo de l'école" />
      <span>{note}</span>
      <p>{label}</p>
    </StyledSynthese>
  );
}

export default Synthese;