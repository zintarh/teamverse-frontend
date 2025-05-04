'use client';
import React from 'react';
import { Progress } from './Progress';
import { Button } from './Button';
import { ONBOARDING_STEPS } from './lib/constants';
import { useOnboardingStore } from './lib/store';

interface OnboardingLayoutProps {
  children: React.ReactNode;
}

export const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
}) => {
  const { currentStep, prevStep } = useOnboardingStore();
  const step = ONBOARDING_STEPS[currentStep];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/beach-bg.svg')] bg-cover bg-center relative overflow-hidden">
      <div className="flex flex-col space-y-2 justify-left absolute top-10 left-10">
        {/* <div className="bg-black w-18 h-18 rounded-full"></div> */}
        {currentStep > 0 && currentStep != 5 && (
          <Button
            variant="ghost"
            onClick={prevStep}
            className="flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back
          </Button>
        )}
      </div>
      <div
        className={`container min-h-[80vh] ${currentStep === 5 || currentStep === 6 ? 'w-full' : 'max-w-md lg:max-w-lg mx-auto'} px-4 -mt-10 py-8 pt-0 z-10`}
      >
        {/* Top navigation */}
        <div className="flex items-center mb-6">
          {currentStep < ONBOARDING_STEPS.length - 1 && (
            <Button
              variant="ghost"
              className={`${currentStep === 5 ? 'ml-auto mt-20' : 'ml-auto'}`}
              onClick={() => useOnboardingStore.getState().nextStep()}
            >
              Skip
              {currentStep === 5 && (
                <svg
                  width="18"
                  height="12"
                  className="inline ml-2"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 6L0.999983 5.99976"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 0.999878L16.2929 5.29277C16.6262 5.6261 16.7929 5.79277 16.7929 5.99988C16.7929 6.20698 16.6262 6.37365 16.2929 6.70698L12 10.9999"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </Button>
          )}
        </div>

        {/* Progress bar */}
        {currentStep != 5 && 6 && (
          <Progress
            currentStep={currentStep}
            totalSteps={ONBOARDING_STEPS.length}
          />
        )}

        {/* Step title */}
        <div className="mt-4 mb-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-2 text-left">{step.title}</h2>
          <p className="text-left">{step.subtitle}</p>
          <p className="mt-4">{step.question}</p>
          <p className="text-sm">{step.choice}</p>
        </div>

        {/* Step content */}
        <div className="">{children}</div>
      </div>
    </div>
  );
};
