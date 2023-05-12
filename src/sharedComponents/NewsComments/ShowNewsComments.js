import React, { useEffect, useState } from "react";
import DisplayNewsComments from "./DisplayNewsComments";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  useDeleteNewsCommentMutation,
  useGetAllNewsCommentsQuery,
} from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";
import { toast } from "react-hot-toast";

const ShowNewsComments = ({ data }) => {
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(10);

  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    error: commentsError,
  } = useGetAllNewsCommentsQuery(data?._id);

  const [
    deleteNewsComment,
    { isSuccess: isDeleteSuccess, isLoading: isDeleteLoading, isError: isDeleteError },
  ] = useDeleteNewsCommentMutation();

  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Comments deleted successfully");
    }
  }, [isDeleteSuccess]);

  const handleCommentsDelete = (_id) => {
    const agree = window.confirm(`Are You Sure You want To Delete ! ...`);
    if (agree) {
      deleteNewsComment(_id);
    }
  };

  const handlePrevious = () => {
    if (previous > 0) {
      setNext(next - 10);
      setPrevious(previous - 10);
    }
  };
  const handleNext = () => {
    setNext(next + 10);
    setPrevious(previous + 10);
  };

  // news comments getting according to the news

  let commentsContent;

  if (isCommentsLoading && !isCommentsError) {
    commentsContent = <Loading></Loading>;
  }
  if (!isCommentsLoading && isCommentsError) {
    commentsContent = <ErrorAlert text={commentsError}></ErrorAlert>;
  }

  if (!isCommentsLoading && !isCommentsError) {
    commentsContent = (
      <>
        {" "}
        {comments?.length > 0 ? (
          <>
            <h2>Total Comments {comments?.length}</h2>
            {comments?.slice(previous, next).map((comment) => (
              <DisplayNewsComments
                comment={comment}
                keys={comment._id}
                handleCommentsDelete={handleCommentsDelete}
              ></DisplayNewsComments>
            ))}
          </>
        ) : (
          <>
            <span>Still No Comments</span>
          </>
        )}
        {comments?.length > 10 ? (
          <>
            {" "}
            <div className="flex mt-5 gap-2 justify-end">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft></FaArrowLeft>
              </button>
              <button
                disabled={next === comments?.length || next > comments?.length}
                onClick={() => handleNext()}
              >
                <FaArrowRight></FaArrowRight>
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }

  return <div>{commentsContent}</div>;
};

export default ShowNewsComments;
