import React, { useEffect, useState } from "react";
import DisplayCharity from "./DisplayCharity";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ShowCharity = () => {
  const [showCharity, setShowCharity] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(3);

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/charity")
      .then((res) => res.json())
      .then((data) => {
        setShowCharity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePrevious = () => {
    if (previous > 0) {
      setNext(next - 3);
      setPrevious(previous - 3);
    }
  };
  const handleNext = () => {
    setNext(next + 3);
    setPrevious(previous + 3);
  };

  return (
    <div className="w-9/12 mx-auto ">
      <>
        <h2 className="text-3xl text-center mb-10">Explore Charity</h2>
        <div className="grid lg:grid-cols-3 gap-10  ">
          {showCharity
            ?.filter((charity) => charity?.status === true)
            .slice(previous, next)
            .map((charity) => (
              <DisplayCharity charity={charity} key={charity._id}></DisplayCharity>
            ))}
        </div>
      </>
      {showCharity?.length > 3 ? (
        <>
          {" "}
          <div className="flex gap-2 justify-end">
            <button onClick={() => handlePrevious()}>
              <FaArrowLeft></FaArrowLeft>
            </button>
            <button
              disabled={next === showCharity?.length || next > showCharity?.length}
              onClick={() => handleNext()}
            >
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShowCharity;
