export async function getweatherdata({
  city,
  units,
}: {
  city: string;
  units: {
    temperature_unit: "celsius" | "fahrenheit";
    wind_speed_unit: "kmh" | "mph";
    precipitation_unit: "mm" | "inch";
  };
}) {
  const geo_result = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`
  );

  const geo_data = await geo_result.json();
  const { latitude, longitude } = geo_data.results[0];

  const weather_response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto&temperature_unit=${units.temperature_unit}&windspeed_unit=${units.wind_speed_unit}&precipitation_unit=${units.precipitation_unit}`
  );

  const weather_data = await weather_response.json();

  return weather_data;
}
