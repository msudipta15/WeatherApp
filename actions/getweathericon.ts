export function getweathericon(code: number): string {
  const iconmap: Record<number, string> = {
    0: "/icon-sunny.webp", // Clear sky
    1: "/icon-sunny.webp", // Mainly clear
    2: "/icon-overcast.webp", // Partly cloudy
    3: "/icon-overcast.webp", // Overcast
    45: "/icon-fog.webp", // Fog
    48: "/icon-fog.webp", // Depositing rime fog
    51: "/icon-drizzle.webp", // Light drizzle
    53: "/icon-drizzle.webp", // Moderate drizzle
    55: "/icon-drizzle.webp", // Dense drizzle
    61: "/icon-rain.webp", // Slight rain
    63: "/icon-rain.webp", // Moderate rain
    65: "/icon-rain.webp", // Heavy rain
    71: "/icon-snow.webp", // Slight snow fall
    73: "/icon-snow.webp", // Moderate snow fall
    75: "/icon-snow.webp", // Heavy snow fall
    77: "/icon-snow.webp", // Snow grains
    80: "/icon-rain.webp", // Rain showers: slight
    81: "/icon-rain.webp", // Rain showers: moderate
    82: "/icon-rain.webp", // Rain showers: violent
    85: "/icon-rain.webp", // Snow showers slight
    86: "/icon-rain.webp", // Snow showers heavy
    95: "/icon-storm.webp", // Thunderstorm slight/moderate
    96: "/icon-storm.webp", // Thunderstorm with hail
    99: "/icon-storm.webp", // Thunderstorm with heavy hail
  };

  return iconmap[code];
}
