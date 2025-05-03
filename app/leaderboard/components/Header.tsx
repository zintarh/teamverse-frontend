import * as React from 'react';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/app/leaderboard/ui/Avatar';
import Button from '@/app/ui/Button';
import Image from 'next/image';

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
          <Image src="/logo.png" alt="Join Icon" width={30} height={30} />
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
        <Button className="!rounded-full bg-[#1414141A] text-white md:text-lg text-sm md:px-8 md:py-3 flex items-center backdrop-blur">
          <Image
            src="/icons/leaderboard/game2.png"
            alt="Join Icon"
            width={16}
            height={16}
            className="mr-2"
          />
          <span className="text-lg">Join game</span>
        </Button>
        <Button
          className="!rounded-full bg-[#1414141A] text-white md:text-lg text-sm md:px-8 py-3 flex items-center backdrop-blur"
          style={{ backdropFilter: 'blur(200px)' }}
        >
          Connect wallet
        </Button>
      </div>
    </div>
  );
};
