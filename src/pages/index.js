import React, { useState } from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import '@fortawesome/fontawesome-free/css/all.css';

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div className="text-center">
      <Header />
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Welcome to the Tic Tac Toe Game</h1>
      <p className="mb-4 text-lg text-blue-400">Click on "Start Game" to begin.</p>
      
      {/* Link the "Start Game" button to the ChooseOpponentPage */}
      <Link to="/choose" style={{ textDecoration: 'none' }}>
        <button
          className={`bg-green-500 hover:bg-green-600 focus:outline-none text-white font-bold py-2 px-4 rounded mx-auto block ${clicked ? 'bg-blue-500' : ''}`}
          onClick={handleClick}
        >
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default HomePage;