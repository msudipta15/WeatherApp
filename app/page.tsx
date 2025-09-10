import { DayCard } from "@/components/daycards";
import { HeroCard } from "@/components/herocard";
import { WeatherCard } from "@/components/weathercards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#02012b] w-full min-h-screen px-8 sm:px-32">
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
        />
        <button className="px-7 py-3  bg-blue-500 rounded-3xl cursor-pointer hover:bg-blue-600">
          Search
        </button>
      </div>
      <div className="py-6 px-2 sm:p-8">
        <div className="sm:flex sm:gap-6 sm:items-stretch">
          <div className="sm:w-[1000px] ">
            <HeroCard />
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
          <div className=" flex-1 h-full bg-[#25253f] p-6 rounded-2xl   ">
            <div className="flex justify-between mb-8">
              <p className="text-xl font-bold">Hourly forecast</p>
              <select name="day" id="">
                day
              </select>
            </div>
            <div className="flex justify-between p-4 px-6 text-lg my-4 rounded-lg bg-[#2f2f49]">
              <div>
                <p>3 PM</p>
              </div>
              <div>68</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
