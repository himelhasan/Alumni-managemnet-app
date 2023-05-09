import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContext/AuthProvider";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [myDonation, setMyDonation] = useState([]);

  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/charityDonation/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyDonation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  let myTotalDonation = 0;
  for (const myDonationAmount of myDonation) {
    const donationAmount = parseInt(myDonationAmount?.cus_donationAmount);
    myTotalDonation = myTotalDonation + donationAmount;
  }

  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="my-5 text-xl">My Donation Donation </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Transaction Id</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {myDonation?.map((donation, idx) => {
              return (
                <>
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{`${donation?.donationTitle} (${donation?.donationId})`}</td>
                    <td>{donation?.transactionId}</td>
                    <td>{donation?.cus_donationAmount}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="flex justify-end">
          <p className="my-5 text-xl mr-10">
            My Total Donation : {myTotalDonation}
          </p>
        </div>
        <div
          onClick={() => window.print()}
          className="flex justify-end cursor-pointer"
        >
          <p className="mr-10 bg-primary text-white px-6 py-2">Print</p>
        </div>
      </div>
    </div>
  );
};

export default MyDonation;
