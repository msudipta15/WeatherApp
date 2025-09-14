interface dayProps {
  day: string;
  max_temp: number;
  min_temp: number;
  icon: string;
  isLoading: boolean;
}

export function DayCard({
  day,
  max_temp,
  min_temp,
  icon,
  isLoading,
}: dayProps) {
  return (
    <div className="  sm:w-[120px] sm:h-[200px] rounded-2xl bg-[#25253f] px-6 py-4 flex flex-col justify-between  ">
      <div>
        <p className="text-xl  text-center">{day}</p>
      </div>
      <div>
        <img src={icon} alt="icon" />
      </div>
      <div className="flex justify-between text-lg font-bold">
        <p>{Math.round(max_temp)}</p>
        <p className="text-[#a3a3ac]">{Math.round(min_temp)}</p>
      </div>
    </div>
  );
}
