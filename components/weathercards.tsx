export function WeatherCard({
  title,
  value,
  suffix,
}: {
  title: string;
  value: number | string | null;
  suffix?: string | null;
}) {
  return (
    <div className=" h-[150px] rounded-2xl bg-[#25253f] px-6 py-4 ">
      <span>
        <p className="text-xl text-[#a3a3ac]">{title}</p>
        <p className="text-4xl mt-8">
          {value} {suffix}
        </p>
      </span>
    </div>
  );
}
