"use client"

import { Button } from "./button"

interface HeaderActionsProps {
  onJoinGame: () => void
  onConnectWallet: () => void
}

export function HeaderActions({ onJoinGame, onConnectWallet }: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-3">
      <Button
        variant="secondary"
        className="rounded-full bg-teal-500 text-white hover:bg-teal-600"
        onClick={onJoinGame}
      >
        Join game
      </Button>
      <Button
        variant="outline"
        className="rounded-full bg-transparent border border-white text-white hover:bg-white/10"
        onClick={onConnectWallet}
      >
        Connect wallet
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="2" />
          <path d="M16 12h.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </Button>
    </div>
  )
}
