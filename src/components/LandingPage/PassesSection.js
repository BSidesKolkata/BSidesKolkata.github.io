"use client";

import React, { useRef, useEffect } from "react";
import PassesCard from "../PassesCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PassesSection = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const cardRefs = useRef([]);
  const topPPRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1Ref.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    // Animate heading and paragraph
    tl.fromTo(
      topPPRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        h1Ref.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        pRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    // Animate Passes cards with delay between each one
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1, // Delay between each card
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            scrub: 1,
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      id="passes"
      className="h-auto px-7 md:px-14 lg:px-28 py-14 md:py-28 flex flex-col items-center text-center"
    >
      <p ref={topPPRef} className="text-base text-[#eb4b19] mb-5 font-semibold">
        PRICING
      </p>
      <h1
        ref={h1Ref}
        className="text-4xl text-white font-semibold mb-16 font-[family-name:var(--font-protestG-regular)]"
      >
        Get Your <span className="text-[#eb4b19]">Passes</span> Now
      </h1>
      {/* <p ref={pRef} className="text-[#e6e6e682] mb-12">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor
        <br className="hidden md:block" /> do amet sint. Velit officia consequat
        duis enim velit mollit.
      </p> */}

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-7 w-full">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="w-full md:w-1/3"
        >
          <PassesCard
            title="Conference pass"
            desc="Get ready for an exclusive conference experience at Bsides Kolkata! With the 'Conference Pass', you'll enjoy access to all conference sessions being held on the conference day, i.e. 04-05th December 2026. Immerse yourself in cybersecurity insights, connect with professionals, and advance your journey in this dynamic field. Limited availability! Grab your pass now to secure your spot"
            // prize="7000"
          />
        </div>
        {/* <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="w-full md:w-1/3"
        >
          <PassesCard
            title="Conference &#43; After Party Pass"
            desc="Get ready for an exclusive conference experience at Bsides Goa! With the 'Conference Pass', you'll enjoy access to all conference sessions being held ..."
            prize="8000"
          />
        </div> 
        <div
          ref={(el) => (cardRefs.current[2] = el)}
          className="w-full md:w-1/3"
        >
          <PassesCard
            title="2 Days Training Pass"
            desc=" Elevate your cybersecurity skills with the Bsides Kolkata 'Training Pass' at XXX INR. Delve into hands-on workshops led by industry experts, offering real-world applications. Stay ahead of trends with a cutting-edge curriculum and gain exclusive access to resources. Earn valuable certifications, fostering credibility in the industry. Engage in an interactive learning environment, fostering collaboration and networking with like-minded professionals. Limited slots available - secure your Training Pass for two day training on 28th & 29th December 2025"
            // prize="38000"
          />
        </div>*/}
      </div>
    </div>
  );
};

export default PassesSection;
