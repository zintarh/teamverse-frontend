// Adapted from shadcn/ui toast component
import { useState } from "react"

export type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

type Toast = ToastProps & {
  id: string
}

type ToastState = {
  toasts: Toast[]
}

export function useToast() {
  const [state, setState] = useState<ToastState>({ toasts: [] })

  const toast = ({ title, description, variant = "default" }: ToastProps) => {
    const id = Math.random().toString(36).slice(2, 9)
    const newToast = { id, title, description, variant }
    setState((prev) => ({ toasts: [...prev.toasts, newToast] }))
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setState((prev) => ({
        toasts: prev.toasts.filter((t) => t.id !== id),
      }))
    }, 5000)
  }

  const dismiss = (id: string) => {
    setState((prev) => ({
      toasts: prev.toasts.filter((t) => t.id !== id),
    }))
  }

  return {
    toast,
    dismiss,
    toasts: state.toasts,
  }
} 