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
  try {
    const geo_result = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`
    );

    if (!geo_result.ok) {
      throw new Error("Error fetching the location data");
    }

    const geo_data = await geo_result.json();

    if (!geo_data.results || geo_data.results.length === 0) {
      return { error: true, message: "Location not found !" };
    }
    const { latitude, longitude, name, country } = geo_data.results[0];

    const weather_response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,windspeed_10m,weathercode&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto&temperature_unit=${units.temperature_unit}&windspeed_unit=${units.wind_speed_unit}&precipitation_unit=${units.precipitation_unit}`
    );

    if (!weather_response.ok) {
      throw new Error("Error fetching the weather info");
    }

    const weather_data = await weather_response.json();

    console.log(geo_data);

    return { weather_data, country, name };
  } catch (error) {
    console.log(error);
    return { error: true, message: "Server error !" };
  }
}
