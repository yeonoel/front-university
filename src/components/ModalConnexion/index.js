import { useState } from "react";
import logo from "../../assets/logo.png";
import { base_url_local } from "../../utils/api";
import { useAuth, useMutation } from "../../utils/hooks";
import { useNavigate } from "react-router-dom";

function ModalConnexion({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({});
  const {login, isAuthenticated} = useAuth();
  const {mutate} = useMutation();

  const navigate = useNavigate();
  const handleInscrptionPage = () => navigate("/inscription");


  if (!isOpen) return null;


  

  const formFields =[
        { type: "text", placeholder: "Nom d'utilisateur", name: "username" },
        { type: "password", placeholder: "Mot de passe", name: "password" },
      ]
  const inputChangeValue = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let userInfomation = {};
        userInfomation = mutate(base_url_local + "auth/signup", {body: formData});
        login(userInfomation.token, userInfomation.user);
  
    } catch (error) {
      console.error(error);
    }
  
    setIsOpen(false);
  };

  if(isAuthenticated) {
    return <div>Vous êtes déja connecté</div>
  }
  const handleCloseModalConnexion = () => {
    setIsOpen(false);
  };



  return (
    <div onClick={handleCloseModalConnexion} className="fixed top-0 left-0 w-full h-full bg-[#00000080] backdrop-blur-sm flex items-center justify-center z-[1000]">
      <div onClick={(e) => e.stopPropagation()} className="bg-white h-1/2 w-1/3 border border-gray-500 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
          Inscription
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-4 w-full flex flex-col items-center"
        >
          {formFields.map((field, index) => (
            <input
              key={index}
              className="p-2.5 mb-2.5 rounded border border-gray-500 w-4/5"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={inputChangeValue}
              required
            />
          ))}

          <button
            type="submit"
            className="bg-slate-800 text-white w-4/5 py-2 rounded hover:bg-slate-700 transition"
          >
            se connecter
          </button>
        </form>

        <p className="mt-3 text-sm">
          Vous n'avez pas de compte ? "
          <span
            onClick={handleInscrptionPage}
            className="text-blue-500 cursor-pointer hover:underline"
          >
           Inscrivez-vous
          </span>
        </p>
      </div>
    </div>
  );
}

export default ModalConnexion;