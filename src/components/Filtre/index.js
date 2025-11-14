import styled from "styled-components";



const Filters = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;

  select {
    padding: 8px 12px;
    border-radius: 8px;
    border: 1px solid #ccc;
    background: white;
    font-size: 15px;
    cursor: pointer;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: #4889d0ff;
    }

    &:focus {
      outline: none;
      border-color: #4889d0ff;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;

    select {
      width: 100%;
    }
  }
`;

function Filtre() {
    return (
        <>
            
                <Filters>
                <select>
                <option value="">-- Niveau du prix --</option>
                <option value="abordable">Abordable</option>
                <option value="moyenne">Moyenne</option>
                <option value="trop-chere">Trop chère</option>
                </select>

                <select>
                <option value="">-- Type d'école --</option>
                <option value="public">Public</option>
                <option value="privee">Privée</option>
                <option value="semi-public">Semi-publique</option>
                </select>
            </Filters>
        </>
    )
}   


export default Filtre;