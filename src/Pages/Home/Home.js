import React from "react";
import FundsForCause from "../../sharedComponents/FundsForCause/FundsForCause";
import Gallery from "../../sharedComponents/Gallery/Gallery";
import MembersStat from "../../sharedComponents/MembersStat/MembersStat";
import Slider from "../../sharedComponents/Slider/Slider";
import SuccessStories from "../../sharedComponents/SuccessStories/SuccessStories";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";
import NewsCard from "../../sharedComponents/NewsCards/NewsCards";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import AlumniDirectory from "../AlumniDirectory/AlumniDirectory";
import MissionHeading from "../../sharedComponents/MissionHeading/MissionHeading";
import Contact from "../../sharedComponents/Contact/Contact";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="w-9/12 mx-auto">
        <UpComingEvents />
      </div>
      <FundsForCause />

      <div className=" bg-accent py-10 my-20">
        <div className="w-9/12 mx-auto">
          <MissionHeading />
          <AlumniDirectory />
        </div>
      </div>

      <div className="max-w-5xl mx-auto my-20">
        <Gallery></Gallery>
      </div>

      <div className=" bg-accent py-10 my-20">
        <div className="max-w-5xl mx-auto">
          <MembersStat />
        </div>
      </div>

      <div className="max-w-5xl mx-auto my-20">
        <SuccessStories />
        <NewsCard />
        <Contact />
      </div>
      <EmailSubScribe />
    </>
  );
};

export default Home;
