// app/components/GameCard.tsx
import React from 'react';

interface GameCardProps {
  title: string;
  imageSrc: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, imageSrc }) => {
  return (
    <div className="relative rounded-xl overflow-hidden w-32 h-32 sm:w-40 sm:h-40">
      <img
        src={imageSrc}
        alt={title}
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute inset-0 "></div>
      <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold">
        {title}
      </div>
    </div>
  );
};

export default GameCard;