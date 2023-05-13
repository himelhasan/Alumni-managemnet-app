import React, { useEffect } from "react";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import { useGetAllCharityDonationQuery } from "../../../features/Api/apiSlice";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const AllDonation = () => {
  const tableHeading = [
    { name: "Title", id: 1 },
    { name: "Donar Name", id: 3 },
    { name: "Amount", id: 4 },
    { name: "Email", id: 2 },
    { name: "Phone", id: 5 },
    { name: "Address", id: 6 },
    { name: "Transaction_Id", id: 7 },
  ];

  const {
    data: allDonationContentData,
    isLoading: isCharityLoading,
    isError: isCharityError,
    error: charityError,
  } = useGetAllCharityDonationQuery();

  let charityContent;

  if (isCharityLoading && !isCharityError) {
    charityContent = <Loading />;
  }
  if (!isCharityLoading && isCharityError) {
    charityContent = <ErrorAlert text={charityError} />;
  }
  if (!isCharityLoading && !isCharityError && allDonationContentData?.length === 0) {
    charityContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isCharityLoading && !isCharityError && allDonationContentData?.length > 0) {
    charityContent = (
      <>
        {" "}
        {allDonationContentData?.map((donation) => (
          <tr className="">
            <td className="p-2 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-normal text-sm break-normal">
                {donation.donationTitle?.slice(0, 50)}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <span>{donation?.cus_name} </span>
              </p>
            </td>

            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <span>
                  {donation?.cus_donationAmount} {donation?.currency}
                </span>
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                {donation?.cus_email}
              </p>
            </td>
            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                {donation?.cus_phone}
              </p>
            </td>
            <td className="p-2 align-middle text-left bg-transparent border-b whitespace-nowrap shadow-transparent">
              {/* <p className="mb-0 font-semibold leading-tight text-xs">{event.location}</p> */}
              <p className="mb-0 leading-tight text-xs text-slate-600">
                <span> {donation?.cus_state},</span>
                <span> {donation?.cus_city},</span>
                <span> {donation?.cus_country}</span>
              </p>
            </td>

            <td className="p-2 leading-normal text-left align-middle bg-transparent border-b text-sm whitespace-nowrap shadow-transparent">
              <p className="mb-0 leading-tight text-xs text-slate-600">
                {donation?.transactionId}
              </p>
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
            All Donations.
            <span className="text-primary text-opacity-80">
              {" "}
              The total donation number is {allDonationContentData?.length}.
            </span>
          </h6>
        </div>
        <div className="flex-auto px-0 pt-0 pb-2">
          <div className="p-0 overflow-x-auto">
            <table className="items-center table-zebra w-full mb-0 align-top border-gray-200 text-slate-800">
              <thead className="align-bottom">
                <tr>
                  {tableHeading.map((th) => (
                    <th className=" ps-2 pe-6 py-3 font-bold text-left uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-xxs border-b-solid tracking-none whitespace-nowrap text-slate-900 opacity-70">
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

export default AllDonation;
