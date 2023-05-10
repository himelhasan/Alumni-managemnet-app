import React, { useEffect, useState } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaTrash, FaVoicemail } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllCharityForAdmin = () => {
  const [allCharityForAdmin, setAllCharityForAdmin] = useState([]);
  const [detailsId, setDetailsId] = useState("");
  const [singleCharity, setSingleCharity] = useState({});
  console.log(singleCharity);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/charity")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllCharityForAdmin(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/charity/${detailsId}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleCharity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [detailsId]);

  const handleCharityDelete = (_id) => {
    const agree = window.confirm(`Are you Sure ! You want To Delete ${_id}`);
    console.log(_id);
    if (agree) {
      fetch(`https://alumni-managemnet-app-server.vercel.app/charity/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted", { autoClose: 500 });
            const remaining = allCharityForAdmin?.filter(
              (gallery) => gallery._id !== _id
            );
            setAllCharityForAdmin(remaining);
          }
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error);
        });
    }
  };
  const handleDetails = (_id) => {
    setDetailsId(_id);
  };
  return (
    <div>
      <h2 className="my-5 text-xl">All Charity For Admin</h2>
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
            {allCharityForAdmin?.map((allCharity, idx) => {
              return (
                <>
                  <tr key={allCharity?._id}>
                    <th>{idx + 1}</th>
                    <td>
                      {allCharity?.title?.length >= 40 ? (
                        <>{`${allCharity?.title.slice(0, 40)}...`}</>
                      ) : (
                        <>{allCharity?.title}</>
                      )}
                    </td>
                    <td>
                      {/* The button to open modal */}
                      <label
                        onClick={() => handleDetails(allCharity?._id)}
                        className="cursor-pointer font-semibold"
                        htmlFor="my-modal-7"
                      >
                        <BiCommentDetail className="inline-block mr-1"></BiCommentDetail>
                        Details
                      </label>
                      {/* Put this part before </body> tag */}
                      <input
                        type="checkbox"
                        id="my-modal-7"
                        className="modal-toggle"
                      />
                      <div className="modal modal-bottom  sm:modal-middle">
                        <div className="modal-box  ">
                          <div className="flex items-center gap-4 mb-5">
                            <div>
                              <img
                                src={singleCharity?.img}
                                alt=""
                                className="w-24 h-24 rounded-full"
                              />
                            </div>
                            <div>
                              <p className="text-xl font-bold">
                                {singleCharity?.name}
                              </p>
                              <div className="flex gap-2 items-center">
                                <MdEmail></MdEmail>
                                <p>{singleCharity?.email}</p>
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <div
                              style={{
                                backgroundImage: `url(${singleCharity?.image_url})`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover",
                                height: "200px",
                                width: "200px",
                              }}
                            ></div>
                            <h1 className="text-xl mt-3">
                              {singleCharity?.title}
                            </h1>
                            <div>
                              <p>
                                {singleCharity?.details?.length >= 50 ? (
                                  <>{`${singleCharity?.details.slice(
                                    0,
                                    50
                                  )}...`}</>
                                ) : (
                                  <>{`${singleCharity?.details}`}</>
                                )}
                              </p>
                            </div>
                          </div>

                          <div className="flex gap-10 items-center mb-3">
                            <div>
                              <p className="font-bold">Amount :</p>
                              <p>{singleCharity?.goal_amount} BDT</p>
                              <p className="font-bold">Batch :</p>
                              <p>{singleCharity?.batchNumber}</p>
                            </div>
                            <div>
                              <p className="font-bold">DeadLine :</p>
                              <p>{singleCharity?.deadline}</p>
                              <p className="font-bold">Publish Date :</p>
                              <p>{singleCharity?.time}</p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <p className="font-bold">Address :</p>
                            <p>{`${singleCharity?.state} ${singleCharity?.city} ${singleCharity?.country}`}</p>
                          </div>

                          <div className="modal-action">
                            <label
                              htmlFor="my-modal-7"
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
                          onClick={() => handleCharityDelete(allCharity?._id)}
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

export default AllCharityForAdmin;
