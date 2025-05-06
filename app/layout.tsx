// app/components/ClientLayout.tsx
"use client";
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
<<<<<<< HEAD
import React from 'react';
import { DarkModeProvider } from '../components/DarkModeContext';
=======
import './styles/tailwind.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

>>>>>>> 2f39bb008f34401168ab9a819f9c98058fbd8565
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});


interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body>
      <DarkModeProvider>
        <div
          className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 "
          style={{
            backgroundImage: "url('/image.svg')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {children}
        </div>
        </DarkModeProvider>
=======
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {children}
        <Toaster />
>>>>>>> 2f39bb008f34401168ab9a819f9c98058fbd8565
      </body>
    </html>
  );
};
export default Layout;