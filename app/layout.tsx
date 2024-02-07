import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/16/solid";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const title = "Sleep Deprived by M3";
const description = "I'm tired a lot. This look sick embroidered on stuff. Buy my stuff, or steal my logo. I don't really care.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "https://www.sleepdeprived.shop/",
    images: [
      {
        url: "https://www.sleepdeprived.shop/all%20hats.jpg",
        alt: "Sleep Deprived Hats",
      },
    ],
  },
  twitter: {
    title: title,
    description: description,
    images: {
      url: "https://www.sleepdeprived.shop/all%20hats.jpg",
      alt: "Sleep Deprived Hats",
    }
  },
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
        <div className="w-1/3 h-1/2 bg-black rounded-b-md rounded-r-none z-40 text-white flex items-center px-4 pr-0 md:pr-4 gap-2">
          <MapPinIcon  className="w-6 h-6"/>
          <p className="text-xs md:text-lg font-semibold">Jackson, MI</p>
        </div>
        <div className="flex w-1/3 justify-center bg-black rounded-b-md z-40 overflow-hidden">
          <div className="flex justify-center relative w-full bg-black">
            <img className="w-auto bg-black rounded-b-md" src="/logo.png" alt="logo" />
          </div>
        </div>
        <div className="w-1/3 h-1/2 bg-black rounded-b-md rounded-l-none flex items-center justify-end px-4 z-100">
          <a href="https://www.etsy.com/shop/IAmSleepDeprived?ref=sleepdeprived.app" className="bg-red-600 hover:bg-red-700 rounded-md p-2 text-white hover:text-gray-300 font-bold">
            Shop Now
          </a>
        </div>
      </div>
      <div className="w-full h-8">

      </div>
      {children}
      </body>
    </html>
  );
}
