import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";

const AllGallery = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/galleries/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGallery(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  const handleGalleryDelete = (_id) => {
    const agree = window.confirm(`Are you Sure ! You want To Delete ${_id}`);
    console.log(_id);
    if (agree) {
      fetch(`https://alumni-managemnet-app-server.vercel.app/galleries/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted", { autoClose: 500 });
            const remaining = gallery?.filter((gallery) => gallery._id !== _id);
            setGallery(remaining);
          }
        })
        .catch((error) => {
          toast.error(error.message);
          console.log(error);
        });
    }
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="my-5 text-2xl text-center ">All Gallery</h2>
      <p className="text-center mb-10">Explore our gallery to see photos from past events and activities organized by our alumni management system. From alumni reunions and networking events to career fairs and fundraising initiatives, our gallery showcases the impact that strong alumni engagement can have on educational institutions. Click here to view our gallery and see how we're helping institutions build lifelong connections with their graduates.</p>
      {user?.email && user?.uid ? (
        <>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Post Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {gallery?.map((gallery, idx) => {
                  return (
                    <tr>
                      <td> {idx + 1}</td>
                      <td>
                        {gallery?.image_url ? (
                          <>
                            {" "}
                            <img
                              src={`${gallery?.image_url}`}
                              alt=""
                              className="w-16 h-16 rounded-full"
                            />
                          </>
                        ) : (
                          <></>
                        )}
                      </td>
                      <td>{gallery?.time ? <> {gallery?.time}</> : <></>}</td>
                      <td>
                        <Link to={`/updateGallery/${gallery?._id}`}>
                          <div className="flex gap-2 items-center">
                            <FaEdit></FaEdit>
                            <button>Edit</button>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <Link>
                          <div
                            onClick={() => handleGalleryDelete(gallery._id)}
                            className="flex gap-2 items-center"
                          >
                            <FaTrash></FaTrash>
                            <button>Delete</button>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="  my-5 text-secondary text-xl">
              {" "}
              Please Log In For Gallries
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AllGallery;
