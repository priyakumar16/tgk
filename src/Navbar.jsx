import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import hLogo from "./assets/logo-black.svg";
import fLogo from "./assets/flogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full md:fixed bg-white dark:bg-[#242424] z-20  ">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div>
          <img
            className="dark:hidden w-20"
            src={hLogo}
            alt="TGK"
            title="The growth kitchen"
          />
          <img
            className="dark:block hidden w-20"
            src={fLogo}
            alt="TGK"
            title="The growth kitchen"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="relative group text-[20px] hover:text-primary" >Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300  group-hover:w-full"></span>
        </a>
                        <a href="#about" className="relative group text-[20px] hover:text-primary">About Us
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300  group-hover:w-full"></span>
                        </a>
                        <a href="#services" className="relative group text-[20px] hover:text-primary">Services
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300  group-hover:w-full"></span>
                        </a> 
                        <a href="#work" className="relative group text-[20px] hover:text-primary">Our Works
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300  group-hover:w-full"></span>
                        </a>
                        <a href="#contact" className="relative group text-[20px] hover:text-primary">Contact Us
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-secondary transition-all duration-300  group-hover:w-full"></span>
                        </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#242424] shadow-lg transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-4 border-b">
          <img className="w-20" src={hLogo} alt="TGK" />
          <button
            className="text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col mt-6 space-y-6 pl-6 text-lg">
          <a href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#work" className="nav-link" onClick={() => setIsOpen(false)}>Our Works</a>
          <a href="#contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact Us</a>

        

        </nav>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          className="inset-0 bg-black/40 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
