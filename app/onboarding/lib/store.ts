// Store for managing state (lib/store.ts)
import { create } from 'zustand';
import { TeamData } from './types';

interface OnboardingStore {
  currentStep: number;
  teamData: TeamData;
  updateTeamData: (data: Partial<TeamData>) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  currentStep: 0,
  teamData: {
    teamName: '',
    teamSize: '',
    teamGoal: '',
    personalGoal: '',
    teamType: '',
    islandTheme: '',
    email: '',
  },
  updateTeamData: (data: Partial<TeamData>) => 
    set((state) => ({ 
      teamData: { ...state.teamData, ...data } 
    })),
  nextStep: () => 
    set((state) => ({ 
      currentStep: state.currentStep + 1 
    })),
  prevStep: () => 
    set((state) => ({ 
      currentStep: Math.max(0, state.currentStep - 1) 
    })),
  setStep: (step: number) => 
    set({ currentStep: step }),
}));