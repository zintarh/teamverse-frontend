'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { TeamMember } from '@/types/game-types';

interface UserProfileBadgeProps {
  user: TeamMember;
  className?: string;
}

export function UserProfileBadge({
  user,
  className = '',
}: UserProfileBadgeProps) {
  return (
    <div
      className={`flex items-center gap-1 sm:gap-2 bg-[#141414] rounded-full p-1 sm:p-2 ${className}`}
    >
      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white">
        <AvatarImage src={user.avatar || '/placeholder.svg'} alt={user.name} />
        <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <span className="font-medium text-white text-sm sm:text-base">
        {user.name}
      </span>
    </div>
  );
}
