import React from "react";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import AllEvents from "../../sharedComponents/Events/AllEvents/AllEvents";
import SuccessStoriesCard from "../../sharedComponents/SuccessStories/SucessStoriesCard";
import NewsCard from "../../sharedComponents/NewsCards/NewsCard";
const Uhai = () => {
  return <div>
    <UpComingEvents />
    <AllEvents />
    <SuccessStoriesCard />
    <NewsCard />
    <EmailSubScribe />
  </div>;
};

export default Uhai;
