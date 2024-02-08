"use client"

import { sendEvent } from "./Posthog";

export default function ClientShopNow() {
    return (
        <a onClick={() => {
            sendEvent("Shop Now Clicked");
          }} href="https://www.etsy.com/shop/IAmSleepDeprived?ref=sleepdeprived.app" className="bg-red-600 hover:bg-red-700 rounded-md p-2 text-white hover:text-gray-300 font-bold">
            shop now
          </a>
    )
}