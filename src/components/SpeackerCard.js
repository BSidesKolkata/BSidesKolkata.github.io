import Image from "next/image";
import vector from "../assets/vector.svg";
import linkedIn from "../assets/icons/Vector (2).svg";
import facebook from "../assets/icons/Vector (3).svg";
import { FaXTwitter } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import Link from "next/link";

const SpeackerCard = ({
  imagePath,
  text,
  desc,
  linkedInHandle,
  faceBookhandle,
  twitterHandle,
  instaHandle,
  isAnnounced = false,
}) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden">
      {/* Main card content */}
      <div className="relative flex flex-col items-center h-full p-4 z-10">
        <div className="relative mb-4 transition-all duration-300 hover:scale-110 cursor-pointer group">
          <Image
            src={vector}
            alt="VECTOR"
            className="w-72 md:w-auto absolute bottom-0 left-0 -z-20"
          />
          {imagePath && (
            <Image
              src={imagePath}
              alt="Speaker"
              className="w-64 h-64 object-cover rounded-xl z-50 transition-all duration-300"
            />
          )}
        </div>

        <p
          className={`text-center text-white font-semibold text-lg ${
            !isAnnounced ? "blur-sm pointer-events-none select-none" : ""
          }`}
        >
          {text}
        </p>

        <p
          className={`text-center text-white text-opacity-70 whitespace-pre-line ${
            !isAnnounced ? "blur-sm pointer-events-none select-none" : ""
          }`}
        >
          {desc}
        </p>

        <div className="flex items-center gap-2 mt-2">
          {linkedInHandle && (
            <Link
              href={linkedInHandle}
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <Image
                src={linkedIn}
                className="h-4 w-4 object-contain"
                alt="BSIDE LINKEDIN"
              />
            </Link>
          )}
          {faceBookhandle && (
            <Link
              href={faceBookhandle}
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <Image
                src={facebook}
                className="h-4 w-4 object-contain"
                alt="BSIDE FACEBOOK"
              />
            </Link>
          )}
          {twitterHandle && (
            <Link
              href={twitterHandle}
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <FaXTwitter className="text-white" />
            </Link>
          )}
          {instaHandle && (
            <Link
              href={instaHandle}
              target="_blank"
              className="p-2 rounded-full bg-gray-500 bg-opacity-10"
            >
              <FiInstagram className="text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Glassmorphism overlay */}
      {!isAnnounced && (
        <div
          className="
            absolute inset-0 z-30
            flex items-center justify-center
            rounded-2xl
            bg-gray-900/80
            backdrop-blur-lg
            border border-white/20
          "
        >
          <h3 className="font-bold text-white text-2xl tracking-widest uppercase">
            Coming Soon
          </h3>
        </div>
      )}
    </div>
  );
};

export default SpeackerCard;
