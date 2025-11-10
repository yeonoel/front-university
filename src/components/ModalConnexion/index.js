import { useState } from "react";
import logo from "../../assets/logo.png";

export default function Connexion({ isOpen, setIsOpen }) {
  const [connexion, setConnexion] = useState(true); // true = connexion, false = inscription

  if (!isOpen) return null;

  const toggleForm = () => setConnexion((prev) => !prev);

  const formFields = connexion
    ? [
        { type: "text", placeholder: "Nom d'utilisateur" },
        { type: "password", placeholder: "Mot de passe" },
      ]
    : [
        { type: "text", placeholder: "Nom d'utilisateur" },
        { type: "email", placeholder: "Adresse email" },
        { type: "password", placeholder: "Mot de passe" },
      ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(connexion ? "Connexion" : "Inscription", "soumise !");
  };
  const handleCloseModalConnexion = () => {
    setIsOpen(false);
  };

  return (
    <div onClick={handleCloseModalConnexion} className="fixed top-0 left-0 w-full h-full bg-[#00000080] backdrop-blur-sm flex items-center justify-center z-[1000]">
      <div onClick={(e) => e.stopPropagation()} className="bg-white h-1/2 w-1/3 border border-gray-500 rounded-lg shadow-lg flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-10 h-10 mr-2" />
          {connexion ? "Connexion" : "Inscription"}
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
              placeholder={field.placeholder}
            />
          ))}

          <button
            type="submit"
            className="bg-slate-800 text-white w-4/5 py-2 rounded hover:bg-slate-700 transition"
          >
            {connexion ? "Connexion" : "S'inscrire"}
          </button>
        </form>

        <p className="mt-3 text-sm">
          {connexion
            ? "Vous n'avez pas de compte ? "
            : "Vous avez déjà un compte ? "}
          <span
            onClick={toggleForm}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            {connexion ? "Inscrivez-vous" : "Connectez-vous"}
          </span>
        </p>
      </div>
    </div>
  );
}
