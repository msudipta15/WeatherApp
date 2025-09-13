"use client";
import { getweatherdata } from "@/actions/getweatherdata";
import { DayCard } from "@/components/daycards";
import { HeroCard } from "@/components/herocard";
import { HourCard } from "@/components/hourcard";
import { WeatherCard } from "@/components/weathercards";
import { normalizeToHour } from "@/utils/dateutils";
import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherData = {
  current_weather: {
    temperature: number;
    time: string;
    windspeed: number;
  };
  hourly: {
    time: string[];
    apparent_temperature: number[];
    relative_humidity_2m: number[];
    precipitation: number[];
  };
  daily: {
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    time: string[];
  };
};

export default function Home() {
  const [city, setcity] = useState("kolkata");
  const [weatherdata, setweatherdata] = useState<WeatherData | null>(null);
  const [country, setcountry] = useState("India");
  const [error, seterror] = useState<string | null>(null);
  const [loading, setloading] = useState(false);
  const [tempunit, settempunit] = useState<"celsius" | "fahrenheit">("celsius");
  const [windspeedunit, setwindspeedunit] = useState<"kmh" | "mph">("kmh");
  const [percipitationunit, setpercipitationunit] = useState<"mm" | "inch">(
    "mm"
  );

  async function getinfo() {
    setloading(true);
    console.log(city);
    try {
      seterror(null);
      const response = await getweatherdata({
        city,
        units: {
          temperature_unit: tempunit,
          wind_speed_unit: windspeedunit,
          precipitation_unit: percipitationunit,
        },
      });

      if (response.error) {
        seterror(response.message);
        return;
      }

      console.log(response);
      setcountry(response.country);
      setweatherdata(response.weather_data);
    } catch (error) {
      console.log(error);
      seterror("Server error");
      setweatherdata(null);
    } finally {
      setloading(false);
    }
  }

  useEffect(() => {
    getinfo();
  }, []);

  const dateString = weatherdata?.current_weather.time || "";
  const date = new Date(dateString);
  const formatted_date = date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  // Find current temp , windspeed
  let current_temp = null;
  const current_temp_float = weatherdata?.current_weather.temperature || "";
  current_temp = current_temp_float ? Math.round(current_temp_float) : null;

  const windspeed = weatherdata?.current_weather.windspeed || "";

  // Find current feels , humidity , percipitation value
  const current_date = weatherdata?.current_weather.time || "";
  const normalized_date = normalizeToHour(current_date);
  const index = weatherdata?.hourly.time.findIndex(
    (t: string) => normalizeToHour(t).getTime() === normalized_date.getTime()
  );
  let feels_like = null;
  let humidty_value = null;
  let percipitation = null;

  if (typeof index === "number" && index != -1) {
    const current_feels_value = weatherdata?.hourly.apparent_temperature[index];
    feels_like =
      current_feels_value !== undefined
        ? Math.round(current_feels_value)
        : null;

    humidty_value = weatherdata?.hourly.relative_humidity_2m[index];
    percipitation = weatherdata?.hourly.precipitation[index];
  }

  // Find current humidity

  return (
    <div className="bg-[#02012b] w-full min-h-screen px-8 sm:px-24">
      <nav className="py-6 px-2 md:p-8  flex justify-between">
        <div>
          <Image
            src="/logo.svg"
            alt="logo"
            width={250}
            height={150}
            className="w-40 h-auto sm:w-48 md:w-60"
          />
        </div>
        <button>Select</button>
      </nav>
      <div className="text-center py-6 px-2 sm:px-8">
        <h1 className="text-7xl sm:text-6xl">
          How&apos;s the sky looking today ?
        </h1>
      </div>
      <div className="py-6 px-2 sm:p-8  flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <input
          type="text"
          placeholder="Search for a place"
          className="px-4 py-4 w-full sm:w-[600px] rounded-md bg-[#25253f] "
          onChange={(e) => setcity(e.target.value)}
        />
        <button
          onClick={() => getinfo()}
          className="px-7 py-3  bg-blue-500 rounded-3xl cursor-pointer hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      <div className="py-6 px-2 sm:p-8">
        <div className="sm:flex sm:gap-6 sm:items-stretch sm:h-[1000px] ">
          <div className="sm:w-[1000px] ">
            <HeroCard
              city={city}
              country={country}
              temperature={current_temp}
              date={formatted_date}
              unit={tempunit === "celsius" ? "C" : "F"}
            />
            <div className="pt-10 pb-6 sm:pb-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-12 ">
              <WeatherCard
                title={"Feels like"}
                value={feels_like}
                suffix={"°"}
              />
              <WeatherCard
                title={"Humidity"}
                value={humidty_value}
                suffix={"%"}
              />
              <WeatherCard
                title={"Wind"}
                value={windspeed}
                suffix={windspeedunit === "kmh" ? "km/h" : "m/h"}
              />
              <WeatherCard
                title={"Percipitation"}
                value={percipitation}
                suffix={percipitationunit}
              />
            </div>
            <div>
              <p className="text-xl sm:text-2xl">Daily Forecast</p>
            </div>
            <div className="pt-10 pb-16 grid grid-cols-3 md:grid-cols-7  gap-6">
              <DayCard />
              <DayCard />
              <DayCard />
              <DayCard />
              <DayCard />
              <DayCard />
              <DayCard />
            </div>
          </div>
          <div className=" flex-1 h-[860px] bg-[#25253f] p-6 rounded-2xl flex flex-col   ">
            <div className="flex justify-between mb-6">
              <p className="text-2xl font-bold">Hourly forecast</p>
              <select name="day" id="">
                day
              </select>
            </div>
            <div className="flex-1 overflow-y-auto">
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
              <HourCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
