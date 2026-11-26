"use client";

import React, { useRef, useEffect } from "react";
import SpeackerCard from "../SpeackerCard";
import aditya from "@/assets/speakers/tech/Aditya.png";
import danish2 from "@/assets/speakers/tech/danish2.jpg";
import harshit from "@/assets/speakers/tech/Harshit.jpeg";
import rahul from "@/assets/speakers/tech/Rahul.jpeg";
import rajdeep from "@/assets/speakers/tech/Rajdeep.png";
import kumarA from "@/assets/speakers/tech/KumarA.jpg";
import aditi from "@/assets/speakers/tech/Aditi.jpg";
import arka from "@/assets/speakers/tech/Arka.jpg";
//import amit from "@/assets/speakers/tech/amit.jpg";
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
        start: "top 90%",
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
            start: "top 95%",
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
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: linkRef.current,
          start: "top 98%",
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
            image: harshit,
            text: "HARSHIT GUPTA",
            desc: "Senior Product Security Engineer (Better World Technology Pvt.LTD.)",
            linkedInHandle:
              "https://www.linkedin.com/in/iam-harshit-gupta/",
          },
          {
            image: rahul,
            text: "Rahul Mishra",
            desc: "Security Researcher (Detection and Threat Research) @Quickheal Technologies",
            linkedInHandle:
              "https://linkedin.com/in/rivian96",
          },
          {
            image: danish2,
            text: "Mohammed Danish Amber",
            desc: "Project Manager @Cognizant",
            linkedInHandle:
              "https://www.linkedin.com/in/mohammed-danish-amber/",
          },
          {
            image: aditya,
            text: "Aditya Goswami",
            desc: "IT Security Analyst - ll @TD Williamson India Pvt.Ltd.",
            linkedInHandle:
              "https://www.linkedin.com/in/aditya-k-goswami/",
          },
          {
            image: rajdeep,
            text: "Rajdeep Das",
            desc: "Research Fellow, @IEM-UEM Kolkata",
            linkedInHandle:
              "https://www.linkedin.com/in/rajdeep-das-b60939229/",
          },
          {
           image: aditi,
            text: "Aditi Sharma",
            desc: "R&D Engineer, @Keysight Technologies",
            linkedInHandle: "https://www.linkedin.com/in/aditi-sharma-21053444b",
          },
          {
           image: kumarA,
            text: "Kumar Aditya",
            desc: "R&D Engineer, @Keysight Technologies (ATI)",
            linkedInHandle: "https://www.linkedin.com/in/kumar-aditya-0ab61b234/",
          },
          {
           image: arka,
            text: "Arkaprabha Chakraborty",
            desc: "Senior Engineer @Qualcomm",
            linkedInHandle: "https://www.linkedin.com/in/arkaprabhachakraborty/",
          },
          {/*
            image: gaurav,
            text: "Gaurav Batra",
            desc: "Founder & CEO @CyberFrat",
            linkedInHandle: "https://www.linkedin.com/in/gauvbatra",
          },
          {
            image: gaurav,
            text: "Gaurav Batra",
            desc: "Founder & CEO @CyberFrat",
            linkedInHandle: "https://www.linkedin.com/in/gauvbatra",
          },
          {
            image: gaurav,
            text: "Gaurav Batra",
            desc: "Founder & CEO @CyberFrat",
            linkedInHandle: "https://www.linkedin.com/in/gauvbatra",
          },
          {
           image: gaurav,
            text: "Gaurav Batra",
            desc: "Founder & CEO @CyberFrat",
            linkedInHandle: "https://www.linkedin.com/in/gauvbatra",
          },
          {
            image: amit,
            text: "Amit Dubey",
            desc: "Author, Cyber Security Evangelist, TEDx Speaker",
            linkedInHandle: "https://www.linkedin.com/in/amitdubey77?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
          */},
        ].map((speaker, index) => (
          <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
            <SpeackerCard
              imagePath={speaker.image}
              text={speaker.text}
              desc={speaker.desc}
              isAnnounced
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
