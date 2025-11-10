// utils/criteriaCalculator.js

/**
 * Calculateur de moyennes par critère spécifique
 * Chaque fonction calcule la moyenne d'un critère pour une école donnée
 */

const SCORE_MAPPING = {
  "Très bien": 4,
  "Bien": 3,
  "Moyen": 2,
  "Mauvais": 1
};

/**
 * Fonction générique pour calculer la moyenne d'un critère
 * @param {Object} school - Objet école
 * @param {string} criteriaLabel - Label exact du critère (ex: "Cours théoriques")
 * @returns {Object} { average, totalReviews, outOfFive }
 */
function calculateCriteriaAverage(school, criteriaLabel) {
  if (!school || !school.reviews || school.reviews.length === 0) {
    return {
      average: 0,
      totalReviews: 0,
      outOfFive: 0,
      label: criteriaLabel
    };
  }

  let totalScore = 0;
  let count = 0;

  school.reviews.forEach(review => {
    if (review.scores) {
      review.scores.forEach(score => {
        if (score.criteria && score.criteria.label === criteriaLabel) {
          const numericValue = SCORE_MAPPING[score.value] || 0;
          totalScore += numericValue;
          count++;
        }
      });
    }
  });

  const average = count > 0 ? totalScore / count : 0;

  return {
    average: parseFloat(average.toFixed(2)), // Note sur 4
    totalReviews: count,
    outOfFive: parseFloat(((average / 4) * 5).toFixed(2)), // Note sur 5
    label: criteriaLabel
  };
}

/**
 * Calcule la moyenne pour les Cours théoriques
 * @param {Object} school - Objet école
 * @returns {Object} Moyenne des cours théoriques
 */
export function calculateCoursTheoriques(school) {
  return calculateCriteriaAverage(school, "Cours théoriques");
}

/**
 * Calcule la moyenne pour les Cours pratiques
 * @param {Object} school - Objet école
 * @returns {Object} Moyenne des cours pratiques
 */
export function calculateCoursPratiques(school) {
  return calculateCriteriaAverage(school, "Cours pratiques");
}

/**
 * Calcule la moyenne pour le Cadre étudiant
 * @param {Object} school - Objet école
 * @returns {Object} Moyenne du cadre étudiant
 */
export function calculateCadreEtudiant(school) {
  return calculateCriteriaAverage(school, "Cadre étudiant");
}

/**
 * Calcule la moyenne pour les Frais Scolaire
 * @param {Object} school - Objet école
 * @returns {Object} Moyenne des frais scolaire
 */
export function calculateFraisScolaire(school) {
  return calculateCriteriaAverage(school, "Frais Scolaire");
}

/**
 * Calcule TOUTES les moyennes par critère en une seule fois
 * @param {Object} school - Objet école
 * @returns {Object} Toutes les moyennes par critère
 */
export function calculateAllCriteria(school) {
  return {
    coursTheoriques: calculateCoursTheoriques(school),
    coursPratiques: calculateCoursPratiques(school),
    cadreEtudiant: calculateCadreEtudiant(school),
    fraisScolaire: calculateFraisScolaire(school)
  };
}

/**
 * Trouve le meilleur critère d'une école
 * @param {Object} school - Objet école
 * @returns {Object} Le critère avec la meilleure note
 */
export function getBestCriteria(school) {
  const allCriteria = calculateAllCriteria(school);
  
  let best = null;
  let maxAverage = 0;

  Object.values(allCriteria).forEach(criteria => {
    if (criteria.average > maxAverage) {
      maxAverage = criteria.average;
      best = criteria;
    }
  });

  return best;
}

/**
 * Trouve le pire critère d'une école
 * @param {Object} school - Objet école
 * @returns {Object} Le critère avec la moins bonne note
 */
export function getWorstCriteria(school) {
  const allCriteria = calculateAllCriteria(school);
  
  let worst = null;
  let minAverage = 5;

  Object.values(allCriteria).forEach(criteria => {
    if (criteria.totalReviews > 0 && criteria.average < minAverage) {
      minAverage = criteria.average;
      worst = criteria;
    }
  });

  return worst;
}

/**
 * Affiche toutes les moyennes formatées
 * @param {Object} school - Objet école
 * @returns {string} Texte formaté avec toutes les moyennes
 */
export function formatAllCriteria(school) {
  const criteria = calculateAllCriteria(school);
  
  if (!school || !school.reviews || school.reviews.length === 0) {
    return "Aucun avis disponible pour cette école";
  }

  return `
📚 Cours théoriques: ${criteria.coursTheoriques.outOfFive}/5
🔬 Cours pratiques: ${criteria.coursPratiques.outOfFive}/5
🏫 Cadre étudiant: ${criteria.cadreEtudiant.outOfFive}/5
💰 Frais scolaire: ${criteria.fraisScolaire.outOfFive}/5
  `.trim();
}

