import React, { useState } from 'react';
import { Link } from 'gatsby';

const SignUpPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Ajouter ici la logique de création de compte avec les données : fullName, email, password
    // Envoyer les données à votre backend pour créer un nouveau compte
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Sign Up</h1>
      <div className="border border-gray-300 rounded-md px-6 py-8 mx-auto max-w-md">
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={handleFullNameChange}
              className="border-gray-300 border rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-500 w-full"
            />
          </div>
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
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring w-full"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;