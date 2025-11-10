import styled from 'styled-components';
import { useTheme } from '../../utils/hooks';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Twitter, BookOpen, Star } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  padding: 60px 20px 30px;
  margin-top: 80px;
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
  color: #cbd5e1;
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
  color: #cbd5e1;
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
  color: #cbd5e1;
  font-size: 14px;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #fbbf24;
    transform: translateY(-3px);
  }
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 20px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  margin-bottom: 30px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: #cbd5e1;
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
  color: #94a3b8;
  margin: 0;
`;

const NightModeButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  color: white;
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
    <FooterContainer>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Statistiques */}
        <StatsSection>
          <StatItem>
            <StatNumber>150+</StatNumber>
            <StatLabel>Écoles recensées</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>5000+</StatNumber>
            <StatLabel>Avis d'étudiants</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
            <StatLabel>Filières disponibles</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Satisfaction</StatLabel>
          </StatItem>
        </StatsSection>

        {/* Contenu principal */}
        <FooterContent>
          {/* À propos */}
          <FooterSection>
            <Logo>🎓 EducInfo CI</Logo>
            <FooterText>
              La première plateforme de notation et de recherche d'établissements scolaires en Côte d'Ivoire. 
              Trouve l'école parfaite selon tes critères et les avis réels des étudiants.
            </FooterText>
            <SocialLinks>
              <SocialIcon href="#" aria-label="Facebook">
                <Facebook size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Instagram">
                <Instagram size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="LinkedIn">
                <Linkedin size={18} />
              </SocialIcon>
              <SocialIcon href="#" aria-label="Twitter">
                <Twitter size={18} />
              </SocialIcon>
            </SocialLinks>
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
              <FooterListItem>
                <FooterLink to="/about">ℹ️ À propos</FooterLink>
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
                <FooterLink to="/guide">📖 Guide d'orientation</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/conseils">💡 Conseils étudiants</FooterLink>
              </FooterListItem>
              <FooterListItem>
                <FooterLink to="/blog">✍️ Blog</FooterLink>
              </FooterListItem>
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
              <span>+225 07 00 00 00 00</span>
            </ContactItem>
            <ContactItem>
              <Mail size={18} />
              <span>contact@educinfo.ci</span>
            </ContactItem>
          </FooterSection>
        </FooterContent>

        {/* Bas du footer */}
        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} EducInfo CI. Tous droits réservés. 
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