import Synthese from "../components/synthese";
import users from "../assets/users.svg";
import building from "../assets/building.svg";
import openBook from "../assets/open-book.svg";
import wallet from "../assets/wallet.svg";
import { calculateAllCriteria } from "../utils/criteria/criteriaCalculator";
import styled from "styled-components";
import { useState } from "react";
import { formatRatingDisplay } from "../utils/rating/rating";
import ToggleComment from "../components/toggleComment";
import Comment from "../components/comments";
import Modal from "../components/ModalAvis";
import { useFetch, useTheme } from "../utils/hooks";
import { Loader } from "../utils/styles/Atom";
import { colors } from "../utils/styles/colors";
import { useParams } from "react-router-dom";
import ButtonAvis from "../components/Button/ButtonAvis";
import { MapPin } from "lucide-react";

import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import API_URL from "../config";


const CustomIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// 🧩 Conteneur principal
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 120px auto 0px auto;
  align-items: center;
  gap: 20px;
  
  flex: 1; /* Prend l'espace restant */
  min-width: 0; /* Important pour éviter l'overflow */

  @media (max-width: 968px) {
    order: 1; /* Place avant les filières sur mobile */
  

  > * {
    animation: fadeInUp 0.6s ease-out backwards;
  }

  /* Délai progressif pour chaque carte */
  > *:nth-child(1) { animation-delay: 0.1s; }
  > *:nth-child(2) { animation-delay: 0.2s; }
  > *:nth-child(3) { animation-delay: 0.3s; }
  > *:nth-child(4) { animation-delay: 0.4s; }
  > *:nth-child(5) { animation-delay: 0.5s; }
  > *:nth-child(6) { animation-delay: 0.6s; }
  > *:nth-child(7) { animation-delay: 0.7s; }
  > *:nth-child(8) { animation-delay: 0.8s; }
  > *:nth-child(9) { animation-delay: 0.9s; }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;


// 🖼️ Conteneur d’images (layout desktop)
const ImageGallery = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: auto;

  @media (max-width: 768px) {
    display: none; /* caché sur mobile */
  }
`;

const StyledTitle = styled.div`
  border-bottom: 1px dashed ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};;
  margin-bottom: 20px;
  background: ${({ isDarkMode }) => isDarkMode ? "" : colors.backgroundLight};
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  align-items: center;
  color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};

  .nameNote {
    display: flex;
    align-items: center;
      height: 150px;

    div {
      margin-left: 20px;
      h2 {
        font-weight: bold;
        font-size: 1rem;
      }
    }
  }


  @media (max-width: 768px) {
        gap: 5px;
        .nameNote {
          width: 70%;      
          h2 {
            font-size: 1rem;
          }
            p {
              font-size: 1rem;
            }
        }
        
  }
  @media(max-width: 480px) {
        gap: 5px;
        flex-direction: column;
        .nameNote {
          width: 100%;      
          h2 {
            font-size: 0.6rem;
          }
            p {
              font-size: 0.6rem;
            }
        }
        
  }
     
}`;

const ContentImages = styled.div`
  width: 100%;
    background: ${({ isDarkMode }) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};
`;

// Grande image à gauche
const MainImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  object-fit: cover;
`;

// Deux petites images empilées à droite
const SideImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
    height: 190px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

// 📱 Slider mobile
const MobileSlider = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    position: relative;
    width: 100%;
    overflow: hidden;
  }
`;

const SliderArrow = styled.button`
  background: rgba(0,0,0,0.4);
  border: none;
  color: white;
  font-size: 22px;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: background 0.3s ease;
  z-index: 2;

  &:hover {
    background: rgba(0,0,0,0.6);
  }
`;

const SliderImage = styled.img`
  width: 90%;
  height: 250px;
  border-radius: 15px;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const BodyDetail = styled.div`
  gap: 20px;
  width: 70%;
  max-width: 1000px;
  margin: auto;
`;

// 📊 Notes
const NoteContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin: auto;
`;


const PageWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const ContainerBloc = styled.div`
    
    @media (min-width: 969px) {
    position: sticky;
    top: 100px; /* Distance du haut (sous le header) */
    align-self: flex-start;
    width: 250px;
    max-height: calc(100vh - 120px); /* Hauteur max pour ne pas dépasser l'écran */
    flex-shrink: 0;
  }

   @media (max-width: 968px) {
    order: 2; /* Place après le contenu principal */
    width: 100%;
  }

`


const FiliereContainer = styled.div`

  @media (min-width: 969px) {
    
    overflow-y: auto; /* Scroll si trop de filières */
    flex-shrink: 0;
  }
  
  h1 {
    font-size: ${({ theme }) => theme === 'dark' ? '24px' : '22px'};
    margin-bottom: 20px;
    border-bottom: 1px solid ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};
    color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};
  }
`;

const FiliereName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* Mobile : affichage horizontal avec scroll */
  @media (max-width: 968px) {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 10px;
    
    /* Cache la scrollbar mais garde la fonctionnalité */
    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: ${({ isDarkMode }) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(139, 92, 246, 0.5);
      border-radius: 4px;
    }
  }

  button {
    padding: 12px 20px;
    border: 1px solid rgba(139, 92, 246, 0.3);
    border-radius: 8px;
    background: ${({ isDarkMode }) => isDarkMode ? colors.backgroundDark : colors.backgroundLight};
    color: ${({ isDarkMode }) => isDarkMode ? colors.textPrimary : colors.textSecondary};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap; /* Empêche le retour à la ligne sur mobile */

    &:hover {
      background: rgba(139, 92, 246, 0.1);
      border-color: rgba(139, 92, 246, 0.6);
      transform: translateX(5px);
    }

    &:active {
      transform: scale(0.98);
    }

    @media (max-width: 968px) {
      min-width: max-content; /* S'adapte au contenu sur mobile */
    }
  }
`;

