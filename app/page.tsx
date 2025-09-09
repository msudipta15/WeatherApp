import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#02012b] w-full h-screen px-8 sm:px-32">
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
      <div className="py-6 px-2 sm:p-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <input
          type="text"
          placeholder="Search for a place"
          className="px-4 py-4 w-full sm:w-[600px] rounded-md bg-slate-800 "
        />
        <button className="px-5 py-3  bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
          Search
        </button>
      </div>
      <div className="py-6 px-2 sm:p-8">
        <div>
          <div>
            <div className="relative">
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
                width={900}
              />
              <div className="absolute inset-0 p-6 flex flex-col sm:flex-row justify-center items-center sm:justify-start ">
                <span>
                  <h1 className="text-2xl sm:text-4xl">Berlin,Germany</h1>
                  <p>Tuesday, Aug 5, 2025</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
