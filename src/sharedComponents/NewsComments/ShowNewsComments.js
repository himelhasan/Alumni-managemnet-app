import React, { useEffect, useState } from "react";
import DisplayNewsComments from "./DisplayNewsComments";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ShowNewsComments = ({ data }) => {
  console.log(data);
  const [newsComments, setNewsComments] = useState([]);
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(10);
  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/newsComment/${data?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data?._id]);

  const handleCommentsDelete = (_id) => {
    console.log(_id);
    const agree = window.confirm(`Are You Sure You want To Delete ! ...`);
    if (agree) {
      fetch(
        `https://alumni-managemnet-app-server.vercel.app/newsComments/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remaining = newsComments.filter(
              (comments) => comments?._id !== _id
            );
            setNewsComments(remaining);
          }
        });
    }
  };

  //newsComments, data._id plese solve iuuse , its not provide real time update

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 10);
      setPrevious(previous - 10);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 10);
    setPrevious(previous + 10);
  };

  return (
    <div>
      {newsComments?.length > 0 ? (
        <>
          {" "}
          <h2>Total Comments {newsComments?.length}</h2>
          {newsComments?.slice(previous, next).map((comment) => (
            <DisplayNewsComments
              comment={comment}
              keys={comment._id}
              handleCommentsDelete={handleCommentsDelete}
            ></DisplayNewsComments>
          ))}
        </>
      ) : (
        <>
          <span>Still No Comments</span>
        </>
      )}

      <div className="flex mt-5 gap-2 justify-end">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={
            next === newsComments?.length || next > newsComments?.length
          }
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default ShowNewsComments;
