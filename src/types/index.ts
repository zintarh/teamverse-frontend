export interface Activity {
  id: number
  user: {
    name: string
    avatar: string
  }
  image: string
  description: string
  timestamp: string
  liked: boolean
  tab?: string 
} 