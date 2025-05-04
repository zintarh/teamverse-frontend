'use client';

import { Button } from '@/components/ui/button';

interface ConnectWalletButtonProps {
  onClick: () => void;
}

export function ConnectWalletButton({ onClick }: ConnectWalletButtonProps) {
  return (
    <Button
      variant="outline"
      className="rounded-full bg-transparent border border-white text-white hover:bg-white/10 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-auto"
      onClick={onClick}
    >
      <span className="hidden sm:inline">Connect wallet</span>
      <span className="sm:hidden">Connect</span>
      <svg
        className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" />
        <path d="M16 12h.01" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </Button>
  );
}
