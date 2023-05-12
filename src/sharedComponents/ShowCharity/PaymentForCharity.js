import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContext/AuthProvider";
import DisplaySingleCharity from "./DisplaySingleCharity";

const PaymentForCharity = () => {
  const { user } = useContext(AuthContext);
  const [batchYear, setBatchYear] = useState([]);
  const [showCharity, setShowCharity] = useState([]);
  const [funds, setFunds] = useState([]);

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/all-batches")
      .then((res) => res.json())
      .then((data) => {
        setBatchYear(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/charity")
      .then((res) => res.json())
      .then((data) => {
        setShowCharity(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/funding-projects")
      .then((res) => res.json())
      .then((data) => {
        setFunds(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handlePaymentForCharity = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = user?.email;
    const name = user?.displayName;
    const img = user?.photoURL;
    const batchNumber = form.batchNumber.value;
    const details = form.details.value;
    const donationAmount = form.donationAmount.value;
    const paymentCharityInfo = {
      email,
      name,
      img,
      batchNumber,
      details,
      donationAmount,
    };

    fetch("https://alumni-managemnet-app-server.vercel.app/funding-projects/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(paymentCharityInfo),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {showCharity?.map((charity) => (
          <DisplaySingleCharity
            charity={charity}
            key={charity._id}
          ></DisplaySingleCharity>
        ))}
        <div>
          <h2 className="text-2xl mb-5">Please fill up !</h2>
          <form onSubmit={(event) => handlePaymentForCharity(event)}>
            <input
              type="text"
              className="input input-bordered w-full mb-5 "
              name="name"
              defaultValue={user?.displayName}
              required
            />
            <input
              type="email"
              className="input input-bordered w-full mb-5 "
              name="email"
              defaultValue={user?.email}
              required
            />
            <div className="form-control w-full mb-5 ">
              <select className="select select-bordered" name="batchNumber">
                {batchYear?.map((batchYear) => (
                  <option key={batchYear._id}>{batchYear.batchNumber}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="input input-bordered w-full mb-5 "
              name="donationAmount"
              placeholder="Enter Donation Amount"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full mb-5"
              placeholder="Make Note For Donation"
              name="details"
              required
            ></textarea>
            <button className="bg-primary rounded-md text-white py-3 text-center w-full">
              Pay For Donation
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-16 mb-5">Explore Who Gived Donation !</h2>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Batch Year</th>
                <th>Amount</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {funds?.map((fund, idx) => {
                return (
                  <tr>
                    <th>{idx + 1}</th>
                    <td>{fund.name}</td>
                    <td>{fund.batchNumber}</td>
                    <td>{fund.donationAmount}</td>
                    <td>{fund.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentForCharity;
