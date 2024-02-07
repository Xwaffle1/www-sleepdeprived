import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <img src="/all hats.jpg" className="w-full h-screen object-cover" />
      </div>
      {/* <div className="carousel w-full bg-red-200">
        <div id="slide1" className="carousel-item relative w-full block">
          <div className="flex justify-center w-full min-h-screen">
            <img src="/slide0.jpg" className="w-auto max-h-screen" />
            <img src="/slide2.jpg" className="w-auto max-h-screen" />
            <img src="/t shirt bucket.jpg" className="w-auto max-h-screen" />
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
          <div className="absolute flex justify-center w-full h-full top-3/4">
            <div className="flex flex-col">
              <p className="font-bold text-white text-8xl shadow-xl">
                no rest.
              </p>
            </div>
          </div>
        </div> */}
        {/* <div id="slide2" className="carousel-item relative w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex justify-center gap-10 w-full max-h-screen">
              <img src="/slide1.jpg" className="w-auto max-h-screen" />
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="/slide2.jpg" className="w-auto max-h-screen" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a className="btn btn-circle">❮</a>
            <a className="btn btn-circle">❯</a>
          </div>
        </div> */}
      {/* </div> */}
      <section className=" px-4">
        <h2 className="text-2xl font-bold text-center my-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
          <a href="" className="flex flex-col items-center text-center group">
            <img
              alt="Product 1"
              className="w-full h-auto object-cover rounded-t-xl max-h-72 p-2 bg-white"
              src="/Shirt Stock.jpg"
            />
            <div className="bg-gray-600 group-hover:bg-red-600 w-full rounded-b-xl p-2">
              <h3 className="text-white  text-lg font-semibold">embroidered t-shirt</h3>
              <p className="text-gray-300 ">$25.00</p>
            </div>
          </a>
          <a href="" className="flex flex-col items-center text-center group">
            <img
              alt="Product 1"
              className="w-full h-auto max-h-72 object-cover rounded-t-xl p-2 bg-white"
              src="/Beanie Stock.jpg"
            />
            <div className="bg-gray-600 group-hover:bg-red-600 w-full rounded-b-xl p-2">
              <h3 className="text-white text-lg font-semibold">embroidered beanie</h3>
              <p className="text-gray-300">$20.00</p>
            </div>
          </a>
          <a href="" className="group flex flex-col items-center text-center">
            <img
              alt="Product 1"
              className="w-full h-auto object-cover rounded-t-xl max-h-72 p-2 bg-white"
              src="/sweater stock.jpg"
            />
            <div className="bg-gray-600 group-hover:bg-red-600 w-full rounded-b-xl p-2">
              <h3 className="text-white text-lg font-semibold">embroidered sweater</h3>
              <p className="text-gray-300">$20.00</p>
            </div>
          </a>
          <a href="" className="group flex flex-col items-center text-center h-full">
            <img
              alt="Product 1"
              className="w-full h-auto max-h-72 object-scale-down rounded-t-xl p-2 bg-white"
              src="/Hoodie Stock.jpg"
            />
            <div className="bg-gray-600 group-hover:bg-red-600 w-full rounded-b-xl p-2">
              <h3 className="text-white text-lg font-semibold">embroidered hoodie</h3>
              <p className="text-gray-300">$20.00</p>
            </div>
          </a>
          <a href="" className="group flex flex-col items-center text-center h-full">
            <img
              alt="Product 1"
              className="w-full h-auto object-cover rounded-t-xl max-h-72 p-2 bg-white"
              src="/hat stock.jpg"
            />
            <div className="bg-gray-600 group-hover:bg-red-600 w-full rounded-b-xl p-2">
              <h3 className="text-white text-lg font-semibold">embroidered hat</h3>
              <p className="text-gray-300">$20.00</p>
            </div>
          </a>
          <a href="" className="flex flex-col items-center text-center h-full group">
            <img
              alt="Product 1"
              className="w-full object-fit rounded-t-xl h-72 p-2 bg-white"
              src="/bucket stock.jpg"
            />
            <div className="bg-gray-600 group-hover:bg-red-600 w-full rounded-b-xl p-2">
              <h3 className="text-white text-lg font-semibold">embroidered bucket hat</h3>
              <p className="text-gray-300">$20.00</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
