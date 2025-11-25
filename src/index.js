import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Accueil from './pages/Accueil';
import GlobalStyle from './utils/styles/GlobalStyle';
import { AuthProvider, ThemeProvider } from './utils/context';
import Details from './pages/Details';
import './index.css';
import Inscription from './pages/inscription';
import MainLayout from './layout/mainLayout';
import Connexion from './pages/connexion';
import LandingPage from './pages/LandingPage';
import AjouterAvis from './pages/AjouterAvis';
import PublicRoute from './layout/publicRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <ThemeProvider>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ajouteravis" element={<AjouterAvis />} />
          <Route path="/Accueil" element={<MainLayout><Accueil /></MainLayout>} />
          <Route path="/Accueil/search" element={<MainLayout><Accueil /></MainLayout>} />
          <Route path="/detail-university/:id" element={<MainLayout><Details /></MainLayout>} />
          <Route path="/inscription" element={<PublicRoute> <Inscription /></PublicRoute>} />
          <Route path="/connexion" element={<PublicRoute> <Connexion /></PublicRoute>} />
        </Routes>
      </AuthProvider>
    </ThemeProvider>
  </Router>
);

