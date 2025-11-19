import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/hooks";
import avatar_user_connected from "../../assets/avatar_user_connected.jpg";

import { colors } from "../../utils/styles/colors";
import DropdownUser from "../DropdownUser";



const ConnexionButton = styled.button`
  padding: 0.5rem 1.25rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  background: ${colors.primaryGradient};
  color: ${colors.white};

  &:hover {
    background: ${colors.primaryPinkDark};
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.4rem 1rem;
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
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [opendropdownUser]);

  return (
    <>
     
        {isAuthenticated ? (
          <UserAvatarContainer ref={avatarRef}
            onClick={handleDropdownUser}
          >
            <UserAvatar 
              src={avatar_user_connected}
              alt="Avatar utilisateur" 
            />
          </UserAvatarContainer>
        ) : (
          <ConnexionButton 
            onClick={handleConnexionPage}
          >
            Se connecter
          </ConnexionButton>
        )}

        <DropdownUser
            opendropdownUser={opendropdownUser}
            setOpenDropdownUser={setOpenDropdownUser}
      />

    </>
  );
}

export default ConnexionDeconnexion;