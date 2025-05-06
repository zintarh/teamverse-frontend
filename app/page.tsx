'use client';

import Image from 'next/image';
import './globals.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import HomeScreen from "../components/HomeScreen";
import Shell from '@/components/Shell';
import { Input } from '@/components/ui/input';
import Button from './ui/Button';
import HomeGameCard from '@/components/HomeGameCard';

export default function Page() {
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
      <HomeScreen />

      <Shell>
        <div className="flex max-w-2xl mx-auto gap-x-5 bg-[#1919191A] backdrop-blur-2xl items-center justify-center px-5 py-3 border-transparent rounded-3xl">
          <Input
            className=" flex-1 max-w-[70%] !outline-none placeholder:text-white !text-xl placeholder:text-xl !text-white !border-none !ring-0 focus:!outline-none focus:!ring-0 focus:!border-none focus:!ring-offset-0 !shadow-none focus:!shadow-none"
            placeholder="Enter invite code"
          />

          <Button className="bg-white text-black px-5 min-w-[120px] shrink-0 py-5">
            Join game
          </Button>
        </div>

        <div className="py-10">
          <div className="grid grid-cols-3 gap-4">
            <HomeGameCard
              title="Two truth and a lie"
              image="/two-truth.png"
              to="/two-truth-lie"
            />
            <HomeGameCard
              title="Mystery"
              image="/mystery.png"
              to="/mystery-teammate"
            />
            <HomeGameCard
              title="Custom Game"
              image="/custom-game.png"
              to=""
            />
          </div>
        </div>
      </Shell>
    </div>
  );
}
