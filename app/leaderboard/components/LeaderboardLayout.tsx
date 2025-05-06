import React, { useState } from 'react';
import { Player, GameMode } from '@/types/leaderboard-types';
import PlayerCard from './PlayerCard';
import GameModeSelector from './GameModeSelector';

interface LeaderboardLayoutProps {
  players: Player[];
  currentPlayer?: Player;
}

export default function LeaderboardLayout({
  players,
  currentPlayer,
}: LeaderboardLayoutProps) {
  const [activeMode, setActiveMode] = useState<GameMode>('2 Truths & A Lie');
  const gameModes: GameMode[] = [
    '2 Truths & A Lie',
    'Mystery player',
    'Custom game',
  ];

  return (
    <div className="flex flex-col h-full">
      <GameModeSelector
        modes={gameModes}
        activeMode={activeMode}
        onModeChange={setActiveMode}
      />
      <div className="flex-1 px-4 overflow-y-auto">
        {players.map((player) => (
          <PlayerCard
            key={player.id}
            player={player}
            isHighlighted={currentPlayer?.id === player.id}
          />
        ))}
      </div>
    </div>
  );
}
