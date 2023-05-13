import React, { useEffect, useState } from "react";

import { MdFavoriteBorder } from "react-icons/md";
import { FaArrowLeft, FaArrowRight, FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ data }) => {
  const [newsComments, setNewsComments] = useState([]);
  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/newsComment/${data?._id}`)
      .then((res) => res.json())
      .then((data) => {
        setNewsComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data?._id]);
  return (
    <div className="w-full shadow-lg">
      {data?.image ? (
        <>
          {" "}
          <div
            className={` h-[269px] m-0 bg-cover bg-center	bg-no-repeat`}
            style={{ backgroundImage: `url(${data?.image})` }}
          ></div>
        </>
      ) : (
        <>
          {" "}
          <div
            className={` h-[269px] m-0 bg-cover bg-center	bg-no-repeat`}
            style={{
              backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
            }}
          ></div>
        </>
      )}

      <div className="pl-2 pt-3">
        <Link to={`/news/${data._id}`}>
          <h5 className="text-xl mb-3 font-medium leading-tight text-gray-900">
            {data?.heading?.length >= 20 ? (
              <>{`${data?.heading.slice(0, 20)} ...`}</>
            ) : (
              <>{`${data?.heading}`}</>
            )}
          </h5>
        </Link>
        <p>
          {data?.newsDetails?.length >= 70 ? (
            <>{`${data?.newsDetails.slice(0, 70)} ...`}</>
          ) : (
            <>{`${data?.newsDetails}`}</>
          )}
        </p>

        <Link to={`/news/${data._id}`}>
          <button className="mt-3 text-right underline font-medium ">Learn More </button>
        </Link>

        {/* news author */}
        <div className="mt-5  flex justify-between items-center text-black ">
          <div className="flex gap-2 items-center ">
            {data?.img ? (
              <>
                <div
                  className={`h-12 w-12 rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                  style={{ backgroundImage: `url(${data?.img})` }}
                ></div>
              </>
            ) : (
              <>
                <div
                  className={`h-12 w-12 rounded-full m-0 bg-cover bg-center	bg-no-repeat`}
                  style={{
                    backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                  }}
                ></div>
              </>
            )}

            <div className="leading-none">
              <p>
                {data?.author ? (
                  <>{data?.author}</>
                ) : (
                  <>
                    <p>Author Name Missing</p>
                  </>
                )}
              </p>
              <span className="text-[14px] mt-1">
                {data?.time ? (
                  <> {data?.time}</>
                ) : (
                  <>
                    <p>publish date missing</p>
                  </>
                )}
              </span>
            </div>
          </div>
          <div className="flex gap-">
            <button>
              <FaRegComment className="inline-block mr-2" />
              {newsComments?.length ? <>{newsComments?.length}</> : <></>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
