import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../UseContext/AuthProvider";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
  const { user } = useContext(AuthContext);

  const donationInfo = useLoaderData();
  console.log(donationInfo);
  const handleDonationSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const cus_name = form?.cus_name.value;
    const cus_country = form?.cus_country.value;
    const cus_add1 = form?.cus_add1.value;
    const cus_city = form?.cus_city.value;
    const cus_state = form?.cus_state.value;
    const cus_donationAmount = form?.cus_donationAmount.value;
    const cus_postcode = form?.cus_postcode.value;
    const currency = form?.currency.value;
    const cus_phone = form?.cus_phone.value;
    const cus_email = form?.cus_email.value;
    const charityDonationInfo = {
      cus_name,
      cus_country,
      cus_add1,
      cus_city,
      cus_state,
      cus_email,
      cus_postcode,
      cus_phone,
      cus_donationAmount,
      currency,
      donationId: donationInfo?._id,
      donationTitle: donationInfo?.title,
    };
    console.log(charityDonationInfo);

    fetch("https://alumni-managemnet-app-server.vercel.app/charityDonation", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(charityDonationInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.replace(data?.url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-10/12 mx-auto my-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div
            style={{
              backgroundImage: `url(${donationInfo?.image_url})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
            }}
          ></div>
        </div>
        <div>
          <form onSubmit={(event) => handleDonationSubmit(event)}>
            <div className="grid lg:grid-cols-2 gap-5">
              <div className="form-control w-full">
                <input
                  type="text"
                  required
                  name="cus_name"
                  placeholder="Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered w-full "
                />
              </div>

              <div className="form-control w-full ">
                <input
                  type="email"
                  required
                  name="cus_email"
                  placeholder="Email"
                  defaultValue={user?.email}
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full  ">
                <input
                  type="text"
                  required
                  name="cus_donationAmount"
                  placeholder="Donation Amount"
                  className="input input-bordered w-full "
                />
              </div>
              <select
                defaultValue="BDT"
                name="currency"
                className="select select-bordered w-full "
              >
                <option value="BDT">BDT</option>
                <option value="USD">USD</option>
              </select>
              <div className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="cus_phone"
                  placeholder="Phone"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="cus_country"
                  placeholder="Country / Region "
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="cus_add1"
                  placeholder="Street address"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="cus_city"
                  placeholder="Town / City "
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="cus_state"
                  placeholder="District"
                  className="input input-bordered w-full "
                />
              </div>
              <div className="form-control w-full ">
                <input
                  type="text"
                  required
                  name="cus_postcode"
                  placeholder="Postcode / ZIP"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            <button className="px-6 py-4 mt-5 w-full rounded-lg bg-primary text-white font-semibold">
              Place Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;
