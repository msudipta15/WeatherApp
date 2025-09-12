// utils/dateUtils.ts

/**
 * Normalize a date string to the start of the hour.
 * Example: "2025-09-12T17:15" -> "2025-09-12T17:00:00.000Z"
 */
export function normalizeToHour(dateString: string): Date {
  const d = new Date(dateString);
  d.setMinutes(0, 0, 0);
  return d;
}

/**
 * Normalize a date string to the start of the day.
 * Example: "2025-09-12T17:15" -> "2025-09-12T00:00:00.000Z"
 */
export function normalizeToDay(dateString: string): Date {
  const d = new Date(dateString);
  d.setHours(0, 0, 0, 0);
  return d;
}
