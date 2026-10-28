import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const JoinAsVolunteer = () => {
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

      <div className="flex flex-col items-center text-start">
        <h1 className="text-white md:text-start font-semibold text-start text-3xl md:text-4xl mb-7 font-[family-name:var(--font-protestG-regular)]">
          CALL FOR VOLUNTEERS – BSIDES KOLKATA 2026
        </h1>

        <div className="w-full flex flex-col items-start">
          <p className="text-white text-opacity-90 font-bold text-sm md:text-lg mb-4">
            Volunteer registrations will be open from 08th December 2025, 12:00
            AM IST to 23th December 2025, 11:59 PM IST.
          </p>

          <p className="text-white text-opacity-90 text-sm md:text-lg">
            BSides Kolkata Security Conference is a community-driven event, and
            volunteers are a key part of making it successful, smooth, and
            welcoming for all attendees.
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-4">
            As a volunteer, you will support the conference operations and also
            get opportunities to learn, network, and experience the event from
            behind the scenes.
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-7 text-start">
            Please read all the details, terms, and conditions carefully before
            you submit your volunteer application.
          </p>
        </div>

        {/* Who can volunteer */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Who can volunteer
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Cybersecurity professionals, engineers, developers, and IT
              practitioners, anyone who can take ownership of tasks and work
              with minimal supervision.
            </li>
            <li>
              Students and early-career professionals who are eager to learn,
              contribute, and handle responsibilities on the ground.
            </li>
            <li>
              Security community members who are proactive, disciplined, and
              comfortable working in a fast-paced event environment.
            </li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            These are strictly volunteer roles.{" "}
            <span className="font-bold">
              There are no salaries or stipends. The main value is learning,
              networking, contribution, and being part of a strong cybersecurity
              community.
            </span>
          </p>
        </div>

        {/* Volunteer roles and tasks */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Volunteer roles and tasks
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            Below is an overview of the type of work you may be assigned. The
            final role will be allocated by the organizing team based on event
            needs.
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              <span className="font-semibold">Registration Desk:</span> Help
              attendees check in, verify IDs if required, hand out badges and
              kits, and guide them to the correct hall or area.
            </li>
            <li>
              <span className="font-semibold">
                Merchandise &amp; Info Desk:
              </span>{" "}
              Manage conference goodies, answer basic attendee queries, and
              direct people to the right support team.
            </li>
            <li>
              <span className="font-semibold">Track / Session Hosting:</span>{" "}
              Welcome speakers, make basic introductions, coordinate with the
              AV/tech team, keep track of time, and help with Q&amp;A flow.
            </li>
            <li>
              <span className="font-semibold">
                Exhibition / Community Booths:
              </span>{" "}
              Support partners and community booths, manage visitor flow, and
              help maintain a clean and safe space.
            </li>
            <li>
              <span className="font-semibold">Help Desk / Control Room:</span>{" "}
              Coordinate information between teams, report issues, and help
              route support to where it is needed.
            </li>
            <li>
              <span className="font-semibold">Runners:</span> Handle quick
              errands, fill in for other volunteers during breaks, and support
              any urgent on-ground requirements.
            </li>
            <li>
              <span className="font-semibold">
                Photography / Videography Support:
              </span>{" "}
              Assist the media team in capturing sessions, workshops, and key
              moments as per guidelines.
            </li>
            <li>
              <span className="font-semibold">Digital Marketing:</span> Help in
              the digital visibility and broadcast event details through social
              media.
            </li>
            <li>
              <span className="font-semibold">
                Hygiene &amp; Venue Management:
              </span>{" "}
              Help ensure basic cleanliness, coordinate with venue staff, and
              keep common areas presentable.
            </li>
            <li>
              <span className="font-semibold">Party / Social Events Duty:</span>{" "}
              Check valid passes at networking events and help maintain a safe,
              respectful environment.
            </li>
          </ul>
        </div>

        {/* Do not apply if */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Do not apply if / Points to keep in mind
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            To keep the team focused and effective, please do not apply if:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              You only want a free pass to attend the conference and do not wish
              to actively work during your assigned shifts.
            </li>
            <li>
              You are not comfortable taking ownership, solving small problems
              on your own, or coordinating with others in a dynamic environment.
            </li>
            <li>
              You cannot commit your availability for pre-event preparation,
              mandatory briefings, and all assigned shifts during the conference
              days.
            </li>
            <li>
              You are not okay with flexible timings, async communication, and
              last-minute changes that are normal for live events.
            </li>
            <li>
              You are unable or unwilling to put in focused effort for a
              volunteer-led, community-first initiative.
            </li>
          </ul>
        </div>

        {/* General terms and expectations */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            General terms and expectations
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Volunteering is a serious responsibility. When you sign up, you
              are expected to treat your duties like a professional commitment
              and give your best during all assigned shifts.
            </li>
            <li>
              You may get time to attend a few sessions, but your assigned duty
              always comes first. Any request to attend a specific talk must be
              discussed with and approved by your team lead in advance so a
              replacement can be arranged.
            </li>
            <li>
              Short breaks between shifts are allowed, but you must return on
              time so that the event flow is not disturbed.
            </li>
            <li>
              Social plans, city visits, or late-night outings are your personal
              choice, but they cannot be used as a reason to miss or delay your
              shift.
            </li>
            <li>
              Volunteers must follow the conference code of conduct, privacy and
              photography rules, and all venue policies at all times.
            </li>
            <li>
              Travel to and from the conference city must be arranged by the
              volunteers themselves unless explicitly mentioned as a perk.
            </li>
          </ul>
        </div>

        {/* Event setup and teardown */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Event setup and teardown
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Event Setup: All selected volunteers must report to the main venue
              on the day before the conference at the time specified in the
              confirmation email for setup and briefing.
            </li>
            <li>
              Tear Down: All volunteers are required to stay back after the last
              conference day to help with teardown, pack-up, and closing
              formalities.
            </li>
          </ul>

          <p className="text-white text-opacity-90 text-sm md:text-lg text-start">
            Exact timings and location details will be shared with confirmed
            volunteers via email and the official communication channel.
          </p>
        </div>

        {/* Accommodation and travel support */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Accommodation and travel support
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            If applicable for your event edition, the organizing team may offer
            some or all of the following benefits to confirmed on-ground
            volunteers:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Shared stay for a fixed number of days during the conference, for
              volunteers traveling from outside the city.
            </li>
            <li>
              Possible travel support or partial reimbursement for outstation
              volunteers, subject to prior approval and budget limits.
            </li>
            <li>
              Conference team goodies and swags designed specifically for the
              volunteer crew.
            </li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            Details of accommodation type, check-in/check-out dates, and any
            travel reimbursement caps will be clearly communicated in the final
            confirmation email.
          </p>
        </div>

        {/* Post-conference perks */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Post-conference perks
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            Volunteering is a community contribution, but there are additional
            perks:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Access to an exclusive team-only after-party or gathering after
              the conference.
            </li>
            <li>
              Closed-group networking time with speakers, security researchers,
              founders, and industry leaders where possible.
            </li>
            <li>
              Certificates of appreciation and recognition for volunteers who
              complete all assigned shifts responsibly.
            </li>
            <li>
              Priority consideration for future editions and other community
              initiatives for high-performing volunteers.
            </li>
          </ul>
        </div>

        {/* Managing indiscipline and violations */}
        <div className="self-start mb-7">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            Managing indiscipline and violations
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-2 px-5 md:px-10 list-disc space-y-2">
            <li>
              Volunteers who repeatedly come late, skip shifts, or fail to
              complete their agreed responsibilities may lose their volunteer
              status and associated benefits.
            </li>
            <li>
              In serious cases of misbehavior, harassment, or violation of the
              conference code of conduct, the organizing team may remove the
              volunteer from the event and blacklist them from future community
              activities.
            </li>
            <li>
              If any benefits such as accommodation, passes, or travel support
              have been extended and the volunteer does not honor their
              commitment, the organizing team may revoke these benefits and may
              ask the volunteer to bear some or all related costs.
            </li>
          </ul>
        </div>

        {/* How to apply */}
        <div className="self-start mb-10">
          <p className="text-xl font-semibold mb-2 text-[#eb4b19]">
            How to apply
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-2">
            Your volunteer application form will typically ask for:
          </p>
          <ul className="text-white text-opacity-90 text-sm md:text-lg mb-4 px-5 md:px-10 list-disc space-y-2">
            <li>
              Basic details: Name, contact information, city, and emergency
              contact.
            </li>
            <li>
              Availability: Days and times you are available before and during
              the conference.
            </li>
            <li>
              Skills and interests: Prior event experience, technical skills,
              preferred roles, and any relevant links (GitHub, LinkedIn,
              portfolio).
            </li>
            <li>
              Confirmation: Agreement to the terms, code of conduct, and minimum
              time commitment.
            </li>
          </ul>
          <p className="text-white text-opacity-90 text-sm md:text-lg mb-4">
            A link or button such as “Apply as a Volunteer” can be placed at the
            end of this page to redirect users to the application form.
          </p>
          <p className="text-white text-opacity-90 text-sm md:text-lg">
            You can now adapt the names (conference title, city, exact dates,
            perks) and add your specific code-of-conduct link to match your
            event branding.
          </p>
        </div>

        {/* CTA Button */}
        {/* Replace href with your actual application form link */}
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdvLGmzpUvOYcZk0fUyCSDzikG1mUeUHnJXicyieSGa52Tz_w/viewform?usp=dialog" target="_blank">
          <button className="bg-primarybgimage w-fit text-white text-lg px-9 mb-10 py-2 rounded-xl transition-shadow duration-100 ease-in-out flex items-center justify-center">
            APPLY AS A VOLUNTEER
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JoinAsVolunteer;
