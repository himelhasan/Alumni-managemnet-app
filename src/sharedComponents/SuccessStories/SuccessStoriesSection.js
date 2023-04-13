import React, { useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import SuccessStoriesCard from "./SucessStoriesCard";
import { FilterStory } from "./utils";

const SuccessStoriesSection = () => {
  const [filterStory, setFilterStory] = useState('allStory');
  console.log(filterStory);
  const [stories, setStories] = useState([]);
  const storiesData = [
    {
      _id: 1,
      image: "https://www.tcd.ie/media/tcd/news-images/Group-selfie.jpg",
      title: "Success Story title",
      description:
        "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      },
    },
    {
      _id: 2,
      image:
        "https://pxl-tcdie.terminalfour.net/fit-in/500x9999/prod01/channel_3/media/tcd/news-images/northern-ireland-map.jpg",
      title: "Success Story title",
      description:
        "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      },
    },
    {
      _id: 3,
      image:
        "https://pxl-tcdie.terminalfour.net/fit-in/500x9999/prod01/channel_3/media/tcd/news-images/Oilseed-rape-and-Hedgerow-RS.jpg",
      title: "Success Story title",
      description:
        "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      },
    },
  ];

  const handleFilter = (currentStory) => {
    setFilterStory(currentStory);
  }
  return (
    <div className="mt-3  mx-auto relative">
      <h1 className="my-7 text-3xl font-semibold text-center">Successful Stories</h1>
      <div className="w-[150px] h-[3px] bg-secondary mx-auto -mt-5 mb-7"></div>

      <div className="mb-7">
        {
          FilterStory &&
          FilterStory.map((item, i) => (
            <button
              className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-accent text-gray-900 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
              key={i}
              onClick={() => handleFilter(item.filter)}
            >
              {item.label}
            </button>
          ))
        }
        <div className='w-1/3 border-1 bg-gray-300 mt-10 p-3'>
          <select
            onChange={(e) => handleFilter(e.target.value)}
            name="" id=""
            className='w-full h-11 border-green-500'
          >
            {
              FilterStory &&
              FilterStory.map((item, i) => (
                <option
                  key={i}
                  value={item.filter}
                  className='text-xl font-semibold'
                >
                  {item.label}
                </option>
              ))
            }
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-between">
        {storiesData.map((data) => (
          <SuccessStoriesCard key={data.id} data={data}></SuccessStoriesCard>
        ))}
      </div>
      <div className="absolute bottom-0-0 right-0 text-white mb-6">
        <button className=" py-3 px-7 text-right text-white font-bold bg-primary">
          <span>
            More Stories <MdNavigateNext className="inline-block" color="white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
