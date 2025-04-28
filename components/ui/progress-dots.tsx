import { cn } from "@/lib/utils"

interface ProgressDotsProps {
  total: number
  current: number
  className?: string
}

export function ProgressDots({ total, current, className }: ProgressDotsProps) {
  return (
    <div className={cn("flex gap-2", className)}>
      {[...Array(total)].map((_, i) => (
        <div
          key={i}
          className={cn("w-8 h-8 rounded-full", i === current - 1 ? "bg-gray-600" : "bg-gray-800")}
          aria-current={i === current - 1 ? "step" : undefined}
        />
      ))}
    </div>
  )
}
