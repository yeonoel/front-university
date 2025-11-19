import styled from "styled-components";

// ✨ Style du bouton
const StyledButton = styled.button`
      border: 0;
      line-height: 2.5;
      padding: 0 10px;
      font-size: 1rem;
      text-align: center;
      color: white;
      text-shadow: 1px 1px 1px black;
      border-radius: 10px;
      background-color: tomato;
      background-image: linear-gradient(
        to top left,
        rgb(0 0 0 / 0.2),
        rgb(0 0 0 / 0.2) 30%,
        transparent
      );
      box-shadow:
        inset 2px 2px 3px rgb(255 255 255 / 0.6),
        inset -2px -2px 3px rgb(0 0 0 / 0.6);
      }

      button:hover {
        background-color: red;
      }

      button:active {
        box-shadow:
          inset -2px -2px 3px rgb(255 255 255 / 0.6),
          inset 2px 2px 3px rgb(0 0 0 / 0.6);
      }
`;

// 🎯 Le composant Button
function ButtonAvis({ setIsModalOpen }) {

    const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  
  return (
   <StyledButton type="button" onClick={handleOpenModal}>
      Ajouter un avis
   </StyledButton>
  );
}

export default ButtonAvis;