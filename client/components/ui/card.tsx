import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Card Component
 *
 * A container component styled to match the dark theme design.
 * Used for grouping related content with a consistent style.
 */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-[#1A1A23] rounded-lg border border-[#2A2A35] shadow-[0_4px_12px_rgba(0,0,0,0.25)]", className)}
    {...props}
  />
))
Card.displayName = "Card"

/**
 * Card Header Component
 *
 * The top section of a card, typically containing a title and description.
 */
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

/**
 * Card Title Component
 *
 * The main heading of a card.
 */
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold leading-none tracking-tight text-white", className)}
      {...props}
    />
  ),
)
CardTitle.displayName = "CardTitle"

/**
 * Card Description Component
 *
 * A secondary text element, typically used for additional context.
 */
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => <p ref={ref} className={cn("text-sm text-[#A0A0B0]", className)} {...props} />,
)
CardDescription.displayName = "CardDescription"

/**
 * Card Content Component
 *
 * The main content area of a card.
 */
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
)
CardContent.displayName = "CardContent"

/**
 * Card Footer Component
 *
 * The bottom section of a card, typically containing actions.
 */
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

