// app/components/EnterInviteCode.tsx
import React from 'react';

const EnterInviteCode: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-white mb-6">
    <h1 className="text-sm font-bold mb-4 text-white">Welcome to TeamVerse</h1>
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Enter invite code"
        className="bg-green-800/80 text-white px-4 py-3 rounded-md focus:outline-none w-full pr-28"
      />
      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-green-800 font-semibold px-4 py-2 rounded-md">
        Join game
      </button>
    </div>
  </div>
  );
};

export default EnterInviteCode;
