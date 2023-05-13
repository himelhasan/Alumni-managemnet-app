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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
          {newsData
            ?.filter((news) => news?.status === true)
            .slice(previous, next)
            .map((data, i) => (
              <NewsCard key={i} data={data}></NewsCard>
            ))}
        </div>
      </>
    );
  }

  const handlePrevious = () => {
    if (previous > 0) {
      setNext(next - 3);
      setPrevious(previous - 3);
    }
  };
  const handleNext = () => {
    setNext(next + 3);
    setPrevious(previous + 3);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-offset="900"
      data-aos-easing="ease-in-sine"
      className="mx-auto mt-[5.5rem]"
    >
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold text-center">
        Recent News
      </h1>
      <>{newsContent}</>

      {newsData?.filter((news) => news?.status === true).length > 3 ? (
        <>
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
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NewsSection;
