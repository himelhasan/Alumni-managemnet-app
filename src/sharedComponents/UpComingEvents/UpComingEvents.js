import React from "react";
import { MdNavigateNext } from "react-icons/md";

const UpComingEvents = () => {
  return (
    <>
      <div className="sm:flex justify-between items-center sm:w-full max-w-5xl mx-auto bg-primary px-5 py-7 mt-8 gap-4 relative">
        <div className="absolute bg-white text-gray-900 -top-[24px] right-[2.5rem] shadow-md px-4">
          <h1 className="text-xl font-semibold">UpComing Events</h1>
        </div>
        {/* images */}
        <div className="sm:w-1/2 w-full rounded-tl-3xl rounded-br-3xl">
          <img className="rounded-tl-3xl rounded-br-3xl w-full h-[300px] md:h-[350px]" src="https://i.ibb.co/k50VDVN/events-hall.jpg" alt="events-hall" />
        </div>
        {/* content */}
        <div className="sm:w-1/2 w-full flex flex-col justify-between h-[300px] md:h-[350px]">
          <div className="flex gap-4">
            <div>
              <span className="text-white text-sm text-center">Days</span>
              <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>3</span> </div>
            </div>
            <div>
              <span className="text-white text-sm text-center">Hours</span>
              <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>23</span></div>
            </div>
            <div>
              <span className="text-white text-sm text-center">Min</span>
              <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>30</span></div>
            </div>
            <div>
              <span className="text-white text-sm text-center">Sec</span>
              <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>59</span></div>
            </div>
            <span className="text-white mt-6">Remaining</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-white">We are going to arrange a get together!</h1>
          </div>
          <p className="text-white mt-3">
            We are supporting to your career. You can join our event to develop your skill
            and share your experience. Joining this event you can gain knowledge from
            other and you can share your skills for the next generation. We respect your
            time. To explore the event Join Now.
          </p>
          <button className="btn bg-white p-2 mt-4 rounded-tl-lg rounded-br-lg w-[150px]">
            <span className="text-[#2D6B5A] font-bold">
              Join Now <MdNavigateNext className="inline-block text-[#2D6B5A]" />
            </span>
          </button>
          <div className="bg-blue-600 text-white w-[100px] py-2 flex justify-evenly items-center absolute right-2 bottom-2">
            <button className="text-right"><MdNavigateNext className="rotate-180" size={23}/> </button>
            <button className="text-right"><MdNavigateNext className="" size={23}/> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpComingEvents;
