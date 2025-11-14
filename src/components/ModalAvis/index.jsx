import { useState } from "react";
import styled from "styled-components";
import { CheckCircle } from 'lucide-react';
import { getScoreColor } from "../../utils/styles/colors";
import { getScoreEmoji } from "../../utils/styles/Emoji";
import { useMutation } from "../../utils/hooks";
import { base_url_local } from "../../utils/api";
import { useParams } from "react-router-dom";

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
  top: 35px;
  right: 35px;
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
function Modal({ isOpen, onClose }) {
  const { mutate } = useMutation();
  const [message, setMessage] = useState("");

  const {id} = useParams() || null;
  const schoolId = Number(id);

  const userId = JSON.parse(localStorage.getItem("user")).id || null;

  const [formData, setFormData] = useState({
    userId: userId,
    schoolId: schoolId,
    comment: "",
    reviewScores: [
      { criteriaId: 1, value: "" },
      { criteriaId: 2, value: "" },
      { criteriaId: 3, value: "" },
      { criteriaId: 4, value: "" },
    ],
  });

  if (!isOpen) return null;

  const scoreOptions = ["Très bien", "Bien", "Moyen", "Mauvais"];
  const criteriaOptions = [
    { criteriaId: 1, value: "Cours théoriques" },
    { criteriaId: 2, value: "Cours pratiques" },
    { criteriaId: 3, value: "Cadre étudiant" },
    { criteriaId: 4, value: "Frais scolaires" },
  ];

  // Vérifie si tous les scores sont remplis
  const allScoresFilled = formData.reviewScores.every((s) => s.value !== "");
  const canSubmit =
    allScoresFilled && formData.comment.trim().length >= 20;

  // ✅ Met à jour la valeur d’un score
  const handleSelectScore = (criteriaId, option) => {
    setFormData((prev) => ({
      ...prev,
      reviewScores: prev.reviewScores.map((s) =>
        s.criteriaId === criteriaId ? { ...s, value: option } : s
      ),
    }));
  };

  // ✅ Soumission
  const handleSubmit = async () => {
    if (!canSubmit) return;

    const token = localStorage.getItem("token");

    const response = await mutate(base_url_local + "review/new-review", {
      body: formData,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (response.status === "success") {
      setMessage(response.message);
      setTimeout(() => {
              onClose();
      } , 1000);
      // Réinitialisation du formulaire
      setFormData({
        userId: userId,
        schoolId: schoolId,
        comment: "",
        reviewScores: formData.reviewScores.map((s) => ({
          ...s,
          value: "",
        })),
      });
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>

        {/* SECTION 1 — NOTES */}
        <Section>
          <div className="bg-white rounded-2xl shadow-lg border p-6 sm:p-8">
            <h2 className="text-lg font-bold mb-4">Note ton expérience</h2>
            {criteriaOptions.map((criteria, idx) => (
              <div key={criteria.criteriaId} className="mb-5">
                <label className="font-semibold text-sm text-gray-800">
                  {criteria.value} <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                  {scoreOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() =>
                        handleSelectScore(criteria.criteriaId, option)
                      }
                      className={`px-4 py-2 rounded-xl border-2 transition-all text-sm ${
                        getScoreColor(
                          option,
                          formData.reviewScores.find(
                            (s) => s.criteriaId === criteria.criteriaId
                          )?.value === option
                        )
                      }`}
                    >
                      <div className="text-lg mb-1">
                        {getScoreEmoji(option)}
                      </div>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* SECTION 2 — COMMENTAIRE */}
        <Section>
          <div className="bg-white rounded-2xl shadow-lg border p-6 sm:p-8">
            <textarea
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              rows="5"
              placeholder="✍️ Parle de ton expérience..."
              className="w-full p-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <span>{formData.comment.length} / 20 caractères minimum</span>
              {formData.comment.length >= 20 && (
                <span className="text-green-600 flex items-center gap-1">
                  <CheckCircle size={16} /> Parfait !
                </span>
              )}
            </div>
          </div>
        </Section>

        {/* SECTION 3 — SUBMIT */}
        <Section>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`w-full py-3 rounded-xl font-semibold transition-all ${
              canSubmit
                ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-xl"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <CheckCircle size={18} className="inline-block mr-2" />
            Publier mon avis
          </button>
        </Section>
      </ModalContent>
      {message && (
        <p
          className="
            fixed top-2 left-1/2 -translate-x-1/2 
            w-[80%] md:w-[40%]
            h-16 flex items-center justify-center
            text-center text-white bg-black
            p-2 rounded-md text-sm font-medium shadow
          "
        >
          {message}
        </p>
      )}
    </ModalOverlay>
  );
}


export default Modal;