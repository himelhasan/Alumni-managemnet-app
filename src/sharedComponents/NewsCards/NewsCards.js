import React from "react";
import { MdNavigateNext } from "react-icons/md";

const NewsCard = () => {
  const newsData = [
    {
      _id: 1,
      image: "https://i.ibb.co/bRS24RD/github.webp",
    },
    {
      _id: 2,
      image: "https://i.ibb.co/bRS24RD/github.webp",
    },
    {
      _id: 3,
      image: "https://i.ibb.co/bRS24RD/github.webp",
    },
    {
      _id: 4,
      image: "https://i.ibb.co/bRS24RD/github.webp",
    },
  ];
  return (
    <div className="mt-3 max-w-5xl mx-auto relative">
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold">News</h1>
      <div className="flex gap-3 items-center mb-4">
        {newsData.map((data) => (
          <div
            key={data._id}
            className="w-full bg-[#2D6B5A] rounded-tl-3xl rounded-br-3xl"
          >
            <img src={data.image} alt="demo" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0-0 right-0 text-white">
        <button className="text-right bg-[#2D6B5A] p-2 rounded-tl-lg rounded-br-lg">
          <span>
            More
            <MdNavigateNext className="inline-block" color="white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
