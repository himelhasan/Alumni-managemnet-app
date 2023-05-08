import React, { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { Link, useLocation } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { useGetSingleCharityQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";
import MoreCharity from "./MoreCharity";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DisplaySingleCharity = () => {
  const [showCharity, setShowCharity] = useState([]);
  console.log(showCharity.length);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(6);

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 6);
      setPrevious(previous - 6);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 6);
    setPrevious(previous + 6);
  };

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/charity")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowCharity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/charity/")[1];
  //load data using redux
  const { data, isLoading, isError, error } =
    useGetSingleCharityQuery(currentPath);

  const {
    batchNumber,
    city,
    state,
    country,
    _id,
    deadline,
    details,
    goal_amount,
    image_url,
    title,
  } = data || {};

  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        <InnerPageHeader
          img={`${image_url}`}
          title={`${title}`}
        ></InnerPageHeader>
        <div className="w-9/12 mx-auto my-16">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div
              style={{
                backgroundImage: `url(${image_url})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "350px",
              }}
            ></div>
            <div>
              <h2 className="mb-3 text-xl">{title}</h2>
              <p className="mb-3">{`${details} `}</p>
              <p className=""> DeadLine : {deadline}</p>{" "}
              <p className="font-normal">
                Goal Amount : <span className="font-normal">{goal_amount}</span>
              </p>
              <p className="font-normal">
                Collected Amount : <span className="font-normal">{5000}</span>
              </p>
              <p className="font-normal">
                Address :{" "}
                <span className="font-normal">{`${city} ${state} ${country}`}</span>
              </p>
              <Link to={`/charity/donation/${_id}`}>
                {" "}
                <button className="bg-primary px-6 py-2 text-white mt-3">
                  Donation
                </button>
              </Link>
            </div>
          </div>
          <div>
            {showCharity?.length <= 1 ? (
              <></>
            ) : (
              <>
                {" "}
                <h2 className="mt-12 mb-8 text-2xl">Explore More Charity</h2>
                <div className="grid lg:grid-cols-3 gap-5">
                  {showCharity
                    ?.filter((charity) => charity._id !== _id)
                    .slice(previous, next)
                    .map((charity) => (
                      <MoreCharity
                        key={charity._id}
                        charity={charity}
                      ></MoreCharity>
                    ))}
                </div>
              </>
            )}
          </div>
          {showCharity?.length > 3 && (
            <div className="flex gap-2 justify-end">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft></FaArrowLeft>
              </button>
              <button
                disabled={
                  next === showCharity?.length || next > showCharity?.length
                }
                onClick={() => handleNext()}
              >
                <FaArrowRight></FaArrowRight>
              </button>
            </div>
          )}
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default DisplaySingleCharity;
