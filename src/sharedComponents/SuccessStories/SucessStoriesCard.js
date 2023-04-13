import React from "react";

const SuccessStoriesCard = ({ data }) => {
  return (
    <div key={data._id} className="w-full pb-5 shadow-lg">
      <div
        className={` h-[269px] bg-cover `}
        style={{ backgroundImage: `url(${data.image})` }}
      ></div>
      {/* <img className="" src={data.image} alt="demo" /> */}
      <div className="px-8 pt-5 ">
        <h5 className="text-xl py-3 font-semibold">{data?.title}</h5>
        <p>{data?.description}</p>
        <div className="mt-3 font-semibold flex justify-between items-center">
          <button className="underline">Read more</button>
          {/* <span>Author: {data?.author.name}</span> */}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesCard;
