"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SpeackerCard from "../SpeackerCard";
import reviewerPlaceholder from "@/assets/speakers/cfp-reviewer-placeholder.svg";
import amishra from "@/assets/cfppanel/amishra.jpeg";
import shyam from "@/assets/cfppanel/shyam.jpg";
import vray from "@/assets/cfppanel/vray.jpg";

gsap.registerPlugin(ScrollTrigger);

const reviewers = [
  {
    id: "a",
    name: "Adhokshaj Mishra",
    pic: amishra,
    description: "Adhokshaj Mishra works as Staff Detection Engineer – Linux agent, specializing in Linux, container and Kubernetes platforms. His interests focus on both offensive and defensive Linux malware research, with professional experience in container-specific attacks and detection techniques. Outside work, he explores emerging malware techniques and applied cryptography. He is also passionate about sharing knowledge and has spoken at several local security meetups, chapters, and conferences.",
    linkedInHandle: "https://www.linkedin.com/in/adhokshajmishra/"
  },
  {
    id: "b",
    name: "Vicky Ray",
    pic: vray,
    description: "Vicky Ray is the Founder and CEO of RayvenX, a Singapore-based cybersecurity startup transforming how organizations understand and defend against cyber adversaries. RayvenX focuses on turning real-world adversary intelligence into actionable capabilities for threat detection, hunting, and proactive cyber defense. With 20 years of cybersecurity experience, Vicky has held senior leadership roles at Palo Alto Networks’ Unit 42 and led Asia-Pacific Cyber Incident Response at Barclays. He has advised governments, law enforcement, and global enterprises on advanced cyber threats, earning recognition from INTERPOL for contributions to international cybercrime investigations.",
    linkedInHandle: "https://www.linkedin.com/in/vickray/",
  },
  {
    id: "c",
    name: "Shyam Sundar KR(Batman)",
    pic: shyam,
    description: "Shyam has contributed to global threat research and security initiatives through roles at Cisco Talos, Cisco Umbrella, and GE Healthcare. A three-time TEDx speaker and author of It's Your Digital Life, he has spoken at leading international cybersecurity conferences, including Black Hat, Cisco Live, Nullcon, and DeepSec. Committed to cybersecurity education, he has conducted 300+ bootcamps and trained law enforcement, security professionals, and aspiring researchers in malware analysis, digital forensics, and threat hunting.",
    linkedInHandle: "https://www.linkedin.com/in/shyam-sundar-k-r-he-him-batman-50204966/",
  }];
  {/*
    id: "d",
    name: "Rakesh Seal",
    //pic: rakesh,
    description: "Rakesh Seal is a seasoned cybersecurity professional with extensive experience in threat analysis and incident response. He has worked with various organizations to develop and implement robust security measures, ensuring compliance and protecting critical assets.",
    linkedInHandle: "https://www.linkedin.com/in/",
  */}


const CFPpanel = () => {
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      cardRefs.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: index * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    });

    return () => context.revert();
  }, []);

  return (
    <section className="h-auto px-5 md:px-14 lg:px-28 py-14 flex flex-col items-center text-center">
      <h2
        ref={headingRef}
        className="text-4xl text-white font-semibold mb-3 font-[family-name:var(--font-protestG-regular)]"
      >
        Call for Papers <span className="text-[#eb4b19]">Review Panel</span>
      </h2>
      <p className="text-[#e6e6e682]">
        Meet the reviewers helping shape this year&apos;s program.
      </p>

      <div className="flex flex-wrap justify-center gap-8 md:gap-10 my-10 w-full">
        {reviewers.map((reviewer, index) => {
          const isDescriptionExpanded = Boolean(
            expandedDescriptions[reviewer.id]
          );

          return (
            <div
              key={reviewer.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.875rem)] max-w-[280px]"
            >
              <SpeackerCard
                imagePath={reviewer.pic || reviewerPlaceholder}
                text={reviewer.name}
                desc={
                  <>
                    <span
                      className={
                        isDescriptionExpanded ? "" : "line-clamp-2"
                      }
                    >
                      {reviewer.description}
                    </span>
                    <button
                      type="button"
                      aria-expanded={isDescriptionExpanded}
                      onClick={() =>
                        setExpandedDescriptions((previous) => ({
                          ...previous,
                          [reviewer.id]: !previous[reviewer.id],
                        }))
                      }
                      className="mt-1 text-sm font-medium text-[#eb4b19] underline underline-offset-2"
                    >
                      {isDescriptionExpanded ? "See less" : "See more"}
                    </button>
                  </>
                }
                linkedInHandle={reviewer.linkedInHandle}
                isAnnounced
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CFPpanel;
