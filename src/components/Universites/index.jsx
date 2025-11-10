import styled from "styled-components";
import Cards from "../cards";
import { base_url_local } from "../../utils/api";
import { Loader } from "../../utils/styles/Atom";
import { useFetch } from "../../utils/hooks";

const StyledUniversitescontenair = styled.div`
  margin: 100px 100px 50px 100px;

   @media (max-width: 768px) {
    margin: 50px 20px;
  }
`

const StylesdCard = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);

  /* Pour les tablettes */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Pour les téléphones */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* une seule colonne */
    ga
`


function Universites() {
  const {datas, isLoading, error} = useFetch(base_url_local+'school/all-university');

  console.log("Mes datas", datas);

  if(error) {
    return <span>Oups il y a eu un problème</span>;
  }
  return (
    <StyledUniversitescontenair>
        {
          !isLoading ? (
            <div>
              {
                datas && (
                  <div>
                  <h3> {datas.length} ecoles trouvées</h3>
                  <StylesdCard>
                    {datas.map((data, index) => (
                        <Cards
                          key={`${index}-${data.name}${index}`}
                          school={data}
                          id={data.id}
                          name={data.name}
                          logo={data.logo}
                          type={data.type}
                          filieres={data.filieres}
                          priceLevel={data.priceLevel}
                          commune={data.commune}
                        />
                      ))
                    }
                  </StylesdCard>
                </div>
                )
              }
            </div>
          ) : (
            <Loader />  
          )
        }
    </StyledUniversitescontenair>
  );
}

export default Universites;