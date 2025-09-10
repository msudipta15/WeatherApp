export function DayCard() {
  return (
    <div className=" w-[120px] h-[200px] rounded-2xl bg-[#25253f] px-6 py-4 flex flex-col justify-between  ">
      <div>
        <p className="text-xl  text-center">Tue</p>
      </div>
      <div>
        <img src="icon-rain.webp" alt="rain" />
      </div>
      <div className="flex justify-between text-lg font-bold">
        <p>68</p>
        <p className="text-[#a3a3ac]">57</p>
      </div>
    </div>
  );
}
