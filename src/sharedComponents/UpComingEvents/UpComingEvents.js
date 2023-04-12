import React, { useState, useEffect } from "react";
import "./eventsSlider.css";
import { MdNavigateNext } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BiTime } from "react-icons/bi";

const UpComingEvents = () => {
  const [events, setEvents] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/events")
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])
  console.log(events);
  useEffect(() => {
    const lastIndex = events.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, events]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="section-center">
        {
          events &&
          events?.map((item, indexPeople) => {
            const { id, image_url, date, time, location, batch, event_title, description } = item;
            let position = "nextSlide";
            if (indexPeople === index) {
              position = "activeSlide";
            }
            if (
              indexPeople === index - 1 ||
              (index === 0 && indexPeople === events?.length - 1)
            ) {
              position = "lastSlide";
            }
            return (
              <article
                className={position}
                key={id}>
                {/* <img src={image} alt={name} className="person-img" />
                                <h4>{name}</h4> */}
                {/* <p className="title">{title}</p>
                                <p className="text">{quote}</p> */}

                <div className="sm:flex justify-between items-center sm:w-full max-w-5xl mx-auto bg-primary px-5 py-7 mt-8 gap-4 relative">
                  <div className="sm:w-1/2 w-full rounded-tl-3xl rounded-br-3xl">
                    <img className="rounded-tl-3xl rounded-br-3xl w-full h-[300px] md:h-[350px]" src={image_url} alt="events-hall" />
                  </div>
                  {/* content */}
                  <div className="sm:w-1/2 w-full flex flex-col justify-between h-[300px] md:h-[350px]">
                    <div className="flex gap-4">
                      <div>
                        <span className="text-white text-sm text-center">Days</span>
                        <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>3</span> </div>
                      </div>
                      <div>
                        <span className="text-white text-sm text-center">Hours</span>
                        <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>23</span></div>
                      </div>
                      <div>
                        <span className="text-white text-sm text-center">Min</span>
                        <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>30</span></div>
                      </div>
                      <div>
                        <span className="text-white text-sm text-center">Sec</span>
                        <div className="w-8 h-8 bg-white text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>59</span></div>
                      </div>
                      <span className="text-white mt-6">Remaining</span>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-white">{event_title}</h1>
                      <span>{batch[0]} </span>
                      <small className="italic text-sm">{batch[1]}</small>
                    </div>
                    <p className="text-white mt-3">
                      {description}
                    </p>
                    <div className="text-accent italic flex flex-col">
                      <span><GoLocation size={23} className="inline-block mr-3" />{location}</span>
                      <span><BiTime size={23} className="inline-block mr-3" />In {date} at {time}</span>
                    </div>
                    <button className="btn bg-secondary p-2 mt-4 w-[150px] text-primary">
                      <span className="font-bold">
                        Join Now <MdNavigateNext className="inline-block text-primary" />
                      </span>
                    </button>

                    {/* slide button */}
                    <div className="bg-secondary text-white w-[100px] px-6 py-4 flex justify-between items-center absolute right-2 bottom-2">
                      <button
                        onClick={() => setIndex(index - 1)}
                        className="text-right"><MdNavigateNext className="rotate-180" size={23} />
                      </button>
                      <button
                        onClick={() => setIndex(index + 1)}
                        className="text-right"><MdNavigateNext className="" size={23} />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default UpComingEvents;
