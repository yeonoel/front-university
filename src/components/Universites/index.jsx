import styled from "styled-components";
import Cards from "../cards";
import { Loader } from "../../utils/styles/Atom";
import { useSearch, useTheme } from "../../utils/hooks";
import { colors } from "../../utils/styles/colors";
import Rechercher from "../rechercher";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedCard from "../AnimatedCard/AnimatedCard";
import API_URL from "../../config";

const StyledUniversitescontenair = styled.div`
  margin: 50px 100px 50px 100px;

  .containerH3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5px;

    .nombreDecoles {
      font-size: 15px;
      font-weight: 600;
      width: 100%;
      border-radius: 10px;
      padding: 10px;
      color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};

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

  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }


  /* Pour les tablettes */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Pour les téléphones */
  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* une seule colonne */
  }
`

const RechercherContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  position: sticky;
  top: -30px;
  padding: 40px;
  z-index: 2000;
  @media (max-width: 768px) {
     top: -30px;
  }
     
`;


function Universites() {
  const { theme } = useTheme();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const filiere = params.get("filiere");
  const commune = params.get("commune");
  const query = params.get("query");


  const { data: datas, isLoading, error, search } = useSearch();

  // Appeler la recherche uniquement quand filiere/commune changent
  useEffect(() => {
    console.log(API_URL)
    search(`${API_URL}school/search`, { filiere, commune, query });

  }, [filiere, commune, query, search]);


  if (error) {
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
                      <AnimatedCard key={`${index}-${data.name}`} delay={index * 100}>
                        <Cards
                          isDarkMode={theme === 'dark'}
                          school={data}
                          id={data.id}
                          name={data.name}
                          logo={data.logo}
                          type={data.type}
                          filieres={data.filieres}
                          priceLevel={data.priceLevel}
                          commune={data.commune}
                        />
                      </AnimatedCard>
                    ))}
                  </StylesdCard>
                </div>
              )
            }
          </div>
        ) : (
          <div>
            <Loader />
          </div>
        )
      }
    </StyledUniversitescontenair>
  );
}

export default Universites;