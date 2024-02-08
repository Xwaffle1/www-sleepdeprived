"use client";

import { Carousel } from "@material-tailwind/react";

export default function ScrollingCarousel() {
  return (
    <Carousel
      autoplay
      autoplayDelay={5000}
      loop={true}
    //   transition={{ duration: 1 }}
      className="w-full bg-black h-[calc(100%_-_40px)]"
      placeholder={""}
    >
      <div className="flex flex-col md:flex-row w-full h-full">
        <img
          src="/slide1-a.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover"
        />
        <img
          src="/slide1-b.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover"
        />
      </div>
      <img
        src="/slide2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <div className="flex flex-col md:flex-row w-full h-full">
        <img
          src="/slide3-a.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover"
        />
        <img
          src="/slide3-b.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover object-top"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <img
          src="/slide4-a.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover origin-bottom"
        />
        <img
          src="/slide4-b.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover object-top"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full h-full">
        <img
          src="/slide5-a.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover object-top"
        />
        <img
          src="/slide5-b.jpg"
          alt="image 1"
          className="h-1/2 md:h-full w-full md:w-1/2 object-cover"
        />
      </div>
    </Carousel>
  );
}
