import React from 'react';
import { User } from 'lucide-react';

interface AvatarProps {
  imageUrl?: string | null;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 40 }) => {
  const dimension = `${size}px`;

  return imageUrl ? (
    <img
      src={imageUrl}
      alt="avatar"
      className="rounded-full object-cover"
      style={{ width: dimension, height: dimension }}
    />
  ) : (
    <div
      className="flex items-center justify-center rounded-full bg-[#1F1F1F] text-white"
      style={{ width: dimension, height: dimension }}
    ></div>
  );
};

export default Avatar;
