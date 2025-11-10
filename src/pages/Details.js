import Synthese from "../components/synthese";
import users from "../assets/users.svg";
import building from "../assets/building.svg";
import openBook from "../assets/open-book.svg";
import wallet from "../assets/wallet.svg";
import { calculateAllCriteria } from "../utils/criteria/criteriaCalculator";
import datas from "../utils/datas";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import cover from "../assets/cover.png";
import cover2 from "../assets/cover2.png";
import { formatRatingDisplay } from "../utils/rating/rating";
import ToggleComment from "../components/toggleComment";
import Comment from "../components/comments";
import Modal from "../components/ModalAvis";


// 🧩 Conteneur principal
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 150px auto 0px auto;
  align-items: center;

  gap: 20px;
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
  border-bottom: 1px solid #000000;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 30px 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    .nameNote {
      width: 50%;
      h2 {
        font-size: 1rem;
      }
        p {
          font-size: 1rem;
        }
    }
    button {
      font-size: 0.5rem;
      padding: 0 10px;
    }
  }

  button {
      border: 0;
      line-height: 2.5;
      padding: 0 20px;
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

      :hover {
        background-color: red;
      }

      :active {
        box-shadow:
          inset -2px -2px 3px rgb(255 255 255 / 0.6),
          inset 2px 2px 3px rgb(0 0 0 / 0.6);
      }

  }
}  `;

const ContentImages = styled.div`
  width: 100%;
  background-color: #ffffffff;
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




function Details() {
  const { id } = useParams();
  console.log("ID de l'école :", id);
  const [currentIndex, setCurrentIndex] = useState(0);
   // 🎛️ STATE : est-ce que la modal est ouverte ?
  const [isModalOpen, setIsModalOpen] = useState(false);

  const school = datas?.find((s) => s.id === parseInt(id));

  if (!school) {
    return <div style={{marginTop: "200px", textAlign: "center"}}>École non trouvée</div>;
  }

  const {reviews} = school || [];


  // ⚙️ Exemple d’images
  const images = [cover,cover2,cover ];

  const { coursTheoriques, coursPratiques, cadreEtudiant, fraisScolaire } =
    calculateAllCriteria(school);
    console.log('Critères calculés :', { coursPratiques , coursTheoriques, cadreEtudiant, fraisScolaire });

  // 🎠 Slider mobile state

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);


  // La modal

  // Ouvrir la modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Fermer la modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 📤 FONCTION : Recevoir les données du formulaire
  const handleFormSubmit = (formData) => {
    console.log("📋 Données reçues :", formData);
    
    // - Envoyer à une API
    // - Ajouter à une liste
    // - Sauvegarder dans une base de données
    
    alert(`Merci ${formData.name} ! Votre avis a été enregistré.`);
    
    // Fermer la modal après soumission
    handleCloseModal();
  };

  return (
    <DetailsContainer>

      {/* 🖼️ Version Desktop */}
      <ContentImages>
        <StyledTitle>
          <div className="nameNote"> 
            <h2>{school.name}</h2>
            <p> {formatRatingDisplay(school)} </p>
          </div>
            <button type="button" onClick={handleOpenModal}>
              Ajouter un avis
            </button>
        </StyledTitle>
          <ImageGallery>
            <MainImage src={images[0]} alt=" principale" />
            <SideImages>
              <img src={images[1]} alt=" secondaire 1" />
              <img src={images[2]} alt=" secondaire 2" />
            </SideImages>
          </ImageGallery>
      </ContentImages>

      {/* 📱 Version Mobile */}
      <MobileSlider>
        <SliderArrow onClick={prevImage}>←</SliderArrow>
        <SliderImage src={images[currentIndex]} alt="photo école" />
        <SliderArrow onClick={nextImage}>→</SliderArrow>
      </MobileSlider>

      { reviews.length > 0 &&
        <BodyDetail>
          {/* 📊 Synthèse des notes */}
          <NoteContainer>
            <Synthese logo={openBook} note={coursTheoriques.outOfFive } label="Cours théoriques" />
            <Synthese logo={building} note={coursPratiques.outOfFive} label="Cours pratiques" />
            <Synthese logo={users} note={cadreEtudiant.outOfFive} label="Cadre étudiant" />
            <Synthese logo={wallet} note={fraisScolaire.outOfFive} label="Frais scolaire" />
          </NoteContainer>

          <ToggleComment/>

          <CommentContainer>
            <div>
              { 
                reviews.map((review) => (
                  <Comment review={review} />
                ))
              }
            </div>
          </CommentContainer>
        </BodyDetail>
      }

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleFormSubmit}
      />
    </DetailsContainer>
  );
}

export default Details;
