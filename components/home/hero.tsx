import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center">
      <div className="absolute inset-0 z-0 ">
        <Image
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          alt="Modern home exterior"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            {
              "Discover a place you'll love to live. Browse through our curated selection of premium properties."
            }
          </p>

          {/* <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
             <SearchFilters /> 
          </div> */}
        </div>
      </div>
    </section>
  );
}
