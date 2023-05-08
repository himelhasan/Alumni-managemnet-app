import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import InnerPageHeader from "../../../sharedComponents/InnerPageHeader/InnerPageHeader";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import { useGetGalleriesQuery } from "../../../../src/features/Api/apiSlice";

const AllGalleryImage = () => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(18);

  const { data, isLoading, isError, error } = useGetGalleriesQuery();

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
        <div data-aos="zoom-out-up"
     data-aos-duration="3000" className="grid lg:grid-cols-6 gap-5">
          <PhotoProvider>
            {data?.slice(previous, next).map((galleryImg, idx) => (
              <PhotoView src={galleryImg.image_url}>
                <div
                  style={{
                    backgroundImage: `url(${galleryImg?.image_url})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "150px",
                  }}
                  className=" w-full rounded-lg cursor-pointer"
                ></div>
              </PhotoView>
            ))}
          </PhotoProvider>
        </div>
      </>
    );
  }

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
    <div>
      <div>
        <InnerPageHeader
          title={"Gallery"}
          img={
            "https://media.istockphoto.com/id/1347652268/photo/group-of-colleagues-celebrating-success.jpg?s=612x612&w=0&k=20&c=dojtkf9ItX21j3jtlGOGpbKDs320TTAuofoGnNSZD8Y="
          }
          description="welcome To Gallery Page"
        ></InnerPageHeader>
      </div>
      <div className="w-9/12 mx-auto my-16">
        {content}
        <div className="flex gap-2 justify-end my-8">
          <button onClick={() => handlePrevious()}>
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button disabled={next > data?.length} onClick={() => handleNext()}>
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllGalleryImage;