/**
 * Compare deux écoles sur un critère spécifique
 * @param {Object} school1 - Première école
 * @param {Object} school2 - Deuxième école
 * @param {string} criteriaLabel - Critère à comparer
 * @returns {Object} Résultat de la comparaison
 */
export function compareCriteria(school1, school2, criteriaLabel) {
  const score1 = calculateCriteriaAverage(school1, criteriaLabel);
  const score2 = calculateCriteriaAverage(school2, criteriaLabel);

  let winner = null;
  if (score1.average > score2.average) {
    winner = school1.name;
  } else if (score2.average > score1.average) {
    winner = school2.name;
  } else {
    winner = "Égalité";
  }

  return {
    school1: {
      name: school1.name,
      score: score1
    },
    school2: {
      name: school2.name,
      score: score2
    },
    winner,
    difference: Math.abs(score1.average - score2.average).toFixed(2)
  };
}

// ============================================
// EXEMPLES D'UTILISATION
// ============================================

/*
import datas from './datas';
import {
  calculateCoursTheoriques,
  calculateCoursPratiques,
  calculateCadreEtudiant,
  calculateFraisScolaire,
  calculateAllCriteria,
  getBestCriteria,
  getWorstCriteria,
  formatAllCriteria,
  compareCriteria
} from './utils/criteriaCalculator';

// Exemple 1: Calculer un critère spécifique
const esatic = datas.find(school => school.name === "ESATIC");
const coursTheo = calculateCoursTheoriques(esatic);
console.log(coursTheo);
// {
//   average: 4,
//   totalReviews: 1,
//   outOfFive: 5,
//   label: "Cours théoriques"
// }

// Exemple 2: Calculer tous les critères
const allCriteria = calculateAllCriteria(esatic);
console.log(allCriteria);
// {
//   coursTheoriques: { average: 4, totalReviews: 1, outOfFive: 5 },
//   coursPratiques: { average: 3, totalReviews: 1, outOfFive: 3.75 },
//   cadreEtudiant: { average: 3, totalReviews: 1, outOfFive: 3.75 },
//   fraisScolaire: { average: 2, totalReviews: 1, outOfFive: 2.5 }
// }

// Exemple 3: Trouver le meilleur critère
const best = getBestCriteria(esatic);
console.log(`Meilleur point: ${best.label} (${best.outOfFive}/5)`);
// "Meilleur point: Cours théoriques (5/5)"

// Exemple 4: Trouver le pire critère
const worst = getWorstCriteria(esatic);
console.log(`Point à améliorer: ${worst.label} (${worst.outOfFive}/5)`);
// "Point à améliorer: Frais Scolaire (2.5/5)"

// Exemple 5: Afficher toutes les moyennes
console.log(formatAllCriteria(esatic));

// Exemple 6: Comparer deux écoles
const esatic = datas.find(s => s.name === "ESATIC");
const ensit = datas.find(s => s.name === "ENSIT");
const comparison = compareCriteria(esatic, ensit, "Cours théoriques");
console.log(comparison);
// {
//   school1: { name: "ESATIC", score: {...} },
//   school2: { name: "ENSIT", score: {...} },
//   winner: "ESATIC",
//   difference: "1.2"
// }
*/

// ============================================
// COMPOSANT REACT - Affichage des critères
// ============================================

export function CriteriaDisplay({ school }) {
  const criteria = calculateAllCriteria(school);

  if (!school || !school.reviews || school.reviews.length === 0) {
    return <p style={{ color: '#999' }}>Aucun avis disponible</p>;
  }

  const criteriaList = [
    { key: 'coursTheoriques', icon: '📚', label: 'Cours théoriques' },
    { key: 'coursPratiques', icon: '🔬', label: 'Cours pratiques' },
    { key: 'cadreEtudiant', icon: '🏫', label: 'Cadre étudiant' },
    { key: 'fraisScolaire', icon: '💰', label: 'Frais scolaire' }
  ];

  return (
    <div style={{ padding: '16px' }}>
      <h3 style={{ marginBottom: '16px' }}>Notes par critère</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {criteriaList.map(({ key, icon, label }) => {
          const criteriaData = criteria[key];
          const percentage = (criteriaData.average / 4) * 100;
          
          return (
            <div key={key}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '6px'
              }}>
                <span style={{ fontSize: '14px' }}>
                  {icon} {label}
                </span>
                <span style={{ 
                  fontWeight: 'bold',
                  fontSize: '16px',
                  color: percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'
                }}>
                  {criteriaData.outOfFive}/5
                </span>
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
                  backgroundColor: percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444',
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

