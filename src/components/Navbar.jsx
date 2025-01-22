import React from "react";
import logo from "../assets/dark1.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import LanguageSwitcher from "./MultipleLanguage";
const Navbar = () => {
  return (
    <>
      <nav className="  mb-20 flex items-center justify-between py-6 ">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2  w-20 lg:w-[200px]" src={logo} alt="logo" />
        </div>
        <div className="flex m-8 items-center justify-center gap-4 text-2xl ">
          <FaLinkedin />
          <FaGithub />
          <FaFacebook />
          <FaInstagram />
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
