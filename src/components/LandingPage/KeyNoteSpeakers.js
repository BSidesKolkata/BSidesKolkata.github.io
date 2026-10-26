"use client";

import React, { useRef, useEffect } from "react";
import SpeackerCard from "../SpeackerCard";
import praween from "@/assets/speakers/keynote/praween.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const KeyNoteSpeakers = () => {
  const topPRef = useRef(null);
  const h1Ref = useRef(null);
  const bottomPRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: topPRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    // Animate top paragraph and header
    tl.fromTo(
      topPRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        h1Ref.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        bottomPRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    // Animate each card with delay and scroll trigger
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.1, // Delay for each card
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
      id="speakers"
      className="h-auto px-7 md:px-14 lg:px-28 py-14 flex flex-col items-center text-center"
    >
      <p ref={topPRef} className="text-base text-[#eb4b19] mb-5 font-semibold">
        SPEAKERS
      </p>
      <h1
        ref={h1Ref}
        className="text-4xl text-white font-semibold mb-3 font-[family-name:var(--font-protestG-regular)]"
      >
        Meet <span className="text-[#eb4b19]">Keynotes</span> Speakers
      </h1>
      {/* <p ref={bottomPRef} className="text-[#e6e6e682]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor
        <br className="hidden md:block" /> do amet sint. Velit officia consequat
        duis enim velit mollit.
      </p> */}

      {/* Speaker Cards Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center md:gap-14 mt-10 w-full">
        {[
          {
            image: praween,
            text: "Praween Prakash IPS",
            desc: "Superintendent of Police, Darjeeling",
            twitterHandle: "https://x.com/praweenprakash?lang=en",
          },
        ].map((speaker, index) => (
          <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <SpeackerCard
              imagePath={speaker.image}
              text={speaker.text}
              desc={speaker.desc}
              {...(speaker.linkedInHandle && {
                linkedInHandle: speaker.linkedInHandle,
              })}
              {...(speaker.faceBookhandle && {
                faceBookhandle: speaker.faceBookhandle,
              })}
              {...(speaker.twitterHandle && {
                twitterHandle: speaker.twitterHandle,
              })}
              {...(speaker.instaHandle && { instaHandle: speaker.instaHandle })}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyNoteSpeakers;
