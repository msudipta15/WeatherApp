import React from "react";
import { LoaderOne } from "@/components/ui/loader";

interface proptype {
  city: string;
  country: string;
  date: string;
  temperature: number | string | null;
  unit: string;
  icon: string;
  isLoading: boolean;
}

export function HeroCard({
  city,
  country,
  date,
  temperature,
  unit,
  icon,
  isLoading,
}: proptype) {
  return (
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
      <div className="absolute inset-0 p-6  flex  justify-center items-center ">
        {isLoading ? (
          <div>
            <span>
              <LoaderOne />
            </span>
            <span className="text-center text-2xl font-medium">Loading...</span>
          </div>
        ) : (
          <div className="absolute inset-0 p-6 gap-4 sm:p-12 flex flex-col sm:flex-row  justify-center items-center sm:justify-between">
            <span>
              <h1 className="text-3xl sm:text-4xl pb-2">
                {city}, {country}
              </h1>
              <p className="text-center sm:text-start">{date}</p>
            </span>
            <span className="flex items-center pr-10 sm:pr-0">
              <img src={icon} alt="sunny" width={130} />
              <h1 className="text-8xl italic">
                {temperature}°{unit}
              </h1>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
