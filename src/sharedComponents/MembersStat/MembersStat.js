import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const MembersStat = () => {
  const [counting, setCounting] = useState(false);
  return (
    <div className="bg-accent">
      <ScrollTrigger
        onEnter={() => setCounting(true)}
        onExit={() => setCounting(false)}
      >
        <div
          className="grid  md:grid-cols-4 
       grid-cols-1 "
        >
          <div className="text-center md:mb-0 mb-4">
            <h2 className="  text-xl font-semibold">Members</h2>
            <p className=" text-lg pt-2">
              {counting && (
                <CountUp start={0} end={3458} duration={2} delay={0}></CountUp>
              )}

              <span>+</span>
            </p>{" "}
          </div>
          <div className="text-center md:mb-0 mb-4">
            <h2 className="  text-xl font-semibold">Events</h2>
            <p className=" text-lg pt-2">
              {counting && (
                <CountUp start={0} end={58} duration={2} delay={0}></CountUp>
              )}
              <span>+</span>
            </p>
          </div>
          <div className="text-center md:mb-0 mb-4">
            <h2 className="  text-xl font-semibold">Awards</h2>
            <p className=" text-lg pt-2">
              {counting && (
                <CountUp start={0} end={3245} duration={2} delay={0}></CountUp>
              )}
              <span>+</span>
            </p>
          </div>
          <div className="text-center md:mb-0 mb-4">
            <h2 className="  text-xl font-semibold">Picnic</h2>
            <p className=" text-lg pt-2">
              {" "}
              {counting && (
                <CountUp start={0} end={45} duration={2} delay={0}></CountUp>
              )}
              <span>+</span>
            </p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default MembersStat;
