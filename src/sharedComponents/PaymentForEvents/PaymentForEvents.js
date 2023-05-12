import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../UseContext/AuthProvider";

const PaymentForEvents = () => {
  const { user } = useContext(AuthContext);
  const [batchYear, setBatchYear] = useState([]);

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

  const handlePaymentForEvents = (event) => {
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
  };

  return (
    <div className="w-9/12 mx-auto my-16">
      <div className="grid grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-2xl mb-3">Events Heading</h2>
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus saepe natus
            eaque eum laudantium ullam ratione laboriosam, aut perspiciatis incidunt?
          </p>
          <img
            src="https://images.pexels.com/photos/7944035/pexels-photo-7944035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-2xl mb-5">Please fill up !</h2>
          <form onSubmit={(event) => handlePaymentForEvents(event)}>
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
              placeholder="Enter Event Amount"
              required
            />
            <textarea
              className="textarea textarea-bordered w-full mb-5"
              placeholder="Make Note For Event"
              name="details"
              required
            ></textarea>
            <button className="bg-primary rounded-md text-white py-3 text-center w-full">
              Pay For Event
            </button>
          </form>
        </div>
      </div>
      <div>
        <h2 className="text-2xl mt-16 mb-5">Explore Who Joined For This Event</h2>
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
              <tr>
                <th>1</th>
                <td>Pervez Hossain</td>
                <td>2013</td>
                <td>500 Bdt</td>
                <td>pervez@gmail.com</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Hemel Hasan</td>
                <td>2012</td>
                <td>5000 Bdt</td>
                <td>hemel@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentForEvents;
