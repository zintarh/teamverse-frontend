'use client';

import type { TeamMember } from '@/types/game-types';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface GameHeaderProps {
  currentUser: TeamMember;
  onJoinGame: () => void;
  onConnectWallet: () => void;
}

export function GameHeader({
  currentUser,
  onJoinGame,
  onConnectWallet,
}: GameHeaderProps) {
  return (
    <div className="w-full px-2 sm:px-4 py-3 sm:py-6 flex items-center justify-between">
      {/* Left side - back button */}
      <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center">
        <span className="sr-only">Back</span>
      </button>

      {/* Center - user info */}
      <div className="flex items-center gap-1 sm:gap-2 bg-[#141414] rounded-full p-1 sm:p-2">
        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
          <AvatarImage
            src={currentUser.avatar || '/placeholder.svg'}
            alt={currentUser.name}
          />
          <AvatarFallback>{currentUser.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <span className="font-medium text-white text-sm sm:text-base">
          {currentUser.name}
        </span>
      </div>

      {/* Right side - actions */}
      <div className="flex items-center gap-1 sm:gap-3">
        <Button
          variant="secondary"
          className="rounded-full bg-teal-500 text-white hover:bg-teal-600 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-auto"
          onClick={onJoinGame}
        >
          Join game
        </Button>
        <Button
          variant="outline"
          className="rounded-full bg-transparent border border-white text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-auto"
          onClick={onConnectWallet}
        >
          <span className="hidden sm:inline">Connect wallet</span>
          <span className="sm:hidden">Connect</span>
          <svg
            className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" />
            <path d="M16 12h.01" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
