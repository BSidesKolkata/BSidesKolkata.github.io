import Link from "next/link";
import namrata from "@/assets/village/namrata.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import linkedIn from "@/assets/icons/Vector (2).svg";
import Image from "next/image";

const CodeOfConduct = () => {
  return (
    <div className="h-auto py-4 md:py-12 px-5 sm:px-10 md:px-24 lg:px-44 w-full">
      <div>
        <Link href="/">
          <div className="flex items-center text-[#eb4b19] hover:text-[#ff5b29] cursor-pointer mb-7">
            <FaArrowLeft className="mr-2" />
            <span className="text-sm md:text-lg">Back to Home</span>
          </div>
        </Link>
      </div>
      <div className="flex flex-col items-center w-full">
        <h1 className="text-white md:text-start font-semibold text-start text-4xl md:text-5xl mb-7 font-[family-name:var(--font-protestG-regular)]">
          VILLAGE
        </h1>
        <p className="text-white text-opacity-90 text-sm md:text-lg mb-16">
          Hacking Village is an event that typically takes place at any
          cybersecurity conferences.The goal of Hacking Village is to provide an
          interactive and hands-on learning experience for participants, where
          they can learn about various aspects of hacking and cybersecurity
          through practical exercises, demonstrations, and competitions.
          <br />
          <br />
          the goal of Hacking Village is to provide a fun and engaging way for
          participants to learn about cybersecurity and hacking, and to improve
          their skills and knowledge.
        </p>
        <div className="self-start mb-10 w-full">
          <div>
            <p className="text-xl font-semibold mb-2 text-[#eb4b19] ">
              The Lockpick Village
            </p>
            <p className="text-white text-opacity-90 text-sm md:text-lg mb-5 md:mb-10">
              The Lockpick Village is a physical security demonstration and
              interaction area.Fun filled activity. Attendees can gain knowledge
              about the vulnerabilities of various locking devices, as well as
              techniques for exploiting these vulnerabilities, and practice on
              locks of great complexity. Lock picking is a non-destructive
              method of bypassing a lock without the use of a key. This is
              possible with a variety of lock-picking techniques, including
              single-pin picking and raking. The first binding pin is made with
              tension. So, we&apos;ll go over all of this terminology. We can
              show you exactly how to pick a lock. While there are several basic
              lock picking techniques available, we will focus on single-pin
              picking first.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="mt-6 flex flex-col md:flex-row w-full gap-10">
              <Image
                src={namrata}
                alt="Namrata Brahmkshatriya"
                className="w-auto h-80 object-cover rounded-xl z-50 hover:scale-105 transition-all duration-300"
              />
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xl font-semibold mb-2 text-[#eb4b19] ">
                    Instructor:{" "}
                    <span className="font-bold text-xl md:text-2xl">
                      Namrata Brahmkshatriya
                    </span>
                  </p>
                  <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
                    <span className="font-semibold">
                      Namrata Brahmkshatriya
                    </span>
                    , is a leading figure in cybersecurity, she established the
                    Null Ahmedabad Chapter and led the InfosecGirl Gujarat
                    chapter. Her expertise extends to hardware security, with a
                    current emphasis on automotive cybersecurity. Proficient in
                    social engineering, network security, and telecom security,
                    she&apos;s well-versed in cybercrime investigations.
                    She&apos;s trained over 1500 police officials across
                    multiple regions, and she&apos;s also a cyber lawyer.
                    Additionally, she has showcased her lock-picking talents in
                    various regional InfoSec circles.
                  </p>
                </div>
                <div className="bg-gray-500 bg-opacity-10 w-fit h-fit rounded-full flex items-center justify-center p-2">
                  <Link
                    href="https://www.linkedin.com/in/infosecnamu?trk=feed-detail_main-feed-card_feed-actor-name"
                    target="_black"
                  >
                    <Image
                      src={linkedIn}
                      className="h-5 w-5 object-contain"
                      alt="BSIDE LINKEDIN"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;
