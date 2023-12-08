// src/pages/index.js (et src/pages/about.js)
import React from 'react';
import Header from '../components/header'; // Importez votre en-tête (header) si nécessaire

const HomePage = () => {
  return (
    <div>
    <Header />
    <h1>À propos du jeu Tic Tac Toe</h1>
    <p>Deux joueurs posent tour à tour un rond, pour l’un, une croix, pour l’autre, dans une grille de 3 cases par 3. Le but du jeu est d’obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes. </p>
  </div>
  );
};

export default HomePage;