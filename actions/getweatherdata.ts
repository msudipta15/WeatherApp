export async function getweatherdata({ city }: { city: string }) {
  const result = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`
  );

  const data = await result.json();
  return data;
}
