import React, { useState } from "react";
import SuccessStoriesCard from "./SucessStoriesCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";
import { useGetAllSuccessfulStoriesQuery } from "../../features/Api/apiSlice";

const SuccessStoriesSection = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(3);

  const {
    data: successStory,
    isError: successStoryIsError,
    isLoading: successStoryIsLoading,
    error: successStoryError,
  } = useGetAllSuccessfulStoriesQuery();

  let successStoryContent;

  if (successStoryIsLoading && !successStoryIsError) {
    successStoryContent = <Loading />;
  }
  if (!successStoryIsLoading && successStoryIsError) {
    successStoryContent = <ErrorAlert text={successStoryError} />;
  }
  if (!successStoryIsLoading && !successStoryIsError && successStory?.length === 0) {
    successStoryContent = <ErrorAlert text="No News Find" />;
  }
  if (!successStoryIsLoading && !successStoryIsError && successStory?.length > 0) {
    successStoryContent = (
      <>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-between mb-4"
        >
          {successStory
            ?.filter((story) => story?.status === true)
            .slice(previous, next)
            .map((data) => (
              <SuccessStoriesCard key={data._id} data={data}></SuccessStoriesCard>
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
    <div className="my-3  mx-auto relative">
      <h1 className="my-7 text-3xl font-semibold text-center">Successful Stories</h1>
      <>{successStoryContent}</>
      {successStory?.filter((story) => story?.status === true).length > 3 && (
        <div className="flex gap-2 justify-end">
          <button onClick={() => handlePrevious()}>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button disabled={next > successStory?.length} onClick={() => handleNext()}>
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      )}
    </div>
  );
};

export default SuccessStoriesSection;
