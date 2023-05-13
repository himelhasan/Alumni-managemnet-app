import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import {
  useDeleteCharityMutation,
  useDeleteEventMutation,
  useGetBatchWiseEventsQuery,
  useGetMyEventsQuery,
} from "../../../features/Api/apiSlice";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";

const AllEventsOfUser = () => {
  const { user } = useContext(AuthContext);

  const tableHeading = [
    { name: "Title", id: 1 },
    { name: "Batch", id: 6 },
    { name: "email", id: 5 },
    { name: "Location", id: 2 },
    { name: "Date", id: 3 },
    { name: "Action ", id: 4 },
  ];

  const {
    data: UserEventContentData,
    isLoading: isCharityLoading,
    isError: isCharityError,
    error: charityError,
  } = useGetMyEventsQuery(user?.email);

  // mutation for deleting data
  const [
    deleteAlumni,
    {
      data,
      isSuccess: isDeleteSuccess,
      isLoading: isDeleteLoading,
      isError: isDeleteError,
      error: errorDelete,
    },
  ] = useDeleteEventMutation();

  // delete function handler
  const handleDelete = (_id) => {
    const confirmDelete = window.confirm("do you want to delete?");
    if (confirmDelete) {
      deleteAlumni(_id);
    }
  };
  // re render components on status change
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Successfully toasted!");
    }
    if (isDeleteError) {
      toast.error(errorDelete.message);
    }
  }, [errorDelete, isDeleteError, isDeleteSuccess]);

  const handleApprove = (_id) => {
    const agree = window.confirm(`Are you Sure . You want to Approve The Charity`);
    if (agree) {
      fetch(`https://alumni-managemnet-app-server.vercel.app/approveEvents/${_id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Successfully Approved");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  const handleUnApprove = (_id) => {
    const agree = window.confirm(`Are you Sure . You want to unApprove The Charity`);
    if (agree) {
      fetch(`https://alumni-managemnet-app-server.vercel.app/unApproveEvents/${_id}`, {
        method: "PUT",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success("Successfully unApproved");
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  //
  let charityContent;

  if (isCharityLoading && !isCharityError) {
    charityContent = <Loading />;
  }
  if (!isCharityLoading && isCharityError) {
    charityContent = <ErrorAlert text={charityError} />;
  }
  if (!isCharityLoading && !isCharityError && UserEventContentData?.length === 0) {
    charityContent = <ErrorAlert text="No Data Found." />;
  }
  if (!isCharityLoading && !isCharityError && UserEventContentData?.length > 0) {
    charityContent = (
      <>
        {" "}
        {UserEventContentData?.map((Events) => (
          <tr className="">
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img
                    src={Events.image_url}
                    className="!w-10 !h-10 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                    alt="user1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Link to={`/events/${Events?._id}`}>
                    <p className="mb-0 leading-normal text-sm break-normal">
                      {Events.event_title?.slice(0, 50)}
                    </p>
                  </Link>
                  <p className="mb-0 leading-tight text-xs text-slate-600">
                    {/* john@creative-tim.com */}
                  </p>
                </div>
              </div>
            </td>

            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <p className="flex flex-col">
                  <span>{Events.batch}</span>{" "}
                </p>
              </p>
            </td>

            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <p className="flex flex-col">
                  <span>{Events.authorEmail}</span>{" "}
                </p>
              </p>
            </td>

            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <p className="flex flex-col">
                  <span>{Events.location}</span>{" "}
                </p>
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <span className="text-opacity-10">{Events.date?.slice(0, 10)}</span>
              </p>
            </td>

            <td className="p-2 text-center align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex gap-2 font-semibold">
                {Events?.status === true ? (
                  <>
                    <button onClick={() => handleUnApprove(Events?._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-green-600"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleApprove(Events?._id)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-secondary"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </td>

            {/* edit and delete function */}
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
              <div className="flex">
                <Link
                  to={`/dashboard/events/edit/${Events._id}`}
                  className="font-semibold leading-tight text-xs text-slate-600 px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-600 hover:text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </Link>
                <Link
                  to=""
                  onClick={() => handleDelete(Events._id)}
                  className="font-semibold leading-tight text-xs  px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-600 hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <div className="w-full px-8">
      <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
        <div className=" p-6 pb-0 mb-0 bg-white rounded-t-2xl">
          <h6 className="font-sans font-semibold">
            Your Events information.
            <span className="text-primary text-opacity-80">
              {" "}
              Your total posted events are {UserEventContentData?.length}.
            </span>
          </h6>
        </div>
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center table-zebra  w-full mb-0 align-top border-gray-200 text-slate-500">
              <thead className="align-bottom">
                <tr>
                  {tableHeading.map((th) => (
                    <th className=" ps-2 pe-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-600 opacity-70">
                      {th.name}
                    </th>
                  ))}
                  {/* blank for edit tab */}
                  <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-600 opacity-70"></th>
                </tr>
              </thead>
              <tbody>{charityContent}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEventsOfUser;
