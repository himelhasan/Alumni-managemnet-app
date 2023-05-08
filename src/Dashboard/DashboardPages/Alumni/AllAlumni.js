import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import {
  useDeleteAlumniMutation,
  useGetAllAlumniQuery,
} from "../../../features/Api/apiSlice";
import { toast } from "react-hot-toast";

const AllAlumni = () => {
  const tableHeading = [
    { name: "Name", id: 1 },
    { name: "Batch", id: 2 },
    { name: "Education", id: 3 },
    { name: "Blood", id: 4 },
  ];

  const {
    data: allAlumni,
    isLoading: isAlumniLoading,
    isError: isAlumniError,
    error: alumniError,
  } = useGetAllAlumniQuery();

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
  ] = useDeleteAlumniMutation();

  // delete function handler
  const handleDeleteAlumni = (_id) => {
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

  let alumniContent;

  if (isAlumniLoading && !isAlumniError) {
    alumniContent = <Loading />;
  }
  if (!isAlumniLoading && isAlumniError) {
    alumniContent = <ErrorAlert text={alumniError} />;
  }
  if (!isAlumniLoading && !isAlumniError && allAlumni?.length === 0) {
    alumniContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isAlumniLoading && !isAlumniError && allAlumni?.length > 0) {
    alumniContent = (
      <>
        {" "}
        {allAlumni?.map((alumni) => (
          <tr>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <div className="flex px-2 py-1">
                <div>
                  <img
                    src={alumni.profile_picture}
                    className="w-14 h-14 inline-flex items-center justify-center mr-4 text-white transition-all duration-200 ease-soft-in-out text-sm rounded-xl"
                    alt="user1"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <Link
                    to={`/alumni/${alumni.email}`}
                    className="mb-0 leading-normal text-sm text-primary"
                  >
                    {alumni.name}
                  </Link>
                  <a
                    href={`mailto:${alumni.email}`}
                    className=" mb-0 leading-tight text-xs text-slate-400"
                  >
                    {alumni.email}
                  </a>
                  <a
                    className="mb-0 leading-tight text-xs text-slate-400"
                    href={`tel:${alumni.phone}`}
                  >
                    {alumni.phone}
                  </a>
                </div>
              </div>
            </td>
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <Link
                to={`/alumni/batch/${alumni.graduation_year}`}
                className="mb-0 leading-tight text-xs text-slate-400"
              >
                {alumni.graduation_year}
              </Link>
            </td>

            <td className="p-2 text-left align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="font-semibold leading-tight text-xs text-slate-400">
                {alumni.major}
              </p>
              <p className=" mb-0 leading-tight text-xs text-slate-400">
                {alumni.degree}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-400">
                {alumni.personal_information.blood_group}
              </p>
            </td>

            {/* edit and delete function */}
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
              <div className="flex">
                <Link
                  to={`/dashboard/profile/${alumni.email}`}
                  className="font-semibold leading-tight text-xs text-slate-400 px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-400 hover:text-secondary"
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
                  onClick={() => {
                    handleDeleteAlumni(alumni._id);
                  }}
                  className="font-semibold leading-tight text-xs  px-2 ml-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-slate-400 hover:text-red-500"
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
    <>
      <div className="w-full px-8">
        <div className="relative flex flex-col w-full min-w-0 mb-0 break-words bg-white border-0 border-transparent border-solid shadow-soft-xl rounded-2xl bg-clip-border">
          <div className="p-6 pb-0 mb-0 bg-white rounded-t-2xl">
            <h6>All Alumni</h6>
            <p></p>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    {tableHeading.map((th) => (
                      <th className=" ps-2 pe-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">
                        {th.name}
                      </th>
                    ))}
                    {/* blank for edit tab */}
                    <th className="px-6 py-3 font-semibold capitalize align-middle bg-transparent border-b border-gray-200 border-solid shadow-none tracking-none whitespace-nowrap text-slate-400 opacity-70"></th>
                  </tr>
                </thead>
                <tbody>{alumniContent}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllAlumni;
