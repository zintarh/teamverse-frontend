'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ActionButtonProps {
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  label: string;
}

function ActionButton({ icon, active, onClick, label }: ActionButtonProps) {
  return (
    <Button
      onClick={onClick}
      aria-label={label}
      variant="ghost"
      className={cn(
        'h-14 w-14 rounded-full flex items-center justify-center bg-teal-700/50 backdrop-blur-sm text-white hover:bg-teal-700/70 transition-all transform duration-200 ease-in-out',
        active && 'scale-110 shadow-lg ring-2 ring-white' // Make active button larger and lifted
      )}
    >
      {icon}
    </Button>
  );
}

export default function ActionButtons() {
  const [activeButton, setActiveButton] = React.useState<string | null>('rank');

  const buttons = [
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
    <div className="flex items-center justify-center space-x-4 mt-2">
      {buttons.map((button) => (
        <ActionButton
          key={button.id}
          icon={button.icon}
          label={button.label}
          active={activeButton === button.id}
          onClick={() => setActiveButton(button.id)}
        />
      ))}
    </div>
  );
}
