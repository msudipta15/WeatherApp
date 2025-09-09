import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#02012b] w-full h-screen">
      <nav className="p-6 md:p-8 flex justify-between">
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
      <div className="text-center p-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl">
          How&apos;s the sky looking today ?
        </h1>
      </div>
      <div className="p-6 flex justify-center gap-4">
        <input
          type="text"
          placeholder="Search for a place"
          className="px-4 py-2 w-72 rounded-md bg-slate-800"
        />
        <button className="px-4 py-1 sm:px-5 sm:py-2 bg-blue-500 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
}
