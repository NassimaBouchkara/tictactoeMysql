import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header.js';
import '@fortawesome/fontawesome-free/css/all.css';

const ChooseOpponentPage = () => {
  return (
    <div >
      <Header />
      <h1 className="text-4xl font-bold mb-4 text-blue-500">Choose Your Opponent</h1>
      <hr className="mb-4 border-b-2 border-blue-500" />
      <div className="flex flex-col items-center">
        <Link to="/play?opponent=player">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
            Play Against Another Player
          </button>
        </Link>
        <Link to="/play?opponent=computer">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Play Against the Computer
          </button>
        </Link>
      </div>
      
    </div>
  );
};

export default ChooseOpponentPage;
