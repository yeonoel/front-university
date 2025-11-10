import styled from "styled-components";
import Universites from "../components/Universites";

const AccueilContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

function Accueil() {
  return (
    <AccueilContainer>
        <Universites />
    </AccueilContainer>
  );
}

export default Accueil;
