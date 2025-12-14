import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks";
import avatar_user_connected from "../../assets/avatar_user_connected.jpg";
import { colors } from "../../utils/styles/colors";
import DropdownUser from "../DropdownUser";
import { LogIn } from "lucide-react";

const ConnexionButton = styled.button`
  padding: 0.5rem 1.25rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  background: ${colors.gray400};
  color: ${colors.white};

  &:hover {
    background: ${colors.primaryPinkDark};
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.4rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.2rem .8rem;
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
  height: 42px;
  width: 42px;
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

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

// Nouveaux styles pour mobile
const MobileControls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 12px;
    z-index: 2000;
  }
`;

const DesktopNav = styled(Nav)`
  @media (max-width: 768px) {
    display: none;
  }
`;

function ConnexionDeconnexion() {
  const [opendropdownUser, setOpenDropdownUser] = useState(false);
  const navigate = useNavigate();
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
    };

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [opendropdownUser]);



  return (
    <>
      {/* Navigation Desktop */}
      <DesktopNav>
        {isAuthenticated ? (
          <UserAvatarContainer ref={avatarRef} onClick={handleDropdownUser}>
            <UserAvatar src={avatar_user_connected} alt="Avatar utilisateur" />
          </UserAvatarContainer>
        ) : (
          <ConnexionButton title="Se connecter" onClick={handleConnexionPage}>
            <LogIn size={20} />
          </ConnexionButton>
        )}
      </DesktopNav>

      {/* Contrôles Mobile */}
      <MobileControls>
        {isAuthenticated ? (
          <UserAvatarContainer ref={avatarRef} onClick={handleDropdownUser}>
            <UserAvatar src={avatar_user_connected} alt="Avatar utilisateur" />
          </UserAvatarContainer>
        ) : (
          <ConnexionButton title="Se connecter" onClick={handleConnexionPage}>
            <LogIn size={20} />
          </ConnexionButton>
        )}

      </MobileControls>

      {/* Dropdown User */}
      <DropdownUser
        opendropdownUser={opendropdownUser}
        setOpenDropdownUser={setOpenDropdownUser}
      />
    </>
  );
}

export default ConnexionDeconnexion;