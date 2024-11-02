import Image from "next/image";
import photo1 from "../images/gallery-1.jpg";
import photo2 from "../images/gallery-2.jpg";
import photo3 from "../images/gallery-3.jpg";
import photo4 from "../images/gallery-4.jpg";
import photo5 from "../images/gallery-5.jpg";

function Gallery() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-40 text-center m-auto">
        <span className="text-yale-blue text-md text-montserrat uppercase tracking-widest">Photo Gallery</span>
        <h2 className="text-gunmetal text-[1em] sm:text-[1.2em] md:text-[2em] lg:text-[2.5em] xl:text-[3em] font-extrabold font-montserrat uppercase">
          Photos From Travellers
        </h2>

        <p className="text-[#838383] mt-4 text-[0.7em] sm:text-[0.9em] md:text-[1em] lg:text-[1.1em] xl:text-[1.1em] leading-relaxed sm:leading-loose">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.<br />
          Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-20 px-5 gap-7">
          <div className="flex flex-col items-center gap-5 rounded-[40px] overflow-hidden">
            <Image 
              src={photo1} 
              alt="" 
              className="w-full h-[35vh] object-cover rounded-[40px] transition-all duration-500 transform hover:scale-105" 
            />
            <Image 
              src={photo2} 
              alt="" 
              className="w-full h-[35vh] object-cover rounded-[40px] transition-all duration-500 transform hover:scale-105" 
            />
          </div>

          <div className="flex items-center justify-center rounded-[40px] overflow-hidden">
            <Image 
              src={photo3} 
              alt="" 
              className="w-full h-[72vh] object-cover rounded-[40px] transition-all duration-500 transform hover:scale-105" 
            />
          </div>

          <div className="flex flex-col items-center gap-5 rounded-[40px] overflow-hidden">
            <Image 
              src={photo4} 
              alt="Photo 4" 
              className="w-full h-[35vh] object-cover rounded-[40px] transition-all duration-500 transform hover:scale-105" 
            />
            <Image 
              src={photo5} 
              alt="Photo 5" 
              className="w-full h-[35vh] object-cover rounded-[40px] transition-all duration-500 transform hover:scale-105" 
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
