// utils/ratingCalculator.js

/**
 * Système de calcul de notes pour les écoles
 * CONTEXTE: Chaque review contient obligatoirement 4 catégories notées
 */

const SCORE_MAPPING = {
  "Très bien": 4,
  "Bien": 3,
  "Moyen": 2,
  "Mauvais": 1
};

/**
 * Calcule la note moyenne d'UNE review (toujours 4 catégories)
 * @param {Object} review - Une review avec 4 scores
 * @returns {number} Note moyenne de cette review sur 4
 */
export function calculateSingleReviewRating(review) {
  if (!review.scores || review.scores.length === 0) {
    return 0;
  }

  const totalScore = review.scores.reduce((sum, score) => {
    return sum + (SCORE_MAPPING[score.value] || 0);
  }, 0);

  return totalScore / review.scores.length; // Toujours /4 normalement
}

/**
 * Calcule la note moyenne globale d'une école
 * @param {Object} school - Objet école avec reviews
 * @returns {Object} Statistiques de notation
 */
export function calculateSchoolRating(school) {
  if (!school.reviews || school.reviews.length === 0) {
    return {
      averageRating: 0,
      displayRating: "0.0",
      stars: 0,
      totalReviews: 0,
      ratingsByCategory: {},
      reviewRatings: []
    };
  }

  const reviewRatings = [];
  const categoryScores = {};

  // Calculer la note de chaque review
  school.reviews.forEach(review => {
    const reviewRating = calculateSingleReviewRating(review);
    
    reviewRatings.push({
      reviewId: review.id,
      rating: parseFloat(reviewRating.toFixed(2)),
      comment: review.comment
    });

    // Calcul par catégorie
    review.scores.forEach(score => {
      const numericValue = SCORE_MAPPING[score.value] || 0;
      const categoryLabel = score.criteria.label;
      
      if (!categoryScores[categoryLabel]) {
        categoryScores[categoryLabel] = { sum: 0, count: 0 };
      }
      categoryScores[categoryLabel].sum += numericValue;
      categoryScores[categoryLabel].count++;
    });
  });

  // Moyenne de toutes les reviews
  const totalReviewsRating = reviewRatings.reduce((sum, r) => sum + r.rating, 0);
  const averageRating = totalReviewsRating / reviewRatings.length;

  // Moyennes par catégorie
  const ratingsByCategory = {};
  Object.keys(categoryScores).forEach(category => {
    const avg = categoryScores[category].sum / categoryScores[category].count;
    ratingsByCategory[category] = parseFloat(avg.toFixed(2));
  });

  return {
    averageRating: parseFloat(averageRating.toFixed(2)), // Note sur 4
    displayRating: parseFloat(averageRating.toFixed(1)), // 1 décimale
    stars: Math.round(averageRating * 2) / 2, // Arrondi 0.5 (3.5, 4.0...)
    totalReviews: school.reviews.length,
    reviewRatings,
    ratingsByCategory
  };
}

/**
 * Convertit note sur 4 → note sur 5
 */
export function convertToFiveStarRating(rating) {
  return parseFloat(((rating / 4) * 5).toFixed(1));
}

/**
 * Affichage formaté: "4.2/5 ★★★★☆ (12 avis)"
 */
export function formatRatingDisplay(school) {
  const rating = calculateSchoolRating(school);
  
  if (rating.totalReviews === 0) {
    return "Aucun avis";
  }

  const fiveStarRating = convertToFiveStarRating(rating.averageRating);
  const fullStars = Math.floor(rating.stars);
  const hasHalfStar = rating.stars % 1 !== 0;
  const emptyStars = 4 - Math.ceil(rating.stars);
  
  const stars = "★".repeat(fullStars) + 
                (hasHalfStar ? "☆" : "") + 
                "☆".repeat(emptyStars);
  
  const avisText = rating.totalReviews > 1 ? "avis" : "avis";
  return `${fiveStarRating}/5 ${stars} (${rating.totalReviews} ${avisText})`;
}

/**
 * Badge qualité selon la note
 */
export function getRatingQuality(rating) {
  if (rating >= 3.5) return { label: "Excellent", color: "#10b981" };
  if (rating >= 3.0) return { label: "Très bien", color: "#3b82f6" };
  if (rating >= 2.5) return { label: "Bien", color: "#8b5cf6" };
  if (rating >= 2.0) return { label: "Moyen", color: "#f59e0b" };
  return { label: "À améliorer", color: "#ef4444" };
}

