'use client';

import type { TeamMember, GameState } from '@/types/game-types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface MysteryFlowProps {
  flow: number;
  gameState: GameState;
  teamMembers: TeamMember[];
  clue: string;
  onTeammateSelect: (teammateId: string) => void;
  onReset: () => void;
}

export function MysteryFlow({
  flow,
  gameState,
  teamMembers,
  clue,
  onTeammateSelect,
  onReset,
}: MysteryFlowProps) {
  return (
    <div className="w-full h-full sm:h-[650px] md:h-[750px] max-w-[1095px] bg-[#191919] backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-6 text-white">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="text-left w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-400 mb-2 sm:mb-4">
            Mystery player
          </h2>

          {/* Progress indicators */}
          <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={cn(
                  'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full',
                  i === gameState.round - 1 ? 'bg-gray-600' : 'bg-gray-800'
                )}
              />
            ))}
          </div>
        </div>

        {/* Mystery content area */}
        <div className="w-full max-w-md flex flex-col items-center mt-6 sm:mt-10 md:mt-14">
          {/* Show avatar for result flows */}
          {(flow === 2 || flow === 3) && (
            <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 -mb-4 sm:-mb-5 md:-mb-6">
              <AvatarImage
                src={flow === 2 ? teamMembers[0].avatar : teamMembers[1].avatar}
                alt="Teammate"
              />
              <AvatarFallback>{flow === 2 ? 'JU' : 'JT'}</AvatarFallback>
            </Avatar>
          )}

          {/* Clue text */}
          <div className="text-center mb-4 sm:mb-6 bg-[#1F1F1F] max-w-xs mx-auto p-3 sm:p-4 md:p-5 pt-6 sm:pt-8 md:pt-10 rounded-lg">
            <p className="text-base sm:text-lg md:text-xl font-medium">
              {clue}
            </p>
          </div>

          {/* Additional message for mystery player */}
          {flow === 4 && (
            <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
              You are the mystery player, stay mysterious
            </p>
          )}

          {/* Result message */}
          {flow === 2 && (
            <Button
              className="mb-4 sm:mb-6 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 text-sm sm:text-base"
              onClick={onReset}
            >
              you win
            </Button>
          )}

          {flow === 3 && (
            <Button
              className="mb-4 sm:mb-6 bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 text-sm sm:text-base"
              onClick={onReset}
            >
              You lose
            </Button>
          )}
        </div>

        <div className="w-full">
          {/* Game stats */}
          <div className="w-full flex flex-col sm:flex-row justify-between mt-4 sm:mt-6 md:mt-8 mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-4 md:gap-8 mb-2 sm:mb-0 flex-wrap">
              <div className="bg-[#1F1F1F] px-2 sm:px-3 py-1 rounded">
                {gameState.timer}
              </div>
              <div className="bg-[#1F1F1F] px-2 sm:px-3 py-1 rounded">
                round {gameState.round} of {gameState.totalRounds}
              </div>
              <div className="bg-[#1F1F1F] px-2 sm:px-3 py-1 rounded">
                Position: {gameState.position}
              </div>
            </div>
            <div className="bg-[#1F1F1F] px-2 sm:px-3 py-1 rounded">
              {gameState.points} points
            </div>
          </div>

          {/* Teammate selection grid */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {teamMembers.map((teammate) => (
              <div
                key={teammate.id}
                className={cn(
                  'flex flex-col items-center justify-center p-2 sm:p-3 md:p-4 rounded-lg cursor-pointer transition-all bg-[#1F1F1F] h-auto aspect-square',
                  gameState.selectedTeammate === teammate.id
                    ? 'bg-white'
                    : 'hover:bg-black/40'
                )}
                onClick={() => onTeammateSelect(teammate.id)}
              >
                <Avatar className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 mb-1 sm:mb-2">
                  <AvatarImage
                    src={teammate.avatar || '/placeholder.svg'}
                    alt={teammate.name}
                  />
                  <AvatarFallback>
                    {teammate.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <span
                  className={cn(
                    'font-medium text-xs sm:text-sm md:text-base',
                    gameState.selectedTeammate === teammate.id
                      ? 'text-black'
                      : 'text-white'
                  )}
                >
                  {teammate.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
