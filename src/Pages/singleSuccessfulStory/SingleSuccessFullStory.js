import React, { useContext, useEffect, useState } from "react";
import MoreSuccessFullStory from "./MoreSuccessFullStory";
import { Link, useLocation } from "react-router-dom";
import { useGetSingleSuccessfulStoriesQuery } from "../../features/Api/apiSlice";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import { FaRegComment } from "react-icons/fa";
import Comments from "../../sharedComponents/SucessfulStoryComments/Comments";
import ShowComments from "../../sharedComponents/SucessfulStoryComments/ShowComments";

const SingleSuccessFullStory = () => {
  const { user } = useContext(AuthContext);

  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/successFullStory/")[1];
  console.log({ currentPath });
  //load data using redux

  const { data, isLoading, isError, error } =
    useGetSingleSuccessfulStoriesQuery(currentPath);
  console.log(data);
  const {
    batchNumber,
    comments,
    details,
    email,
    image_url,
    img,
    likes,
    name,
    time,
    title,
    _id,
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
        {" "}
        <div>
          <InnerPageHeader
            img={`${image_url}`}
            title={`${title}`}
          ></InnerPageHeader>
          <div className="w-9/12 mx-auto my-16">
            <div className="flex lg:flex-row flex-col-reverse gap-10 ">
              <div className="basis-9/12">
                <div>
                  {image_url ? (
                    <>
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
                          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU')`,
                          backgroundPosition: "center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          height: "400px",
                        }}
                      ></div>
                    </>
                  )}

                  <div>
                    <div>
                      <h2 className="text-2xl my-5">
                        {title ? (
                          <>{title}</>
                        ) : (
                          <>
                            <h2>Title Missing</h2>
                          </>
                        )}
                      </h2>
                      <p className="mb-5">
                        {details ? (
                          <>{details}</>
                        ) : (
                          <>
                            <p>Details Missing</p>
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-3">
                    {img ? (
                      <>
                        <div
                          style={{
                            backgroundImage: `url(${img})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "50px",
                            width: "50px",
                          }}
                          className="rounded-full"
                        ></div>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKpQUy8JP90MAZxFjU0P9bPqkUWL35fd8Ag&usqp=CAU')`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "50px",
                            width: "50px",
                          }}
                          className="rounded-full"
                        ></div>
                      </>
                    )}
                    <div className="flex justify-between items-center">
                      <div>
                        {" "}
                        <p>
                          {name ? (
                            <>{name}</>
                          ) : (
                            <>
                              <span>Author Name Missing</span>
                            </>
                          )}
                        </p>
                        <p>
                          {time ? (
                            <>{time}</>
                          ) : (
                            <>
                              <p>Date is Missing</p>
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                {user?.email && user?.uid ? (
                  <>
                    <div>
                      <Comments data={data}></Comments>
                    </div>
                  </>
                ) : (
                  <>
                    <Link to="/login">
                      <button className="  my-5 text-secondary text-xl">
                        {" "}
                        Please Log In For Comments
                      </button>
                    </Link>
                  </>
                )}
              </div>
              <div className="basis-3/12">
                <h2 className="mb-5 text-xl">Explore More SuccessFull Story</h2>
                <MoreSuccessFullStory _id={_id}></MoreSuccessFullStory>
              </div>
            </div>
            <ShowComments _id={_id}></ShowComments>
          </div>
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default SingleSuccessFullStory;
