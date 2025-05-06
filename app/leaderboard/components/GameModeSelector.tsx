import * as React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { GameMode } from '@/types/leaderboard-types';
import { cn } from '@/lib/utils';

interface GameModeSelectorProps {
  modes: GameMode[];
  activeMode: GameMode;
  onModeChange: (mode: GameMode) => void;
}

export default function GameModeSelector({
  modes,
  activeMode,
  onModeChange,
}: GameModeSelectorProps) {
  return (
    <Tabs.Root
      value={activeMode}
      onValueChange={(value) => onModeChange(value as GameMode)}
      className="flex justify-center mb-4 font-sans"
    >
      <Tabs.List
        aria-label="Game modes"
        className="bg-white/10 backdrop-blur-sm rounded-full p-1 px-3 flex space-x-1"
      >
        {modes.map((mode) => (
          <Tabs.Trigger
            key={mode}
            value={mode}
            className={cn(
              'px-7 py-2 rounded-full md:text-lg  text-sm transition-all text-white/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
              activeMode === mode && 'bg-white py-3 text-slate-900'
            )}
          >
            {mode}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
    </Tabs.Root>
  );
}
