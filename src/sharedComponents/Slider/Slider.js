import React from "react";
import banner from "../../assets/heroBanner.jpg";

const Slider = () => {
  return (
    <div className="md:w-9/12 mx-auto">
      <img src={banner} alt="Hero Banner" />
    </div>
  );
};

export default Slider;
