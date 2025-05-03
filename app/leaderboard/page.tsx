'use client';

import { useState, useEffect } from 'react';
import LeaderboardLayout from '@/app/leaderboard/components/LeaderboardLayout';
import { Player } from '@/types/leaderboard-types';
import { Header } from './components/Header';

export default function LeaderboardPage() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>();

  useEffect(() => {
    const mockPlayers: Player[] = [
      {
        id: '1',
        rank: 1,
        username: 'Zee.the.whiz',
        avatarUrl: '/avatars/zee.png',
        responseTime: 12,
        points: 30,
      },
      {
        id: '2',
        rank: 2,
        username: 'jay.the.man',
        avatarUrl: '/avatars/jaytee.png',
        responseTime: 12,
        points: 30,
      },
      {
        id: '3',
        rank: 3,
        username: 'jason.azora',
        avatarUrl: '/avatars/jayson.png',
        responseTime: 12,
        points: 30,
      },
      {
        id: '4',
        rank: 4,
        username: 'KIKI_ATTYVM',
        avatarUrl: '/avatars/jaytee.png',
        responseTime: 12,
        points: 30,
      },
      {
        id: '5',
        rank: 5,
        username: 'zeek.d.whiz',
        avatarUrl: '/avatars/zee.png',
        responseTime: 12,
        points: 30,
      },
    ];

    setPlayers(mockPlayers);

    setCurrentPlayer(mockPlayers[0]);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center w-full"
      style={{
        backgroundImage: 'url(/background/island-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pt-5">
        <Header currentPlayer={currentPlayer} />{' '}
        <div className="h-full max-w-4xl mx-auto ">
          <div className="pt-4">
            <LeaderboardLayout
              players={players}
              currentPlayer={currentPlayer}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
