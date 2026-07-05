import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatVND(value: number | string | null | undefined): string {
  if (value === null || value === undefined || value === "") {
    return "0₫";
  }

  const amount = typeof value === "string" ? Number(value) : value;

  if (Number.isNaN(amount)) {
    return "0₫";
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}