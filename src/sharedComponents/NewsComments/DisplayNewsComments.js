import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../UseContext/AuthProvider";
import axios from "axios";
import { toast } from "react-hot-toast";
import {
  useEditNewsCommentMutation,
  useGetAllNewsCommentsOfaUserQuery,
} from "../../features/Api/apiSlice";

const DisplayNewsComments = ({ comment, handleCommentsDelete }) => {
  const { user } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [commentID, setCommentID] = useState("");

  const { data: myNewsComments } = useGetAllNewsCommentsOfaUserQuery({
    email: user?.email,
    id: commentID,
  });

  const [NewComment, setNewComment] = useState(myNewsComments);
  const id = NewComment?._id;

  const handleGetComment = (data) => {
    if (user?.email && data._id) {
      setCommentID(id);
      setNewComment(data);
      setEditMode(true);
    }
  };

  const [
    editNewsComment,
    { isError: isEditError, isLoading: isEditLoading, isSuccess: isEditSuccess },
  ] = useEditNewsCommentMutation();

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
    editNewsComment({ id, updatedData });
  };

  useEffect(() => {
    if (isEditSuccess) {
      toast.success("Edit Successfully.");
      setEditMode(false);
    }
  }, [isEditSuccess]);

  return (
    <div className="">
      <article class="p-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
          <div class="flex items-center">
            <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
              <img
                class="mr-2 w-6 h-6 rounded-full"
                src={comment?.img}
                alt="Helene Engels"
              />
              {comment?.name ? <>{comment?.name}</> : <></>}
            </p>
            <p class="text-xs text-gray-600 dark:text-gray-400">
              <time pubdate datetime="2022-06-23" title="June 23rd, 2022">
                {comment?.time ? <>{comment?.time}</> : <></>}
              </time>
            </p>
          </div>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{comment?.comments}</p>
        <div class="flex items-center mt-1 space-x-4">
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
                        className="cursor-pointer text-sm text-gray-500"
                        onClick={() => {
                          handleGetComment(comment);
                        }}
                      >
                        <FaEdit className="inline-block mb-1 "></FaEdit> <span>Edit</span>
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
                      className="flex gap-1 items-center cursor-pointer text-sm text-gray-500"
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
        {comment?.edit === true ? (
          <>
            <p className="text-xs opacity-60">Edited</p>
          </>
        ) : (
          <></>
        )}
      </article>
      <div className="flex gap-5 items-center">
        <div>
          {editMode && NewComment?._id ? (
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
            <>{/* <p className="bg-red-500"> {comment.comments} </p> */}</>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayNewsComments;
