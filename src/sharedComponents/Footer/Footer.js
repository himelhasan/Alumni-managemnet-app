import React from "react";

const Footer = () => {
  return (
    <div className="bg-green-500 text-white mt-16">
      <div className="w-9/12 mx-auto grid md:grid-cols-2 md:gap-72 py-16 ">
        <div>
          <h2 className="text-4xl font-bold mb-2">Alumni</h2>
          <p className="mb-5">
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing elit, sed
            do eiusmod tempor dncint ut labore et dolore magna alis enim ad minim veniam,
            quis
          </p>
          <input
            className="py-2 px-4 rounded-tl-lg font-semibold rounded-br-lg"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />
          <button className="bg-white text-black font-semibold rounded-tl-lg rounded-br-lg py-2 px-4 md:ml-4 mt-2">
            Submit
          </button>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-2 mt-3">Contact</h2>
          <p>134, Mirpur 2, Dhaka City Bangladesh</p>
          <p>++789995266632</p>
          <p>++789995266632</p>
          <h2 className="text-4xl font-bold mt-2">Social Media</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
