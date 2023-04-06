import React from "react";
import { MdNavigateNext } from "react-icons/md";

const SuccessStories = () => {
  const storiesData = [
    {
      _id: 1,
      image: "https://i.ibb.co/KGpRmcC/desktop.jpg",
      title: "Success Story title",
      description: "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      }
    },
    {
      _id: 2,
      image: "https://i.ibb.co/KGpRmcC/desktop.jpg",
      title: "Success Story title",
      description: "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      }
    },
    {
      _id: 3,
      image: "https://i.ibb.co/KGpRmcC/desktop.jpg",
      title: "Success Story title",
      description: "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      }
    },
    {
      _id: 4,
      image: "https://i.ibb.co/KGpRmcC/desktop.jpg",
      title: "Success Story title",
      description: "This an awesome platform to learn something. I have learned important things from this platform. I really love it. You can keep it number one choice.",
      author: {
        name: "Luca luca",
        profileImage: "url",
        postedTime: "23-03-2023",
      }
    },
  ];
  return (
    <div className="mt-3 max-w-5xl mx-auto relative">
      <h1 className="my-7 text-3xl font-semibold text-center">Successful Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-between mb-4">
        {storiesData.map((data) => (
          <div
            key={data._id}
            className="w-full rounded-tl-3xl rounded-br-3xl shadow-lg"
          >
            <img className="rounded-tl-3xl rounded-br-3xl" src={data.image} alt="demo" />
            <div className="p-3">
              <h5 className="text-xl font-semibold">{data?.title}</h5>
              <p>{data?.description}</p>
              <div className="mt-3 font-semibold flex justify-between items-center">
                <button className="underline">Read more</button>
                <span>Author: {data?.author.name}</span>
              </div>
            </div>
          </div>
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

export default SuccessStories;
