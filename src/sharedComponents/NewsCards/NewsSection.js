import React, { useEffect, useState } from "react";
// import { MdNavigateNext } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaRegComment } from "react-icons/fa";
import NewsCard from "./NewsCard";
import { useGetaLLNewsQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";

const NewsSection = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(3);

  const {
    data: newsData,
    isError: newsIsError,
    isLoading: newsIsLoading,
    error: newsError,
  } = useGetaLLNewsQuery();

  let newsContent;

  if (newsIsLoading && !newsIsError) {
    newsContent = <Loading />;
  }
  if (!newsIsLoading && newsIsError) {
    newsContent = <ErrorAlert text={newsError} />;
  }
  if (!newsIsLoading && !newsIsError && newsData?.length === 0) {
    newsContent = <ErrorAlert text="No News Find" />;
  }
  if (!newsIsLoading && !newsIsError && newsData?.length > 0) {
    newsContent = (
      <>
        {" "}
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
          {newsData?.slice(previous, next).map((data, i) => (
            <NewsCard key={i} data={data}></NewsCard>
          ))}
        </div>
      </>
    );
  }

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 3);
      setPrevious(previous - 3);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 3);
    setPrevious(previous + 3);
  };

  return (
    <div 
   className="mx-auto mt-[5.5rem]">
      <h1 data-aos="zoom-out-up" className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold text-center">
        Recent News
      </h1>
      <>{newsContent}</>

      {newsData?.length > 3 && (
        <div className="flex gap-2 justify-end">
          <button onClick={() => handlePrevious()}>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button
            disabled={next === newsData?.length || next > newsData?.length}
            onClick={() => handleNext()}
          >
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsSection;
