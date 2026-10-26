"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import iem from "@/assets/sponsers/iem.png";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const sponsorCategories = {
  // "VENUE PARTNER": [iem],
  "SPONSORS": [],
  "GOLD SPONSOR": [],
  "SILVER SPONSOR": [],
  "BRONZE SPONSORS": [],
  "SPECIAL SPONSORS": [],
  "COMMUNITY PARTNERS": [],
};

const Sponsers = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("SPONSORS");
  const scrollerRef = useRef(null);
  const h1SponserRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const categoryRefs = useRef([]);
  const topPSRef = useRef(null);
  const topSubRef = useRef(null);

  useEffect(() => {
    const imagesContainer = imagesContainerRef.current;
    gsap.set(imagesContainer, { xPercent: 0 });
    const animation = gsap.to(imagesContainer, {
      xPercent: -100,
      duration: 10,
      ease: "none",
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1SponserRef.current,
        start: "top 90%",
        end: "bottom 60%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    tl.fromTo(
      topPSRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        topSubRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        h1SponserRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        categoryRefs.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );
  });

  return (
    <div
      id="sponsers"
      className="h-auto px-4 md:px-14 lg:px-28 py-14 flex flex-col items-center text-center"
    >
      {" "}
      <p
        ref={topPSRef}
        className="text-base text-[#eb4b19] mb-10 font-semibold"
      >
        SPONSORS
      </p>
      <div className="bg-[#1A1A1A] w-full rounded-3xl">
        <p
          ref={topSubRef}
          className="text-white text-opacity-90 text-base md:text-lg mt-10 px-2 md:px-12 mb-4"
        >
          BSides Kolkata is proud to partner with industry-leading sponsors who
          share our commitment to advancing cybersecurity knowledge and
          innovation. Our sponsors play a vital role in making this event a
          reality, enabling us to create a platform for learning, networking,
          and exploration.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-2/5 flex flex-col gap-4 pl-3 md:pl-14 pr-4 py-10">
            <h1
              ref={h1SponserRef}
              className="text-3xl text-start text-white font-semibold mb-5 font-[family-name:var(--font-protestG-regular)]"
            >
              Our <span className="text-[#eb4b19]">Sponsor</span> and Partners
            </h1>
            {Object.keys(sponsorCategories).map((category, index) => (
              <p
                ref={(el) => (categoryRefs.current[index] = el)}
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`cursor-pointer text-nowrap text-[#ffffff] py-2 px-4 rounded-full border self-start border-[#ffffff] transition-all duration-300 ${
                  selectedCategory === category ? "bg-[#eb4b19]" : ""
                }`}
              >
                {category}
              </p>
            ))}
          </div>
          <>
            {sponsorCategories[selectedCategory].length > 0 ? (
              <div
                ref={scrollerRef}
                className="w-full md:w-3/5 h-full flex items-center justify-center m-0 md:m-8 overflow-hidden rounded-3xl"
              >
                {/* add this for scroller: ref={imagesContainerRef} */}
                <div className="flex gap-4 w-max py-4">
                  {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`${selectedCategory} Sponsor`}
                      className="w-40 h-40 md:h-auto object-cover rounded-xl"
                    />
                  ))}
                  {/* {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={`${index}-duplicate`}
                      src={image}
                      alt={`${selectedCategory} Sponsor Duplicate`}
                      className="w-80 h-40 md:h-auto object-cover rounded-3xl"
                    />
                  ))}
                   {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={`${index}-duplicate`}
                      src={image}
                      alt={`${selectedCategory} Sponsor Duplicate`}
                      className="w-80 h-40 md:h-auto object-cover rounded-3xl"
                    />
                  ))}
                   {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={`${index}-duplicate`}
                      src={image}
                      alt={`${selectedCategory} Sponsor Duplicate`}
                      className="w-80 h-40 md:h-auto object-cover rounded-3xl"
                    />
                  ))}
                   {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={`${index}-duplicate`}
                      src={image}
                      alt={`${selectedCategory} Sponsor Duplicate`}
                      className="w-80 h-40 md:h-auto object-cover rounded-3xl"
                    />
                  ))}
                   {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={`${index}-duplicate`}
                      src={image}
                      alt={`${selectedCategory} Sponsor Duplicate`}
                      className="w-80 h-40 md:h-auto object-cover rounded-3xl"
                    />
                  ))}
                  {sponsorCategories[selectedCategory].map((image, index) => (
                    <Image
                      key={`${index}-duplicate`}
                      src={image}
                      alt={`${selectedCategory} Sponsor Duplicate`}
                      className="w-80 h-40 md:h-auto object-cover rounded-3xl"
                    />
                  ))} */}
                </div>
              </div>
            ) : (
              <p className=" flex-grow text-white text-opacity-70 text-xl text-center mb-7">
                Coming soon...
              </p>
            )}
          </>
        </div>
      </div>      
      <Link href="/sponser-us" className="bg-primarybgimage w-fit mt-10 cursor-pointer text-white text-lg px-5 py-2 rounded-xl shadow-primaryshadow transition-shadow duration-100 ease-in-out flex items-center justify-center">
        Sponser Us
      </Link>
    </div>
  );
};

export default Sponsers;
