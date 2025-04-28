"use client"

import React from 'react';
import { useOnboardingStore } from './lib/store';
import { Button } from './Button';
import { GlassCard } from './Glass';
import { 
  TEAM_SIZES, 
  TEAM_GOALS, 
  PERSONAL_GOALS, 
  TEAM_TYPES,
  ISLAND_THEMES 
} from './lib/constants';

// Welcome Step

export const WelcomeStep: React.FC = () => {
    const { teamData, updateTeamData, nextStep } = useOnboardingStore();
  
    return (
      <div className="relative min-h-screen w-[80%] mx-auto mt-44 lg:mt-20 overflow-hidden flex flex-col lg:flex-row lg:justify-between space-y-8 lg:space-y-0">

          <div className="flex flex-col w-full lg:w-[45%]">
              <h2 className="text-white text-2xl md:text-3xl font-bold">Your teamspace has been created</h2>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Let's bring your team onboard with you.
              </p>
              <div className="flex items-center mt-3">
                <div className="w-10 h-10 rounded-full bg-gray-600 opacity-90"></div> {/* Darker first circle */}
                <div className="w-10 h-10 rounded-full bg-gray-400 opacity-60 -ml-2"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 opacity-60 -ml-2"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 opacity-60 -ml-2"></div>
                <div className="w-10 h-10 rounded-full bg-gray-400 opacity-60 -ml-2"></div> {/* Last circle */}
              </div>
            </div>
  
            {/* Email Input + Buttons */}
            <div className="space-y-4 w-full lg:w-[45%]">
              <input 
                type="email"
                placeholder="Enter team members email"
                value={teamData.email}
                onChange={(e) => updateTeamData({ email: e.target.value })}
                className="w-full bg-white/20 text-white placeholder-gray-300 rounded-md p-5 backdrop-blur-md outline-none"
              />
  
              <div className="grid grid-cols-2 gap-4">
                <Button variant="tertiary" className="w-full bg-black/70 text-white hover:bg-black" size='lg'>
                  Copy invite link
                </Button>
                <Button 
                  variant="primary" 
                  size='lg'
                  className="w-full bg-white text-black hover:bg-gray-200"
                  onClick={() => {
                    console.log('Form submitted:', { ...teamData });
                    // window.location.href = '/';
                  }}
                >
                  Proceed
                </Button>
              </div>
            </div>
  
          </div>
    );
  };

// Island Theme Step
export const IslandThemeStep: React.FC = () => {
    const { teamData, updateTeamData, nextStep, prevStep } = useOnboardingStore();
    
    return (
      <div className="relative h-[80vh] w-[90%] mx-auto">        
        {/* Main content positioned in middle of screen */}
        <GlassCard className="flex flex-col items-center justify-center z-10 p-6 space-y-6">
            <div className='w-full text-left'>
                <h2 className="text-white text-xl font-medium mb-2">Choose island template</h2>
                <p className="text-white/80 text-sm">
                    Select the background island theme of your office. You can change this later
                </p>
            </div>
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Left panel */}
            <GlassCard className='w-full h-full'>
            </GlassCard>

            
            <div className='p-6'>
                {/* Office information section */}
                <div className="mb-6">
                    <h3 className="mb-3 font-medium text-white text-lg">Office information</h3>
                    <div className="text-white mb-1 flex items-center">
                        <p className='flex-1'>{"Teamverse.app/spaces/" + teamData.teamName}</p>
                        <p>{teamData.teamSize}</p>
                    </div>
                   
                </div>
                
                {/* Island themes section */}
                <div>
                    <h3 className="text-white/80 text-sm mb-3">Island themes</h3>
                    <div className="grid grid-cols-2 gap-2">
                    {/* Three purple selected themes in top-left positions */}
                    <GlassCard 
                        selected={true} 
                        onClick={() => updateTeamData({ islandTheme: 'theme1' })}
                        className="h-24"
                    />
                    <GlassCard 
                        selected={true} 
                        onClick={() => updateTeamData({ islandTheme: 'theme2' })}
                        className="h-24"
                    />
                    <GlassCard 
                        selected={true} 
                        onClick={() => updateTeamData({ islandTheme: 'theme3' })}
                        className="h-24"
                    />
                    
                    {/* Three unselected themes */}
                    <GlassCard 
                        selected={false} 
                        onClick={() => updateTeamData({ islandTheme: 'theme4' })}
                        className="h-24"
                    />
                    </div>
                </div>
            </div>
            
          </div>
          <div className="w-full flex justify-between">
            <Button variant="tertiary" onClick={prevStep} className="flex items-center" size='lg'>
                Back
            </Button>
            <Button
                variant="primary"
                size='lg'
                onClick={nextStep}
                disabled={!teamData.islandTheme}
            >
                Confirm template
            </Button>
        </div>
        </GlassCard>
      </div>
    );
  };
  

