import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export default function JoinGame() {
  return (
    <div>
      <Button
        variant="secondary"
        className="rounded-full bg-teal-500 text-white hover:bg-teal-600 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 h-auto"
        onClick={() => {}}
      >
        Join game
      </Button>
    </div>
  );
}
