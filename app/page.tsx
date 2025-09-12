"use client";
import { getweatherdata } from "@/actions/getweatherdata";
import { DayCard } from "@/components/daycards";
import { HeroCard } from "@/components/herocard";
import { HourCard } from "@/components/hourcard";
import { WeatherCard } from "@/components/weathercards";
import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherData = {
  current_weather: {
    temperature: number;
    time: string;
  };
  hourly: {
    time: string[];
    apparent_temperature: number[];
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

  async function getinfo() {
    setloading(true);
    console.log(city);
    try {
      seterror(null);
      const response = await getweatherdata({
        city,
        units: {
          temperature_unit: "celsius",
          wind_speed_unit: "kmh",
          precipitation_unit: "mm",
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
  const current_temp = weatherdata?.current_weather.temperature || "";
  const current_time = weatherdata?.current_weather.time || "";
  let feels_like = null;
  const index = weatherdata?.hourly.time.indexOf(current_time) || "";
  console.log(index);

  if (typeof index === "number" && index !== -1) {
    feels_like = weatherdata?.hourly.apparent_temperature[index] || "";
  }

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
              unit="C"
            />
            <div className="pt-10 pb-6 sm:pb-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-12 ">
              <WeatherCard title={"Feels like"} value={feels_like} />
              <WeatherCard title={"Humidity"} value={"46"} />
              <WeatherCard title={"Wind"} value={"9 mph"} />
              <WeatherCard title={"Percipitation"} value={"0 in"} />
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
