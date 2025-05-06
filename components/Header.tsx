'use client';
import { useDarkMode } from '../components/DarkModeContext';


import { useState, useEffect } from 'react';
const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="flex items-center justify-between p-4 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="flex items-center gap-3">
        <div
         onClick={toggleDarkMode}
          className="w-10 h-10 rounded-full bg-black overflow-hidden cursor-pointer flex items-center justify-center"
        ></div>
      </div>
      <div className="flex items-center gap-1 bg-black px-2 py-1 rounded-full ">
        <img
          src="/profile.svg"
          alt="User Profile"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-xs text-white">Zee.the.whiz</span>
      </div>
      <button className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Connect wallet
      </button>
    </header>
  );
};

export default Header;