const LocationContainerWrapper = styled.div`

  margin-top: 30px; /* petit espace sous les filières */

  @media (max-width: 968px) {
    position: relative;
    top: auto;
    width: 100%;
    margin-top: 12px; /* s’aligne sous les filières */
  }
`;

const LocationButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.3);
  background: ${({ theme }) => theme === "dark" ? "rgba(72, 55, 140, 0.15)" : "rgba(139, 92, 246, 0.1)"};
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme === "dark" ? "rgba(72, 55, 140, 0.25)" : "rgba(139, 92, 246, 0.2)"};
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  }

  span {
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme === 'dark' ? colors.textPrimary : colors.textSecondary};
  }
`;


const MiniMap = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  
  /* AJOUTEZ CES LIGNES pour que Leaflet s'affiche correctement */
  .leaflet-container {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
`;





function Details() {
  const { id } = useParams();
  const { theme } = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  // est-ce que la modal est ouverte ?
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { datas, isLoading, error } = useFetch(API_URL + 'school/detail-university/' + id);

  console.log("DATTAS de l'école :", datas);

  if (!datas) {
    return <div style={{ marginTop: "200px", textAlign: "center" }}>École non trouvée</div>;
  }

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  const { reviews } = datas || [];


  // ⚙️ Exemple d’images

  const imagesUrls = datas?.images || [];
  const images = imagesUrls.length ? imagesUrls.map(img => img.url) : [datas.logo];

  const { coursTheoriques, coursPratiques, cadreEtudiant, fraisScolaire } =
    calculateAllCriteria(datas);

  // 🎠 Slider mobile state

  const nextImage = () => {
    if (images.length < 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }

  const prevImage = () => {
    if (images.length < 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }



  // Fermer la modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    alert(`Merci ${formData.name} ! Votre avis a été enregistré.`);
    handleCloseModal();
  };

  const openMap = () => {
    if (!datas.latitude || !datas.longitude) return;

    const lat = datas.latitude;
    const lng = datas.longitude;

    // Ouvre Google Maps avec itinéraire depuis l'emplacement actuel
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <PageWrapper>
      <ContainerBloc>
        <FiliereContainer isDarkMode={theme === "dark"}>
          <h1>Filières</h1>
          <FiliereName>
            {datas.filieres &&
              datas.filieres.map((filiere, index) => (
                <button key={index} type="button"> {filiere.name}</button>
              ))
            }
          </FiliereName>
        </FiliereContainer>
        {datas.latitude && datas.longitude && (
          <LocationContainerWrapper>
            <LocationButton onClick={openMap} theme={theme}>
              <MapPin size={20} color={theme === "dark" ? "#fff" : "#222"} />
              <span>Voir sur la carte</span>
            </LocationButton>

            <MiniMap>
              <MapContainer
                center={[datas.latitude, datas.longitude]}
                zoom={13}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[datas.latitude, datas.longitude]} icon={CustomIcon}>
                  <Popup>{datas.name}</Popup>
                </Marker>
              </MapContainer>
            </MiniMap>
          </LocationContainerWrapper>
        )}
      </ContainerBloc>

      <DetailsContainer isDarkMode={theme === "dark"}>

        {/* 🖼️ Version Desktop */}
        <ContentImages isDarkMode={theme === "dark"}>
          <StyledTitle isDarkMode={theme === "dark"}>
            <div className="nameNote">
              <img src={datas.logo} className="h-16 w-16" alt="logo" />
              <div>
                <h2>{datas.name}</h2>
                <p> {formatRatingDisplay(datas)} </p>
              </div>
            </div>
            {reviews &&
              reviews.length > 0 && (
                <div className="btnAvis">
                  <ButtonAvis
                    setIsModalOpen={setIsModalOpen}
                  />
                </div>
              )
            }
          </StyledTitle>
          <ImageGallery>
            {images[0] && <MainImage src={images[0]} alt="principale" />}
            <SideImages>
              {images[1] && <img src={images[1]} alt="secondaire 1" />}
              {images[2] && <img src={images[2]} alt="secondaire 2" />}
            </SideImages>
          </ImageGallery>
        </ContentImages>

        {/* 📱 Version Mobile */}
        <MobileSlider>
          <SliderArrow onClick={prevImage}>←</SliderArrow>
          <SliderImage src={images[currentIndex]} alt="photo école" />
          <SliderArrow onClick={nextImage}>→</SliderArrow>
        </MobileSlider>

        {
          isLoading ? (
            <Loader />
          ) : reviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center line-hei">
              <span>Soyez le premier à ajouter donner votre avis! </span>
              <div>
                <ButtonAvis
                  setIsModalOpen={setIsModalOpen}
                />
              </div>

            </div>
          ) : (
            reviews.length > 0 &&
            <BodyDetail>
              {/* 📊 Synthèse des notes */}
              <NoteContainer>
                <Synthese logo={openBook} note={coursTheoriques.outOfFive} label="Cours théoriques" />
                <Synthese logo={building} note={coursPratiques.outOfFive} label="Cours pratiques" />
                <Synthese logo={users} note={cadreEtudiant.outOfFive} label="Cadre étudiant" />
                <Synthese logo={wallet} note={fraisScolaire.outOfFive} label="Frais scolaire" />
              </NoteContainer>

              <ToggleComment />

              <CommentContainer>
                <div>
                  {
                    reviews.map((review, index) => (
                      <Comment key={index} review={review} />
                    ))
                  }
                </div>
              </CommentContainer>
            </BodyDetail>
          )
        }

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleFormSubmit}
          schoolId={id}
        />
      </DetailsContainer>

    </PageWrapper>
  );
}

export default Details;
