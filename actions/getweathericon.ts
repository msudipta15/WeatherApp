export function getweathericon(code: number): string {
  const iconmap: Record<number, string> = {
    0: "/icon-drizzle.webp", // Clear sky
    1: "🌤️", // Mainly clear
    2: "⛅", // Partly cloudy
    3: "☁️", // Overcast
    45: "🌫️", // Fog
    48: "🌫️", // Depositing rime fog
    51: "🌦️", // Light drizzle
    53: "🌧️", // Moderate drizzle
    55: "🌧️", // Dense drizzle
    61: "🌦️", // Slight rain
    63: "🌧️", // Moderate rain
    65: "🌧️", // Heavy rain
    71: "🌨️", // Slight snow fall
    73: "🌨️", // Moderate snow fall
    75: "❄️", // Heavy snow fall
    77: "🌨️", // Snow grains
    80: "🌧️", // Rain showers: slight
    81: "🌧️", // Rain showers: moderate
    82: "⛈️", // Rain showers: violent
    85: "🌨️", // Snow showers slight
    86: "❄️", // Snow showers heavy
    95: "⛈️", // Thunderstorm slight/moderate
    96: "🌩️", // Thunderstorm with hail
    99: "🌩️", // Thunderstorm with heavy hail
  };

  return iconmap[code];
}
