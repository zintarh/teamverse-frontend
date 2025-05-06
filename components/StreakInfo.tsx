// app/components/StreakInfo.tsx
import React from 'react';
import icon from '../public/icon.svg';
import Image from 'next/image';
const StreakInfo: React.FC = () => {
  return (
    <div className="mt-8 bg-green-800 bg-opacity-50 rounded-xl p-4 text-white shadow-md">
      {/* Flex container for Image + text */}
      <div className="flex items-center gap-2 mb-2">
        <img
          src="/profile.svg"
          alt="User Profile"
          className="w-6 h-6 rounded-full"
        />
        <p className="text-xs">Zee.the.whiz has placed 1st across all games.</p>
      </div>

      <div className=" items-center justify-between mt-2">
        <div>
          <p className="text-xs font-bold ml-3">100 day streak</p>
        </div>
        <div className="flex items-center justify-center ml-10 mb-2">
          <span className="mr-2">🏆</span>
          <div>
            <p className="text-sm">1st Place</p>
            <p className="text-xs">Out of 5 players</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreakInfo;
