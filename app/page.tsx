import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#02012b] w-full h-screen">
      <nav className="p-6">
        <div>
          <Image src="/logo.svg" alt="logo" width={250} height={150} />
        </div>
      </nav>
    </div>
  );
}
