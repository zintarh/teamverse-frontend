"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { ClueDisplay } from "./clue-display"
import { ResultMessage } from "./result-message"

interface MysteryClueProps {
  clue: string
  teammateAvatar?: string
  teammateName?: string
  showStatus?: "win" | "lose" | null
  isMysteryPlayer?: boolean
  onReset?: () => void
}

export function MysteryClue({
  clue,
  teammateAvatar,
  teammateName,
  showStatus,
  isMysteryPlayer = false,
  onReset = () => {},
}: MysteryClueProps) {
  return (
    <div className="w-full max-w-md flex flex-col items-center">
      {/* Show avatar for result flows */}
      {teammateAvatar && (
        <Avatar className="w-16 h-16 mb-6">
          <AvatarImage src={teammateAvatar || "/placeholder.svg"} alt={teammateName || "Mystery teammate"} />
          <AvatarFallback>{teammateName?.substring(0, 2) || "MT"}</AvatarFallback>
        </Avatar>
      )}

      {/* Clue text */}
      <ClueDisplay clue={clue} />

      {/* Additional message for mystery player */}
      {isMysteryPlayer && <p className="text-gray-400 mb-6">You are the mystery player, stay mysterious</p>}

      {/* Result message */}
      {showStatus && <ResultMessage result={showStatus} onReset={onReset} />}
    </div>
  )
}
