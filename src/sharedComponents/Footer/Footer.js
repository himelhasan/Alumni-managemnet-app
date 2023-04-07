import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-primary text-white">
      <div className="w-9/12 mx-auto grid md:grid-cols-2 md:gap-72 py-16 ">
        <div>
          <img src={logo} alt="" className="h-16 mb-4" />
          <p className="mb-5">
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing elit, sed
            do eiusmod tempor dncint ut labore et dolore magna alis enim ad minim veniam,
            quis
          </p>
          <input
            className="py-2 px-4 font-semibold"
            type="email"
            name=""
            id=""
            placeholder="Email"
          />

          <button className="bg-secondary text-primary font-semibold py-2 px-4 md:ml-4 mt-4">
            Submit
          </button>
        </div>
        <div>
          <h2 className="text-xl font-medium  mb-3 mt-5 md:mt-0">Contact</h2>
          <p className="mb-2">
            Jatrabari, Dhania, Dhaka Bangladesh 1232 Dhaka, Dhaka Division, Bangladesh
          </p>
          <div className="flex items-center gap-3">
            <FaPhone className="text-secondary"></FaPhone>
            <p className="mb-2"> +880 151 6150 533</p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-secondary"></FaPhone>
            <p className="mb-2"> +880 197 6150 533</p>
          </div>
          <h2 className="text-xl font-medium my-3">Social Media</h2>
          <div className="flex  items-center gap-4 text-secondary">
            <FaFacebook></FaFacebook>
            <FaLinkedin></FaLinkedin>
            <FaTwitter></FaTwitter>
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
