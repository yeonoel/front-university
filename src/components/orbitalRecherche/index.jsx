import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Search, Sparkles } from 'lucide-react';

// ========== ANIMATIONS ==========
// Animation de flottement aléatoire pour chaque bouton
const float = keyframes`
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  33% {
    transform: translateY(-15px) translateX(10px);
  }
  66% {
    transform: translateY(5px) translateX(-10px);
  }
`;

// Animation de pulsation
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
  }
  50% {
    transform: scale(1.08);
    box-shadow: 0 0 20px 10px rgba(139, 92, 246, 0);
  }
`;

// Animation de brillance
const shine = keyframes`
  0% {
    left: -100%;
  }
  100% {
    left: 200%;
  }
`;

// Animation d'apparition
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

// Animation de particules
const particleFloat = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
`;

// ========== STYLED COMPONENTS ==========
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  /* Effet de particules en arrière-plan */
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background-image: 
      radial-gradient(circle, rgba(139, 92, 246, 0.15) 2px, transparent 2px),
      radial-gradient(circle, rgba(236, 72, 153, 0.1) 1px, transparent 1px);
    background-size: 80px 80px, 120px 120px;
    background-position: 0 0, 40px 40px;
    animation: ${particleFloat} 25s ease-in-out infinite;
    opacity: 0.5;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: white;
  text-align: center;
  background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #cbd5e1;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s backwards;
`;

// Conteneur principal avec l'input au centre et les boutons autour
const CloudContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  @media (max-width: 768px) {
    min-height: 500px;
    padding: 1rem;
  }
`;

// Conteneur de l'input au centre (le "chanteur")
const InputContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 450px;
  animation: ${fadeInUp} 0.8s ease-out 0.4s backwards;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(30px);
  border-radius: 50px;
  padding: 0.5rem;
  border: 3px solid rgba(139, 92, 246, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 80px rgba(139, 92, 246, 0.2);

  &:focus-within {
    border-color: rgba(139, 92, 246, 1);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 100px rgba(139, 92, 246, 0.5),
      inset 0 0 20px rgba(139, 92, 246, 0.1);
    transform: scale(1.03);
  }

  /* Effet de brillance au survol */
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    transform: rotate(45deg);
    animation: ${shine} 3s ease-in-out infinite;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 4rem;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1.15rem;
  font-weight: 500;

  &::placeholder {
    color: #94a3b8;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8b5cf6;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SearchButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  border: none;
  border-radius: 50px;
  padding: 0.9rem 2rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.5);

  &:hover {
    transform: translateY(-50%) scale(1.08);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.7);
  }

  &:active {
    transform: translateY(-50%) scale(0.98);
  }
