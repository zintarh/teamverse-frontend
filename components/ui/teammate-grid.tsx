"use client"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

interface Teammate {
  id: string
  name: string
  avatar: string
}

interface TeammateGridProps {
  teammates: Teammate[]
  selectedTeammate: string | null
  onSelect: (id: string) => void
}

export function TeammateGrid({ teammates, selectedTeammate, onSelect }: TeammateGridProps) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {teammates.map((teammate) => (
        <div
          key={teammate.id}
          className={cn(
            "flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all",
            selectedTeammate === teammate.id ? "bg-white" : "hover:bg-black/40",
          )}
          onClick={() => onSelect(teammate.id)}
          aria-selected={selectedTeammate === teammate.id}
          role="button"
        >
          <Avatar className="w-12 h-12 mb-2">
            <AvatarImage src={teammate.avatar || "/placeholder.svg"} alt={teammate.name} />
            <AvatarFallback>{teammate.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <span className={cn("text-xs font-medium", selectedTeammate === teammate.id ? "text-black" : "text-white")}>
            {teammate.name}
          </span>
        </div>
      ))}
    </div>
  )
}
