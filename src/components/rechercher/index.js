import styled from "styled-components";


const SearchBar = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 500px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  input[type="text"] {
    flex: 1;
    border: none;
    padding: 10px 15px;
    outline: none;
    font-size: 16px;
  }

  input[type="button"] {
    background-color: #b4b5b6ff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s ease;

    &:hover {
      background-color: #4889d0ff;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    order: -1;
  }
`;


function Rechercher() {
    return (
        <>
            <SearchBar>
                <input type="text" placeholder="Rechercher une école..." />
                <input type="button" value="🔍" />
            </SearchBar>
            
        </>
    )
}   


export default Rechercher;