import styled from "styled-components";

// ✨ Style du bouton
const StyledButton = styled.button`
  border: 0;
  line-height: 2.5;
  padding: 0 20px;
  font-size: 1rem;
  text-align: center;
  color: white;
  text-shadow: 1px 1px 1px black;
  border-radius: 10px;
  background-color: tomato;
  cursor: pointer;
  box-shadow:
    inset 2px 2px 3px rgb(255 255 255 / 0.6),
    inset -2px -2px 3px rgb(0 0 0 / 0.6);

  &:hover {
    background-color: red;
  }

  &:active {
    box-shadow:
      inset -2px -2px 3px rgb(255 255 255 / 0.6),
      inset 2px 2px 3px rgb(0 0 0 / 0.6);
  }
`;

// 🎯 Le composant Button
function ButtonAvis({ children, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default ButtonAvis;