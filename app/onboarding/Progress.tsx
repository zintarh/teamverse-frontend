"use client" 
import React from 'react';

interface ProgressProps {
  currentStep: number;
  totalSteps: number;
}

export const Progress: React.FC<ProgressProps> = ({
  currentStep,
  totalSteps,
}) => {
  return (
    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
      <div
        className="h-full bg-white transition-all duration-300 ease-in-out"
        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
      />
    </div>
  );
};