/**
 * Enrichir les écoles avec leurs notes calculées
 */
export function enrichSchoolsWithRatings(schools) {
  return schools.map(school => {
    const rating = calculateSchoolRating(school);
    const fiveStarRating = convertToFiveStarRating(rating.averageRating);
    const quality = getRatingQuality(rating.averageRating);
    
    return {
      ...school,
      rating: {
        ...rating,
        fiveStarRating,
        displayText: formatRatingDisplay(school),
        quality: quality.label,
        qualityColor: quality.color
      }
    };
  });
}

// ============================================
// COMPOSANT REACT - Affichage simple
// ============================================

export function RatingBadge({ school, size = "medium" }) {
  const rating = calculateSchoolRating(school);
  
  if (rating.totalReviews === 0) {
    return (
      <span style={{ 
        color: '#999', 
        fontSize: size === "small" ? "14px" : "16px" 
      }}>
        Aucun avis
      </span>
    );
  }

  const fiveStarRating = convertToFiveStarRating(rating.averageRating);
  const quality = getRatingQuality(rating.averageRating);

  const styles = {
    small: { fontSize: "14px", starSize: "14px" },
    medium: { fontSize: "18px", starSize: "16px" },
    large: { fontSize: "24px", starSize: "20px" }
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '8px',
      flexWrap: 'wrap'
    }}>
      <span style={{ 
        fontSize: styles[size].fontSize, 
        fontWeight: 'bold',
        color: quality.color
      }}>
        {fiveStarRating}/5
      </span>
      
      <span style={{ 
        color: '#FFB800', 
        fontSize: styles[size].starSize 
      }}>
        {"★".repeat(Math.floor(rating.stars))}
        {rating.stars % 1 !== 0 && "☆"}
      </span>
      
      <span style={{ 
        color: '#666', 
        fontSize: size === "small" ? "12px" : "14px" 
      }}>
        ({rating.totalReviews})
      </span>
      
      {size !== "small" && (
        <span style={{
          backgroundColor: quality.color,
          color: 'white',
          padding: '2px 8px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500'
        }}>
          {quality.label}
        </span>
      )}
    </div>
  );
}

// ============================================
// COMPOSANT REACT - Détail par catégorie
// ============================================

export function RatingDetails({ school }) {
  const rating = calculateSchoolRating(school);

  if (rating.totalReviews === 0) {
    return <p style={{ color: '#999' }}>Aucun avis disponible</p>;
  }

  return (
    <div style={{ padding: '16px' }}>
      <h3 style={{ marginBottom: '16px' }}>
        Note globale: {convertToFiveStarRating(rating.averageRating)}/5
        <span style={{ color: '#666', fontSize: '14px', marginLeft: '8px' }}>
          ({rating.totalReviews} avis)
        </span>
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {Object.entries(rating.ratingsByCategory).map(([category, score]) => {
          const percentage = (score / 4) * 100;
          const fiveStarScore = convertToFiveStarRating(score);
          
          return (
            <div key={category}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                marginBottom: '4px',
                fontSize: '14px'
              }}>
                <span>{category}</span>
                <span style={{ fontWeight: 'bold' }}>{fiveStarScore}/5</span>
              </div>
              <div style={{ 
                width: '100%', 
                height: '8px', 
                backgroundColor: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${percentage}%`,
                  height: '100%',
                  backgroundColor: '#FFB800',
                  transition: 'width 0.3s ease'
                }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



// ============================================
// EXEMPLE D'UTILISATION
// ============================================

/*
import datas from './datas';
import { 
  calculateSchoolRating, 
  formatRatingDisplay,
  enrichSchoolsWithRatings 
} from './ratingCalculator';

// Utilisation simple
const esatic = datas[0];
const rating = calculateSchoolRating(esatic);
console.log(formatRatingDisplay(esatic));
// "3.3/5 ★★★☆ (1 avis)"

// Enrichir toutes les écoles
const enrichedSchools = enrichSchoolsWithRatings(datas);
console.log(enrichedSchools[0].rating);

// Dans un composant React
<RatingBadge school={esatic} size="large" />
<RatingDetails school={esatic} />
*/