import React, { useState } from "react";
import pervez from "../../assets/pervez.jpg";
import {
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";

const SingleStudent = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(8);

  const handlePrevious = () => {
    if (previous > 0) {
      setPrevious(previous - 8);
      setNext(next - 8);
    }
    console.log("Clicked Previous");
  };
  const handleNext = () => {
    setPrevious(previous + 8);
    setNext(next + 8);
    console.log("clicked next");
  };
  return (
    <div>
      <div className="bg-primary text-center text-white md:py-24 md:px-24 py-16 px-12 ">
        <div className="md:w-1/2 mx-auto ">
          <h2 className="md:text-4xl text-2xl mb-5">About Student</h2>
          <hr className="border-2 w-24 mx-auto border-secondary " />
          <p className="mt-5">
            There are many company Lorem ipsm dolor sitg amet, csetur adipicing
            elit, sed do eiusmod tempor
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto md:my-32 my-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 col-span-1">
            <div>
              <img src={pervez} alt="" className="h-72 rounded-full mb-5" />
            </div>
            <div className="mb-4">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <h2 className="text-2xl mb-4"> Sadia Rahman</h2>
                  <div className="mb-5">
                    <p>Graduation Year: 2015</p>
                    <p>Degree : Bachelor of Science</p>
                    <p>Department :Computer Science</p>
                    <p>Major : Computer Science</p>
                    <p>Email : sadia.rahman@example.com</p>
                    <p>Phone : 123-456-7890</p>
                    <p>Phone 2 : 555-555-5555</p>
                    <p>Address : 123 Main Street , Dhaka</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl mb-3">Personal Information</h2>
                  <p>Date_of_Birth : 1993-01-01 </p>
                  <p>Gender : Female </p>
                  <p>Fathers Name: Md. Abdul Rahman </p>
                  <p>Mothers Name : Shahnaz Rahman </p>
                  <p>Marital Status : Married </p>
                  <p>Languages : Bangla , English </p>
                  <p>Hobbies : Reading Books , Traveling </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl mb-3">Education</h2>
                <div className="grid md:grid-cols-2 gap-5 ">
                  <div>
                    <p>Degree : SSC</p>
                    <p>major : Science</p>
                    <p>institution : Ideal School and College</p>
                    <p>Graduation Year : 2009</p>
                    <p>GPA : 5.00</p>
                  </div>
                  <div>
                    <p>Degree : HSC</p>
                    <p>major : Science</p>
                    <p>institution : Viqarunnisa Noon College</p>
                    <p>Graduation Year : 2011</p>
                    <p>GPA : 5.00</p>
                  </div>
                  <div>
                    <p>Degree : Bachelor of Science</p>
                    <p>major : Computer Science</p>
                    <p>
                      institution : Bangladesh University of Engineering and
                      Technology
                    </p>
                    <p>Graduation Year : 2015</p>
                    <p>GPA : 3.9</p>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl mb-3">Careers</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <p>Company : Grameenphone</p>
                    <p>Position : Software Engineer</p>
                    <p>Start Date : 2015-07-01</p>
                    <p>End Date : 2018-12-31</p>
                    <h2>Responsibilities</h2>
                    <p>Developed and maintained software applications</p>
                    <p>
                      Collaborated with cross-functional teams to deliver
                      projects on time and within budget
                    </p>
                    <p>
                      Participated in code reviews and provided feedback to team
                      members
                    </p>
                  </div>
                  <div>
                    <p>Company : Pathao</p>
                    <p>Position : Senior Software Engineer</p>
                    <p>Start Date : 2019-01-01</p>
                    <p>End Date : null</p>
                    <h2>Responsibilities</h2>
                    <p>Lead a team of software engineers</p>
                    <p>
                      Develop and design software architecture for large-scale
                      applications
                    </p>
                    <p>
                      Collaborate with product and design teams to ensure timely
                      delivery of high-quality products
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <FaFacebook className="text-primary hover:text-secondary duration-500 ease-in-out"></FaFacebook>
              <FaGithub className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGithub>
              <FaGoogle className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGoogle>
              <FaLinkedin className="text-primary hover:text-secondary duration-500 ease-in-out"></FaLinkedin>
            </div>
          </div>
          <div className="bg-accent md:p-5 p-2 col-span-1">
            <h2 className="md:text-3xl text-2xl md:mb-8 mb-5">
              Similler <br /> Batch Student
            </h2>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>
            <div className="flex items-center md:gap-5 gap-3 mb-8">
              <img src={pervez} alt="" className="h-24 rounded-full" />
              <div>
                <h2 className="text-xl">Pervez Hossain</h2>
                <button className="text-secondary font-semibold">
                  Details
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
              </button>
              <button onClick={() => handleNext()}>
                <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleStudent;
