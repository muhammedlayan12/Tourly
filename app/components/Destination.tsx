import Image from "next/image";
import place1 from "../images/popular-1.jpg";
import place2 from "../images/popular-2.jpg";
import place3 from "../images/popular-3.jpg";

function Destination() {
  return (
    <div>
        <section className="pt-20 m-auto flex flex-col text-center justify-center mt-20">
            <span className="text-yale-blue text-md text-montserrat uppercase tracking-widest">Uncover Place</span>
            <h2 className="text-gunmetal text-[1em] sm:text-[1.2em] md:text-[2em] lg:text-[2.5em] xl:text-[3em] font-extrabold font-montserrat uppercase">
    Popular destination
</h2>

            <p className="text-[#838383] mt-4 text-[0.7em] sm:text-[0.9em] md:text-[1em] lg:text-[1.1em] xl:text-[1.1em] leading-relaxed sm:leading-loose">
    Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.<br />
    Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
</p>

            <div className="flex flex-wrap justify-center gap-20 mt-10 px-4">
                <div className="relative rounded-[50px] overflow-hidden w-[40vh] h-[45vh]">
                    <Image src={place1} alt="" className="rounded-[50px] w-full h-full transition-all duration-500 hover:scale-110" />
                    <div className="absolute sm:top-[60%] top-[50%] left-[10%] text-start bg-white p-4 rounded-[20px] w-[80%]">
                        <span className="text-blue-ncs font-normal tracking-wider text-[1em] uppercase font-poppins">Italy</span>
                        <h3 className="font-bold uppercase tracking-[1.5px] font-montserrat text-[1.2em] sm:text-2xl text-gunmetal">San MIGUEL</h3>
                        <p className="text-[#838383] text-[0.8em] sm:text-[0.9em]">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
                        <div className="absolute top-[-12%] left-[40%] sm:left-[50%] flex items-center mt-2 sm:w-[41%] sm:w-[40%] pr-4 pl-2  rounded-full bg-blue-ncs">
                             
                            <span className=" text-white text-xl">★★★★★</span>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-[50px] overflow-hidden w-[40vh] h-[45vh]">
                    <Image src={place2} alt="" className="rounded-[50px] w-full h-full transition-all duration-500 hover:scale-110" />
                    <div className="absolute sm:top-[60%] top-[50%] left-[10%] text-start bg-white p-4 rounded-[20px] w-[80%]">
                        <span className="text-blue-ncs font-normal tracking-wider text-[1em] uppercase font-poppins">Dubai</span>
                        <h3 className="font-bold uppercase tracking-[1.5px] font-montserrat text-[1.2em] sm:text-2xl text-gunmetal">Burj Khalifa</h3>
                        <p className="text-[#838383] text-[0.9em]">Fusce hic augue velit wisi ips quibusdam pariatur, iusto.</p>
                        <div className="absolute top-[-12%] left-[40%] sm:left-[50%] flex items-center mt-2 sm:w-[41%] sm:w-[40%] pr-4 pl-2  rounded-full bg-blue-ncs">
                             
                            <span className=" text-white text-xl">★★★★★</span>
                        </div>
                    </div>
                </div>

                <div className="relative rounded-[50px] overflow-hidden w-[40vh] h-[45vh]">
                    <Image src={place3} alt="" className="rounded-[50px] w-full h-full transition-all duration-500 hover:scale-110" />
                    <div className="absolute sm:top-[60%] top-[50%] left-[10%] text-start bg-white p-4 rounded-[20px] w-[80%]">
                        <span className="text-blue-ncs font-normal tracking-wider text-[1em] uppercase font-poppins">Japan</span>
                        <h3 className="font-bold uppercase tracking-[1.5px] font-montserrat text-[1.2em] sm:text-2xl text-gunmetal">Kyoto Temple</h3>
                        <p className="text-[#838383] text-[0.9em]">Fusce hic augue velit wisi quibusdam pariatur, iusto.</p>
                        <div className="absolute top-[-12%] left-[40%] sm:left-[50%] flex items-center mt-2 sm:w-[41%] sm:w-[40%] pr-4 pl-2  rounded-full bg-blue-ncs">
                             
                            <span className=" text-white text-xl">★★★★★</span>
                        </div>
                    </div>
                </div>

            </div>
            <button className="m-auto bg-bright-navy-blue tracking-wider text-white uppercase text-sm rounded-full items-center h-[3.2em] transition-all duration-500 hover:bg-yale-blue text-center mt-20 md:mt-10  w-[13em]">More Destination</button>
        </section>
    </div>
  )
}

export default Destination;
