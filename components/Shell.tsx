'use client';
import React, { useState, ReactNode } from 'react';
import { Header } from './Header';
import { Player } from '@/types/leaderboard-types';
import BottomNav from './BottomNav';

interface ShellProps {
  children: ReactNode;
}

export default function Shell({ children }: ShellProps) {
  const [currentPlayer, setCurrentPlayer] = useState<Player | undefined>({
    id: '1',
    rank: 1,
    username: 'Zee.the.whiz',
    avatarUrl: '/avatars/zee.png',
    responseTime: 12,
    points: 30,
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center w-full"
      style={{
        backgroundImage: 'url(/background/island-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="py-4">
        <Header currentPlayer={currentPlayer} />
        <div className="h-full  max-w-4xl mx-auto py-10 ">{children}</div>
        <BottomNav />
      </div>
    </div>
  );
}
