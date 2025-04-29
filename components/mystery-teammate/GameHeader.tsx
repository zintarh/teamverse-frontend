'use client';

import type { TeamMember } from '@/types/game-types';
import { Button } from '@/components/ui/button';
import { UserProfileBadge } from '@/components/shared/UserProfileBadge';
import { ConnectWalletButton } from '@/components/mystery-teammate/ConnectWalletButton';

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
      <div className="w-full">
        <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center">
          <span className="sr-only">Back</span>
        </button>
      </div>

      {/* Center - user info */}
      <div className="flex items-center justify-center w-full">
        <UserProfileBadge user={currentUser} />
      </div>

      {/* Right side - actions */}
      <div className="w-full">
        <div className="flex items-center justify-end gap-1 sm:gap-3">
          <Button
            variant="secondary"
            className="rounded-full bg-teal-500 text-white hover:bg-teal-600 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-auto"
            onClick={onJoinGame}
          >
            Join game
          </Button>
          <ConnectWalletButton onClick={onConnectWallet} />
        </div>
      </div>
    </div>
  );
}
