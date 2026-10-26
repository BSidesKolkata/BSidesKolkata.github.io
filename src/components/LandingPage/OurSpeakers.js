"use client";

import React, { useRef, useEffect } from "react";
import SpeackerCard from "../SpeackerCard";
import ravi from "@/assets/speakers/tech/ravi.jpg";
import adhoka from "@/assets/speakers/tech/adhoksha.jpg";
import soumyadeep from "@/assets/speakers/tech/soumyadeep.jpg";
import archan from "@/assets/speakers/tech/archan.jpg";
import deepak from "@/assets/speakers/keynote/deepak.jpg";
import rishika from "@/assets/speakers/tech/rishika.jpg";
import gaurav from "@/assets/speakers/tech/gaurav.jpg";
import adithya from "@/assets/speakers/tech/aditya.jpg";
import mouty from "@/assets/speakers/tech/mounty.jpg";
import amit from "@/assets/speakers/tech/amit.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurSpeakers = () => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const cardRefs = useRef([]);
  const linkRef = useRef(null);

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
      h1Ref.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    ).fromTo(
      pRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );

    // Animate speaker cards with delay between each one
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

    // Animate "View All" button
    gsap.fromTo(
      linkRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linkRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div className="h-auto px-5 md:px-14 lg:px-28 py-14 flex flex-col items-center text-center">
      <h1
        ref={h1Ref}
        className="text-4xl text-white font-semibold mb-3 font-[family-name:var(--font-protestG-regular)]"
      >
        Meet <span className="text-[#eb4b19]">TECHNICAL</span> Speakers
      </h1>
      {/* <p ref={pRef} className="text-[#e6e6e682]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor
        <br className="hidden md:block" /> do amet sint. Velit officia consequat
        duis enim velit mollit.
      </p> */}

      {/* Speaker Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-14 my-10 w-full">
        {[
          {
            image: deepak,
            text: "Dr. Deepak Kumar (D3)",
            desc: "Sr Cyber Intelligence & \nForensics Expert, India",
            linkedInHandle:
              "https://www.linkedin.com/in/d3pak?trk=blended-typeahead",
          },
          {
            image: ravi,
            text: "Ravi Rajput",
            desc: "Manager @Exela Technologies",
            linkedInHandle:
              "https://www.linkedin.com/in/frustratedresearcher?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            image: adhoka,
            text: "Adhokshaj Mishra",
            desc: "Security Research Lead @QuickHeal",
            linkedInHandle:
              "https://www.linkedin.com/in/adhokshajmishra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            image: soumyadeep,
            text: "Soumyadeep Basu",
            desc: "Senior Security Engineer @GoDaddy",
            linkedInHandle:
              "https://www.linkedin.com/in/soumyadeep-bas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            image: archan,
            text: "Archan Choudhury",
            desc: "CEO @BlackPerl DFIR",
            linkedInHandle:
              "https://www.linkedin.com/in/archan-choudhury-b4a719b7?trk=blended-typeahead",
          },
          {
            image: rishika,
            text: "Rishika Desai",
            desc: "Threat Researcher @BforeAI",
            linkedInHandle: "https://www.linkedin.com/in/rishika-d-61a765159",
          },
          {
            image: gaurav,
            text: "Gaurav Batra",
            desc: "Founder & CEO @CyberFrat",
            linkedInHandle: "https://www.linkedin.com/in/gauvbatra",
          },
          {
            image: adithya,
            text: "Aditya Shende",
            desc: "Threat Researcher @BforeAI || Bugcrowd Top 100",
            linkedInHandle: "https://www.linkedin.com/in/kongsec?originalSubdomain=in",
          },
          {
            image: mouty,
            text: "Monty Shyama",
            desc: "Lead Threat Detection Engineer @CRED",
            linkedInHandle: "https://www.linkedin.com/in/montyshyama?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          },
          {
            image: amit,
            text: "Amit Dubey",
            desc: "Author, Cyber Security Evangelist, TEDx Speaker",
            linkedInHandle: "https://www.linkedin.com/in/amitdubey77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
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

      {/* <div
        
        ref={linkRef}
        className="bg-primarybgimage w-full md:w-fit text-white text-sm md:text-base px-1 md:px-5 py-3 rounded-full shadow-primaryshadow transition-shadow duration-100 ease-in-out flex items-center justify-center"
      >
        Stay tuned as we announce more speakers soon!
      </div> */}
    </div>
  );
};

export default OurSpeakers;
