import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import "../styles/global.css"
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Votre logique d'authentification ici...

    // Redirection vers la page après la connexion réussie
    navigate('/choose'); // Remplacez '/choose' par l'URL de la page à laquelle vous souhaitez rediriger
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Log In</h1>
      <div className="border border-gray-300 rounded-md px-6 py-8 mx-auto max-w-md">
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring w-full"
          >
            Log In
          </button>
        </form>
        <p className="mt-4">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;