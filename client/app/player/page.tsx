// App.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

export default function MapInterface() {
  const [messages, setMessages] = useState([
    {
      name: "zintarh",
      avatar: "/avatars/1.png",
      text: "Hello guys, please lets brainstorm ideas for our new project. It's been 4 daysssssss already, we can game afterwards.",
      time: "4:30 PM",
    },
  ]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <div className="relative h-full w-full">
        <Image
          src="/background/bg3.png"
          alt="Map Background"
          fill
          className="object-fit bg-center"
        />

        <div className="absolute top-[20%] left-[12%] flex flex-col items-center space-y-1">
          <div className="h-10 w-10 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
            <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xs text-white bg-black bg-opacity-60 px-2 py-0.5 rounded-full">Hut</span>
        </div>

        <div className="absolute bottom-6 left-6 bg-black bg-opacity-60 p-4 rounded-xl text-white w-56">
          <p className="text-sm mb-2">Leaderboard</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/avatars/1.png" alt="User 1" width={24} height={24} className="rounded-full" />
              <span className="text-sm">30 pts</span>
            </div>
            <span className="text-xs">1ST</span>
          </div>
        </div>

        <div className="absolute top-6 left-[50%] transform -translate-x-1/2 flex items-center gap-2 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full">
          <Image src="/avatars/1.png" alt="Zee" width={20} height={20} className="rounded-full " />
          <span>zeetheexplorer</span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-[360px] h-full bg-neutral-900 text-white p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold mb-3">Hut</h2>

          <div className="flex space-x-2 mb-4">
            <button className="bg-white text-black text-xs px-3 py-1 rounded-full">Weekend channel</button>
            <button className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full cursor-not-allowed">Work station</button>
            <button className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-full cursor-not-allowed">Playlist</button>
          </div>

          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <Image src={msg.avatar} alt={msg.name} width={24} height={24} className="rounded-full" />
                  <p className="bg-gray-700 text-sm p-3 rounded-xl max-w-xs">{msg.text}</p>
                </div>
                <span className="text-xs text-gray-400 ml-8">{msg.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <input
            type="text"
            placeholder="Type your message here"
            className="w-full bg-neutral-800 text-white px-4 py-2 rounded-lg outline-none"
          />
          <button className="w-full mt-2 bg-white text-black font-medium py-2 rounded-lg">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
