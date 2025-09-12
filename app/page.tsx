"use client";
import { getweatherdata } from "@/actions/getweatherdata";
import { DayCard } from "@/components/daycards";
import { HeroCard } from "@/components/herocard";
import { HourCard } from "@/components/hourcard";
import { WeatherCard } from "@/components/weathercards";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [city, setcity] = useState("kolkata");
  const [weather, setweather] = useState(null);
  const [country, setcountry] = useState(null);

  async function getinfo() {
    console.log(city);
    try {
      const response = await getweatherdata({
        city,
        units: {
          temperature_unit: "celsius",
          wind_speed_unit: "kmh",
          precipitation_unit: "mm",
        },
      });

      console.log(response);
      setcountry(response.country);
      setweather(response.weather_data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getinfo();
  }, []);

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
              city="Kolkata"
              country="India"
              temperature={43}
              date="27/09/2025"
              unit="C"
            />
            <div className="pt-10 pb-6 sm:pb-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-12 ">
              <WeatherCard title={"Feels like"} value={"64"} />
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
