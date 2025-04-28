import { RoundIndicator } from "./round-indicator"
import { Timer } from "./timer"
import { PositionIndicator } from "./position-indicator"
import { PointsCounter } from "./points-counter"

interface GameStatsBarProps {
  timer: string
  round: number
  totalRounds: number
  position: string
  points: number
}

export function GameStatsBar({ timer, round, totalRounds, position, points }: GameStatsBarProps) {
  return (
    <div className="w-full flex justify-between mt-8 mb-6 text-sm">
      <Timer time={timer} />
      <RoundIndicator current={round} total={totalRounds} />
      <PositionIndicator position={position} />
      <PointsCounter points={points} />
    </div>
  )
}
