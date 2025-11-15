import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useTheme } from "../../utils/hooks";
import avatar_user_connected from "../../assets/avatar_user_connected.jpg";
import DropdownUser from "../openDropDownUser";
import { Shield } from "lucide-react";
import { colors } from "../../utils/styles/colors";

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
  font-size: 16px;
  font-weight: bold;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
  color: ${({isDarkMode}) => isDarkMode ? colors.textPrimary : colors.textSecondary};

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ConnexionButton = styled.button`
  border: none;
  padding: 9px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;
  white-space: nowrap;
  transition: background 0.3s ease;
  background: ${colors.primaryGradient};
  color: ${colors.white};

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserAvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border: 2px solid #e5e7eb;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.3s ease, transform 0.2s ease;

  &:hover {
    border-color: #4889d0ff;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 36px;
    width: 36px;
  }
`;



function Nav() {
  const {theme} = useTheme();
  const [opendropdownUser, setOpenDropdownUser] = useState(false);
  const navigate = useNavigate();
  const handleHomePage = () => navigate("/");
  const { isAuthenticated } = useAuth();
  const avatarRef = useRef(null);

  const handleConnexionPage = () => navigate("/connexion");

  const handleDropdownUser = (e) => {
    e.stopPropagation();
    setOpenDropdownUser(!opendropdownUser);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (avatarRef.current && !avatarRef.current.contains(event.target)) {
        setOpenDropdownUser(false);
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [opendropdownUser]);

  return (
    <StyledHeader isDarkMode={theme === "dark"}>
      <TopRow>
        <StyledSpan isDarkMode={theme === "dark"} onClick={handleHomePage}>
            <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
          TechCampus
        </StyledSpan>

        {isAuthenticated ? (
          <UserAvatarContainer ref={avatarRef}>
            <UserAvatar 
              src={avatar_user_connected}
              alt="Avatar utilisateur" 
              onClick={handleDropdownUser}
            />
          </UserAvatarContainer>
        ) : (
          <ConnexionButton 
            onClick={handleConnexionPage}
          >
            Se connecter
          </ConnexionButton>
        )}
      </TopRow>

      <DropdownUser
        opendropdownUser={opendropdownUser}
        setOpenDropdownUser={setOpenDropdownUser}
      />
    </StyledHeader>
  );
}

export default Nav;