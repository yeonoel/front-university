import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, BookOpen, Star } from 'lucide-react';
import { colors } from '../../utils/styles/colors';

const FooterContainer = styled.footer`
  background: ${({isDarkMode}) => isDarkMode ? colors.backgroundDark : colors.backgroundLitlleLight};
  color: ${({isDarkMode}) => isDarkMode ? colors.textPrimary : colors.textSecondary};
  padding: 60px 20px 30px;
  margin-top: 80px;
  box-shadow: 8px 2px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0 -3px 10px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fbbf24;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FooterText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 12px;
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    color: #fbbf24;
    transform: translateX(5px);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`;





const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 13px;
  margin: 0;
`;

const NightModeButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
    font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 15px;
`;

function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <FooterContainer isDarkMode={theme === 'dark'}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Contenu principal */}
        <FooterContent>
          {/* À propos */}
          <FooterSection>
            <Logo>🎓 EducInfo CI</Logo>
            <FooterText>
              La première plateforme de notation et de recherche d'établissements scolaires en Côte d'Ivoire. 
              Trouve l'école parfaite selon tes critères et les avis réels des étudiants.
            </FooterText>
          </FooterSection>

          {/* Navigation rapide */}
          <FooterSection>
            <FooterTitle>
              <BookOpen size={20} />
              Navigation
            </FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink to="/">🏠 Accueil</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/schools">🏫 Toutes les écoles</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/filieres">📚 Filières</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/top-rated">⭐ Meilleures écoles</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          {/* Ressources */}
          <FooterSection>
            <FooterTitle>
              <Star size={20} />
              Ressources
            </FooterTitle>
            <FooterList>
              <FooterListItem>
                <FooterLink to="/faq">❓ FAQ</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/contact">📧 Nous contacter</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterSection>

          {/* Contact */}
          <FooterSection>
            <FooterTitle>
              <Mail size={20} />
              Contact
            </FooterTitle>
            <ContactItem>
              <MapPin size={18} />
              <span>Abidjan, Cocody<br />Côte d'Ivoire</span>
            </ContactItem>
            <ContactItem>
              <Phone size={18} />
              <span>+225 07 47 49 21 56</span>
            </ContactItem>
            <ContactItem>
              <Mail size={18} />
              <span>
                <FooterLink to="https://www.linkedin.com/in/l%C3%A9on-indie-371157383/" target="_blank" rel="noopener noreferrer">Léon Indie</FooterLink>
              </span>
            </ContactItem>
          </FooterSection>
        </FooterContent>

        {/* Bas du footer */}
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} TechCampus  Tous droits réservés. 
            <span style={{ margin: '0 10px' }}>•</span>
            <FooterLink to="/privacy" style={{ display: 'inline', color: '#94a3b8' }}>
              Confidentialité
            </FooterLink>
            <span style={{ margin: '0 10px' }}>•</span>
            <FooterLink to="/terms" style={{ display: 'inline', color: '#94a3b8' }}>
              Conditions d'utilisation
            </FooterLink>
          </Copyright>
          
          <NightModeButton onClick={() => toggleTheme()}>
            {theme === 'light' ? '🌙' : '☀️'}
            <span>Mode {theme === 'light' ? 'sombre' : 'clair'}</span>
          </NightModeButton>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
}

export default Footer;