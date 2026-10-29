"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import linkedIn from "../assets/icons/Vector (2).svg";
import facebook from "../assets/icons/Vector (3).svg";
import call from "../assets/icons/call.svg";
import location from "../assets/icons/location_on.svg";
import send from "../assets/icons/send.svg";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isSidebarOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [isSidebarOpen]);

  const handleOutsideClick = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      {/* Main Navbar */}
      <div className="text-white mx-5 md:mx-12 lg:mx-40">
        <div className="hidden md:flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/company/bsideskolkata"
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <Image
                src={linkedIn}
                className="h-4 w-4 object-contain"
                alt="BSIDE LINKEDIN"
              />
            </Link>
            <Link
              href="https://fb.me/bsideskolkata"
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <Image
                src={facebook}
                className="h-4 w-4 object-contain"
                alt="BSIDE FACEBOOK"
              />
            </Link>
            <Link
              href="https://x.com/BsidesKolkata"
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <FaXTwitter className="text-white" />
            </Link>
            <Link
              href="https://www.instagram.com/bsides_kolkata/"
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <FiInstagram className="text-white" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            {/* <div className="flex items-center gap-1">
              <Image
                src={call}
                className="h-4 w-4 object-contain"
                alt="BSIDE PHONE"
              />
              <p className="text-[#E6E6E682] font-medium text-sm">
                +123-456-7890
              </p>
            </div> */}
            <div className="flex items-center gap-1">
              <Image
                src={send}
                className="h-4 w-4 object-contain"
                alt="BSIDE EMAIL"
              />
              <p className="text-[#E6E6E682] font-medium text-sm">
                contact@bsideskolkata.in
              </p>
            </div>
            {/* <div className="flex items-center gap-1">
              <Image
                src={location}
                className="h-4 w-4 object-contain"
                alt="BSIDE LOCATION"
              />
              <p className="text-[#E6E6E682] font-medium text-sm">
                IEM Kolkata
              </p>
            </div> */}
          </div>
        </div>

        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <Image
              src={logo}
              alt="BSIDE LOGO"
              className="h-12 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8">
            <Link
              href="#hero"
              className="text-white text-sm lg:text-base font-medium nav-link"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-white text-sm lg:text-base font-medium nav-link"
              onClick={() => scrollToSection("about")}
            >
              About
            </Link>
            <Link
              href="#schedule"
              className="text-white text-sm lg:text-base font-medium nav-link"
            >
              Schedule
            </Link>
            <Link
              href="/"
              className="text-white text-sm lg:text-base font-medium nav-link"
              onClick={() => scrollToSection("sponsers")}
            >
              Sponsors
            </Link>
            {/*<Link
              href="/ctf"
              className="text-white text-sm lg:text-base font-medium nav-link"
            >
              CTF
            </Link>*/}
             <Link
              href="/cfp"
              className="text-white text-sm lg:text-base font-medium nav-link"
            >
              CFP
            </Link>
            {/* <Link
              href="/village"
              className="text-white text-sm lg:text-base font-medium nav-link"
            >
              Hacking Village
            </Link> */}
            <Link
              href="/join-as-volunteer"
              className="text-white font-medium text-sm lg:text-base nav-link"
            >
              Join Us
            </Link>
          </div>

          <Link
            href="/"
            className="bg-primarybgimage hidden text-lg md:flex text-white px-6 py-2 rounded-full shadow-primaryshadow transition-shadow duration-100 ease-in-out items-center justify-center"
          >
            Registration will start soon
          </Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full w-64 bg-black backdrop-blur-md bg-opacity-70 text-white transform translate-x-full z-50"
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsSidebarOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col gap-6 p-6">
          <Link
            href="#hero"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            About
          </Link>
          <Link
              href="#schedule"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            Schedule
          </Link>
          <Link
            href="#sponsers"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            href="/ctf"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            CTF
          </Link>
           <Link
            href="/cfp"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            CFP
          </Link>
          {/* <Link
              href="/village"
              className="text-white text-sm lg:text-base font-medium nav-link"
            >
              Hacking Village
            </Link> */}
          <Link
            href="/join-as-volunteer"
            className="text-white text-base font-medium nav-link"
            onClick={() => setIsSidebarOpen(false)}
          >
            Join Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
