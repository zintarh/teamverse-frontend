'use client';

import { useState } from 'react';
import { MysteryFlow } from './MysteryFlow';
import type { TeamMember, GameState } from '@/types/game-types';
import Shell from '../Shell';

export default function MysteryTeammate() {
  const [currentFlow, setCurrentFlow] = useState<number>(0);
  const [gameState, setGameState] = useState<GameState>({
    round: 1,
    totalRounds: 5,
    position: '#1',
    points: 0,
    timer: '01:00',
    selectedTeammate: null,
    isMysteryPlayer: false,
  });

  const teamMembers: TeamMember[] = [
    {
      id: 'jason',
      name: 'Jason.uzora',
      avatar: '/avatars/jayson.png',
    },
    {
      id: 'jay',
      name: 'Jay.tee.man',
      avatar: '/avatars/jaytee.png',
    },
    {
      id: 'zee',
      name: 'Zee.the.whiz',
      avatar: '/avatars/zee.png',
    },
    {
      id: 'kiki',
      name: 'KIKI_ATYVM',
      avatar: '',
    },
    {
      id: 'zeek',
      name: 'Zeek.d.whiz',
      avatar: '',
    },
  ];

  const clue = 'This teammate biked on the weekend and made cinnamon rolls';

  const handleTeammateSelect = (teammateId: string) => {
    setGameState({
      ...gameState,
      selectedTeammate: teammateId,
    });

    // Move to next flow after selection
    setCurrentFlow(1);

    // Simulate result after a short delay
    setTimeout(() => {
      if (teammateId === 'jason') {
        setCurrentFlow(2); // Win flow
      } else {
        setCurrentFlow(3); // Lose flow
      }
    }, 1000);
  };

  const resetGame = () => {
    setCurrentFlow(0);
    setGameState({
      ...gameState,
      selectedTeammate: null,
    });
  };

  return (
    <Shell>
      <div className="relative w-full h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center p-4">
          <MysteryFlow
            flow={currentFlow}
            gameState={gameState}
            teamMembers={teamMembers}
            clue={clue}
            onTeammateSelect={handleTeammateSelect}
            onReset={resetGame}
          />
        </div>

        {/* <GameFooter /> */}
      </div>
    </Shell>
  );
}
