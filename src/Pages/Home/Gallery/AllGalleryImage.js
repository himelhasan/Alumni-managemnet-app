import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DisplayAllGalleryImage from "./DisplayAllGalleryImage";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllGalleryImage = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(18);
  const allGalleryImage = useLoaderData();
  console.log(allGalleryImage);

  const handlePrevious = () => {
    console.log("previous");
    if (previous > 0) {
      setNext(next - 18);
      setPrevious(previous - 18);
    }
  };
  const handleNext = () => {
    console.log("next");
    setNext(next + 18);
    setPrevious(previous + 18);
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-6 gap-5">
        {allGalleryImage?.slice(previous, next).map((galleryImg) => (
          <DisplayAllGalleryImage
            galleryImg={galleryImg}
            key={galleryImg._id}
          ></DisplayAllGalleryImage>
        ))}
      </div>
      <div className="flex gap-2 justify-end">
        <button onClick={() => handlePrevious()}>
          <FaArrowLeft></FaArrowLeft>
        </button>
        <button
          disabled={next > allGalleryImage?.length}
          onClick={() => handleNext()}
        >
          <FaArrowRight></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default AllGalleryImage;