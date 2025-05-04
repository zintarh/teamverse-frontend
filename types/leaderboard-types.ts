export interface Player {
  id: string;
  rank: number;
  username: string;
  avatarUrl: string;
  responseTime: number;
  points: number;
}

export type GameMode = '2 Truths & A Lie' | 'Mystery player' | 'Custom game';
