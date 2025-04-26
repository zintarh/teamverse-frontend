// App.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeScreen from "../components/HomeScreen"
export default function MapInterface() {
  const [messages, setMessages] = useState([
    {
      name: 'zintarh',
      avatar: '/avatars/1.png',
      text: "Hello guys, please lets brainstorm ideas for our new project. It's been 4 daysssssss already, we can game afterwards.",
      time: '4:30 PM',
    },
  ]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* <div className="relative h-full w-full">
        <Image
          src="/background/bg5.png"
          alt="Map Background"
          fill
          className="object-fit bg-center"
        />

        <div className="absolute top-[20%] left-[12%] flex flex-col items-center space-y-1">
          <div className="h-10 w-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <span className="text-xs text-white bg-black bg-opacity-60 px-2 py-0.5 rounded-full">
            Hut
          </span>
        </div>

        <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 p-4 rounded-xl text-white w-56">
          <p className="text-sm mb-2">Leaderboard</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/avatars/1.png"
                alt="User 1"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm">30 pts</span>
            </div>
            <span className="text-xs">1ST</span>
          </div>
        </div>

        <div className="absolute top-6 left-[50%] transform -translate-x-1/2 flex items-center gap-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full">
          <Image
            src="/avatars/1.png"
            alt="Zee"
            width={20}
            height={20}
            className="rounded-full "
          />
          <span>zeetheexplorer</span>
        </div>
      </div> */}
<HomeScreen/>
      {/* <Sidebar title="Office Space">
        <div>Hello world</div>
      </Sidebar> */}
    </div>
  );
}
