import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useMutation, useTheme } from '../utils/hooks';
import { base_url_local } from '../utils/api';

function Connexion() {
    const [formData, setFormData] = useState({
        emailOrUsername: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const {login} = useAuth();
    const navigate = useNavigate();
    const {mutate} = useMutation();
    const {theme} = useTheme();
    const isDarkMode = theme === 'dark';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleKeyDown = (e) => {
        if (formData.emailOrUsername.length  > 50 || formData.password.length  > 50 ) return;
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError('');

        try {
            const data = await mutate(base_url_local + "auth/signin", {body: formData});
           
            if (data.status === "success") {
                setMessage('Inscription réussie ! 🎉');
                setFormData({ emailOrUsername: '', password: '' });
                login(data.token, data.user);
                navigate('/Accueil');
            } else {
                setError(data.message || 'Erreur lors de la connexion');
            }
        } catch (err) {
            setError('Email ou mot de passe incorrect');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray flex justify-center">
            
            {/* Section principalee */}
            <div className=" flex  items-center w-96 justify-center">
                <div className={`w-full rounded-2xl p-8 border ${isDarkMode ? 'border-white' : 'border-gray'}`}>
                    <h2 className={`
                        text-gray-700
                        text-3xl font-bold    mb-2 text-center
                        ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                        Connexion
                    </h2>
                    <p className="text-gray-500 text-center mb-8">
                        
                    </p>

                    <div className="space-y-5">
                        <div>
                            <label htmlFor="emailOrUsername" className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                                Nom d'utilisateur ou adresse email
                            </label>
                            <input
                                type="text"
                                id="emailOrUsername"
                                name="emailOrUsername"
                                value={formData.emailOrUsername}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                required
                                className="w-full px-4 py-2 bg-gray-50 border border-gray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                                placeholder="Email ou username"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                required
                                minLength="6"
                                className="w-full px-4 py-2 bg-gray-50 border border-gray rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
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
                            {loading ? 'connexion en cours...' : 'Se connecter'}
                        </button>

                        <p className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                            Pas encore un compte ?{' '}
                            <Link to={'/inscription'} className="text-blue-600 hover:text-blue-800 font-medium">
                                S'inscrire
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Connexion;