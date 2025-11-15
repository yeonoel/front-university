import styled from "styled-components";
import Cards from "../cards";
import { base_url_local } from "../../utils/api";
import { Loader } from "../../utils/styles/Atom";
import { useFetch, useTheme } from "../../utils/hooks";
import { colors } from "../../utils/styles/colors";
import Rechercher from "../rechercher";

const StyledUniversitescontenair = styled.div`
  margin: 100px 100px 50px 100px;

  .containerH3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;

    .nombreDecoles {
      font-size: 15px;
      font-weight: 600;
      width: 100%;
      border-radius: 10px;
      padding: 10px;
      color: ${({isDarkMode}) => isDarkMode ? colors.textPrimary : colors.textSecondary};

    }
  }


   @media (max-width: 768px) {
    margin: 50px 20px;
  }
`

const StylesdCard = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;


  /* Pour les tablettes */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Pour les téléphones */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* une seule colonne */
    ga
`

const RechercherContainer = styled.div`
  display: flex;
  justify-content: center;
  background: ${({isDarkMode}) => isDarkMode ? "" : colors.backgroundLight};
  margin-bottom: 30px;
  position: sticky;
  top: -20px;
  padding: 40px;
  z-index: 9999;
`;


function Universites() {
  const {datas, isLoading, error} = useFetch(base_url_local+'school/all-university');
  const {theme} = useTheme();

  console.log("Mes datas", datas);

  if(error) {
    return <span>Oups il y a eu un problème</span>;
  }

  return (
    <StyledUniversitescontenair isDarkMode={theme === 'dark'}>
      <RechercherContainer isDarkMode={theme === 'dark'}>
        <Rechercher />
      </RechercherContainer>
        {
          !isLoading ? (
            <div>
              {
                datas && (
                  <div>
                  <div className="containerH3">
                    <h3 className="nombreDecoles"> {datas.length} ecoles trouvées</h3>
                  </div>
                  <StylesdCard>
                    {datas.map((data, index) => (
                        <Cards
                          isDarkMode={theme === 'dark'}
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