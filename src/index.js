import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Accueil from './pages/Accueil';
import GlobalStyle from './utils/styles/GlobalStyle';
import ThemeProvider from './utils/context';
import Footer from './components/Footer';
import Details from './pages/Details';
import Header from './components/Header';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Router>
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/universite/:id" element={<Details />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  </Router>
);

