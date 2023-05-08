import React, { useContext, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";

const EventUpdatePages = () => {
  const { user } = useContext(AuthContext);
  const [Events, setEvents] = useState([]);
  // console.log(Events);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://alumni-managemnet-app-server.vercel.app/event/${user?.email}`
        )
        .then((data) => setEvents(data.data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/event/delete/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Delete Successfully.`);
        }
      });
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div>
        <h2 className="text-2xl ">Show Personal Event for update and delete</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Event Name</th>
                <th>Batch</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Events?.length &&
                Events?.map((allEvent, i) => (
                  <tr>
                    <th>{i + 1}</th>

                    <td>{allEvent.event_title}</td>
                    <td>{allEvent.batch}</td>
                    <td>
                      {" "}
                      <Link to={`/eventUpdate/${allEvent?._id}`}>
                        {" "}
                        <FaEdit className="text-xl cursor-pointer"></FaEdit>{" "}
                      </Link>
                    </td>
                    <td>
                      <span
                        onClick={() => handleDelete(allEvent?._id)}
                        className="p-2 bg-primary text-white cursor-pointer"
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EventUpdatePages;
