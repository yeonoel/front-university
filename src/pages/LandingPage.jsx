import React, { useState } from 'react';
import { Search, Code, Shield, Video, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const [formation, setFormation] = useState('');
  const [ville, setVille] = useState('');
  const navigate = useNavigate();

  const categories = [
    { icon: Code, label: 'Développement', color: 'bg-blue-500' },
    { icon: Shield, label: 'Cybersécurité', color: 'bg-red-500' },
    { icon: Video, label: 'Audiovisuel', color: 'bg-purple-500' },
  ];

  const handleSearch = () => {
    console.log('Recherche:', { formation, ville });
    navigate('/Accueil');
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            TechCampus
          </h1>
        </div>
        <nav className="flex gap-6">
          <button className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Écoles
          </button>
          <button className="text-gray-700 hover:text-indigo-600 font-medium transition">
            Comparateur
          </button>
          <button onClick={() => navigate('/Connexion')} className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Connexion
          </button>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-4xl">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Trouvez votre école du numérique
            </h2>
            <p className="text-xl text-gray-600">
              Comparez les formations, les notes et les frais scolaires
            </p>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Formation (ex: Développement Web, Cybersécurité...)"
                  value={formation}
                  onChange={(e) => setFormation(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-lg"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Ville"
                  value={ville}
                  onChange={(e) => setVille(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:outline-none text-lg"
                />
              </div>
              <button
                onClick={handleSearch}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Rechercher
              </button>
            </div>

            {/* Categories */}
            <div className="flex gap-3 flex-wrap">
              <span className="text-gray-600 font-medium">Catégories populaires :</span>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">250+</div>
              <div className="text-gray-600">Écoles référencées</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                <span className="text-4xl font-bold text-gray-900 ml-2">4.5</span>
              </div>
              <div className="text-gray-600">Note moyenne</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50k+</div>
              <div className="text-gray-600">Avis étudiants</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-8 py-4">
        <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
          <span>© 2025 TechCampus</span>
          <button className="hover:text-indigo-600 transition">À propos</button>
          <button className="hover:text-indigo-600 transition">Contact</button>
          <button className="hover:text-indigo-600 transition">Conditions</button>
        </div>
      </footer>
    </div>
  );
}



export default LandingPage;