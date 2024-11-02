import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUsers, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import ticket1img from "../images/packege-1.jpg";
import ticket2img from "../images/packege-2.jpg";
import ticket3img from "../images/packege-3.jpg";

function Ticket() {
  return (
    <div>
      <section className="pt-20 m-auto flex flex-col text-center justify-center mt-20">
        <span className="text-yale-blue text-md text-montserrat uppercase tracking-widest">Popular Packages</span>
        <h2 className="text-gunmetal text-[1em] sm:text-[1.2em] md:text-[2em] lg:text-[2.5em] xl:text-[3em] font-extrabold font-montserrat uppercase">
          Checkout Our Packages
        </h2>

        <p className="text-[#838383] mt-4 text-[0.7em] sm:text-[0.9em] md:text-[1em] lg:text-[1.1em] xl:text-[1.1em] leading-relaxed sm:leading-loose">
          Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum.<br />
          Vestibulum cumque laudantium. Sit ornare mollitia tenetur, aptent.
        </p>

        <div className="flex flex-col justify-center m-auto py-10 gap-10">
          <div className="flex px-2 flex-col xl:flex-row items-stretch items-center h-full w-full">
            <div className="img">
              <Image src={ticket1img} className="rounded-t-[20px] xl:rounded-l-[20px]" alt="Package image" />
            </div>
            <div className="bg-white text-center xl:text-start p-10 flex-1">
              <h3 className="mb-6 max-w-[300px] text-gunmetal font-bold text-[1.4em] xl:text-[1.6em] tracking-[1.2px] uppercase">
                Experience The Great Holiday On Beach
              </h3>
              <p className="mb-6 text-[#838383] text-[0.8em] xl:text-sm max-w-[350px]">
                Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
              </p>
              <div className="flex gap-7">
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faCalendar} className="mr-2 text-united-nations-blue w-[1.4vmin]" /> </i>7D/6N
                </h6>
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faUsers} className="mr-2 text-united-nations-blue w-[2.1vmin]" /></i> pax:10
                </h6>
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-united-nations-blue w-[1.4vmin]" /></i> Malaysia
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-[3vmin] h-full xl:w-[280px] rounded-b-[10px] xl:rounded-r-[10px] bg-united-nations-blue p-10">
              <div className="tracking-[0.8px] text-white text-[1em] font-poppins">(25 Reviews) ★★★★★</div>
              <div className="perso">
                <h3 className="font-monstrrat tracking-wide text-white text-[3em] font-bold">$750</h3>
                <span className="text-white text-[0.85em]">/ Per Person</span>
              </div>
              <button className="uppercase text-[1em] tracking-wider py-[1.5vmin] px-[1.2vmin] border text-white rounded-full">Book Now</button>
            </div>
          </div>

          <div className="flex px-2 flex-col xl:flex-row items-stretch items-center h-full w-full">
            <div className="img">
              <Image src={ticket2img} className="rounded-t-[20px] xl:rounded-l-[20px]" alt="Package image" />
            </div>
            <div className="bg-white text-center xl:text-start p-10 flex-1">
              <h3 className="mb-6 max-w-[300px] text-gunmetal font-bold text-[1.4em] xl:text-[1.6em] tracking-[1.2px] uppercase">
                Summer Holiday To The Oxolotan River
              </h3>
              <p className="mb-6 text-[#838383] text-[0.8em] xl:text-sm max-w-[350px]">
                Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
              </p>
              <div className="flex gap-7">
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faCalendar} className="mr-2 text-united-nations-blue w-[1.4vmin]" /> </i>7D/6N
                </h6>
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faUsers} className="mr-2 text-united-nations-blue w-[2.1vmin]" /></i> pax:10
                </h6>
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-united-nations-blue w-[1.4vmin]" /></i> Malaysia
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-[3vmin] h-full xl:w-[280px] rounded-b-[10px] xl:rounded-r-[10px] bg-united-nations-blue p-10">
              <div className="tracking-[0.8px] text-white text-[1em] font-poppins">(25 Reviews) ★★★★★</div>
              <div className="perso">
                <h3 className="font-monstrrat tracking-wide text-white text-[3em] font-bold">$680</h3>
                <span className="text-white text-[0.85em]">/ Per Person</span>
              </div>
              <button className="uppercase text-[1em] tracking-wider py-[1.5vmin] px-[1.2vmin] border text-white rounded-full">Book Now</button>
            </div>
          </div>

          <div className="flex px-2 flex-col xl:flex-row items-stretch items-center h-full w-full">
            <div className="img">
              <Image src={ticket3img} className="rounded-t-[20px] xl:rounded-l-[20px]" alt="Package image" />
            </div>
            <div className="bg-white text-center xl:text-start p-10 flex-1">
              <h3 className="mb-6 max-w-[300px] text-gunmetal font-bold text-[1.4em] xl:text-[1.6em] tracking-[1.2px] uppercase">
                Santorini Island&apos;s Weekend Vacation
              </h3>
              <p className="mb-6 text-[#838383] text-[0.8em] xl:text-sm max-w-[350px]">
                Laoreet, voluptatum nihil dolor esse quaerat mattis explicabo maiores, est aliquet porttitor! Eaque, cras, aspernatur.
              </p>
              <div className="flex gap-7">
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faCalendar} className="mr-2 text-united-nations-blue w-[1.4vmin]" /> </i>7D/6N
                </h6>
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faUsers} className="mr-2 text-united-nations-blue w-[2.1vmin]" /></i> pax:10
                </h6>
                <h6 className="text-[#838383] text-sm">
                  <i><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-united-nations-blue w-[1.4vmin]" /></i> Malaysia
                </h6>
              </div>
            </div>
            <div className="flex flex-col gap-[3vmin] h-full xl:w-[280px] rounded-b-[10px] xl:rounded-r-[10px] bg-united-nations-blue p-10">
              <div className="tracking-[0.8px] text-white text-[1em] font-poppins">(25 Reviews) ★★★★★</div>
              <div className="perso">
                <h3 className="font-monstrrat tracking-wide text-white text-[3em] font-bold">$850</h3>
                <span className="text-white text-[0.85em]">/ Per Person</span>
              </div>
              <button className="uppercase text-[1em] tracking-wider py-[1.5vmin] px-[1.2vmin] border text-white rounded-full">Book Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ticket;
