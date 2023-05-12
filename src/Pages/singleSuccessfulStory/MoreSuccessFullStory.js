import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreSuccessFullStory = ({ _id }) => {
  console.log(_id);
  const [stories, setStories] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/successFullStory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStories(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(stories);
  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 6);
      setPrevious(previous - 6);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 6);
    setPrevious(previous + 6);
  };
  return (
    <div>
      {stories
        ?.filter((story) => story._id !== _id && story.status === true)
        .slice(previous, next)
        .map((story) => {
          return (
            <>
              <div
                key={story?._id}
                className="flex items-center gap-3 justify-between mb-5"
              >
                <div
                  style={{
                    backgroundImage: `url(${story?.image_url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "150px",
                    width: "250px",
                  }}
                ></div>
                <div>
                  <h2 className="mb-2">
                    {story?.title?.length >= 20 ? (
                      <> {`${story?.title?.slice(0, 20)} ...`}</>
                    ) : (
                      <>{`${story?.title}`}</>
                    )}
                  </h2>
                  <p className="text-[12px] mb-2">
                    {story?.details?.length >= 40 ? (
                      <>{`${story?.details?.slice(0, 40)} ...`}</>
                    ) : (
                      <>{`${story?.details}`}</>
                    )}
                  </p>
                  <Link to={`/successFullStory/${story._id}`}>
                    {" "}
                    <button className="bg-primary px-4 py-2 text-white">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      {stories?.length < 1 ? (
        <>
          <div className="flex gap-2 justify-end">
            <button onClick={() => handlePrevious()}>
              <FaArrowLeft></FaArrowLeft>
            </button>
            <button
              disabled={next > stories?.length}
              onClick={() => handleNext()}
            >
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MoreSuccessFullStory;
