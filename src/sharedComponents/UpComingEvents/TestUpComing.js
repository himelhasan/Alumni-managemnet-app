import React, { useState, useEffect } from "react";
import "./tesSlider.css";
import data from "./data";
import { MdNavigateNext } from "react-icons/md";

const TestUpcoming = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className="section max-w-5xl">
            <div className="section-center">
                {
                    people.map((item, indexPeople) => {
                        const { id, image, name, title, quote } = item;
                        let position = "nextSlide";
                        if (indexPeople === index) {
                            position = "activeSlide";
                        }
                        if (
                            indexPeople === index - 1 ||
                            (index === 0 && indexPeople === people.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <article
                                className={position}
                                key={id}>
                                {/* <img src={image} alt={name} className="person-img" />
                                <h4>{name}</h4>
                                <p className="title">{title}</p>
                                <p className="text">{quote}</p> */}
                                <div className="sm:flex justify-between items-center sm:w-full max-w-5xl mx-auto bg-primary px-5 py-7 mt-8 gap-4 relative">
                                    <div className="sm:w-1/2 w-full rounded-tl-3xl rounded-br-3xl">
                                        <img className="rounded-tl-3xl rounded-br-3xl w-full h-[300px] md:h-[350px]" src={image} alt="events-hall" />
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
                                            <h1 className="text-xl font-semibold text-white">{title}</h1>
                                        </div>
                                        <p className="text-white mt-3">
                                            {quote}
                                        </p>
                                        <button className="btn bg-white p-2 mt-4 rounded-tl-lg rounded-br-lg w-[150px]">
                                            <span className="text-[#2D6B5A] font-bold">
                                                Join Now <MdNavigateNext className="inline-block text-[#2D6B5A]" />
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

export default TestUpcoming;
