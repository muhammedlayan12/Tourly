"use client"



import Image from "next/image";
import logo from "../images/logo.svg";
import { useState } from "react";

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


  return (
    <div>
        <nav className="cursor-pointer p-2 flex justify-around text-white sm:justify-evenly items-center content-center sticky top-0 bg-blue-ncs font-poppins">
            <div className="block lg:hidden font-semibold text-2xl" id="humburger" onClick={toggleMenu}>
            &#9776;
            </div>
            <div className="img">
                <Image src={logo} alt="logo" className="w-[30vmin] sm:w-full"/>
            </div>
            <ul className="hidden lg:flex text-white">
    <li className="m-[1.3vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Home</li>
    <li className="m-[1.3vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Packages</li>
    <li className="m-[1.3vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Destination</li>
    <li className="m-[1.3vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Gallery</li>
    <li className="m-[1.3vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Contact</li>
</ul>

            <button className="hidden sm:block text-md pt-2 pb-2 pl-6 pr-6 rounded-r-3xl rounded-l-3xl bg-bright-navy-blue transition-all duration-700 hover:bg-yale-blue">Book Now</button>
        </nav>

        <div className={`fixed top-0 left-0 h-full bg-white text-black z-50 items-center w-[250px] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="text-white absolute top-10 right-8 font-semibold cursor-pointer" onClick={toggleMenu}>
            &#10006;
            </div>
        <ul className="flex flex-col absolute top-[25%] gap-10 left-8">
    <li onClick={toggleMenu} className="m-[1vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Home</li>
    <li onClick={toggleMenu} className="m-[1vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Packages</li>
    <li onClick={toggleMenu} className="m-[1vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Destination</li>
    <li onClick={toggleMenu} className="m-[1vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Gallery</li>
    <li onClick={toggleMenu} className="m-[1vmin] transition-all duration-700 hover:text-gunmetal text-sm font-[500] tracking-[2px] uppercase">Contact</li>
</ul>
        </div>
    </div>
  )
}

export default Navbar;