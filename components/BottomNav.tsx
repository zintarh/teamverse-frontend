'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BottomNavButtonProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  label: string;
}

function BottomNavButton({
  icon,
  active,
  onClick,
  label,
}: BottomNavButtonProps) {
  return (
    <Button
      onClick={onClick}
      aria-label={label}
      variant="ghost"
      className={cn(
        'h-14 w-14 rounded-full flex items-center justify-center bg-teal-700/50 backdrop-blur-sm text-white hover:bg-teal-700/70 transition-all transform duration-200 ease-in-out',
        active && 'scale-110 shadow-lg ring-2 ring-white'
      )}
    >
      {icon}
    </Button>
  );
}

export default function BottomNav() {
  const [activeTab, setActiveTab] = React.useState<string | null>('ranking');

  const tabs = [
    {
      id: 'desk',
      label: 'Desk',
      icon: (
        <Image
          src="/icons/leaderboard/desk.png"
          alt="Desk"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
    },
    {
      id: 'playlist',
      label: 'Playlist',
      icon: (
        <Image
          src="/icons/leaderboard/playlist.png"
          alt="Playlist"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
    },
    {
      id: 'ranking',
      label: 'Ranking',
      icon: (
        <Image
          src="/icons/leaderboard/ranking.png"
          alt="Ranking"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
    },
    {
      id: 'customize',
      label: 'Customize',
      icon: (
        <Image
          src="/icons/leaderboard/customize.png"
          alt="Customize"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
    },
  ];

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-transparent z-50">
      <div className="flex items-center justify-center space-x-4 px-4 py-2  bg-[#1414141A] backdrop-blur-sm rounded-full shadow-md">
        {tabs.map((tab) => (
          <BottomNavButton
            key={tab.id}
            icon={tab.icon}
            label={tab.label}
            active={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
          />
        ))}
      </div>
    </nav>
  );
}
