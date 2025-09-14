interface hourProps {
  time: string;
  temp: number;
  icon: string;
  isLoading: boolean;
}

export function HourCard({ time, temp, icon, isLoading }: hourProps) {
  return (
    <div className="flex justify-between py-6 px-4 items-center  text-xl my-5 rounded-lg bg-[#2f2f49]">
      <div className="flex items-center gap-2">
        <img src={icon} alt="" width={50} />
        <p>{time}</p>
      </div>
      <div>{Math.round(temp)}</div>
    </div>
  );
}
