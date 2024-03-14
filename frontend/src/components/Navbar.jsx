import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll"


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleLinkClick = () => {
    setNav(false);
  }
  

  return (
    <div className="fixed w-full h-[80x] flex justify-between items-center px-4 bg-[#14101b] text-gray-300">
      <h1 className="font-bold text-4xl">VW</h1>

      {/* menu */}
      <ul className="hidden md:flex">
        <NavLink to="/" className="hover:text-teal-600"><li>Home</li></NavLink>
        <NavLink to="/about" className="hover:text-teal-600"><li>About</li></NavLink>
        <NavLink to="/work" className="hover:text-teal-600"><li>Work</li></NavLink>
        <NavLink to="/contact" className="hover:text-teal-600"><li>Contact</li></NavLink>
        <NavLink to="/newsletter"  className="hover:text-teal-600"><li>Newsletter</li></NavLink>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <NavLink to="/" onClick={handleLinkClick} className="py-6 text-4xl"><li>Home</li></NavLink>
        <NavLink to="/about" onClick={handleLinkClick} className="py-6 text-4xl"><li>About</li></NavLink>
        <NavLink to="/work" onClick={handleLinkClick} className="py-6 text-4xl"><li>Work</li></NavLink>
        <NavLink to="/contact" onClick={handleLinkClick} className="py-6 text-4xl"><li>Contact</li></NavLink>
        <NavLink to="/newsletter" onClick={handleLinkClick} className="py-6 text-4xl"><li>Newsletter</li></NavLink>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/vivek-warkade-623866216/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/itzzvivek"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:vivekwarkade000@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;