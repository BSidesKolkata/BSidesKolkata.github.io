"use client";

import React, { useRef, useEffect } from "react";
import SpeackerCard from "../SpeackerCard";
import tamalika from "@/assets/teams/volu/tamalika.jpg";
import anindo from "@/assets/teams/volu/anindo.jpg";
import ganesh from "@/assets/teams/volu/ganesh.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const VolunteersTeams = () => {
  const h1TVRef = useRef(null);
  const bottomTPVRef = useRef(null);
  const cardTVRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: h1TVRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    // Animate top paragraph and header
    tl.fromTo(
      h1TVRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    ).fromTo(
      bottomTPVRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Animate each card with delay and scroll trigger
    cardTVRefs.current.forEach((card, index) => {
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
      id="volunteers"
      className="h-auto px-7 md:px-14 lg:px-28 py-14 flex flex-col items-center text-center"
    >
      <h1
        ref={h1TVRef}
        className="text-4xl text-white font-semibold mb-3 font-[family-name:var(--font-protestG-regular)]"
      >
        Meet Our <span className="text-[#eb4b19]">Volunteers</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 mt-10 w-full justify-items-center">
        {[
          {
            image: anindo,
            text: "Anindo Ray Mondal",
            desc: "Volunteer @BSides Kolkata",
            linkedInHandle:
              "https://www.linkedin.com/in/anindo-ray-mondal-2b4998271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            image: ganesh,
            text: "Ganesh Shinde",
            desc: "Volunteer @BSides Kolkata",
            instaHandle: "https://www.instagram.com/itsganeshhere/",
            linkedInHandle: "https://www.linkedin.com/in/dev-ganesh-shinde/",
            twitterHandle: "https://x.com/Gani_Shinde",
          },
          {
            image: tamalika,
            text: "Tamalika Santra",
            desc: "Volunteer @BSides Kolkata",
            instaHandle:
              "https://www.instagram.com/dark_tree67?igsh=MWwzcWl4aDdnbmx4Nw==",
          },
        ].map((speaker, index) => (
          <div
            key={index}
            ref={(el) => (cardTVRefs.current[index] = el)}
            className="h-full"
          >
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
              isAnnounced={true}
            />
          </div>
        ))}
      </div>
      
      <Link href="/join-as-volunteer" className="bg-primarybgimage w-fit mt-10 cursor-pointer text-white text-lg px-5 py-2 rounded-xl transition-shadow duration-100 ease-in-out flex items-center justify-center">
        Join as Volunteer
      </Link>
    </div>
  );
};

export default VolunteersTeams;
