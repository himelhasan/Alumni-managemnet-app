import React from "react";
import { Link } from "react-router-dom";

const MissionHeading = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="my-16 grid md:grid-cols-2 gap-10 items-center"
    >
      <div>
        <img
          className=""
          src="https://www.hec.edu/sites/default/files/inline-images/Alumni%20Reunion-23.jpg"
          alt=""
        />
      </div>

      <div>
        <h1 className="mb-6 text-2xl font-semibold">
          Connecting Alumni: Uniting Graduates
        </h1>
        <p className="text-justify">
          Alumni management system aims to provide innovative and efficient solutions to
          help alumni communities stay connected and engaged. By empowering alumni with
          cutting-edge management tools, the system seeks to enhance the overall alumni
          experience and foster stronger relationships between alumni and their alma
          mater.
        </p>
        <button className="mt-8 py-4 px-8 text-right text-primary font-bold bg-secondary">
          <Link to="/about-us">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default MissionHeading;
