import Image from "next/image";
import heroimg from "../images/hero-banner.jpg";

function Hero() {
  return (
    <div>
      <section className="relative h-screen w-full flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={heroimg}
            alt="Hero Banner"
            className="object-cover"
            layout="fill"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="gap-10 relative z-10 text-white text-center p-8 flex flex-col items-center justify-center">
          <h1
            className="font-montserrat 
               text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
               max-w-xl 
               tracking-wide 
        font-bold mb-4"
          >
            Journey to explore the world
          </h1>
          <p className="text-base sm:text-[0.7em] md:text-[1em] lg:text-sm xl:text-md mb-8 font-poppins text-white max-w-2xl">
  Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit
  class corporis nostra rem quos voluptatibus habitant? Fames, vivamus
  minim nemo enim, gravida lobortis quasi, eum.
</p>

 <div className="button">
 <button className="mr-4 px-6 sm:px-8 rounded-full py-[0.7em] transition-all duration-500 hover:bg-blue-ncs bg-bright-navy-blue rounded text-white text-sm sm:text-base mb-2">
  Learn More
</button>
<button className="px-6 sm:px-8 rounded-full py-[0.7em] bg-none border rounded text-white text-sm sm:text-base transition-all duration-500 hover:bg-gunmetal">
  Book Now
</button>
 </div>

          </div>
        
      </section>
    </div>
  );
}

export default Hero;
