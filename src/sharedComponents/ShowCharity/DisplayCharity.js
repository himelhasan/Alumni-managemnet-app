import React from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const DisplayCharity = ({ charity }) => {
  const {
    batchNumber,
    city,
    state,
    country,
    _id,
    deadline,
    details,
    goal_amount,
    image_url,
    title,
    time,
    status,
  } = charity;

  return (
    <div>
      <>
        {" "}
        {image_url ? (
          <>
            {" "}
            <div
              style={{
                backgroundImage: `url(${image_url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "300px",
              }}
            ></div>
          </>
        ) : (
          <>
            {" "}
            <div
              style={{
                backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "300px",
              }}
            ></div>
          </>
        )}
        <div className="pl-2 pt-3">
          <h2 className="text-xl mb-3">
            {title ? (
              <>
                {" "}
                <Link to={`/charity/${charity?._id}`}>
                  {title?.length >= 20 ? (
                    <>
                      <h2 className="text-xl">{`${title.slice(0, 20)} ...`}</h2>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl">{`${title}`}</h2>
                    </>
                  )}
                </Link>
              </>
            ) : (
              <>
                <h2>Title Missing</h2>
              </>
            )}
          </h2>

          <p>
            {details ? (
              <>
                {details?.length >= 70 ? (
                  <>{`${details.slice(0, 70)} ...`}</>
                ) : (
                  <>{`${details}`}</>
                )}
              </>
            ) : (
              <>
                <p>Detais Missing</p>
              </>
            )}
          </p>
          <p className="mb-3"></p>
          <Link to={`/charity/${_id}`} className=" flex gap-1 items-center  ">
            <span className="font-medium underline"> Read More </span>
          </Link>
        </div>
      </>
    </div>
  );
};

export default DisplayCharity;
