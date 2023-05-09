import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const AllNewsForAdmin = () => {
  const [allNewsForAdmin, setAllNewsForAdmin] = useState([]);
  const [newsDetailsId, setNewsDetailsId] = useState("");
  const [singleNewsDetails, setSingleNewsDetails] = useState({});
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/news")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllNewsForAdmin(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/news/${newsDetailsId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleNewsDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newsDetailsId]);

  const handleNewsDetails = (_id) => {
    console.log(_id);
    setNewsDetailsId(_id);
  };
  const handleNewsDelete = (_id) => {
    console.log(_id);
  };

  return (
    <div>
      <h2 className="my-5 text-xl">All news For Admin</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>title</th>
              <th>Deatils</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allNewsForAdmin?.map((allNews, idx) => {
              return (
                <>
                  <tr key={allNews?._id}>
                    <th>{idx + 1}</th>
                    <td>{allNews?.heading}</td>
                    <td>
                      {/* The button to open modal */}
                      <label
                        onClick={() => handleNewsDetails(allNews?._id)}
                        className="cursor-pointer font-semibold"
                        htmlFor="my-modal-6"
                      >
                        <BiCommentDetail className="inline-block mr-1"></BiCommentDetail>
                        Details
                      </label>

                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="my-modal-6"
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom  sm:modal-middle">
                        <div className="modal-box  ">
                          <div className="flex items-center gap-4 mb-5">
                            <div>
                              <img
                                src={singleNewsDetails?.img}
                                alt=""
                                className="w-24 h-24 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-xl font-bold">
                                {singleNewsDetails?.author}
                              </p>
                              <div className="flex gap-2 items-center">
                                <MdEmail></MdEmail>
                                <p>{singleNewsDetails?.email}</p>
                              </div>
                              <p>
                                Profession :{" "}
                                {singleNewsDetails?.authorProfession}
                              </p>
                            </div>
                          </div>
                          <div className="">
                            <div
                              style={{
                                backgroundImage: `url(${singleNewsDetails?.image})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "200px",
                                width: "200px",
                              }}
                            ></div>
                            <h1 className="text-xl mt-5 mb-2">
                              {singleNewsDetails?.heading}
                            </h1>
                            <div>
                              <p>
                                {singleNewsDetails?.newsDetails?.length >=
                                50 ? (
                                  <>{`${singleNewsDetails?.newsDetails.slice(
                                    0,
                                    50
                                  )}...`}</>
                                ) : (
                                  <>{`${singleNewsDetails?.newsDetails}`}</>
                                )}
                              </p>
                            </div>
                          </div>

                          <div>
                            <div className=" mt-3">
                              <div>
                                <p className="font-bold">
                                  Comments :{" "}
                                  <span className="font-normal">
                                    {singleNewsDetails?.comments}
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p className="font-bold">
                                  Likes :{" "}
                                  <span className="font-normal">
                                    {singleNewsDetails?.likes}
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p className="font-bold">
                                  Publish Date :{" "}
                                  <span className="font-normal">
                                    {singleNewsDetails?.time}
                                  </span>
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="modal-action">
                            <label
                              htmlFor="my-modal-6"
                              className="bg-primary px-6 py-2 text-white cursor-pointer"
                            >
                              Close
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <Link>
                        <div
                          onClick={() => handleNewsDelete(allNews?._id)}
                          className="flex gap-2 items-center"
                        >
                          <FaTrash className="text-[12px]"></FaTrash>
                          <button>Delete</button>
                        </div>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllNewsForAdmin;
