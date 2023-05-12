import React, { useContext, useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { AuthContext } from "../UseContext/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import DisplayNewSuccessComment from "./DisplayNewSuccessComment";

const ShowComments = ({ _id }) => {
  console.log(_id);
  const { user } = useContext(AuthContext);
  const [NewComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [disable, setDisabled] = useState(true);
  const handleOnChnage = (e) => {
    const hello = e.target.value;
    console.log(hello);
    if (hello.length > 0) {
      setDisabled(false);
    }
    console.log("clicked");
  };

  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/successFullStoryComments/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  const handleCommentsDelete = (_id) => {
    console.log(_id);
    const agree = window.confirm(`Are You Sure You Want to delete !...`);
    if (agree) {
      fetch(
        `https://alumni-managemnet-app-server.vercel.app/successFullStoryComment/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted");
            const remaining = comments?.filter(
              (comment) => comment?._id !== _id
            );
            setComments(remaining);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  console.log(NewComment);

  return (
    <div>
      {comments?.length > 0 ? (
        <>
          {" "}
          {comments?.map((comment) => (
            <DisplayNewSuccessComment
              comment={comment}
              keys={comment._id}
              handleCommentsDelete={handleCommentsDelete}
            ></DisplayNewSuccessComment>

            // return (
            //   <div className="mt-5">
            //     <div className="flex gap-5 items-center">
            //       <div
            //         style={{
            //           backgroundImage: `url(${comment.img})`,
            //           backgroundPosition: "center",
            //           backgroundRepeat: "no-repeat",
            //           backgroundSize: "cover",
            //           height: "60px",
            //           width: "60px",
            //         }}
            //         className="rounded-full"
            //       ></div>
            //       <div>
            //         <div className="flex gap-2 items-center">
            //           <h2> {comment?.name ? <> {comment?.name}</> : <></>}</h2>
            //           <p className="opacity-50">
            //             {comment?.time ? <>{comment?.time}</> : <></>}

            //           </p>
            //         </div>
            //         <p>
            //           {comment?.comments ? <>{comment?.comments}</> : <></>}

            //         </p>

            //         <div className="flex gap-5 items-center cursor-pointer">
            //           <AiFillLike className="text-primary"></AiFillLike>
            //           <AiFillDislike className="text-primary"></AiFillDislike>
            //           <div>
            //             {/* The button to open modal */}
            //             {user?.email === comment?.email ? (
            //               <>
            //                 <div
            //                   className="cursor-pointer"
            //                   onClick={() => {
            //                     handleGetComment(comment?._id);
            //                   }}
            //                 >
            //                   {" "}
            //                   <FaEdit className="inline-block  mb-1"></FaEdit>{" "}
            //                   EditTTT
            //                 </div>
            //               </>
            //             ) : (
            //               <></>
            //             )}
            //           </div>
            //           {user?.email === comment?.email ? (
            //             <>
            //               <div
            //                 onClick={() => {
            //                   handleCommentsDelete(comment?._id);
            //                 }}
            //                 className="flex gap-1 items-center"
            //               >
            //                 <FaTrash className="text-[14px]"></FaTrash>
            //                 <button>Delete</button>
            //               </div>
            //             </>
            //           ) : (
            //             <></>
            //           )}
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // );
          ))}
        </>
      ) : (
        <>
          <span>Still No Comments Here !</span>
        </>
      )}
    </div>
  );
};

export default ShowComments;
