import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const JoinedEventUpdatePage = () => {
  const form = useRef();

  const { user } = useContext(AuthContext);
  const [Events, setEvents] = useState([]);
  const [singleEvent, setSingleEvent] = useState([]);
  console.log(singleEvent);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://alumni-managemnet-app-server.vercel.app/joined-event/${user?.email}`
        )
        .then((data) => setEvents(data.data))
        .catch((error) => console.error(error));
    }
  }, [user?.email]);

  const handleUpdate = (id) => {
    console.log(id);

    for (const index in Events) {
      if (Events[index]._id === id) {
        setSingleEvent(Events[index]);
      }
    }
  };

  const handleEventEdit = (event) => {
    event.preventDefault();
    const f = event.target;

    const userInfo = {
      first_name: f.first_name.value,
      last_name: f.last_name.value,
      email: user?.email,
      phone_number: f.phone_number.value,
      date: singleEvent.date,
    };
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/join-event/${singleEvent._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Update Successfully.");
        emailjs
          .sendForm(
            "service_tlzwnzs",
            "template_fxu30p8",
            form.current,
            "hWyA-erRGdIIJOqPT"
          )
          .then(
            (result) => {
              // console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      });
  };

  const handleDelete = (id) => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/join-event/delete/${id}`,
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
        <h2 className="text-2xl ">
          Show Personal Joined Event for update and delete
        </h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Event Name</th>
                <th>date</th>
                <th>Joining Name</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            {Events?.length === 0 ? (
              <div>
                <p className="text-xl">No Data Found</p>
              </div>
            ) : (
              <tbody>
                {Events?.length &&
                  Events?.map((allEvent, i) => (
                    <tr key={allEvent._id}>
                      <th>{i + 1}</th>

                      <td>{allEvent.event_title}</td>

                      <td>{allEvent.date}</td>
                      <td>{allEvent.first_name}</td>
                      <td>{allEvent.phone_number}</td>
                      <td>
                        {" "}
                        <label
                          htmlFor="event-modal-edit"
                          onClick={() => {
                            handleUpdate(allEvent?._id);
                          }}
                        >
                          {" "}
                          <FaEdit className="text-xl cursor-pointer"></FaEdit>{" "}
                        </label>
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
            )}
          </table>
        </div>

        {/* modal for edit joining data */}
        <input type="checkbox" id="event-modal-edit" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <label
              htmlFor="event-modal-edit"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <h3 className="font-bold text-xl">Update</h3>

            <form ref={form} onSubmit={(event) => handleEventEdit(event)}>
              <div className="hidden">
                <input
                  name="event_title"
                  defaultValue={singleEvent.event_title}
                />
                <input name="date" defaultValue={singleEvent.date} />
              </div>

              <div className="form-control mx-auto">
                <label className="label">
                  {" "}
                  <span className="label-text text-lg text-primary font-semibold">
                    First Name
                  </span>
                </label>
                <input
                  name="first_name"
                  required
                  type="text"
                  className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                  placeholder={singleEvent.first_name}
                />
              </div>
              <div className="form-control mx-auto">
                <label className="label">
                  {" "}
                  <span className="label-text text-lg text-primary font-semibold">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                  placeholder={singleEvent.last_name}
                />
              </div>

              <div className="form-control mx-auto">
                <label className="label">
                  {" "}
                  <span className="label-text text-lg text-primary font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>

              <div className="form-control mx-auto">
                <label className="label">
                  {" "}
                  <span className="label-text text-lg text-primary font-semibold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="text"
                  name="phone_number"
                  className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                  placeholder={singleEvent.phone_number}
                />
              </div>

              <div className=" mx-auto">
                <button className="btn btn-primary w-full bg-primary text-lg mt-5 text-white border-none rounded-none">
                  Edit Joining Information
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinedEventUpdatePage;
