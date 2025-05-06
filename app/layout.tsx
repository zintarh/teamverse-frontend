"use client";
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import React from 'react';
import { DarkModeProvider } from '../components/DarkModeContext';
import './styles/tailwind.css';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}>
      <body style={{ fontFamily: 'var(--font-space-grotesk)' }}>
        <DarkModeProvider>
          <div
            className="flex flex-col min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300"
            style={{
              backgroundImage: "url('/image.svg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {children}
          </div>
        </DarkModeProvider>
        <Toaster />
      </body>
    </html>
  );
};

export default Layout;
