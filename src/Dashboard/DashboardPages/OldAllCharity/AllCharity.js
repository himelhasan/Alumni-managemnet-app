import React, { useContext, useEffect, useState } from "react";


import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";

const AllCharity = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [showCharity, setShowCharity] = useState([]);
  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/charity/email/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowCharity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  const handleCharityDelete = (_id) => {
    const agree = window.confirm(`Are You Sure ! You want to delete ${_id}`);
    if (agree) {
      fetch(`https://alumni-managemnet-app-server.vercel.app/charity/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success("Successfully Deleted", { autoClose: 500 });
            const remaining = showCharity?.filter((charity) => charity._id !== _id);
            setShowCharity(remaining);
          }
        })
        .catch((error) => {
          toast.error(error.message, { autoClose: 500 });
        });
    }
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="my-5 text-2xl ">All Charity</h2>
      {user?.email && user?.uid ? (
        <>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>DeadLine</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {showCharity?.map((charity, idx) => {
                  return (
                    <tr>
                      <td>{idx + 1}</td>
                      <td>{charity?.title ? <>{charity?.title}</> : <></>}</td>
                      <td>{charity?.deadline ? <>{charity?.deadline}</> : <></>}</td>
                      <td>
                        <Link to={`/updateCharity/${charity._id}`}>
                          <div className="flex gap-2 items-center">
                            <FaEdit></FaEdit>
                            <button>Edit</button>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <Link>
                          <div
                            onClick={() => handleCharityDelete(charity._id)}
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
              Please Log In For Charity
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AllCharity;
