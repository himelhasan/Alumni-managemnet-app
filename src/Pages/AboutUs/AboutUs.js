import React from "react";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import student from "../../assets/batchwiseStudent.jpg";
import GallerySlider from "../../sharedComponents/GallerySlider/GallerySlider";
import TestimonialSlider from "../../sharedComponents/TestimonialSlider/TestimonialSlider";

const AboutUs = () => {
  return (
    <div className="">
      <InnerPageHeader
        title={"About Us"}
        img={student}
        description={
          "At our alumni management system, we are dedicated to helping educational institutions build stronger relationships with their alumni communities. Our system offers a range of tools and resources to support engagement, philanthropy, and lifelong learning, including a robust alumni directory, event management capabilities, and targeted communication tools. Scroll here to learn more about our mission, values, and team, and how we can help your institution achieve its alumni engagement goals."
        }
      ></InnerPageHeader>

      <div className="md:w-9/12 mx-auto grid md:grid-cols-2 px-5  gap-16 items-center my-16">
        <div>
          <h2 className="md:text-4xl text-3xl mb-5">Who we are</h2>
          <p className="text-justify">
          We are a team of experienced professionals with a passion for helping educational institutions engage with their alumni communities. With a deep understanding of the challenges facing educational institutions today, we have developed a comprehensive alumni management system that provides institutions with the tools and resources they need to build stronger relationships with their graduates. Our mission is to help institutions foster engagement, philanthropy, and lifelong learning, and we are committed to providing exceptional service and support to our clients.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/7942538/pexels-photo-7942538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>

      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-primary uppercase rounded-full bg-teal-accent-400">
              Our Dedicated Team
            </p>
            <p className="text-base text-gray-700 md:text-lg">
            Our web developers are highly skilled and committed to delivering exceptional results. With expertise in web design, programming, and user experience, they ensure our alumni management system is user-friendly and effective.
            </p>
          </div>
          <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://i.ibb.co/Byrj51c/hemel-vai.jpg"
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">Hemel Hasan</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Web Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://i.ibb.co/m4TXX8v/pervez-hossain.jpg"
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">Md Pervez Hossain</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Web Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://i.ibb.co/4tNCSfh/rakiv-vai.jpg"
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">Aminull Islam Rakib</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Web Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://i.ibb.co/THHRFS0/rafayat-vai.jpg"
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">Rafayat rony</p>
                <p className="mb-5 text-xs text-gray-800">
                  Full Stack Web Developer
                </p>
                <div className="flex items-center space-x-3 sm:justify-center">
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5"
                    >
                      <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-9/12 mx-auto grid md:grid-cols-2 px-5 gap-16 items-center my-16">
        <div>
          <img
            src="https://images.pexels.com/photos/7942538/pexels-photo-7942538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>

        <div>
          <h2 className="md:text-4xl text-3xl mb-5">Why we Care</h2>
          <p className="text-justify">
          At our alumni management system, we care deeply about helping educational institutions build stronger relationships with their alumni communities. We believe that strong alumni engagement is critical to the success of educational institutions, and we are dedicated to providing the tools and resources that institutions need to foster engagement, philanthropy, and lifelong learning. We are passionate about what we do, and we are committed to making a difference in the world through our work.
          </p>
        </div>
      </div>

      <div>
        <TestimonialSlider></TestimonialSlider>
      </div>
      <GallerySlider></GallerySlider>
    </div>
  );
};

export default AboutUs;
