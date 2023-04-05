import React from "react";
import { MdNavigateNext } from "react-icons/md";
import banner from "../../assets/heroBanner.jpg";

const Slider = () => {
  return (
    <div className="w-full mx-auto mb-20">
      <div className="relative">
        <img src={banner} className="w-full" alt="Hero Banner" />
        <div className="absolute w-full md:w-1/2 px-2 mb-2  text-center     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <h2 className="md:text-5xl text-2xl font-semibold  text-white md:mb-2">
            We Are Proud
          </h2>
          <h4 className="text-white md:text-2xl md:mb-2">
            {" "}
            To Be Student Of Oxfort University{" "}
          </h4>
          <p className="text-white md:mb-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quia, mollitia
            voluptate debitis quidem rerum esse at sint possimus impedit.
          </p>
          <button className=" py-4 px-8 text-right text-primary font-bold bg-secondary">
            <span>
              More Stories <MdNavigateNext className="inline-block" color="blue" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
