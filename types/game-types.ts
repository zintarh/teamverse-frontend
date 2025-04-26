export interface TeamMember {
  id: string
  name: string
  avatar: string
}

export interface GameState {
  round: number
  totalRounds: number
  position: string
  points: number
  timer: string
  selectedTeammate: string | null
  isMysteryPlayer: boolean
}