// Name Step
export const NameStep: React.FC = () => {
  const { teamData, updateTeamData, nextStep } = useOnboardingStore();
  
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <input 
          type="text"
          placeholder="Teamverse.app/spaces"
          value={teamData.teamName}
          onChange={(e) => updateTeamData({ teamName: e.target.value })}
          className="w-full bg-white/10 border border-white/20 outline-none rounded-lg p-6 text-white placeholder-gray-100"
        />
      </div>
      
      <Button 
        variant="primary" 
        size='lg'
        className="w-full"
        onClick={nextStep}
        disabled={!teamData.teamName.trim()}
      >
        Create my teamverse
      </Button>
    </div>
  );
};

// Team Size Step
export const TeamSizeStep: React.FC = () => {
  const { teamData, updateTeamData, nextStep } = useOnboardingStore();
  
  return (
    <div className="flex flex-col space-y-3">
      {TEAM_SIZES.map((size) => (
        <GlassCard
          key={size}
          selected={teamData.teamSize === size}
          onClick={() => {
            updateTeamData({ teamSize: size });
            nextStep();
          }}
          className="py-3 text-center text-white"
        >
          {size}
        </GlassCard>
      ))}
    </div>
  );
};

// Team Goal Step
export const TeamGoalStep: React.FC = () => {
  const { teamData, updateTeamData, nextStep } = useOnboardingStore();
  
  return (
    <div className="flex flex-col space-y-3">
      
      {TEAM_GOALS.map((goal) => (
        <GlassCard
          key={goal}
          selected={teamData.teamGoal === goal}
          onClick={() => {
            updateTeamData({ teamGoal: goal });
            nextStep();
          }}
          className="py-3 text-center text-white"
        >
          {goal}
        </GlassCard>
      ))}
    </div>
  );
};

// Personal Goal Step
export const PersonalGoalStep: React.FC = () => {
  const { teamData, updateTeamData, nextStep } = useOnboardingStore();
  
  return (
    <div className="flex flex-col space-y-3">
      
      {PERSONAL_GOALS.map((goal) => (
        <GlassCard
          key={goal}
          selected={teamData.personalGoal === goal}
          onClick={() => {
            updateTeamData({ personalGoal: goal });
            nextStep();
          }}
          className="py-3 text-center text-white"
        >
          {goal}
        </GlassCard>
      ))}
    </div>
  );
};

// Team Type Step
export const TeamTypeStep: React.FC = () => {
  const { teamData, updateTeamData, nextStep } = useOnboardingStore();
  
  return (
    <div className="flex flex-col space-y-3">
      
      
      {TEAM_TYPES.map((type) => (
        <GlassCard
          key={type}
          selected={teamData.teamType === type}
          onClick={() => {
            updateTeamData({ teamType: type });
            nextStep();
          }}
          className="py-3 text-center text-white"
        >
          {type}
        </GlassCard>
      ))}
    </div>
  );
};

// Onboarding Steps Container
export const OnboardingSteps: React.FC = () => {
  const { currentStep } = useOnboardingStore();
  
  return (
    <>
      {currentStep === 0 && <TeamTypeStep />}
      {currentStep === 1 && <PersonalGoalStep />}
      {currentStep === 2 && <TeamGoalStep />}
      {currentStep === 3 && <TeamSizeStep />}
      {currentStep === 4 && <NameStep/>}
      {currentStep === 5 && <IslandThemeStep />}
      {currentStep === 6 && <WelcomeStep />}
    </>
  );
};