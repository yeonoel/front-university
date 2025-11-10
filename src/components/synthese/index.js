import styled from "styled-components";


const StyledSynthese = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  border-color: #b1afafff;
  padding: 20px 70px;
  background-color: #ffffffff;
    img {
      height: 20px;
        width: 20px;
        font-weight: bold;
    }
    span {
      font-size: 24px;
      font-weight: bold;
      margin-top: 5px;
    }
    p {
      font-size: 14px;
        margin-top: -2px;
        color: #555555;
    `;


function Synthese({logo, note, label}) {
  return (
    <StyledSynthese>
      <img src={logo} alt="logo de l'école" />
      <span>{note}</span>
      <p>{label}</p>
    </StyledSynthese>
  );
}

export default Synthese;