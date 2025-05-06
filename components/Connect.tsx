import Button from '@/app/ui/Button';
import React from 'react';

export default function Connect() {
  return (
    <Button
      className="!rounded-full bg-[#1414141A] text-white md:text-lg text-sm md:px-8 py-3 flex items-center backdrop-blur"
      style={{ backdropFilter: 'blur(200px)' }}
    >
      Connect wallet
    </Button>
  );
}
