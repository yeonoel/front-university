import { createGlobalStyle } from "styled-components";
import { useTheme } from "../hooks";
import { colors } from "../../utils/styles/colors";

const StyleGlobalstyle = createGlobalStyle`
  * {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
                 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
                 'Helvetica Neue', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: ${({isDarkMode}) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};
  }

  /* Scrollbar personnalisée */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.slate800};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.primaryGradient};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.primaryPurpleDark};
  }

  /* Sélection de texte */
  ::selection {
    background-color: ${colors.primaryPurple};
    color: white;
  }

  ::-moz-selection {
    background-color: ${colors.primaryPurple};
    color: white;
  }

  /* Focus visible pour l'accessibilité */
  button:focus-visible,
  a:focus-visible,
  input:focus-visible {
    outline: 2px solid ${colors.primaryPurple};
    outline-offset: 2px;
  }
`;

// ========== ANIMATIONS ==========

function GlobalStyle() {
  const {theme} = useTheme();
  return <StyleGlobalstyle isDarkMode={theme === 'dark'} />;
}

export default GlobalStyle;


// ============================================
// 4. GUIDE D'UTILISATION
// ============================================

/*
  📚 GUIDE D'UTILISATION DES COULEURS
  
  ✅ POUR LES BOUTONS PRINCIPAUX (CTA) :
  background: ${colors.primaryGradient};
  OU
  background: ${colors.primaryPurple};
  
  ✅ POUR LES BACKGROUNDS :
  Mode sombre : ${colors.backgroundDark} ou ${colors.backgroundCard}
  Mode clair : ${colors.backgroundLight}
  
  ✅ POUR LE TEXTE :
  Principal : ${colors.textPrimary} (blanc en dark mode)
  Secondaire : ${colors.textSecondary} (gris)
  
  ✅ POUR LES PRIX (UTILISE VOS VARIABLES EXISTANTES) :
  background-color: ${colorBackground["Abordable"]}
  color: ${colorText["Abordable"]}
  
  ✅ POUR LES NOTES/SCORES (UTILISE VOS VARIABLES EXISTANTES) :
  background-color: ${colorBackground["Très bien"]}
  color: ${colorText["Très bien"]}
  
  ✅ POUR LES BORDERS :
  border: 1px solid rgba(139, 92, 246, 0.2); // purple avec transparence
  
  ✅ POUR LES HOVERS :
  &:hover {
    box-shadow: 0 8px 24px rgba(139, 92, 246, 0.2);
    border-color: rgba(139, 92, 246, 0.4);
  }
  
  ✅ POUR LES NOTES NUMÉRIQUES (0-5 étoiles) :
  color: ${getRatingColor(4.8)} // Retourne automatiquement la bonne couleur
  
  ⚠️ RÈGLE IMPORTANTE :
  - Purple/Pink gradient : UNIQUEMENT pour les CTA et éléments importants
  - Le reste : Utiliser slate pour backgrounds, white/gray pour texte
  - Ratio : 80% neutral, 15% purple/pink, 5% semantic
*/