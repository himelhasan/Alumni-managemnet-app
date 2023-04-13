import React from "react";
import { MdNavigateNext } from "react-icons/md";
import SuccessStoriesCard from "./SucessStoriesCard";

const SuccessStoriesSection = () => {
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
  return (
    <div className="mt-3  mx-auto relative">
      <h1 className="my-7 text-3xl font-semibold text-center">Successful Stories</h1>
      <div className="w-[150px] h-[3px] bg-secondary mx-auto -mt-5 mb-7"></div>
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
