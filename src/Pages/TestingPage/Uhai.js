import React from "react";

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
      <AllDonation></AllDonation>
      <BatchWiseSuccessfulStory></BatchWiseSuccessfulStory>
      <BatchWiseEvents></BatchWiseEvents>
      <AllSuccessFulStoryOfUser></AllSuccessFulStoryOfUser>
      <AllEventsOfUser></AllEventsOfUser>
      <AllCharityOfUser></AllCharityOfUser>
      <AllNewsOfUser></AllNewsOfUser>
    </div>
  );
};

export default Uhai;
