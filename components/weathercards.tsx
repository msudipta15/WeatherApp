export function WeatherCard({
  title,
  value,
  suffix,
  isLoading,
}: {
  title: string;
  value: number | string | null;
  suffix?: string | null;
  isLoading: boolean;
}) {
  return (
    <div className=" h-[150px] rounded-2xl bg-[#25253f] px-6 py-4 ">
      <span>
        <p className="text-xl text-[#a3a3ac]">{title}</p>
        {isLoading ? (
          <p className="text-3xl sm:text-4xl mt-5 sm:mt-8">-</p>
        ) : (
          <p className="text-3xl sm:text-4xl mt-5 sm:mt-8">
            {value} {suffix}
          </p>
        )}
      </span>
    </div>
  );
}
