import React, { useEffect, useState } from "react";
import student from "../../assets/batchwiseStudent.jpg";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import { MdNavigateNext } from "react-icons/md";
import AllEventsCard from "../../sharedComponents/Events/AllEvents/AllEventsCard";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import {
  useGetEventsCategoriesQuery,
  useGetEventsQuery,
} from "../../features/Api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentId } from "../../features/generalFilters/generalFilters";

const Events = () => {
  //  for pagination
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(4);

  const nextHandler = () => {
    setNext(next + 4);
    setPrevious(previous + 4);
  };
  const previousHandler = () => {
    if (previous > 0) {
      setNext(next - 4);
      setPrevious(previous - 4);
    }
  };

  // importing dispatch
  const dispatch = useDispatch();
  // getting current selected it form redux store
  const { currentId } = useSelector((state) => state.generalFilter);
  function handleEventLoad(currentEvent) {
    dispatch(selectCurrentId(currentEvent));
  }

  const filterCategoryWise = (events) => {
    if (currentId.length > 0) {
      return currentId.includes(events.category);
    }
    return true;
  };

  const {
    data: eventsContentData,
    isLoading: isEventsLoading,
    isError: isEventsError,
    error: eventsError,
  } = useGetEventsQuery();

  let eventsContent;

  if (isEventsLoading && !isEventsError) {
    eventsContent = <Loading />;
  }
  if (!isEventsLoading && isEventsError) {
    eventsContent = <ErrorAlert text={eventsError} />;
  }
  if (!isEventsLoading && !isEventsError && eventsContentData?.length === 0) {
    eventsContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isEventsLoading && !isEventsError && eventsContentData?.length > 0) {
    eventsContent = (
      <>
        {" "}
        <div data-aos="fade-up"
     data-aos-duration="3000" className="grid grid-cols-1 md:grid-cols-2">
          {eventsContentData
            .filter(filterCategoryWise)
            .slice(previous, next)
            .map((item) => (
              <AllEventsCard key={item._id} item={item} />
            ))}
        </div>
      </>
    );
  }

  const {
    data: eventCategory,
    isLoading,
    isError,
    error,
  } = useGetEventsCategoriesQuery();

  let eventCategoryContent;

  if (isLoading && !isError) {
    eventCategoryContent = <Loading />;
  }
  if (!isLoading && isError) {
    eventCategoryContent = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    eventCategoryContent = (
      <>
        {" "}
        {eventCategory?.map((item) => (
          <button
            key={item._id}
            onClick={() => handleEventLoad(item._id)}
            className="px-5 py-2 text-left text-sm font-semibold  hover:text-primary text-gray-900"
          >
            {item.eventCategory}
          </button>
        ))}
      </>
    );
  }

  return (
    <>
      <InnerPageHeader
        title="Event"
        img={student}
        description="Find all the events in one place"
      />
      <div className="w-9/12 mx-auto my-20 sm:flex gap-3">
        {/* for mobile */}
        <div className="md:w-1/4 w-full border-3 border-black border-solid sm:hidden block mt-10 p-3">
          <select
            onChange={(e) => handleEventLoad(e.target.value)}
            className="select w-full max-w-xs bg-clip-border bg-accent m-0"
          >
            {eventCategory?.map((item) => (
              <option
                key={item?._id}
                className="text-lg font-semibold"
                value={item?.eventCategory}
              >
                {item?.eventCategory}
              </option>
            ))}
          </select>
        </div>
        <div className=" md:w-3/4 w-full">
          <div>
            <h2 className="text-2xl text-primary">Events</h2>
            <>{eventsContent}</>
            {/* Pagination button */}
            <div className="right-0 text-white mb-5 text-right mt-5 flex gap-4 justify-end items-center mr-3">
              <button
                disabled={previous <= 0}
                onClick={() => previousHandler()}
                className="text-right bg-primary"
              >
                <span>
                  <MdNavigateNext
                    className="inline-block rotate-180 font-semibold text-xl"
                    color="white"
                  />
                </span>
              </button>
              <button
                disabled={next > eventsContentData?.length}
                onClick={() => nextHandler()}
                className="text-right bg-primary"
              >
                <span>
                  <MdNavigateNext
                    className="inline-block font-semibold text-xl"
                    color="white"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* for web */}
        <div className="border-l-2 border-accent  hidden sm:block pl-5">
          <div className="flex sm:flex-col flex-row justify-center items-start mx-auto">
            <h5 className="px-5 py-2 text-lg font-semibold text-primary">
              Browse Events
            </h5>
            <>{eventCategoryContent}</>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
