import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class values into a single className string.
 * This utility merges Tailwind CSS classes properly, handling conflicts correctly.
 *
 * @param inputs - Class values to be combined (strings, objects, arrays, etc.)
 * @returns A merged className string
 *
 * Example usage:
 * cn("text-red-500", isActive && "bg-blue-500", ["p-4", "m-2"])
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as a currency string.
 *
 * @param value - The number to format
 * @param currency - The currency code (default: 'USD')
 * @param locale - The locale to use for formatting (default: 'en-US')
 * @returns A formatted currency string
 */
export function formatCurrency(value: number, currency = "USD", locale = "en-US"): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value)
}

/**
 * Truncates a string to a specified length and adds an ellipsis if truncated.
 *
 * @param str - The string to truncate
 * @param length - Maximum length before truncation (default: 50)
 * @returns The truncated string
 */
export function truncateString(str: string, length = 50): string {
  if (str.length <= length) return str
  return `${str.slice(0, length)}...`
}

/**
 * Generates a random ID string.
 *
 * @param length - Length of the ID (default: 8)
 * @returns A random string ID
 */
export function generateId(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length)
}

/**
 * Debounces a function call.
 *
 * @param fn - The function to debounce
 * @param delay - Delay in milliseconds (default: 300)
 * @returns A debounced function
 */
export function debounce<T extends (...args: any[]) => any>(fn: T, delay = 300): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(...args), delay)
  }
}
