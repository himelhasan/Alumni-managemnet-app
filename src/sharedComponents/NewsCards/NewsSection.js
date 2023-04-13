import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import NewsCard from "./NewsCard";
import { FilterNews } from "./utils";
import { newsData } from "./newsData";

const NewsSection = () => {
  const [filterData, setFilerData] = useState("allNews");
  const [news, setNews] = useState([]);

  const handleFilter = (currentNews) => {
    setFilerData(currentNews);
  }
  useEffect(() => {
    fetch("http://localhost:8000/news")
    .then((res)=>res.json()).then((data)=>setNews(data))
  },[])
  const filteredNews = filterData === "allNews" ? news : news.filter((item) => item.filter === filterData);
  return (
    <div className="mx-auto mt-[5.5rem]">
      <h1 className="mt-[3.75rem] mb-[1rem] text-3xl font-semibold text-center">
        Recent News
      </h1>
      <div className="w-[150px] h-[3px] bg-secondary mx-auto -mt-2"></div>
      <div className="mb-7">
        {
          FilterNews &&
          FilterNews.map((item, i) => (
            <button
              className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-accent text-gray-900 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
              key={i}
              onClick={()=>handleFilter(item.filter)}
            >
              {item.label}
            </button>
          ))
        }
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-5">
        {filteredNews?.map((data, i) => (
          <NewsCard key={i} data={data}></NewsCard>
        ))}
      </div>
      <div className="right-0 text-white mb-5 text-right mt-5">
        <button className=" py-4 px-8 text-right text-white font-bold bg-primary">
          <span>
            More News
            <MdNavigateNext className="inline-block text-white" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
