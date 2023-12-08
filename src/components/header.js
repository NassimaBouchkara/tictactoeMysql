import React from 'react';
import { Link } from 'gatsby';
import '@fortawesome/fontawesome-free/css/all.css';

const Header = () => {
  return (
    <header className="p-4 text-center bg-blue-800 text-white flex justify-between items-center">
      <div className="flex-grow">
        <h1 className="text-3xl font-semibold mb-2 text-white">Tic Tac Toe Game</h1>
        <div className="flex justify-center items-center">
          <span className="mr-2">
            <i className="fas fa-apple-alt text-red-500"></i>
          </span>
          <span>vs</span>
          <span className="ml-2">
            <i className="fas fa-apple-alt text-green-500"></i>
          </span>
        </div>
      </div>
      <div>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button className="bg-blue-500 hover:bg-blue-600 focus:outline-none text-white font-bold py-2 px-4 rounded mr-4">
            Sign In
          </button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button className="bg-gray-500 hover:bg-gray-600 focus:outline-none text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;