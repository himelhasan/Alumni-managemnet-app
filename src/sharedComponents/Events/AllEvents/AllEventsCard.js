import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Counter from "../../Counter/Counter";

const AllEventsCard = ({ item }) => {
  const [newDate, setNewDate] = useState("");
  useEffect(() => {
    let todayDate = new Date(),
      month = "" + (todayDate.getMonth() + 1),
      day = "" + todayDate.getDate(),
      year = todayDate.getFullYear();
    if (day.length < 2) {
      day = "0" + day;
    }
    if (month.length < 2) {
      month = "0" + month;
    }
    // console.log(day, month, year);
    setNewDate([year, month, day].join("-"));
  }, []);
  return (
    <div
      key={item._id}
      className="my-10 md:flex gap-5  justify-between items-center w-full"
    >
      {/* image */}

      <div
        loading="lazy"
        className={`h-60  w-full md:w-1/2 bg-primary bg-cover`}
        style={{
          backgroundImage: `url(${item.image_url})`,
        }}
      >
        <div className="ease-in-out mx-auto h-full  flex pb-2 justify-center items-end bg-gradient-to-t from-black to-transparent from-10% to-50% px-5">
          {/* Time left part */}
          {item.date === newDate ? (
            <>
              <p>Events On Going</p>
            </>
          ) : (
            <>
              {" "}
              <Counter date={item.date} color="text-white"></Counter>
            </>
          )}
        </div>
      </div>
      {/* content */}
      <div className="md:w-1/2 w-full  flex flex-col justify-between p-2">
        <>
          <h1 className="text-xl font-semibold">
            {item?.event_title?.length >= 15 ? (
              <>{`${item?.event_title.slice(0, 15)}...`}</>
            ) : (
              <>{`${item?.event_title}`}</>
            )}
          </h1>
        </>
        <p className="mt-3">
          {item?.description?.length >= 30 ? (
            <>{`${item.description.slice(0, 30)}...`}</>
          ) : (
            <>{`${item.description}`}</>
          )}
        </p>
        {/*  */}

        {/*  */}
        <Link to={`/events/${item._id}`} className="text-white font-bold">
          <button className="mt-4 py-2 px-6 text-right text-white font-bold bg-primary">
            {" "}
            Learn More{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllEventsCard;
