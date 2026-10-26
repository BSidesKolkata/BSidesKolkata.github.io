import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const CodeOfConduct = () => {
  return (
    <div className="h-auto py-4 md:py-12 px-5 sm:px-10 md:px-24 lg:px-44">
      <div>
        <Link href="/">
          <div className="flex items-center text-[#eb4b19] hover:text-[#ff5b29] cursor-pointer mb-7">
            <FaArrowLeft className="mr-2" />
            <span className="text-sm md:text-lg">Back to Home</span>
          </div>
        </Link>
      </div>
      <h1 className="text-white md:text-start font-semibold text-start text-4xl md:text-5xl mb-7 font-[family-name:var(--font-protestG-regular)]">
        Code Of Conduct
      </h1>
      <p className="text-white text-opacity-90 text-sm md:text-lg mb-7">
        At BSides Kolkata, we are committed to fostering an inclusive and
        respectful environment for all participants. We expect everyone involved
        - attendees, speakers, sponsors, and volunteers - to adhere to the
        following code of conduct. By attending our conference, you are agreeing
        to support these principles, contributing to a safe and enriching
        experience for everyone.
      </p>
      <ol className="text-white text-opacity-90 text-sm md:text-lg mb-7 px-5 md:px-10">
        <li className="list-disc mb-4">
          Respect and Diversity: BSides Kolkata is dedicated to providing a
          conference experience that is free from harassment or discrimination
          based on factors such as gender, sexual orientation, disability,
          appearance, body size, race, religion, or technological preferences.
          We celebrate diversity and value the contributions of every
          individual.
        </li>
        <li className="list-disc mb-4">
          Zero Tolerance for Harassment: Harassment in any form is unacceptable.
          This includes offensive comments, threats, intimidation, verbal or
          written abuse, sexualized imagery, stalking, disruptive behavior, and
          unwelcome physical contact or advances. Such behavior will not be
          tolerated.
        </li>
        <li className="list-disc mb-4">
          Immediate Action: If you experience or witness harassment, or if you
          have any concerns about inappropriate behavior, please notify a member
          of the conference staff promptly. You can also contact us at{" "}
          <Link
            href="mailto:bsideskolkata@gmail.com"
            className="text-[#eb4b19] underline"
          >
            bsideskolkata@gmail.com
          </Link>{" "}
          to report an incident. Our team is committed to addressing any issues
          promptly and discreetly.
        </li>
        <li className="list-disc mb-4">
          Consequences of Violation: Participants who violate this code of
          conduct may face sanctions, including expulsion from the conference
          without a refund, and may be prohibited from attending future BSides
          Kolkata events. Such actions will be determined at the discretion of
          the conference organizers.
        </li>
      </ol>
      <p className="text-white text-opacity-90 text-sm md:text-lg mb-7">
        We sincerely thank all participants for their cooperation in creating an
        environment that is respectful, welcoming, and enjoyable for everyone.
        Your commitment to upholding these principles helps ensure a positive
        experience for all attendees at BSides Kolkata.
      </p>
    </div>
  );
};

export default CodeOfConduct;
