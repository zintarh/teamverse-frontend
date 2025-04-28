export interface TeamData {
    teamName: string;
    teamSize: string;
    teamGoal: string;
    personalGoal: string;
    teamType: string;
    islandTheme: string;
    email: string;
  }
  
  export type OnboardingStep = {
    id: string;
    title?: string;
    subtitle?: string;
    isOptional?: boolean;
    question?: string;
    choice?: string;
  };