import { Player } from '@/types/leaderboard-types';
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@/app/leaderboard/ui/Avatar';

import * as Tooltip from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

interface PlayerCardProps {
  player: Player;
  isHighlighted?: boolean;
}

export default function PlayerCard({ player, isHighlighted }: PlayerCardProps) {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <span className="text-2xl text-yellow-500">🥇</span>;
      case 2:
        return <span className="text-2xl text-gray-300">🥈</span>;
      case 3:
        return <span className="text-2xl text-orange-700">🥉</span>;
      default:
        return (
          <span className="text-white opacity-80 w-5 text-center text-2xl">
            🥇
            {/* {rank} */}
          </span>
        );
    }
  };

  const getInitial = (username: string) => {
    return username.charAt(0).toUpperCase();
  };

  return (
    <Tooltip.Provider>
      <div
        className={cn(
          'relative flex text-xs items-center font-sans justify-between max-w-[570px] w-full mx-auto bg-green-900/50 backdrop-blur-sm rounded-full px-3 py-1 mb-2 transition-all hover:bg-green-900/70'
        )}
        aria-label={`Player ${player.username} ranked ${player.rank}`}
      >
        <div className="flex items-center gap-1">
          <div>{getRankIcon(player.rank)}</div>

          <Avatar className="h-14 w-14">
            <AvatarImage src={player.avatarUrl} alt={player.username} />
            <AvatarFallback>{getInitial(player.username)}</AvatarFallback>
          </Avatar>

          <div className="text-white text-sm">{player.username}</div>
        </div>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="absolute left-1/2 -translate-x-1/2 text-white/70 text-xs">
              Response time: {player.responseTime} seconds
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-slate-900 text-white p-2 rounded text-xs"
              side="top"
            >
              Average response time
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div className="text-yellow-500 font-medium text-sm">
              {player.points} points
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-slate-900 text-white p-2 rounded text-xs"
              side="top"
            >
              Total points earned
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </div>
    </Tooltip.Provider>
  );
}
