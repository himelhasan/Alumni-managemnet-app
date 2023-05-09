import React, { useEffect, useRef, useState } from "react";

const Counter = ({ date, color }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mintues, setMintues] = useState("00");
  // const [seceonds, setSeceonds] = useState("00");

  const eventDate = new Date(date);
  const today = new Date();

  if (today > eventDate) {
    // console.log("this is expired");
  } else if (eventDate > today) {
    // console.log("upcoming event");
  } else {
    // console.log("date1 is equal to date2");
  }

  let interval = useRef();

  const startTimer = () => {
    const coundownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coundownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // const seceonds = Math.floor((distance % (1000 * 60)) / 1000);
      // console.log(days, hours, mintues, seceonds);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMintues(mintues);
        // setSeceonds(seceonds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      {today > eventDate && (
        <>
          {" "}
          <span className="bg-secondary text-primary px-4 py-1">
            Expired{" "}
          </span>{" "}
        </>
      )}

      {eventDate > today && (
        <div className={`${color} flex gap-4 font-semibold`}>
          <div>
            <span className=" text-xs text-center">Days</span>
            <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
              <span className="text-black">{days}</span>
            </div>
          </div>
          <div>
            <span className=" text-xs text-center">Hours</span>
            <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
              <span className="text-black">{hours}</span>
            </div>
          </div>
          <div>
            <span className="text-xs text-center">Min</span>
            <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
              <span className="text-black">{mintues}</span>
            </div>
          </div>
          {/* <div>
            <span className=" text-xs text-center">Sec</span>
            <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
              <span className="text-black">{seceonds}</span>
            </div>
          </div> */}
          {/* <span className="text-white mt-6">Remaining</span> */}
        </div>
      )}
    </div>
  );
};

export default Counter;
