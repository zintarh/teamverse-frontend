"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Button variants using class-variance-authority for type-safe variants
const buttonVariants = cva(
  // Base styles applied to all buttons
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-opacity-50 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Primary gradient button (red to purple) as seen in the image
        primary:
          "bg-gradient-to-r from-[#FF3366] to-[#8866FF] text-white hover:from-[#FF4477] hover:to-[#9977FF] active:from-[#E62D5B] active:to-[#7755EE] shadow-md hover:shadow-lg",

        // Secondary button - subtle background
        secondary: "bg-[#1A1A23] text-white border border-[#2A2A35] hover:bg-[#24242E]",

        // Outline button - just borders
        outline: "border border-[#2A2A35] bg-transparent text-white hover:bg-[#24242E]",

        // Ghost button - no background until hover
        ghost: "bg-transparent text-white hover:bg-[#24242E]",

        // Destructive button - for delete/cancel actions
        destructive: "bg-[#EF4444] text-white hover:bg-[#EF4444]/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 py-1 text-xs",
        lg: "h-12 px-6 py-3 text-base",
        xl: "h-14 px-8 py-4 text-lg",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

/**
 * Button Component
 *
 * A versatile button component with multiple variants and sizes.
 * The primary variant uses a gradient background as shown in the design.
 *
 * @param variant - The button style variant (primary, secondary, outline, ghost, destructive)
 * @param size - The button size (sm, default, lg, xl, icon)
 * @param fullWidth - Whether the button should take full width of its container
 * @param isLoading - Whether to show a loading spinner
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, isLoading = false, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }), "focus-visible:ring-[#8866FF]")}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

