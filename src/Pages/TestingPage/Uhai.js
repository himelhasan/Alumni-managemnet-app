import React from "react";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import NewsSection from "../../sharedComponents/NewsCards/NewsSection";
import SuccessStoriesSection from "../../sharedComponents/SuccessStories/SuccessStoriesSection";
import UpComingEventsCard from "../Home/UpComingEventsCard/UpComingEventsCard";
import NewsCreateForm from "../../Dashboard/DashboardPages/News/NewsCreateForm";
import NewsUpdatePage from "../../sharedComponents/NewsUpdatePage/NewsUpdatePage";
import EventUpdatePages from "../../Dashboard/DashboardPages/EventUpdatePage/EventUpdatePages";
import AddAEvent from "../../Dashboard/DashboardPages/Events/AddAEvent";
import JoinedEventUpdatePage from "../../Dashboard/DashboardPages/JoinedEventUpdatePage/JoinedEventUpdatePage";
import EventUpdate from "../../Dashboard/DashboardPages/Events/EventUpdate";
import AllDonation from "../../Dashboard/DashboardPages/Dontation/allDonation";
import BatchWiseCharity from "../../Dashboard/DashboardPages/Charity/BatchWiseCharity";
import BatchWiseSuccessfulStory from "../../Dashboard/DashboardPages/successFullStory/BatchWiseSuccessfulStory";
import BatchWiseEvents from "../../Dashboard/DashboardPages/Events/BatchWiseEvents";
import AllSuccessFulStoryOfUser from "../../Dashboard/DashboardPages/successFullStory/AllSucessfulStoryOfUser";
import AllEventsOfUser from "../../Dashboard/DashboardPages/Events/AllEventsOfUser";
import AllCharityOfUser from "../../Dashboard/DashboardPages/Charity/AllCharityOfUser";
import AllNewsOfUser from "../../Dashboard/DashboardPages/News/AllNewsOfUser";

const Uhai = () => {
  return (
    <div>
      {/* <UpComingEventsCard /> */}
      {/* <AllEvents /> */}
      {/* <SuccessStoriesSection /> */}
      {/* <EventUpdate></EventUpdate> */}
      {/* <NewsUpdatePage></NewsUpdatePage> */}
      {/* <EventUpdatePages></EventUpdatePages> */}

      <AllDonation></AllDonation>
      {/* <BatchWiseCharity></BatchWiseCharity> */}
      <BatchWiseSuccessfulStory></BatchWiseSuccessfulStory>
      <BatchWiseEvents></BatchWiseEvents>

      {/* <JoinedEventUpdatePage></JoinedEventUpdatePage> */}
      <AllSuccessFulStoryOfUser></AllSuccessFulStoryOfUser>
      <AllEventsOfUser></AllEventsOfUser>
      <AllCharityOfUser></AllCharityOfUser>
      <AllNewsOfUser></AllNewsOfUser>

      {/* <AddAEvent></AddAEvent> */}
      {/* <NewsSection /> */}
      {/* <EmailSubScribe /> */}
      {/* <NewsCreateForm></NewsCreateForm> */}
    </div>
  );
};

export default Uhai;
