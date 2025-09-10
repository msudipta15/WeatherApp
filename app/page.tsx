import { DayCard } from "@/components/daycards";
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
        <div>
          <div className="sm:w-[1000px] ">
            <div className="relative ">
              <img
                src="bg-today-small.svg"
                alt="img"
                width={900}
                className="block sm:hidden"
              />
              <img
                src="bg-today-large.svg"
                alt="img2"
                className="hidden sm:block"
                width={1000}
              />
              <div className="absolute inset-0 p-6 gap-4 sm:p-12 flex flex-col sm:flex-row  justify-center items-center sm:justify-between ">
                <span>
                  <h1 className="text-3xl sm:text-4xl pb-2">Berlin,Germany</h1>
                  <p className="text-center sm:text-start">
                    Tuesday, Aug 5, 2025
                  </p>
                </span>
                <span className="flex items-center pr-10 sm:pr-0">
                  <img src="icon-sunny.webp" alt="sunny" width={130} />
                  <h1 className="text-8xl italic">68</h1>
                </span>
              </div>
            </div>
            <div className="pt-10 pb-6 sm:pb-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-12 ">
              <WeatherCard title={"Feels like"} value={"64"} />
              <WeatherCard title={"Humidity"} value={"46"} />
              <WeatherCard title={"Wind"} value={"9 mph"} />
              <WeatherCard title={"Percipitation"} value={"0 in"} />
            </div>
            <div>
              <p className="text-xl sm:text-2xl">Daily Forecast</p>
            </div>
            <div className="pt-10 pb-16 ">
              <DayCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
