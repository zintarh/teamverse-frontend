import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

interface UserInfoProps {
  username: string
  avatar: string
}

export function UserInfo({ username, avatar }: UserInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <Avatar className="w-10 h-10 border-2 border-white">
        <AvatarImage src={avatar || "/placeholder.svg"} alt={username} />
        <AvatarFallback>{username.substring(0, 2)}</AvatarFallback>
      </Avatar>
      <span className="font-medium text-white">{username}</span>
    </div>
  )
}
