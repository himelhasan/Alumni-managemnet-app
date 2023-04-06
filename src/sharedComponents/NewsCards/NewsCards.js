import React from "react";
import { MdNavigateNext, MdFavoriteBorder } from "react-icons/md";
import { FaRegComment } from "react-icons/fa";

const NewsCard = () => {
  const newsData = [
    {
      _id: 1,
      title: "Recently we create a massive project that",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
      author:
      {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`
      }

    },
    {
      _id: 2,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
      author:
      {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`
      }
    },
    {
      _id: 3,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
      author:
      {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`
      }
    },
    {
      _id: 4,
      title: "News Title",
      description: "This the description of today news. You can find here our latest news.",
      image: "https://i.ibb.co/PxGFVFK/news.jpg",
      author:
      {
        profileImage: "https://i.ibb.co/gwYSvj2/cat1.jpg",
        name: "Jerine",
        comments: 12,
        favorite: 23,
        postedTime: `3 hours ago`
      }
    },
  ];
  return (

    <div className="max-w-5xl mx-auto mt-[5.5rem]">
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold text-center">Recent News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-3">

        {
          newsData.map((data,i) => (
            <div
              key={i}
              className="w-full  rounded-tl-3xl rounded-br-3xl shadow-lg">
              <div>
                <a href="/" data-te-ripple-init data-te-ripple-color="light">
                  <img
                    className="rounded-tl-3xl rounded-br-3xl"
                    src={data?.image}
                    alt={data.image} />
                </a>
              </div>
              {/* news author */}
              <div className="flex justify-start items-center gap-2 ml-5 -mt-[59px] text-white font-semibold">
                <div className="w-11 h-11 rounded-full border-2">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={data?.author.profileImage} alt="" />
                </div>
                <div className="leading-none">
                  <h4>{data?.author.name}</h4>
                  <span>{data?.author.postedTime}</span>
                </div>
                <button><FaRegComment className="inline-block"/> {data?.author.comments}</button>
                <button><MdFavoriteBorder className="inline-block"/> {data?.author.favorite}</button>
              </div>
              <div className="p-2 mt-3">
                <h5
                  className="mb-2 text-md font-medium leading-tight text-gray-900">
                  {data?.title}
                </h5>

                <p className="mb-4 text-gray-900">
                  {data?.description}....
                </p>
                <button
                  type="button"
                  className="bg-primary text-white font-semibold border rounded-md p-2 hover:bg-white hover:text-neutral-700">
                  Read More
                </button>
              </div>
            </div>
          ))
        }
      </div>
      <div className="right-0 text-white mb-5 text-right mt-5">
        <button className="text-right bg-primary p-2 rounded-tl-lg rounded-br-lg">
          <span>
            More<MdNavigateNext className="inline-block" color="white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
