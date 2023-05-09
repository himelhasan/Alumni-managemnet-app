import React, { useContext, useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import { Link, useLocation } from "react-router-dom";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { useGetSingleCharityQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";
import MoreCharity from "./MoreCharity";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AuthContext } from "../UseContext/AuthProvider";

const DisplaySingleCharity = () => {
  const { user } = useContext(AuthContext);
  const [showCharity, setShowCharity] = useState([]);
  const [singleDonation, setSingleDonation] = useState([]);
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

  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/charityDonations/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleDonation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  console.log(singleDonation);
  let goalAmount = parseInt(goal_amount);
  let totalDonation = 0;
  for (const donation of singleDonation) {
    console.log(donation);
    const allDonation = parseInt(donation?.cus_donationAmount);
    totalDonation = totalDonation + allDonation;
  }
  console.log(typeof totalDonation);
  console.log(typeof goalAmount);

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
          {totalDonation >= goalAmount ? (
            <>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {image_url ? (
                  <>
                    {" "}
                    <div
                      style={{
                        backgroundImage: `url(${image_url})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "400px",
                      }}
                    ></div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "400px",
                      }}
                    ></div>
                  </>
                )}
                <div>
                  <h2 className="text-2xl font-semibold mb-3">
                    Thank you All{" "}
                  </h2>
                  <p>We reached the Destination</p>
                  <div className="mb-3">
                    <p className="font-semibold ">
                      Goal Amount :{" "}
                      <span className="font-normal">{goal_amount} BDT</span>
                    </p>
                    <p className="font-semibold ">
                      Collected Amount :{" "}
                      <span className="font-normal">{totalDonation} BDT</span>
                    </p>
                  </div>
                  <p className=" bg-primary w-52 py-2 px-4 text-white font-semibold">
                    We Stoped Funding
                  </p>
                </div>
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {image_url ? (
                  <>
                    {" "}
                    <div
                      style={{
                        backgroundImage: `url(${image_url})`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "400px",
                      }}
                    ></div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "400px",
                      }}
                    ></div>
                  </>
                )}
                <div>
                  <h2 className="mb-3 text-xl">
                    {title ? (
                      <>{title}</>
                    ) : (
                      <>
                        <p>Title mising</p>
                      </>
                    )}
                  </h2>
                  <p className="mb-3">
                    {details ? (
                      <>{`${details} `}</>
                    ) : (
                      <>
                        <p>Details Missing</p>
                      </>
                    )}
                  </p>
                  <p className="">
                    {" "}
                    {deadline ? (
                      <> DeadLine : {deadline}</>
                    ) : (
                      <>
                        <p>DeadLine Missing</p>
                      </>
                    )}{" "}
                  </p>{" "}
                  <p className="font-normal">
                    <span className="font-normal">
                      {goal_amount ? (
                        <> Goal Amount : {goal_amount}</>
                      ) : (
                        <>
                          <p>Goal Amount Missing</p>
                        </>
                      )}
                    </span>
                  </p>
                  <p className="font-normal">
                    Collected Amount :{" "}
                    <span className="font-normal">{totalDonation}</span>
                  </p>
                  {city && state && country ? (
                    <>
                      <p className="font-normal">
                        Address :{" "}
                        <span className="font-normal">{`${city} ${state} ${country}`}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <p>Address Missing</p>
                    </>
                  )}
                  {user?.email && user?.uid ? (
                    <>
                      <Link to={`/charity/donation/${_id}`}>
                        {" "}
                        <button className="bg-primary px-6 py-2 text-white mt-3">
                          Donation
                        </button>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <p className="text-xl font-semibold text-secondary my-5">
                          Please Log in For Donation
                        </p>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </>
          )}

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
