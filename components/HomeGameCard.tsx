import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HomeGameCardProps {
  image: string;
  title: string;
  to: string;
}

export default function HomeGameCard({ image, title, to }: HomeGameCardProps) {
  return (
    <Link href={to}>
      <div className=" rounded-2xl shadow-md  transition-transform">
        <div className=" w-[217px] h-[217px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-fit"
          />
        </div>
        <div className=" text-white font-semibold text-xl">
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
}
