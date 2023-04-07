import React from "react";
import pervez from "../../assets/pervez.jpg";
import {
  FaArrowLeft,
  FaArrowRight,
  FaEdit,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";

const SingleStudent = () => {
  return (
    <div className="w-9/12 mx-auto mb-32">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 col-span-1">
          <div className="relative">
            <img src={pervez} alt="" className="h-72 rounded-full" />
            <div className="absolute bottom-[-20px] left-[125px] bg-secondary text-primary rounded-full p-2 border-4 border-white  ">
              <FaEdit className="text-xl"></FaEdit>
            </div>
          </div>
          <h2 className="md:text-4xl text-2xl my-4">Pervez Hossain</h2>
          <p>
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing
            elit, sed do eiusmod tempor dncint ut labore et dolore magna alis
            enim ad minim veniam, quis.There are many company Lorem ipsm dolor
            sitg amet, csetur adipicing elit, sed do eiusmod tempor dncint ut
            labore et dolore magna alis enim ad minim veniam, quisThere are many
            company Lorem ipsm dolor sitg amet, csetur adipicing elit, sed do
            eiusmod tempor dncint ut labore et dolore magna alis enim ad minim
            veniam, quis
          </p>
          <h2 className="md:text-3xl text-2xl my-4">Contact :</h2>
          <div className="mb-4">
            <p>Blood Group : B+</p>
            <p>Maritual Status : Married</p>
            <p>Profession : Freelancer</p>
            <p>Passing Year : 2013</p>
            <p>Email : info@gmail.com</p>
            <p>Phone Number : 01631309254</p>
          </div>
          <div className="flex items-center gap-3 ">
            <FaFacebook className="text-primary hover:text-secondary duration-500 ease-in-out"></FaFacebook>
            <FaGithub className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGithub>
            <FaGoogle className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGoogle>
            <FaLinkedin className="text-primary hover:text-secondary duration-500 ease-in-out"></FaLinkedin>
          </div>
        </div>
        <div className="bg-accent md:p-5 p-2 col-span-1">
          <h2 className="md:text-3xl text-2xl md:mb-8 mb-4">
            Similler <br /> Batch Student
          </h2>
          <div className="flex items-center md:gap-5 gap-3 mb-5">
            <img src={pervez} alt="" className="h-24 rounded-full" />
            <div>
              <h2 className="text-xl">Pervez Hossain</h2>
              <button className="text-secondary font-semibold">Details</button>
            </div>
          </div>
          <div className="flex items-center md:gap-5 gap-3 mb-5">
            <img src={pervez} alt="" className="h-24 rounded-full" />
            <div>
              <h2 className="text-xl">Pervez Hossain</h2>
              <button className="text-secondary font-semibold">Details</button>
            </div>
          </div>
          <div className="flex items-center md:gap-5 gap-3 mb-5">
            <img src={pervez} alt="" className="h-24 rounded-full" />
            <div>
              <h2 className="text-xl">Pervez Hossain</h2>
              <button className="text-secondary font-semibold">Details</button>
            </div>
          </div>
          <div className="flex items-center md:gap-5 gap-3 mb-5">
            <img src={pervez} alt="" className="h-24 rounded-full" />
            <div>
              <h2 className="text-xl">Pervez Hossain</h2>
              <button className="text-secondary font-semibold">Details</button>
            </div>
          </div>
          <div className="flex items-center md:gap-5 gap-3 mb-5">
            <img src={pervez} alt="" className="h-24 rounded-full" />
            <div>
              <h2 className="text-xl">Pervez Hossain</h2>
              <button className="text-secondary font-semibold">Details</button>
            </div>
          </div>
          <div className="flex items-center md:gap-5 gap-3 mb-5">
            <img src={pervez} alt="" className="h-24 rounded-full" />
            <div>
              <h2 className="text-xl">Pervez Hossain</h2>
              <button className="text-secondary font-semibold">Details</button>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3">
            <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
            <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
