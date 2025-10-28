import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './index.css';
import Accueil from './pages/Accueil';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Accueil />} />
    </Routes>
  </Router>
);

