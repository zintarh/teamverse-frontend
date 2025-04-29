import React from 'react';
import Lie from '../public/lie.svg';
import second from '../public/second.svg';
import IMG3 from '../public/IMG3.svg';
import Image from 'next/image';
export default function GameCard() {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8 ">
        <div className="flex flex-col items-center">
          <Image src={Lie} alt="2 Truths and a Lie" width={200} height={50} />
          <p className="text-white text-center text-sm mt-2">
            2 Truths and a Lie
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={second} alt="Mystery Player" width={200} height={50} />
          <p className="text-white text-center text-sm mt-2">Mystery Player</p>
        </div>

        <div className="flex flex-col items-center">
          <Image src={IMG3} alt="Custom game" width={200} height={50} />
          <p className="text-white text-center text-sm mt-2">Custom game</p>
        </div>
      </div>
    </div>
  );
}
