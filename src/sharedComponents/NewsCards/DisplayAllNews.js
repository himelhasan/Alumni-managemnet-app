import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const DisplayAllNews = ({ news }) => {
  const [newsComments, setNewsComments] = useState([]);
  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/newsComment/${news?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setNewsComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [news?._id]);

  return (
    <div className="w-full shadow-lg">
      <div
        className={` h-[269px] m-0 bg-cover bg-center	bg-no-repeat`}
        style={{ backgroundImage: `url(${news.image})` }}
      ></div>
      <div className="pl-2 pt-2">
        <div>
          <Link to={`/news/${news._id}`}>
            <h5 className="text-xl mb-4 mt-4 font-medium leading-tight text-gray-900">
              {news?.heading.length >= 20 ? (
                <>{`${news?.heading.slice(0, 20)} ...`}</>
              ) : (
                <>{`${news?.heading}`}</>
              )}
            </h5>
          </Link>
          {news?.newsDetails.length >= 70 ? (
            <>{`${news?.newsDetails.slice(0, 70)} ...`}</>
          ) : (
            <>{`${news?.newsDetails} `}</>
          )}
        </div>
        <Link to={`/news/${news._id}`}>
          <button className="mt-4 underline">Learn More </button>
        </Link>

        {/* news author */}
        <div className="mt-5  flex justify-between items-center text-black ">
          <div className="flex gap-2 items-center">
            <div className="w-11 h-11 rounded-full border-2">
              <img
                className="w-full h-full object-cover rounded-full"
                src={news?.img}
                alt=""
              />
            </div>
            <div className="leading-none">
              <p>{news?.author}</p>
              <span className="text-[14px]">{news?.time}</span>
            </div>
          </div>
          <div className="flex gap-2">
            <button>
              <FaRegComment className="inline-block" />{" "}
              {newsComments?.length ? <>{newsComments?.length}</> : <></>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayAllNews;
