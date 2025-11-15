export const colors = {
  primary: '#8B5CF6',
  secondary: '#8186A0',
  backgroundLight: '#F9F9FC',
  backgroundLitlleLight: '#F1F5F9',
  backgroundgraymight: '#F1F5F9',
  
  // Couleurs principales (Purple-Pink gradient)
  primaryPurple: '#8B5CF6',
  primaryPurpleDark: '#7C3AED',
  primaryPink: '#EC4899',
  primaryPinkDark: '#DB2777',
  primaryGradient: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',

  // Couleurs neutres (Slate) pour le mode sombre
  slate900: '#0F172A',
  slate800: '#1E293B',
  slate700: '#334155',
  slate600: '#475569',
  slate400: '#94A3B8',
  slate300: '#CBD5E1',
  white: '#FFFFFF',
  black: '#000000',
  gray400: '#9CA3AF',
  gray300: '#D1D5DB',

  // Nouvelles couleurs extraites du design
  purple900: '#581C87', // Pour le gradient de fond
  purple500: '#A855F7', // Pour les borders et accents
  purple500Opacity20: 'rgba(168, 85, 247, 0.2)',
  purple500Opacity30: 'rgba(168, 85, 247, 0.3)',
  purple500Opacity50: 'rgba(168, 85, 247, 0.5)',
  whiteOpacity5: 'rgba(255, 255, 255, 0.05)',
  whiteOpacity10: 'rgba(255, 255, 255, 0.1)',
  yellow400: '#FBBF24',
  purple300: '#D8B4FE',
  purple400: '#C084FC',
  pink400: '#F472B6',
  pink900Opacity50: 'rgba(131, 24, 67, 0.5)',

  // Couleurs sémantiques
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Backgrounds pour mode sombre
  backgroundDark: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
  backgroundDarkSeach: '#1e293b',
  backgroundDarckLitlleLight: '#1E293B',
  backgroundCard: '#1E293B',
  backgroundCardHover: '#334155',
  backgroundGradientMain: 'linear-gradient(to bottom right, #0F172A, #581C87, #0F172A)',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#181e26',
  textTertiary: '#64748B',
};

// ========== VOS VARIABLES EXISTANTES (CONSERVÉES) ==========
export const colorText = {
  // Prix
  "Abordable": "#447244ff",
  "Moyenne": "#776741ff",
  "Trop chère": "#814231ff",

  // Notes/Scores
  "Mauvais": "#814231ff",
  "Moyen": "#776741ff",
  "Bien": "#447244ff",
  "Très bien": "#301b6bff"
};

export const colorBackground = {
  // Prix
  "Abordable": "#d4f9d4ff",
  "Moyenne": "#faf2deff",
  "Trop chère": "#fadfd8ff",

  // Notes/Scores
  "Mauvais": "#fadfd8ff",
  "Moyen": "#faf2deff",
  "Bien": "#d4f9d4ff",
  "Très bien": "rgba(213, 209, 248, 1)"
};

export const getScoreColor = (score, isSelected) => {
  if (!isSelected) return "border-gray-200 bg-white text-gray-700 hover:border-gray-300";
  if (score === "Très bien") return "border-green-500 bg-green-50 text-green-700 ring-2 ring-green-200";
  if (score === "Bien") return "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-200";
  if (score === "Moyen") return "border-orange-500 bg-orange-50 text-orange-700 ring-2 ring-orange-200";
  return "border-red-500 bg-red-50 text-red-700 ring-2 ring-red-200";
};

// ========== NOUVELLES FONCTIONS UTILITAIRES ==========
// Couleurs selon la note numérique (pour les ratings étoiles)
export const ratingColors = {
  excellent: '#10B981', // >= 4.5
  good: '#3B82F6',      // >= 4.0
  average: '#F59E0B',   // >= 3.0
  poor: '#EF4444',      // < 3.0
};

export const getRatingColor = (rating) => {
  const numRating = parseFloat(rating);
  if (numRating >= 4.5) return ratingColors.excellent;
  if (numRating >= 4.0) return ratingColors.good;
  if (numRating >= 3.0) return ratingColors.average;
  return ratingColors.poor;
};