import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  background: white;
  border: 1px solid #ccc;
  height: 40px;
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

  button {
    color: white;
    border: none;
    padding: 5px 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;
    border-left: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileSearchTrigger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
    border: 2px solid #d1d5db;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      border-color: #a855f7;
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (max-width: 480px) {
    font-size: 0.875rem;
    padding: 0.1rem .8rem;
  }
`;

const SearchIcon = styled(Search)`
  color: #6b7280;
  width: 20px;
  height: 20px;
`;

const TriggerText = styled.span`
  color: #6b7280;
  font-size: 10px;
  font-weight: 400;  

  
`;

const MobileSearchOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2700 ;
    animation: fadeIn 0.3s ease;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

const MobileSearchContainer = styled.div`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 2701;
    animation: slideDown 0.3s ease;

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  }
`;

const MobileSearchHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #374151;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:active {
    transform: scale(0.95);
  }
`;

const MobileSearchTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #374151;
  font-weight: 600;
`;

const MobileSearchInput = styled.input`
  width: 100%;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #a855f7;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const MobileSearchButton = styled.button`
  width: 100%;
  background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 12px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

function Rechercher() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (searchTerm.length > 50) return;
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = (e) => {
    if (!searchTerm.trim()) return;

    navigate(`/Accueil/search?query=${encodeURIComponent(searchTerm)}`);
    setIsMobileSearchOpen(false);
    setSearchTerm('');
  };

  const openMobileSearch = () => {
    setIsMobileSearchOpen(true);
  };

  const closeMobileSearch = () => {
    setIsMobileSearchOpen(false);
  };

  return (
    <>
      {/* Barre de recherche Desktop */}
      <SearchBar>
        <input
          type="text"
          placeholder="Rechercher une école..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>🔍</button>
      </SearchBar>

      {/* Élément déclencheur Mobile */}
      <MobileSearchTrigger onClick={openMobileSearch}>
        <SearchIcon />
        <TriggerText>Rechercher</TriggerText>
      </MobileSearchTrigger>

      {/* Overlay de recherche Mobile */}
      <MobileSearchOverlay
        isOpen={isMobileSearchOpen}
        onClick={closeMobileSearch}
      >
        <MobileSearchContainer onClick={(e) => e.stopPropagation()}>
          <MobileSearchHeader>
            <BackButton onClick={closeMobileSearch}>←</BackButton>
            <MobileSearchTitle>Rechercher une école</MobileSearchTitle>
          </MobileSearchHeader>

          <MobileSearchInput
            type="text"
            placeholder="Nom de l'école, ville, filière..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            maxLength={50}
          />

          <MobileSearchButton
            onClick={(e) => handleSearch(e)}
            disabled={!searchTerm.trim()}
          >
            <Search size={20} />
            Rechercher
          </MobileSearchButton>
        </MobileSearchContainer>
      </MobileSearchOverlay>
    </>
  );
}

export default Rechercher;