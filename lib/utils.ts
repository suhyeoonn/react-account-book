import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EXPENSE_TEXT_COLOR = "text-red-500";
export const INCOME_TEXT_COLOR = "text-blue-500";
