import React, { useEffect, useRef } from "react";
import FundsForCause from "../../sharedComponents/FundsForCause/FundsForCause";
import Slider from "../../sharedComponents/Slider/Slider";
import SuccessStoriesSection from "../../sharedComponents/SuccessStories/SuccessStoriesSection";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import Contact from "../../sharedComponents/Contact/Contact";
import NewsSection from "../../sharedComponents/NewsCards/NewsSection";
import AlumniDirectory from "./AlumniDirectory";
import UpComingEventsCard from "./UpComingEventsCard/UpComingEventsCard";
import MissionHeading from "./MissionHeading/MissionHeading";
import Gallery from "./Gallery/Gallery";
import MembersStat from "./MembersStat/MembersStat";
import ShowCharity from "../../sharedComponents/ShowCharity/ShowCharity";
import _ from "lodash";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="w-9/12 mx-auto">
        <UpComingEventsCard />
      </div>

      <div className=" bg-accent py-10 my-20">
        <div className="w-9/12 mx-auto">
          <MissionHeading />
          <AlumniDirectory />
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="w-9/12 mx-auto my-20"
      >
        <Gallery></Gallery>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000">
        <ShowCharity></ShowCharity>
      </div>
      <div className=" bg-accent py-10 my-20">
        <div className="w-9/12 mx-auto">
          <MembersStat />
        </div>
      </div>

      <div className="w-9/12 mx-auto my-20">
        <SuccessStoriesSection />
        {/* <FundsForCause /> */}
        <NewsSection />
        <Contact />
      </div>
      {/* <EmailSubScribe /> */}
    </div>
  );
};

export default Home;
