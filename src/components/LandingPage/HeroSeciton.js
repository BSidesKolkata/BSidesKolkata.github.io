"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import heroImage from "../../assets/hero-image.avif";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const oneLinerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        // scrollTrigger: {
        //   trigger: titleRef.current,
        //   start: "top 80%",
        //   end: "top 50%",
        //   scrub: true,
        // },
      }
    );
    gsap.fromTo(
      oneLinerRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      buttonRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div id="home" className="h-[90vh] md:h-screen w-full relative mt-7">
      <Image
        ref={imageRef}
        src={heroImage}
        alt="HERO SECTION BSIDE"
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-white/20">
        <div className="flex flex-col items-center justify-center h-full gap-4 px-5 md:px-48">
          <div className="glitch-wrapper text-white opacity-0" ref={titleRef}>
            <div
              className="glitch text-3xl md:text-5xl lg:text-7xl font-[family-name:var(--font-protestG-regular)]"
              data-glitch="BSides KOLKATA SECURITY CONFERENCE"
            >
              BSides KOLKATA SECURITY CONFERENCE
            </div>
          </div>
          <p
            ref={oneLinerRef}
            className="text-white text-base md:text-2xl font-semibold opacity-0 text-center"
          >
            Be a part of Eastern India&apos;s Largest InfoSec Conference
          </p>
          <p
            ref={textRef}
            className="text-white text-base md:text-2xl opacity-0 text-center"
          >
             Place &#38; Date: University of Calcutta | Dec 04th &#38; 05th, 2026 
            
          </p>
          <Link
            ref={buttonRef}
            href="/"
            className="bg-primarybgimage opacity-0 mt-8 text-white text-sm md:text-lg px-5 py-3 rounded-full  shadow-primaryshadow transition-shadow duration-100 ease-in-out flex items-center justify-center"
          >
            Registration will start soon
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
