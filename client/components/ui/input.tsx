"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, helperText, id, ...props }, ref) => {
    const inputId = React.useId()
    const finalId = id || inputId

    return (
      <div className="space-y-2 w-full">
        {label && (
            <label htmlFor={finalId} className="block text-sm font-medium text-[#A0A0B0] mb-1">
            {label}
            </label>
          )}
          <input
            id={finalId}
            type={type}
            className={cn(
            "w-full bg-[#A6A0BB]/[.45] text-white border border-[#2A2A35] rounded-md px-4 py-2.5",
            "placeholder:text-[#A6A0BB]",
            "focus:outline-none focus:ring-1 focus:ring-[#8866FF] focus:border-[#8866FF]",
            "transition-colors duration-200",
            "shadow-[0_2px_4px_rgba(0,0,0,0.1)_inset]",
            error && "border-[#EF4444] focus:ring-[#EF4444] focus:border-[#EF4444]",
            className,
            )}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `${finalId}-error` : helperText ? `${finalId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${finalId}-error`} className="text-sm text-[#EF4444] mt-1">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${finalId}-helper`} className="text-sm text-[#A0A0B0] mt-1">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input }

