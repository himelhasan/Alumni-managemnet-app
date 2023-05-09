import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Rakib from "../Pages/TestingPage/Rakib";
import Uhai from "../Pages/TestingPage/Uhai";
import Main from "../../src/layout/Main";
import LogIn from "../Pages/LogIn.js/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Events from "../Pages/Events/Events";
import AboutUs from "../Pages/AboutUs/AboutUs";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import SinglePerson from "../Pages/SinglePerson/SinglePerson";
import AlumniPage from "../Pages/AlumniDirectory/AlumniPage";
// import MembershipForm from "../Pages/MembershipForm/MembershipForm";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardMain from "../Dashboard/DashboardPages/DashboardMain";
import DashboardTestPage from "../Dashboard/DashboardPages/DashboardTestPage";
import AddAEvent from "../Dashboard/DashboardPages/Events/AddAEvent";
import CheckoutPage from "../Pages/CheckoutPage/CheckoutPage";
import SingleNewsSection from "../sharedComponents/NewsCards/SingleNewsSection";
import BatchWiseStudent from "../Pages/BatchwiseStudent/BatchwiseStudent";
import DisplaySingleCharity from "../sharedComponents/ShowCharity/DisplaySingleCharity";
import AllGalleryImage from "../Pages/Home/Gallery/AllGalleryImage";
import PrivateRoutes from "./PrivateRoutes";
import NewsCreateForm from "../Dashboard/DashboardPages/News/NewsCreateForm";
import CreateGallery from "../Dashboard/DashboardPages/CreateGallery/CreateGallery";
import CreateSuccessFullStory from "../Dashboard/DashboardPages/successFullStory/CreateSuccessFullStory";
import SingleSuccessFullStory from "../Pages/singleSuccessfulStory/SingleSuccessFullStory";
// import CreateCharity from "../Dashboard/DashboardPages/CreateCharity/CreateCharity";
import AllEvents from "../Dashboard/DashboardPages/Events/AllEvents";
import UpdateSuccessFullStory from "../Dashboard/DashboardPages/successFullStory/updateSuccessFullStory";
import UpdateCharity from "../Dashboard/DashboardPages/Charity/UpdateCharity";
import UpdateGallery from "../sharedComponents/UpdateGallery/UpdateGallery";
import NewsUpdatePage from "../sharedComponents/NewsUpdatePage/NewsUpdatePage";
import NewsUpdate from "../Dashboard/DashboardPages/News/NewsUpdate";
// import AllCharity from "../Dashboard/DashboardPages/CreateCharity/AllCharity";
import AllNews from "../Dashboard/DashboardPages/News/AllNews";
import AllSuccessFullStory from "../Dashboard/DashboardPages/successFullStory/AllSuccessFullStory";
import AllNewsPage from "../Pages/AllNews/AllNews";
import AllGallery from "../Dashboard/DashboardPages/AllGallery/AllGallery";
import AllAlumni from "../Dashboard/DashboardPages/Alumni/AllAlumni";
import EventUpdate from "../Dashboard/DashboardPages/Events/EventUpdate";
import MembershipForm from "../Dashboard/DashboardPages/MembershipForm/MembershipForm";
import Donation from "../sharedComponents/Donation/Donation";
import RegisterPage from "../Pages/SignUp/RegisterPage";
import PaymentSuccessful from "../sharedComponents/PaymnetSuccessfull/PaymnetSuccessfull";
import CharityPaymentFail from "../sharedComponents/PaymnetSuccessfull/CharityPaymentFail";
import TotalCharityDonation from "../sharedComponents/TotalCharityDonation/TotalCharityDonation";
import CreateCharity from "../Dashboard/DashboardPages/Charity/CreateCharity";
import AllCharity from "../Dashboard/DashboardPages/Charity/AllCharity";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/rakib", element: <Rakib /> },
      {
        path: "/uhai",
        element: <Uhai />,
      },
      {
        path: "/rony",
        element: <MembershipForm></MembershipForm>,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/charity/donation/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/charity/donation/${params.id}`
          );
        },
        element: <Donation></Donation>,
      },

      {
        path: "/payment/success",
        // loader: async ({ params }) => {
        //   return fetch(
        //     `https://alumni-managemnet-app-server.vercel.app/payment/success/${params.id}`
        //   );
        // },
        element: <PaymentSuccessful></PaymentSuccessful>,
      },
      {
        path: "/payment/fail",
        element: <CharityPaymentFail></CharityPaymentFail>,
      },
      {
        path: "/successFullStory/:id",
        element: <SingleSuccessFullStory></SingleSuccessFullStory>,
      },

      {
        path: "/updateGallery/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/gallery/${params.id}`
          );
        },
        element: <UpdateGallery></UpdateGallery>,
      },
      {
        path: "/news",
        element: <AllNewsPage />,
      },
      {
        path: "/gallery",
        element: <AllGalleryImage></AllGalleryImage>,
      },

      {
        path: "/news/:id",
        element: <SingleNewsSection></SingleNewsSection>,
      },
      {
        path: "/charity/:id",
        element: <DisplaySingleCharity></DisplaySingleCharity>,
      },

      {
        path: "/events/:singleEventId",
        element: <SingleEvent />,
      },

      {
        path: "/alumni",
        element: <AlumniPage />,
      },
      {
        path: "/charityDonation",
        element: <TotalCharityDonation></TotalCharityDonation>,
      },

      {
        path: "/alumni/batch/:year",
        element: <BatchWiseStudent />,
      },
      // single student / alumni page data
      {
        path: "/alumni/:email",
        element: <SinglePerson />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },

      {
        path: "/signup",
        element: <RegisterPage />,
      },
      // {
      //   path: "/newsUpdatePage",
      //   element: <NewsUpdatePage></NewsUpdatePage>,
      // },

      // {
      //   path: "/eventUpdate/:id",
      //   element: <EventUpdate></EventUpdate>,
      //   loader: ({ params }) =>
      //     fetch(`https://alumni-managemnet-app-server.vercel.app/events/${params.id}`),
      // },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dashboard/",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: "/dashboard/", element: <DashboardMain /> },

      // Alumni //
      { path: "/dashboard/alumni/", element: <AllAlumni /> },
      { path: "/dashboard/profile/:email", element: <MembershipForm /> },
      // All News
      { path: "/dashboard/news/", element: <AllNews /> },
      { path: "/dashboard/news/add-a-news", element: <NewsCreateForm /> },
      {
        path: "/dashboard/news/edit/:id",
        element: <NewsUpdate></NewsUpdate>,
      },
      // E V E N T S
      { path: "/dashboard/events", element: <AllEvents /> },
      { path: "/dashboard/events/add-a-event", element: <AddAEvent /> },
      { path: "/dashboard/events/edit/:id", element: <EventUpdate /> },

      // CHARITY
      { path: "/dashboard/charity", element: <AllCharity></AllCharity> },
      {
        path: "/dashboard/charity/add-a-charity",
        element: <CreateCharity></CreateCharity>,
      },
      {
        path: "/dashboard/charity/edit/:id",
        element: <UpdateCharity></UpdateCharity>,
      },

      //  GALLERY
      { path: "/dashboard/gallery/", element: <CreateGallery /> },

      // Successful Story
      {
        path: "/dashboard/successfulStory/",
        element: <AllSuccessFullStory />,
      },
      // create a new  Successful story
      {
        path: "/dashboard/successfulStory/add-a-successfulStory",
        element: <CreateSuccessFullStory />,
      },

      {
        path: "/dashboard/successfulStory/edit/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://alumni-managemnet-app-server.vercel.app/successFullStory/${params.id}`
          );
        },
        element: <UpdateSuccessFullStory></UpdateSuccessFullStory>,
      },

      { path: "/dashboard/Checkout/", element: <CheckoutPage /> },
    ],
  },
]);

export default routes;
