import React from "react";

const InnerPageHeader = ({ title, img, description }) => {
  return (
    <div
      className={` bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="w-full h-full flex  justify-center items-center backdrop-brightness-50">
        <div className=" text-white py-10 px-20 md:py-28 md:px-40 lg:px-96 mx-auto text-center">
          <div>
            <h2 className="md:text-3xl text-2xl font-semibold md:mb-4 capitalize">
              {title}
            </h2>
          </div>
          <hr className="md:mb-3 my-5 w-24 mx-auto border-2 border-secondary " />

          <div>
            <p className="my-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerPageHeader;
