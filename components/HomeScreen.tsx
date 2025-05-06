'use client';

import { useState, useEffect } from 'react';
import GameCard from './GameCard';
import Header from './Header';
import Layout from '../app/layout';
import StreakInfo from './StreakInfo';
import EnterInviteCode from './EnterInviteCode';
import BottomButtons from "./BottomButtons"

export default function Home() {
  

  return (
    
    <Layout >
      <Header />
      <main className="flex flex-col items-center justify-center p-4 sm:p-8  dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <EnterInviteCode />
          <section className="mt-6">
            <h2 className="text-lg font-semibold mb-4 text-white">Games</h2>
            <div className="flex gap-4">
              <GameCard
               
                imageSrc="/lie.svg" 
                 title="2 Truths and a Lie"
              />
              <GameCard
               
                imageSrc="/second.svg" 
                 title="Mystery Player"
              />
              <GameCard
               
                imageSrc="/IMG3.svg" 
                 title="Custom Game"
              />
            </div>
          </section>
          <StreakInfo />
          <BottomButtons />
      </main>
    </Layout>
  )
}
