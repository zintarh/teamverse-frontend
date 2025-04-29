'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import GameCard from './GameCard';
import image from '../public/profile.svg';
import ranking from '../public/ranking.svg';
import desk from '../public/desk.svg';
import customize from '../public/customize.svg';
import wallet from '../public/wallet.svg';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col min-h-screen bg-cover bg-no-repeat overflow-hidden transition-all duration-500 ${
        darkMode ? 'bg-black' : 'bg-island'
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center p-2 mt-2">
        <div className="flex items-center gap-3">
          <div
            onClick={toggleDarkMode}
            className="w-10 h-10 rounded-full bg-black overflow-hidden cursor-pointer flex items-center justify-center"
          ></div>
        </div>

        <div className="flex items-center gap-2 bg-black p-2 rounded-full">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image src={image} alt="Avatar" width={40} height={40} />
          </div>
          <span className="text-white text-xs">Zee.the.whiz</span>
        </div>

        <button className="flex items-center bg-white/20 backdrop-blur px-4 py-2 rounded-md text-white font-medium">
          Connect wallet
          <Image
            src={wallet}
            alt="Wallet Icon"
            width={20}
            height={20}
            className="ml-2"
          />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-sm font-bold text-white mb-6">
            Welcome to TeamVerse
          </h1>

          <div className="relative w-full max-w-md mb-4">
            <input
              type="text"
              placeholder="Enter invite code"
              className="bg-green-800/80 text-white px-4 py-5 rounded-md focus:outline-none w-full pr-28"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-green-800 font-semibold px-4 py-2 rounded-md">
              Join game
            </button>
          </div>

          <h2 className="text-white mb-4">Games</h2>
          {/* Games */}
          <GameCard />

          {/* Leaderboard */}
          <div className="w-full max-w-md bg-green-800/80 p-2 rounded-lg shadow-lg mb-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white">
                  <Image src={image} alt="Avatar" width={48} height={48} />
                </div>

                <div>
                  <p className="text-white text-xs">
                    Zee.the.whiz has placed 1st across{' '}
                    <span className="font-bold">all games</span>.
                  </p>
                  <p className="text-yellow-400 text-xs mt-1">100 day streak</p>
                </div>
              </div>

              <p className="text-xs text-white/60 mb-1">Leaderboard</p>
            </div>

            {/* Score */}
            <div className="flex flex-col items-center mt-6">
              <div className="flex items-center">
                <div className="bg-yellow-400 rounded-full w-6 h-6 flex items-center mr-3 justify-center text-black font-bold text-sm">
                  1
                </div>
                <p className="font-bold text-white ml-4">1st Place</p>
              </div>
              <p className="text-xs text-white mt-0.5 ml-20">
                Out of 5 players
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="flex justify-center gap-4 p-3">
        <button className="bg-white/20 backdrop-blur p-3 rounded-full">
          <Image src={ranking} alt="Ranking" width={24} height={24} />
        </button>
        <button className="bg-white/20 backdrop-blur p-3 rounded-full">
          <Image src={desk} alt="Desk" width={24} height={24} />
        </button>
        <button className="bg-white/20 backdrop-blur p-3 rounded-full">
          <Image src={customize} alt="Customize" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}
