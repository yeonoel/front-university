import styled from "styled-components";
import logo from "../../assets/logo.png";
import Connexion from "../ModalConnexion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  padding: 15px 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

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
  font-size: 24px;
  font-weight: bold;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledLogo = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  input[type="text"] {
    flex: 1;
    border: none;
    padding: 10px 15px;
    outline: none;
    font-size: 16px;
  }

  input[type="button"] {
    background-color: #b4b5b6ff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background-color: #4889d0ff;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    order: -1;
  }
`;

const ConnexionButton = styled.button`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  white-space: nowrap;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #1e293b 0%, #F54927 100%);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Filters = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: white;
    font-size: 15px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: #4889d0ff;
    }

    &:focus {
      outline: none;
      border-color: #4889d0ff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;

    select {
      width: 100%;
    }
  }
`;

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleHomePage = () => navigate("/");
  return (
    <StyledHeader>
      <TopRow>
        <StyledSpan onClick={handleHomePage}>
          <StyledLogo src={logo} alt="logo" />
          EcoleInfo CI
        </StyledSpan>

        <SearchBar>
          <input type="text" placeholder="Rechercher une école..." />
          <input type="button" value="🔍" />
        </SearchBar>

        <ConnexionButton onClick={() => setIsOpen(true)}>Connexion</ConnexionButton>
      </TopRow>

      <Filters>
        <select>
          <option value="">-- Niveau du prix --</option>
          <option value="abordable">Abordable</option>
          <option value="moyenne">Moyenne</option>
          <option value="trop-chere">Trop chère</option>
        </select>

        <select>
          <option value="">-- Type d'école --</option>
          <option value="public">Public</option>
          <option value="privee">Privée</option>
          <option value="semi-public">Semi-publique</option>
        </select>
      </Filters>

      <Connexion
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

    </StyledHeader>
  );
}

export default Nav;