"use client";

import Image from "next/image";
import bgImage from "../assets/footer-bg.png";
import plane from "../assets/paper plane.png";
import Link from "next/link";
import logo from "../assets/logo.png";
import linkedIn from "../assets/icons/Vector (2).svg";
import facebook from "../assets/icons/Vector (3).svg";
import call from "../assets/icons/call.svg";
import location from "../assets/icons/location_on.svg";
import send from "../assets/icons/send.svg";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".animate-footer",
        start: "top bottom",
        end: "bottom 70%",
        scrub: 1,
      },
    });

    tl.fromTo(
      ".animate-footer",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      ".footer-content",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: "power3.out" },
      "-=0.5"
    );

    const textElements = document.querySelectorAll(".footer-text");
    textElements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="h-auto px-5 md:px-14 lg:px-28 md:pt-28 pb-3 flex flex-col">
      {/* <div className="relative rounded-3xl animate-footer">
        <Image
          src={bgImage}
          alt="FOOTER IMAGE"
          className="h-52 md:h-full w-full object-cover rounded-3xl"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row py-3 md:py-7 items-center justify-between px-3 md:px-12 lg:px-24 rounded-3xl">
          <div className="flex gap-3 items-center rounded-3xl h-full">
            <Image
              src={plane}
              alt="SEND A MESSAGE"
              className="h-16 md:h-32 w-auto object-contain rounded-3xl"
            />
            <div className="flex flex-col lg:flex-row gap-3 justify-between items-center">
              <div className="flex flex-col justify-between h-full">
                <h3 className="font-semibold text-lg md:text-3xl lg:text-4xl text-white mb-2 footer-text">
                  Have any project idea&#63;
                </h3>
                <p className="text-sm md:text-base text-[#E6E6E682] footer-text">
                  BSides Kolkata is a community driven framework for building
                  events by and for information security community members.
                </p>
              </div>
              <Link
                href="/"
                className="bg-primarybgimage w-full md:w-fit h-fit text-white text-sm md:text-lg px-8 text-nowrap md:px-14 py-2 rounded-full shadow-primaryshadow transition-shadow duration-100 ease-in-out flex items-center justify-center"
              >
                Buy Tickets
              </Link>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full flex flex-col md:flex-row gap-7 md:gap-0 mt-24 md:mt-32 footer-content">
        <div className="w-full md:w-[30%] mr-0 md:mr-12 lg:mr-24 ">
          <Link href="#hero" onClick={() => scrollToSection("home")}>
            <Image
              src={logo}
              alt="BSIDE LOGO"
              className="h-20 w-auto object-contain mb-8"
            />
          </Link>
          <p className="text-sm text-white mb-8 footer-text">
            BSides Kolkata is a community driven framework for building events
            by and for information security community members.
          </p>
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
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-2 items-start ml-0 md:ml-8 lg:ml-16 ">
          <p className="text-lg text-white font-normal mb-0 md:mb-8 footer-text">
            Overview
          </p>
          <Link
            href="#hero"
            onClick={() => scrollToSection("home")}
            className="text-sm text-[#E6E6E682] footer-text"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => scrollToSection("about")}
            className="text-sm text-[#E6E6E682] footer-text"
          >
            Security BSides Kolkata
          </Link>
          <Link
            href="#teams"
            className="text-sm text-[#E6E6E682] footer-text"
            onClick={() => scrollToSection("teams")}
          >
            Meet our Team
          </Link>
          <Link
            href="#volunteers"
            className="text-sm text-[#E6E6E682] footer-text"
            onClick={() => scrollToSection("volunteers")}
          >
            Volunteers
          </Link>
          <Link
            href="/codeofconduct"
            className="text-sm text-[#E6E6E682] footer-text"
          >
            Code of Conduct
          </Link>
          <Link href="#" className="text-sm text-[#E6E6E682] footer-text">
            Venue
          </Link>
          <Link href="#" className="text-sm text-[#E6E6E682] footer-text">
            Contact
          </Link>
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-2 items-start ml-0 md:ml-12 lg:ml-24 ">
          <p className="text-lg text-white font-normal mb-0 md:mb-8 footer-text">
            Conference
          </p>
          <Link
            href="#sponsers"
            className="text-sm text-[#E6E6E682] footer-text"
            onClick={() => scrollToSection("sponsers")}
          >
            Sponsors
          </Link>
          <Link
            href="#speakers"
            className="text-sm text-[#E6E6E682] footer-text"
          >
            Speakers
          </Link>
          <Link href="#sponsers"  onClick={() => scrollToSection("sponsers", "PARTNERS")} className="text-sm text-[#E6E6E682] footer-text">
            Partners
          </Link>
        </div>
        <div className="w-full md:w-1/5 flex flex-col gap-2 items-start ml-0 md:ml-7 lg:ml-14 ">
          <p className="text-lg text-white font-normal mb-0 md:mb-8 footer-text">
            Schedule
          </p>
          <Link href="#" className="text-sm text-[#E6E6E682] footer-text">
            Training
          </Link>
        </div>
        <div className="w-full md:w-1/5 flex-col gap-2 items-start ml-0 md:ml-50 lg:ml-20 ">
          <p className="text-lg text-white font-normal mb-0 md:mb-8 footer-text">
            Contact
          </p>
          {/* <div className="flex items-center gap-1 mb-3">
            <Image
              src={call}
              className="h-4 w-4 object-contain"
              alt="BSIDE PHONE"
            />
            <p className="text-[#E6E6E682] font-medium text-sm footer-text">
              +123-456-7890
            </p>
          </div> */}
          <div className="flex items-center gap-1 mb-3">
            <Image
              src={send}
              className="h-4 w-4 object-contain"
              alt="BSIDE PHONE"
            />
            <p className="text-[#E6E6E682] font-medium text-sm footer-text">
              contact@bsideskolkata.in
            </p>
          </div>
          {/* <div className="flex items-center gap-1 mb-3">
            <Image
              src={location}
              className="h-4 w-4 object-contain"
              alt="BSIDE PHONE"
            />
            <p className="text-[#E6E6E682] font-medium text-sm footer-text">
              IEM Kolkata
            </p>
          </div> */}
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#E6E6E682] bg-opacity-10 my-10" />
      <p className="text-center text-sm text-[#E6E6E682] ">
        © 2026 Bsides Kolkata. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
