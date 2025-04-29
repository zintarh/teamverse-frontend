import { OnboardingStep } from "./types";

export const ONBOARDING_STEPS: OnboardingStep[] = [
    {
        id: 'team-type',
        title: 'Let\'s set the vibe',
        subtitle: 'Before we drop you into your teamverse, help us understand your crew',
        question: "What kind of team are you building for?",
        choice: "(select one)",
    },
    {
        id: 'personal-goal',
        title: 'What\'s your goal',
        subtitle: 'Pick what matters the most to you',
        question: "What's your team reason for using Teamverse?",
    },
    {
        id: 'team-goal',
        title: 'What\'s your team goal',
        subtitle: 'Pick what matters the most to your team',
        question: "What's your main reason for using Teamverse?",
    },
    {
        id: 'team-size',
        title: 'Squad size ?',
        subtitle: 'Just enough context to match your vibe',
        question: "How many people are on your team?",
        choice: "(select one)",
    },
    {
        id: 'name',
        title: 'Name your universe',
        subtitle: 'This will be your team\'s space - what should we call it?',
    },
    {
        id: 'island-theme',
    },
    {
      id: 'welcome',
    },
    
    
  ];
  
  export const TEAM_SIZES = [
    '0-5',
    '6-10',
    '11-20',
    '21-30',
    '30+',
  ];
  
  export const TEAM_GOALS = [
    'Build stronger team culture',
    'Make work more playful',
    'Run games and icebreakers',
    'Improve connection between teammates',
    'Explore a more engaging workspace',
  ];
  
  export const PERSONAL_GOALS = [
    'Meet new people and connect',
    'Play games and unwind after work',
    'Test platform for my future team',
    'Just out of curiosity',
    'Other reasons',
  ];
  
  export const TEAM_TYPES = [
    'A remote start up',
    'A hybrid team',
    'A virtual event or community',
    'An education or learning group',
    'I guess it\'s just me',
  ];
  
  export const ISLAND_THEMES = [
    'Tropical Paradise',
    'Desert Island',
    'Volcanic Island',
    'Arctic Island',
    'Lush Jungle',
  ];
  