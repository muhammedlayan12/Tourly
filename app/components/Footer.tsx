import Image from "next/image";
import logo from "../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope,faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
        <footer className="flex flex-wrap justify-center text-center gap-8 lg:gap-16 h-full w-full bg-gunmetal py-20 px-10">
            <div className="flex flex-col gap-7  text-center ha:text-start">
                <div className="text-center ha:text-start justify-center">
                    <Image src={logo} alt="" className="text-center ha:text-start w-[45%] lg:w-[50%]"/>
                </div>
                <p className="text-white lg:tracking-[0.3px] tracking-[0.2px] text-[0.8em] max-w-[320px] lg:text-[0.9em] lg:max-w-[350px]">Urna ratione ante harum provident, eleifend, vulputate molestiae proin fringilla, praesentium magna conubia at perferendis, pretium, aenean aut ultrices.</p>
            </div>
            <div className="flex flex-col gap-7  text-center ha:text-start">
                <h3 className="text-white lg:text-[1.5em] text-[1.2em] tracking-[1px] font-semibold">Contact Us</h3>
                <p className="text-white lg:tracking-[0.3px] tracking-[0.2px] lg:text-[0.9em] text-[0.8em] max-w-[200px]">Feel free to contact and reach us !!</p>
                <div className="flex flex-col gap-2">
                    <span className="flex gap-2 text-white font-poppins"><FontAwesomeIcon icon={faPhone} className="w-[1.5vmin] text-white"/> +01 (123) 3289 70</span>
                    <span className="flex gap-2 text-white font-poppins"><FontAwesomeIcon icon={faEnvelope} className="w-[1.5vmin] text-white"/> info.tourly.com</span>
                    <span className="flex gap-2 text-white font-poppins"><FontAwesomeIcon icon={faMapMarkerAlt} className="w-[1.5vmin] text-white"/> 3146 Koontz, California</span>
                </div>
            </div>
            <div className="flex flex-col gap-7  text-center ha:text-start">
                <p className="text-white tracking-[0.3px] text-[0.9em] max-w-[350px]">Subscribe our newsletter for more update & news !!</p>
                <form action="" className="flex flex-col gap-3">
                    <input type="text" placeholder="Enter Your Email" className="py-3 px-15 text-[#838383] text-center rounded-full"/>
                    <input type="submit" value="Subscribe" className="py-3 px-15 text-center text-white tracking-wider uppercase border rounded-full transition-all duration-500  hover:bg-white hover:text-gunmetal"/>

                </form>
            </div>
        </footer>
    </div>
  )
}

export default Footer;