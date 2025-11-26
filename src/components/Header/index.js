import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../utils/hooks";
import { Shield, ArrowLeft } from "lucide-react";
import { colors } from "../../utils/styles/colors";
import ConnexionDeconnexion from "../connexionDeconnexion.jsx";

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1999;
  padding: 10px 100px;
  background: ${({ isDarkMode }) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  z-index: 1999;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s ease;
  color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    transform: translateX(-2px);
  }

  &:active {
    transform: translateX(0);
  }

  @media (max-width: 480px) {
    display: none;
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
  color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 18px;
  }
  
  span {
    @media (max-width: 480px) {
      display: none;
    }
  }
`;

function Header() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation(); // 🔑 Hook pour connaître la page actuelle

  const handleHomePage = () => navigate("/");
  const handleGoBack = () => navigate(-1); // Revenir à la page précédente

  // Vérifier si on est sur la page d'accueil
  const isHomePage = location.pathname === "/";

  return (
    <StyledHeader isDarkMode={theme === "dark"}>
      <TopRow>
        <LeftSection>
          {/* Afficher la flèche UNIQUEMENT si on n'est PAS sur la page d'accueil */}
          {!isHomePage && (
            <BackButton
              isDarkMode={theme === "dark"}
              onClick={handleGoBack}
              aria-label="Retour"
            >
              <ArrowLeft size={16} />
            </BackButton>
          )}

          {/* Le logo reste toujours visible */}
          <StyledSpan isDarkMode={theme === "dark"} onClick={handleHomePage}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span>TechCampus</span>
          </StyledSpan>
        </LeftSection>

        <ConnexionDeconnexion />
      </TopRow>
    </StyledHeader>
  );
}

export default Header;