import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/16/solid";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sleep Deprived by M3",
  description: "I'm tired a lot. I'm also okay at creating things. Thought this would look sick embroidered on stuff. So my wife bought me a machine. Buy my stuff, or steal my logo. I don't really care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex w-full h-32 fixed z-40">
        <div className="w-1/3 h-1/2 bg-black rounded-b-md rounded-r-none z-40 text-white flex items-center px-4 gap-2">
          <MapPinIcon  className="w-6 h-6"/>
          <p className="text-xs md:text-lg">Jackson, MI</p>
        </div>
        <div className="flex w-1/3 justify-center bg-black rounded-b-md z-40">
          <div className="flex justify-center relative w-full">
            <Image className="w-auto" src="/logo.png" alt="logo" width={100} height={100} />
          </div>
        </div>
        <div className="w-1/3 h-1/2 bg-black rounded-b-md rounded-l-none flex items-center justify-end px-4 z-100">
          <button className="bg-red-600 hover:bg-red-700 rounded-md p-2 text-white hover:text-gray-300 font-bold">
            Shop Now
          </button>
        </div>
      </div>
      <div className="w-full h-8">

      </div>
      {children}
      </body>
    </html>
  );
}
