import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import Counter from "../../../sharedComponents/Counter/Counter";
import { useGetEventsQuery } from "../../../features/Api/apiSlice";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import Loading from "../../../sharedComponents/Loading/Loading";
import { Link } from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Initialize AOS
// AOS.init();

const UpComingEventsCard = () => {
  //  for pagination
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(1);

  const nextHandler = () => {
    if (next < filteredEvents) {
      setNext(next + 1);
      setPrevious(previous + 1);
    }
  };
  const previousHandler = () => {
    if (previous > 0) {
      setNext(next - 1);
      setPrevious(previous - 1);
    }
  };

  const {
    data: eventData,
    isError: eventIsError,
    isLoading: eventDataIsLoading,
    error: eventDataError,
  } = useGetEventsQuery();

  // filter to check if the event is upcoming
  const filterByDate = (eventDateArray) => {
    const eventDate = new Date(eventDateArray.date);
    const today = new Date();
    if (eventDate > today) {
      return true;
    }
    return false;
  };

  let eventDataContent;

  if (eventDataIsLoading && !eventIsError) {
    eventDataContent = <Loading />;
  }
  if (!eventDataIsLoading && eventIsError) {
    eventDataContent = <ErrorAlert text={eventDataError} />;
  }
  if (!eventDataIsLoading && !eventIsError && eventData?.length === 0) {
    eventDataContent = <ErrorAlert text="No Images Find" />;
  }
  if (!eventDataIsLoading && !eventIsError && eventData?.length > 0) {
    eventDataContent = (
      <>
        {eventData
          .filter(filterByDate)
          .slice(previous, next)
          .map((eventData) => (
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
              key={eventData._id}
              className="sm:flex shadow-soft-lg drop-shadow-lg	 justify-between items-center sm:w-full max-w-5xl mx-auto bg-primary  gap-4 relative -top-[24px]"
            >
              <div className="absolute bg-white text-gray-900 -top-[24px] right-[0rem]  md:right-[2.5rem] shadow-md px-4">
                <h1 className="text-xl font-semibold">UpComing Events</h1>
              </div>
              {/* images */}
              <div
                loading="lazy"
                className={`h-[24rem] md:h-100 w-full md:w-1/2 bg-accent bg-cover`}
                style={{
                  backgroundImage: `url(${eventData.image_url})`, // dynamic background image
                  // backgroundImage: `url(https://i.ibb.co/k50VDVN/events-hall.jpg)`,
                }}
              ></div>

              {/* content */}
              <div className="sm:w-1/2 w-full flex flex-col justify-between py-6 px-4">
                {eventData.date ? (
                  <>
                    <Counter date={eventData.date} color="text-white"></Counter>
                  </>
                ) : (
                  <></>
                )}

                <h1 className="text-xl font-semibold text-white py-4">
                  {eventData.event_title}
                </h1>

                <p className="text-white ">{eventData.description.slice(0, 200)}...</p>
                <button className=" bg-white hover:bg-secondary p-2 mt-4 mb-8 w-[150px]">
                  <Link to={`/events/${eventData._id}`} className="text-black font-bold">
                    Join Now <MdNavigateNext className="inline-block text-black" />
                  </Link>
                </button>
                <div className="bg-secondary text-black w-[100px] py-2 flex justify-evenly items-center absolute right-2 bottom-2">
                  <button className="text-right" disabled={previous <= 0}>
                    <MdNavigateNext
                      className="rotate-180"
                      size={23}
                      onClick={() => previousHandler()}
                    />{" "}
                  </button>
                  <button className="text-right" disabled={next <= eventData.length}>
                    <MdNavigateNext
                      className=""
                      size={23}
                      onClick={() => nextHandler()}
                    />{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

  const filteredEvents = eventData?.filter(filterByDate).length;

  return <>{eventDataContent}</>;
};

export default UpComingEventsCard;
