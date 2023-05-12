import React from "react";
import { Link } from "react-router-dom";

const MoreCharity = ({ charity }) => {
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
    status,
  } = charity;
  return (
    <div>
      {image_url ? (
        <>
          <div
            style={{
              backgroundImage: `url(${image_url})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "150px",
            }}
          ></div>
        </>
      ) : (
        <>
          <div
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "150px",
            }}
          ></div>
        </>
      )}
      <div className="pl-2 pt-3 ">
        <h2 className="text-xl">
          {title ? (
            <>
              {" "}
              {title?.length >= 20 ? (
                <>{`${title?.slice(0, 20)}...`}</>
              ) : (
                <>{`${title}`}</>
              )}
            </>
          ) : (
            <>
              <h2> Title Missing</h2>
            </>
          )}
        </h2>
        <p className="mb-2">
          {details ? (
            <>
              {details?.length >= 70 ? (
                <> {`${details?.slice(0, 70)} ...`}</>
              ) : (
                <>{`${details}`}</>
              )}
            </>
          ) : (
            <>
              <p>Details Missing</p>
            </>
          )}
        </p>
        <Link to={`/charity/${_id}`}>
          <button className="bg-primary px-6 py-2 text-white ">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default MoreCharity;
