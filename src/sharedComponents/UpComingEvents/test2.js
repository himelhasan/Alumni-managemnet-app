import React, { useState } from "react";

const EventSlider = () => {
    const events = [
        {
            id: 1,
            title: "Event 1",
            description: "This is event 1.",
            image:
                "https://images.unsplash.com/photo-1558980394-5909d4ea71c1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcGFueSUyMGludGVycHJpc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 2,
            title: "Event 2",
            description: "This is event 2.",
            image:
                "https://images.unsplash.com/photo-1509669803555-10d7c5efea1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueSUyMEludGVycHJpc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
            id: 3,
            title: "Event 3",
            description: "This is event 3.",
            image:
                "https://images.unsplash.com/photo-1616177734714-23287d6cb27e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMEludGVycHJpc2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);
    };

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between">
                <button
                    onClick={prevSlide}
                    className="absolute inset-y-0 left-0 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute inset-y-0 right-0 z-10 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-800"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            <div className="relative w-full h-64">
                {events.map((event, index) => (
                    <div
                        key={event.id}
                        className={`absolute w-full h-64 ${index === currentIndex ? "z-10" : "opacity-0"
                            } transition-opacity duration-500 ease-in-out`}
                    >
                        <div
                            className="bg-cover bg-center w-full h-full"
                            style={{ backgroundImage: `url(${event.image})` }}
                        >
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white p-4 rounded-lg">
                                    <h2 className="text-lg font-bold">{event.title}</h2>
                                    <p className="text-sm text-gray-500">{event.date}</p>
                                    <p className="text-sm">{event.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventSlider;
