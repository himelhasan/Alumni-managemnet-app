import React, { useContext, useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../UseContext/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";

const DisplayNewSuccessComments = ({ comment, handleCommentsDelete }) => {
  const { user } = useContext(AuthContext);

  // console.log(comment)

  const [NewComment, setNewComment] = useState("");

  console.log(NewComment);
  const id = NewComment._id;

  const handleGetComment = (id) => {
    console.log(id);
    if (user?.email && id) {
      axios
        .get(
          `https://alumni-managemnet-app-server.vercel.app/single-successful-comment?email=${user?.email}&id=${id}`
        )
        .then((data) => setNewComment(data.data))
        .catch((error) => console.error(error));
    }
  };

  const handleCommentUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newComment = form.comments.value;
    const id = form.id.value;

    // console.log(newComment, id);
    const time = new Date().toLocaleDateString();

    const updatedData = {
      comments: newComment,
      time,
    };
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/update-successful-comment/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Edit Successfully.");
      });
  };

  return (
    <div className="mt-5">
      <div className="flex gap-5 items-center">
        <div
          style={{
            backgroundImage: `url(${comment.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "60px",
            width: "60px",
          }}
          className="rounded-full"
        ></div>
        <div>
          <div className="flex gap-2 items-center">
            <h2>{comment?.name ? <>{comment?.name}</> : <></>}</h2>

            <p className="opacity-50 flex">
              {comment?.time ? <>{comment?.time}</> : <></>}

              {comment?.edit === true ? (
                <>
                  <p className="ml-2 opacity-60">Edited</p>
                </>
              ) : (
                <></>
              )}
            </p>
          </div>

          {NewComment?._id ? (
            <div>
              <form onSubmit={(event) => handleCommentUpdate(event)}>
                <textarea
                  className=" border-2  w-full "
                  defaultValue={NewComment?.comments}
                  name="comments"
                  required
                ></textarea>

                <input
                  type="text"
                  name="id"
                  defaultValue={NewComment?._id}
                  className="hidden"
                />

                <button className="text-center px-4 cursor-pointer  bg-primary text-white">
                  Comment
                </button>
              </form>
            </div>
          ) : (
            <>
              <p> {comment.comments} </p>
            </>
          )}

          {NewComment?._id ? (
            <></>
          ) : (
            <>
              <div className="flex gap-5 items-center cursor-pointer">
                <div>
                  {/* The button to open modal */}
                  {user?.email === comment?.email ? (
                    <>
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          handleGetComment(comment?._id);
                        }}
                      >
                        {" "}
                        <FaEdit className="inline-block mb-1 "></FaEdit>{" "}
                        <span>Edit</span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                {user?.email === comment?.email ? (
                  <>
                    <div
                      onClick={() => {
                        handleCommentsDelete(comment?._id);
                      }}
                      className="flex gap-1 items-center"
                    >
                      <FaTrash className="text-[14px]"></FaTrash>
                      <button>Delete</button>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayNewSuccessComments;
