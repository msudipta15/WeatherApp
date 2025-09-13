export function getHour(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true, // gives "3 PM"
  });
}
