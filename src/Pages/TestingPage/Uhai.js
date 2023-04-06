import React from "react";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";
import SuccessStories from "../../sharedComponents/SuccessStories/SuccessStories";
import NewsCard from "../../sharedComponents/NewsCards/NewsCards";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import AllEvents from "../../sharedComponents/Events/AllEvents/AllEvents";

const Uhai = () => {
  return <div>
    <UpComingEvents />
    <AllEvents/>
    <SuccessStories />
    <NewsCard />
    <EmailSubScribe/>
  </div>;
};

export default Uhai;
