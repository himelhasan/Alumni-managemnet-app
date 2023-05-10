import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreNews = ({ _id }) => {
  const [news, setNews] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNews(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(news);
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
      {news?.length > 1 ? (
        <>
          <h2 className="text-2xl mb-8">Explore More News</h2>
          <div className="grid lg:grid-cols-3 gap-5">
            {news
              .filter((story) => story._id !== _id && story?.status === true)
              ?.slice(previous, next)
              .map((story) => {
                return (
                  <>
                    <div
                      key={story._id}
                      className="flex items-center gap-3  mb-5"
                    >
                      <div
                        style={{
                          backgroundImage: `url(${story?.image})`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          height: "150px",
                          width: "250px",
                        }}
                      ></div>
                      <div>
                        <h2 className="mb-2">
                          {story?.heading?.length >= 20 ? (
                            <>{`${story?.heading?.slice(0, 20)}...`}</>
                          ) : (
                            <>{`${story?.heading}`}</>
                          )}
                        </h2>
                        <p className="text-[12px] mb-2">
                          {story?.newsDetails?.length >= 70 ? (
                            <> {`${story.newsDetails.slice(0, 70)} ...`}</>
                          ) : (
                            <>{`${story.newsDetails}`}</>
                          )}
                        </p>
                        <Link to={`/news/${story._id}`}>
                          {" "}
                          <button className="bg-primary  px-4 py-2 text-white">
                            Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
          {news?.length > 6 ? (
            <>
              <div className="flex gap-2 justify-end">
                <button onClick={() => handlePrevious()}>
                  <FaArrowLeft></FaArrowLeft>
                </button>
                <button
                  disabled={next > news?.length}
                  onClick={() => handleNext()}
                >
                  <FaArrowRight></FaArrowRight>
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MoreNews;
