import * as React from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/app/leaderboard/ui/Avatar';
import Image from 'next/image';
import JoinGame from './JoinGame';
import Connect from './Connect';

interface HeaderProps {
  currentPlayer?: {
    username: string;
    avatarUrl?: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ currentPlayer }) => {
  return (
    <div className="flex font-sans flex-wrap justify-between items-center px-4 py-3 gap-3">
      <div className="flex-shrink-0">
        <div className="h-12 w-12 rounded-full bg-black flex items-center justify-center">
          {/* <Image src="/logo.png" alt="Join Icon" width={30} height={30} /> */}
        </div>
      </div>

      {currentPlayer && (
        <div className="flex items-center md:ml-80 ml-0 rounded-full bg-black px-6 gap-2.5 pl-3 pr-6 py-3">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={currentPlayer.avatarUrl}
              alt={currentPlayer.username}
            />
            <AvatarFallback>
              {currentPlayer.username.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="text-white md:text-lg text-sm mr-2">
            {currentPlayer.username}
          </span>
        </div>
      )}

      <div className="flex items-center gap-2.5 flex-wrap">
        <JoinGame />
        <Connect />
      </div>
    </div>
  );
};
