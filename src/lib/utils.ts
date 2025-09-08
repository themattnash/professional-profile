import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Safely open external links in a new tab
export function openExternalLink(url: string): void {
  window.open(url, '_blank', 'noopener,noreferrer');
}
