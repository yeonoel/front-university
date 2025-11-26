import { useState } from 'react';
import { Search, Code, Shield, Video, MapPin } from 'lucide-react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../utils/styles/colors.js';
import Header from '../components/Header/index.js';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #eef2ff 0%, #ffffff 50%, #faf5ff 100%);
`;








const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin: 0 auto 0.75rem auto;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 90%;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;

  @media (max-width: 768px) {
    font-size: .8rem;
  }

  @media (max-width: 480px) {
    font-size: .5rem;
  }
`;

const SearchCard = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  margin-bottom: 2rem;
  width: 90%;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`;

const SearchRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InputWrapper = styled.div`
  flex: 1;
  position: relative;
`;

const IconLeft = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem 0.75rem 2.5rem;
    font-size: 0.875rem;
  }
`;

const SearchButton = styled.button`
  padding: 0.5rem 2rem;
  background: ${colors.primaryGradient};
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  white-space: nowrap;

  &:hover {
    background: ${colors.primaryPinkDark};
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  @media (max-width: 480px) {
        padding: 0.5rem 1.5rem;
  }
`;


const StartButton = styled.button`
  padding: 0.8rem 4rem;
  background: ${colors.primaryGradient};
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
  white-space: nowrap;
  display: flex;

  &:hover {
    background: ${colors.primaryPinkDark};
    box-shadow: 0 6px 16px rgba(79, 70, 229, 0.4);
  }

  @media (max-width: 768px) {
    width: 50%;
    padding: 0.875rem 1.5rem;
    font-size: 0.875rem;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1.5rem;
  }
`

const Categories = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
    @media (max-width: 480px) {
      display: none;
    }
`;

const CategoryLabel = styled.span`
  color: #6b7280;
  font-weight: 500;
  font-size: 0.875rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: #f3f4f6;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.2s;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background: #e5e7eb;
  }

  @media (max-width: 768px) {
    
  }
    
`;



const Footer = styled.footer`
  background: white;
  border-top: 1px solid #e5e7eb;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-size: 0.875rem;
  color: #6b7280;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const FooterButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #4f46e5;
  }
`;

function LandingPage() {
  const [filiere, setFiliere] = useState('');
  const [commune, setCommune] = useState('');
  const navigate = useNavigate();

  const categories = [
    { icon: Code, label: 'Développement' },
    { icon: Shield, label: 'Cybersécurité' },
    { icon: Video, label: 'Audiovisuel' },
  ];

  const handleSearch = async () => {
    if (filiere.length > 50 || commune.length > 50) return;

    const query = new URLSearchParams({ filiere, commune }).toString();
    navigate(`Accueil/search?${query}`);
  };

  const handleCategoryClick = (category) => {
    setFiliere(category.label);
  }


  return (
    <Container>
      <Header />

      <Main>
        <Content>

          <SearchCard>
            <SearchRow>
              <InputWrapper>
                <IconLeft>
                  <Search size={18} />
                </IconLeft>
                <StyledInput
                  type="text"
                  placeholder="filiere (ex: Développement Web, Cybersécurité...)"
                  value={filiere}
                  onChange={(e) => setFiliere(e.target.value)}
                />
              </InputWrapper>

              <InputWrapper>
                <IconLeft>
                  <MapPin size={18} />
                </IconLeft>
                <StyledInput
                  type="text"
                  placeholder="commune"
                  value={commune}
                  onChange={(e) => setCommune(e.target.value)}
                />
              </InputWrapper>

              <SearchButton onClick={handleSearch}>
                Rechercher
              </SearchButton>
            </SearchRow>

            <Categories>
              <CategoryLabel>Catégories populaires :</CategoryLabel>
              {categories.map((cat, idx) => (
                <CategoryButton key={idx}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <cat.icon size={16} />
                  <span>{cat.label}</span>
                </CategoryButton>
              ))}
            </Categories>
          </SearchCard>
          <TitleSection>
            <Title>Explorez les meilleures écoles d’informatique et du numérique en <span className='text-red-500' >Côte d’Ivoire</span> </Title>
            <Subtitle>Notes. Avis. Frais. Tout ce qu’il vous faut pour choisir votre futur. </Subtitle>
          </TitleSection>

          <StartButton onClick={() => navigate('/Accueil')}>
            Commencer
          </StartButton>

        </Content>
      </Main>

      <Footer>
        <FooterContent>
          <span>© 2025 TechCampus</span>
          <FooterButton>À propos</FooterButton>
          <FooterButton>Contact</FooterButton>
          <FooterButton>Conditions</FooterButton>
        </FooterContent>
      </Footer>
    </Container>
  );
}

export default LandingPage;