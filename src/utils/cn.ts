import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import type { ClassValue } from "clsx";

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
