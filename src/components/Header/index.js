import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../utils/hooks";
import { Shield } from "lucide-react";
import { colors } from "../../utils/styles/colors";
import ConnexionDeconnexion from "../connexionDeconnexion.jsx";

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px 100px;
  background: ${({isDarkMode}) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};

  @media (max-width: 768px) {
    padding: 10px 20px;
    bottom: 0;
    top: auto;
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
    gap: 10px;
  }
`;

const StyledSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  font-weight: bold;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
  color: ${({isDarkMode}) => isDarkMode ? colors.textPrimary : colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;





function Nav() {
  const {theme} = useTheme();
  const navigate = useNavigate();
  const handleHomePage = () => navigate("/");



  return (
    <StyledHeader isDarkMode={theme === "dark"}>
      <TopRow>
        <StyledSpan isDarkMode={theme === "dark"} onClick={handleHomePage}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
          TechCampus
        </StyledSpan>

          <ConnexionDeconnexion /> 

      </TopRow>

      
    </StyledHeader>
  );
}

export default Nav;