"use client"

import { useEffect } from "react"
import { cn } from "@/lib/utils"

interface ToastProps {
  title?: string
  description?: string
  variant?: "default" | "destructive"
  className?: string
  onClose?: () => void
}

export function Toast({
  title,
  description,
  variant = "default",
  className,
  onClose,
}: ToastProps) {
  // Auto close after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div
      className={cn(
        "flex w-full items-start rounded-lg border p-4 shadow-md animate-in fade-in slide-in-from-top-5 duration-300",
        variant === "default" && "bg-white text-black border-gray-200",
        variant === "destructive" && "bg-red-600 text-white border-red-600",
        className
      )}
    >
      <div className="flex-1 space-y-1">
        {title && <div className="font-medium">{title}</div>}
        {description && <div className="text-sm opacity-90">{description}</div>}
      </div>
      <button
        onClick={onClose}
        className="shrink-0 rounded-md p-1 transition-colors hover:bg-gray-100 hover:text-gray-900"
      >
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  )
}

export function Toaster() {
  // This component is meant to be used with useToast
  // It will be implemented when we create a toast provider
  return null
} 