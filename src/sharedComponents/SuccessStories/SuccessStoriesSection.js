import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import SuccessStoriesCard from "./SucessStoriesCard";
import { FilterStory } from "./utils";

const SuccessStoriesSection = () => {
  const [filterStory, setFilterStory] = useState('allStory');
  console.log(filterStory);
  const [stories, setStories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/stories').then(res => res.json()).then(data => setStories(data))
  },[])

  const filteredStory = filterStory === "allStory" ? stories : stories.filter((item) => item.batch === filterStory);

  const handleFilter = (currentStory) => {
    setFilterStory(currentStory);
  }
  return (
    <div className="mt-3  mx-auto relative">
      <h1 className="my-7 text-3xl font-semibold text-center">Successful Stories</h1>
      <div className="w-[150px] h-[3px] bg-secondary mx-auto -mt-5 mb-7"></div>

      <div className="mb-7 w-1/3 bg-gray-300 mt-10 text-center">

        <select
          onChange={(e) => handleFilter(e.target.value)}
          name="" id=""
          className='w-full h-11 border-green-500 p-2 text-center'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-between">
        {filteredStory.map((data) => (
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
