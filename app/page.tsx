import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#02012b] w-full h-screen">
      <nav className="p-6 md:p-8  flex justify-between">
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
      <div className="text-center pb-6 px-8">
        <h1 className="text-7xl sm:text-5xl">
          How&apos;s the sky looking today ?
        </h1>
      </div>
      <div className="p-6 pt-3 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
        <input
          type="text"
          placeholder="Search for a place"
          className="px-4 py-3 w-full sm:w-[400px] rounded-md bg-slate-800 "
        />
        <button className="px-5 py-3  bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
}
