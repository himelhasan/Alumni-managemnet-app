import React, { useEffect, useState } from "react";
import StatsCard from "../DashboardComponents/StatsCard";
import ProfileBlogCards from "../DashboardComponents/ProfileBlogCards";
import ProfileBlogCardsImage from "../DashboardComponents/ProfileBlogCardsImage";
import LineChart from "../DashboardComponents/Charts/DashboardChart/LineChart";
import { linedata as lineData } from "../DashboardComponents/Charts/DashboardChart/lineData";

const DashboardMain = () => {
  const [charityDonation, setCharityDonation] = useState([]);
  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/charityDonation")
      .then((res) => res.json())
      .then((data) => {
        setCharityDonation(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let totalDonation = 0;

  for (const donation of charityDonation) {
    const allDonation = parseInt(donation?.cus_donationAmount);
    totalDonation = totalDonation + allDonation;
  }
  const increment = 30;
  return (
    <div className="px-4 mb-10">
      <div className="relative grid grid-cols-2 md:grid-cols-4 items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        {" "}
        <StatsCard
          icon="fa-solid fa-coins"
          text="Total Donation"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${totalDonation}`}
        />
        <StatsCard
          icon="fa-solid fa-coins"
          text="Total Donar"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`${charityDonation?.length}`}
        />
        <StatsCard
          icon="fa-solid fa-coins"
          text="Awesome Bhai"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${increment}`}
        />
        <StatsCard
          icon="fa-solid fa-coins"
          text="Awesome Bhai"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${increment}`}
        />
      </div>
      <div className="relative flex flex-col md:flex-row items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        <div className="w-full md:w-7/12">
          <ProfileBlogCards />
        </div>
        <div className="w-full md:w-5/12">
          <ProfileBlogCardsImage />
        </div>
      </div>
      <div className="relative grid grid-cols-2 items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        {/* <DashboardChart /> */}
        <LineChart data={lineData} />
        <LineChart data={lineData} />
      </div>
    </div>
  );
};

export default DashboardMain;
