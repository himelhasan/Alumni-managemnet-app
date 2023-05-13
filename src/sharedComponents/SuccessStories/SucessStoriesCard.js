import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SuccessStoriesCard = ({ data }) => {
  return (
    <div key={data._id} className="w-full pb-5 shadow-lg">
      <div
        className={` h-[269px] bg-cover `}
        style={{ backgroundImage: `url(${data.image_url})` }}
      ></div>
      {/* <img className="" src={data.image} alt="demo" /> */}
      <div className="pl-2 pt-3 ">
        <Link to={`/successFullStory/${data._id}`}>
          <h5 className="text-xl pb-3 font-semibold">
            {data?.title?.length >= 20 ? (
              <>{`${data?.title.slice(0, 20)} ...`}</>
            ) : (
              <>{`${data?.title}`}</>
            )}
          </h5>
        </Link>
        {data?.details?.length >= 70 ? (
          <>{`${data?.details.slice(0, 70)} ...`}</>
        ) : (
          <>{`${data?.details} `}</>
        )}
        <p></p>
        <div className="mt-3  flex gap-2 items-center">
          <Link to={`/successFullStory/${data._id}`}>
            <span className="font-medium underline ">Read more</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesCard;
