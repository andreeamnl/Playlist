import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ({ toggleAbout }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.body.classList.toggle('dark', darkMode);
    document.body.classList.toggle('light', !darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <nav className={`bg-${darkMode ? 'darkGray' : 'lightGray'} p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="/about" className="text-teal text-3xl font-bold flex items-center">
          <span className="mr-2">Playlistify</span>
        </a>
        <div className="flex items-center">
        <Link to="/about">

          <button
            className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded mr-4"
            onClick={toggleAbout}
          >
            About
          </button>
          </Link>
          <button 
            className="bg-teal hover:bg-hoverGray text-white font-bold py-2 px-4 rounded"
            onClick={handleToggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;