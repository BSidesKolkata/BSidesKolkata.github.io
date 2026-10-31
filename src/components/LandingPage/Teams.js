"use client";

import React, { useRef, useEffect } from "react";
import SpeackerCard from "../SpeackerCard";
import sayantan from "../../assets/teams/Sayantan.png";
import sayan from "../../assets/teams/sayan.jpeg";
import debraj from "../../assets/teams/Debraj.png";
import kishan from "@/assets/teams/volu/kishan.jpg";
import tamalika from "@/assets/teams/volu/tamalika.jpg";
import anindo from "@/assets/teams/volu/anindo.jpg";
import ganesh from "@/assets/teams/volu/ganesh.jpg";
import skc from "@/assets/teams/SKCsir.jpeg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoreTeams = () => {
  const topPTRef = useRef(null);
  const h1TRef = useRef(null);
  const bottomPTRef = useRef(null);
  const cardTRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: topPTRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        scrub: 1,
      },
    });

    // Animate top paragraph and header
    tl.fromTo(
      topPTRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        h1TRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        bottomPTRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.8"
      );

    // Animate each card with delay and scroll trigger
    cardTRefs.current.forEach((card, index) => {
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
      id="teams"
      className="h-auto px-7 md:px-14 lg:px-28 py-14 md:py-28 flex flex-col items-center text-center"
    >
      <p ref={topPTRef} className="text-base text-[#eb4b19] mb-5 font-semibold">
        TEAMS
      </p>
      <h1
        ref={h1TRef}
        className="text-4xl text-white font-semibold mb-3 font-[family-name:var(--font-protestG-regular)]"
      >
        Meet Our <span className="text-[#eb4b19]">Team</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14 mt-10 w-full justify-items-center">
        {[
          {
            image: sayantan,
            text: "Sayantan Datta",
            desc: "Founder @BSides Kolkata",
            linkedInHandle:
              "https://www.linkedin.com/in/sayantan/?trk=blended-typeahead",
            twitterHandle: "https://x.com/SayantanHack",
          },
          {
            image: debraj,
            text: "Debraj Dey",
            desc: "Co-founder & \nChapter Lead @BSides Kolkata",
            linkedInHandle:
              "https://www.linkedin.com/in/cyberdebraj/?trk=blended-typeahead",
            instaHandle:
              "https://www.instagram.com/debraj.369?igsh=MWNhZzkwZWFocHdkOQ%3D%3D",
          },
          {/*
            image: sayan,
            text: "Sayan Kr Dey",
            desc: "Core Contributor & \nModerator @BSides Kolkata",
            linkedInHandle:
              "https://www.linkedin.com/in/sayan4n6/?trk=feed_main-feed-card_feed-reaction-header",
            twitterHandle: "https://x.com/sayan4n6",
          */},
          {
            image: kishan,
            text: "Kishan Acharya",
            desc: "Core Contributor & \nModerator @BSides Kolkata",
            linkedInHandle: "https://www.linkedin.com/in/kishan-acharya/",
            twitterHandle:
              "https://x.com/Byte_Defender?t=ChYQnMiZ0mzKP5ea3WNfJg&s=09",
          },
          {
            image: skc,
            text: "Sabuj K. Chaudhuri",
            desc: "Advisor @BSides Kolkata \nProfessor & Former Head in DLIS @University of Calcutta",
            linkedInHandle:
              "https://www.linkedin.com/in/sabuj-kumar-chaudhuri-88a6422a1/",
          },
          {
            image: anindo,
            text: "Anindo Ray Mondal",
            desc: "Marketing & Sales Head @BSides Kolkata \nAssociate-2 @PwC ",
            linkedInHandle:
              "https://www.linkedin.com/in/anindo-ray-mondal-2b4998271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            image: ganesh,
            text: "Ganesh Shinde",
            desc: "Developer @BSides Kolkata \n SDE @Black Duck",
            instaHandle: "https://www.instagram.com/itsganeshhere/",
            linkedInHandle: "https://www.linkedin.com/in/dev-ganesh-shinde/",
            twitterHandle: "https://x.com/Gani_Shinde",
          },
          {
            image: tamalika,
            text: "Tamalika Santra",
            desc: "Graphic Designer @BSides Kolkata",
            instaHandle:
              "https://www.instagram.com/dark_tree67?igsh=MWwzcWl4aDdnbmx4Nw==",
          },
        ].map((speaker, index) => (
          <div
            key={index}
            ref={(el) => (cardTRefs.current[index] = el)}
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
    </div>
  );
};

export default CoreTeams;
