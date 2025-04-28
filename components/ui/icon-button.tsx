import type React from "react"
import { cn } from "@/lib/utils"

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "tertiary"
}

export function IconButton({ children, variant = "primary", className, ...props }: IconButtonProps) {
  return (
    <button
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center",
        variant === "primary" && "bg-black text-white",
        variant === "secondary" && "bg-teal-500/80 text-white",
        variant === "tertiary" && "bg-white/20 text-white",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
