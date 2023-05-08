import React, { useEffect, useState } from "react";

const TotalCharityDonation = () => {
  const [charityDonation, setCharityDonation] = useState([]);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/charityDonation")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCharityDonation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let totalDonation = 0;
  for (const donation of charityDonation) {
    console.log(donation);
    const allDonation = parseInt(donation?.cus_donationAmount);
    totalDonation = totalDonation + allDonation;
  }
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="my-5 text-xl">Charity Donation </h2>
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
            {charityDonation?.map((donation, idx) => {
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
            Total Charity Donation : {totalDonation}
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

export default TotalCharityDonation;
