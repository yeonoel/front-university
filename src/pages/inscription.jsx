import {  useState } from 'react';
import videoInscription from '../assets/videos/videoInscription.mp4';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useMutation } from '../utils/hooks';
import { base_url_local } from '../utils/api';

export default function Inscription() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const {mutate} = useMutation();
    const {login} = useAuth();

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        try {
            const data = await mutate(base_url_local + "auth/signup", {body: formData});
            if (data.status === "success") {
                setMessage('Inscription réussie ! 🎉');
                setFormData({ username: '', email: '', password: '' });
                login(data.token, data.user);
                setError(data.message || 'Erreur lors de l\'inscription');
                navigate('/Connexion');
            } else {
                setError(data.message || 'Erreur lors de l\'inscription');
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        } 
    };

    return (
        <div className="min-h-screen w-full flex">
            {/* Section gauche avec vidéo 3D */}
            <div className="w-1/2 relative overflow-hidden bg-black">
                {/* Vidéo en background */}
                <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
                >
                    <source src={videoInscription} type="video/mp4" />
                </video>

                {/* Overlay gradient pour meilleure lisibilité */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>

                {/* Contenu texte */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-12">
                    <h1 className="text-5xl font-bold mb-6 text-center">
                        Créez votre compte
                    </h1>
                    <div className="text-lg text-center space-y-4 max-w-md">
                        <p className="flex items-center justify-center gap-3">
                            <span className="text-3xl">🎓</span>
                            <span>Profitez d'un accès à toutes les écoles</span>
                        </p>
                        <p className="flex items-center justify-center gap-3">
                            <span className="text-3xl">💬</span>
                            <span>Accédez aux avis et aux conseils des autres utilisateurs</span>
                        </p>
                        <p className="flex items-center justify-center gap-3">
                            <span className="text-3xl">✍️</span>
                            <span>Ajoutez vos propres avis</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Section droite avec formulaire */}
            <div className="w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                        Inscription
                    </h2>
                    <p className="text-gray-500 text-center mb-8">
                        Rejoignez notre communauté
                    </p>

                    <div className="space-y-5">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                                Nom d'utilisateur
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="votre nom utilisateur"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Adresse email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="email@exemple.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength="6"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="••••••••"
                            />
                        </div>

                        {message && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                                {message}
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                                {error}
                            </div>
                        )}

                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-lg hover:shadow-xl"
                        >
                            {loading ? 'Inscription en cours...' : 'S\'inscrire'}
                        </button>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            Déjà un compte ?{' '}
                            <Link to={'/connexion'} className="text-blue-600 hover:text-blue-800 font-medium">
                                Se connecter
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}