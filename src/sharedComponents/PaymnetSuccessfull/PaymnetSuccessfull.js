import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const PaymentSuccessful = () => {
  // const paymentInfo = useLoaderData();
  // console.log(paymentInfo);
  // const {
  //   transactionId,
  //   currency,
  //   cus_add1,
  //   cus_city,
  //   cus_country,
  //   cus_postcode,
  //   cus_state,
  //   cus_donationAmount,
  //   cus_name,
  //   cus_phone,
  //   donationId,
  //   donationTitle,
  //   paidAt,
  // } = paymentInfo;

  // if (!paymentInfo?.transactionId) {
  //   return (
  //     <div className="w-9/12 mx-auto my-16">
  //       <p>No Order Found</p>
  //     </div>
  //   );
  // }
  return (
    <div className="w-9/12 mx-auto my-16">
      <div>
        <p className="text-2xl ">Congratulation... SuccessFully Paid</p>
        <p className="my-4 text-xl">Your Payment Summary :</p>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Transaction Id</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td>{cus_name}</td>
                <td>{`${cus_donationAmount} ${currency}`}</td>
                <td>{transactionId}</td>
                <td>{`${cus_add1} , ${cus_postcode} `}</td> */}
              </tr>
              {/* row 2 */}
            </tbody>
          </table>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => window.print()}
            className="bg-primary print:hidden  px-6 py-2 font-semibold text-white mt-2"
          >
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessful;
