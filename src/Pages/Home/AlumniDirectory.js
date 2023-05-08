import React from "react";
import { Link } from "react-router-dom";

const AlumniDirectory = () => {
  return (
    <>
      <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="py-20 grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="mb-6 text-2xl font-semibold">Alumni Directory</h1>
          <p className="text-justify">
          An alumni directory can be a valuable resource for both educational institutions and alumni themselves. By keeping track of alumni contact information and career paths, institutions can stay connected with their graduates and provide them with relevant news and opportunities. For alumni, the directory can be a useful tool for networking and building professional connections within their community.
          </p>
          <Link to="/alumni">
            <button className="mt-8 py-4 px-8 text-right text-primary font-bold bg-secondary">
              Learn More
            </button>
          </Link>
        </div>

        <div>
          <img
            className=""
            src="https://www.ceu.edu/sites/default/files/media/user-7596/alumni_reunion_photo_booth.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AlumniDirectory;
