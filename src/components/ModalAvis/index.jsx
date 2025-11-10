import { useState } from "react";
import styled from "styled-components";
import { BookOpen, Building, Users, Wallet, CheckCircle } from 'lucide-react';
import { getScoreColor } from "../../utils/styles/colors";
import { getScoreEmoji } from "../../utils/styles/Emoji";

// ✨ Le fond sombre derrière la modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

// ✨ La boîte blanche au centre
const ModalContent = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 20px;
    max-height: 95vh;
  }
`;

// ✨ Le bouton X pour fermer
const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #666;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;

// Section wrapper pour espacer les blocs
const Section = styled.div`
  margin-bottom: 24px;

  &:last-child {
    margin-bottom: 0;
  }
`;

// 🎯 Le composant Modal
function Modal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    schoolId: '',
    filiere: '',
    startYear: '',
    endYear: '',
    scores: {
      "Cours théoriques": "",
      "Cours pratiques": "",
      "Cadre étudiant": "",
      "Frais": ""
    },
    comment: '',
    proofFile: null
  });

  // Si isOpen est false, on n'affiche rien
  if (!isOpen) {
    return null;
  }

  const scoreOptions = ["Très bien", "Bien", "Moyen", "Mauvais"];
  
  // Vérifier que tous les scores sont remplis ET que le commentaire >= 50 caractères
  const allScoresFilled = Object.values(formData.scores).every(score => score !== "");
  const canSubmit = formData.comment.length >= 50 && allScoresFilled;

  // Gérer la soumission
  const handleSubmit = () => {
    if (canSubmit) {
      onSubmit(formData);
      // Réinitialiser le formulaire après soumission
      setFormData({
        schoolId: '',
        filiere: '',
        startYear: '',
        endYear: '',
        scores: {
          "Cours théoriques": "",
          "Cours pratiques": "",
          "Cadre étudiant": "",
          "Frais": ""
        },
        comment: '',
        proofFile: null
      });
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      {/* stopPropagation empêche la fermeture quand on clique dans la modal */}
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {/* Bouton X pour fermer */}
        <CloseButton onClick={onClose}>×</CloseButton>
        
        {/* Section 1 : Notation */}
        <Section>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⭐</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Note ton expérience</h2>
                <p className="text-sm text-gray-600">Évalue chaque aspect honnêtement</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {Object.keys(formData.scores).map((criteria, idx) => {
                const icons = [BookOpen, Building, Users, Wallet];
                const colors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600'];
                const Icon = icons[idx];
                const color = colors[idx];
                
                return (
                  <div key={criteria} className="border-b border-gray-100 pb-5 last:border-0">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={22} className={color} />
                      <label className="font-semibold text-gray-900">{criteria}</label>
                      <span className="text-red-500 text-sm">*</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {scoreOptions.map(option => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setFormData({
                            ...formData,
                            scores: { ...formData.scores, [criteria]: option }
                          })}
                          className={`px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm ${
                            getScoreColor(option, formData.scores[criteria] === option)
                          }`}
                        >
                          <div className="text-xl mb-1">{getScoreEmoji(option)}</div>
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Section 2 : Commentaire */}
        <Section>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Commentaire</h2>
                <p className="text-sm text-gray-600">Donne des détails utiles aux futurs étudiants</p>
              </div>
            </div>

            <div className="mb-6">
              
              <textarea
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                rows="6"
                placeholder="Parle des profs, du matériel, de l'ambiance, des stages, des débouchés... Sois honnête et constructif !"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none text-gray-900"
              ></textarea>
              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-500">
                  {formData.comment.length} / 50 caractères minimum
                </p>
                {formData.comment.length >= 50 && (
                  <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                    <CheckCircle size={16} />
                    Parfait !
                  </span>
                )}
              </div>
            </div>

          </div>
        </Section>

        {/* Bouton de soumission */}
        <Section>
          <div className="flex gap-3">
            <button 
              type="button"
              onClick={handleSubmit}
              disabled={!canSubmit}
              className={`flex-1 px-6 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg ${
                canSubmit
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-xl'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              <CheckCircle size={20} />
              Publier mon avis
            </button>
          </div>
          
          {!allScoresFilled && formData.comment.length >= 50 && (
            <p className="text-sm text-orange-600 mt-2 text-center">
              ⚠️ Veuillez remplir toutes les notes avant de publier
            </p>
          )}
        </Section>
      </ModalContent>
    </ModalOverlay>
  );
}

export default Modal;