`;

// Bouton qui "flotte" autour de l'input (la "foule")
const FloatingButton = styled.button`
  position: absolute;
  /* Positionnement calculé dynamiquement */
  left: ${props => props.$x}px;
  top: ${props => props.$y}px;
  
  background: rgba(30, 41, 59, 0.85);
  backdrop-filter: blur(15px);
  border: 2px solid rgba(139, 92, 246, 0.4);
  border-radius: 30px;
  padding: 0.8rem 1.6rem;
  color: white;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  z-index: 5;
  
  /* Animation de flottement unique pour chaque bouton */
  animation: ${float} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  
  /* Apparition progressive */
  opacity: 0;
  animation: ${fadeInUp} 0.6s ease-out ${props => props.$appearDelay}s forwards,
             ${float} ${props => props.$duration}s ease-in-out ${props => props.$delay}s infinite;

  /* Effet de brillance */
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.25),
      transparent
    );
    transition: left 0.5s;
  }

  /* État actif avec pulsation */
  ${props => props.$active && `
    background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
    border-color: transparent;
    box-shadow: 0 0 40px rgba(139, 92, 246, 0.8);
    animation: ${pulse} 2s ease-in-out infinite;
    transform: scale(1.1);
  `}

  &:hover {
    background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
    border-color: transparent;
    transform: scale(1.15);
    box-shadow: 0 8px 35px rgba(139, 92, 246, 0.7);
    z-index: 15;

    &::before {
      left: 200%;
    }
  }

  &:active {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;

const ResultsContainer = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(30, 41, 59, 0.7);
  backdrop-filter: blur(30px);
  border-radius: 25px;
  border: 2px solid rgba(139, 92, 246, 0.3);
  min-height: 100px;
  width: 550px;
  max-width: 90vw;
  animation: ${fadeInUp} 0.5s ease-out;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;

const ResultText = styled.p`
  color: white;
  font-size: 1.1rem;
  text-align: center;
  line-height: 1.8;

  strong {
    background: linear-gradient(135deg, #a78bfa 0%, #ec4899 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 1.25rem;
  }
`;

// ========== COMPOSANT PRINCIPAL ==========
function OrbitalSearchInput() {
  const [searchText, setSearchText] = useState('');
  const [activeFilter, setActiveFilter] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [buttonPositions, setButtonPositions] = useState([]);

  // Les différentes filières du numérique (useMemo pour éviter la recréation)
  const filters = React.useMemo(() => [
    'Développement Web',
    'Cybersécurité',
    'Data Science',
    'IA & ML',
    'DevOps',
    'Design UX/UI',
    'Marketing Digital',
    'Blockchain',
    'Cloud Computing',
    'Mobile Dev'
  ], []);

  // Calcul des positions "en foule" autour de l'input
  useEffect(() => {
    const calculatePositions = () => {
      const containerWidth = window.innerWidth > 768 ? 900 : window.innerWidth - 40;
      const containerHeight = window.innerWidth > 768 ? 600 : 500;
      const centerX = containerWidth / 2;
      const centerY = containerHeight / 2;
      
      // Zone d'exclusion autour de l'input (le "chanteur")
      const exclusionRadius = window.innerWidth > 768 ? 280 : 200;
      
      const positions = filters.map((_, index) => {
        let x, y, distance;
        let attempts = 0;
        
        // On génère une position aléatoire jusqu'à ce qu'elle soit en dehors de la zone d'exclusion
        do {
          // Angle aléatoire
          const angle = (Math.random() * 360) * (Math.PI / 180);
          // Distance aléatoire entre le rayon d'exclusion et le bord
          const minDistance = exclusionRadius + 50;
          const maxDistance = Math.min(containerWidth, containerHeight) / 2 - 80;
          distance = minDistance + Math.random() * (maxDistance - minDistance);
          
          // Conversion polaire -> cartésien
          x = centerX + Math.cos(angle) * distance;
          y = centerY + Math.sin(angle) * distance;
          
          attempts++;
        } while (distance < exclusionRadius && attempts < 50);
        
        return {
          x: x - 80, // Ajustement pour centrer le bouton
          y: y - 20,
          duration: 4 + Math.random() * 3, // Durée d'animation aléatoire
          delay: Math.random() * 2, // Délai aléatoire
          appearDelay: 0.6 + index * 0.1 // Apparition échelonnée
        };
      });
      
      setButtonPositions(positions);
    };
    
    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fonction de recherche
  const handleSearch = (filter = '') => {
    const query = filter || searchText;
    if (query) {
      setSearchResult(`Recherche lancée pour : "${query}"`);
      setActiveFilter(filter);
    }
  };

  // Gestion de la touche Entrée
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container>
      <SearchWrapper>
        <div>
          <Title>
            <Sparkles style={{ display: 'inline', marginRight: '0.5rem' }} />
            Recherche Interactive
          </Title>
          <Subtitle>Tapez votre recherche ou cliquez sur une filière autour</Subtitle>
        </div>

        <CloudContainer>
          {/* Input au centre (le chanteur) */}
          <InputContainer>
            <InputWrapper>
              <SearchIconWrapper>
                <Search size={24} />
              </SearchIconWrapper>
              <SearchInput
                type="text"
                placeholder="Rechercher une formation..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <SearchButton onClick={() => handleSearch()}>
                Rechercher
              </SearchButton>
            </InputWrapper>
          </InputContainer>

          {/* Boutons dispersés autour (la foule) */}
          {buttonPositions.map((pos, index) => (
            <FloatingButton
              key={filters[index]}
              $x={pos.x}
              $y={pos.y}
              $duration={pos.duration}
              $delay={pos.delay}
              $appearDelay={pos.appearDelay}
              $active={activeFilter === filters[index]}
              onClick={() => handleSearch(filters[index])}
            >
              {filters[index]}
            </FloatingButton>
          ))}
        </CloudContainer>

        {/* Résultats */}
        {searchResult && (
          <ResultsContainer>
            <ResultText>
              <strong>{searchResult}</strong>
              <br />
              <span style={{ fontSize: '0.95rem', color: '#cbd5e1', marginTop: '0.5rem', display: 'block' }}>
                {activeFilter && `📚 Filtre actif : ${activeFilter}`}
              </span>
            </ResultText>
          </ResultsContainer>
        )}
      </SearchWrapper>
    </Container>
  );
}

export default OrbitalSearchInput;