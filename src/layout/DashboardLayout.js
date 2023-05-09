import React, { useContext, useEffect, useRef } from "react";
import DashBoardNavbar from "../Dashboard/DashboardComponents/DashBoardNavbar";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import logo from "../../src/assets/logo/logo-black.png";
import DashBoardNavItem from "../Dashboard/DashboardComponents/DashBoardNavItem/DashBoardNavItem";
import ResizeObserver from "resize-observer-polyfill";
import _ from "lodash";
import { AuthContext } from "../sharedComponents/UseContext/AuthProvider";
const DashboardLayout = () => {
  const location = useLocation();
  const isActive = location.pathname === "/dashboard";
  const elementRef = useRef(null);
  const pathname = location.pathname;
  console.log(pathname);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(
      _.debounce((entries) => {
        console.log("Element size changed!");
        // handle resize events here
      }, 100)
    );
    resizeObserver.observe(elementRef.current);

    // cleanup function to disconnect the observer when the component unmounts
    return () => resizeObserver.disconnect();
  }, []);
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <>
      <div ref={elementRef} className="drawer bg-[#F8F9FA] drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content w-full flex flex-col items-start justify-start">
          {/* <!-- Page content here --> */}
          <DashBoardNavbar />
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#F8F9FA]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/" className="bg-transparent px-4  mb-5">
                <img src={logo} alt="" className="mt-0.5 w-3/4 " />
              </Link>
            </li>
            <DashBoardNavItem
              name="Dashboard"
              fontAwesome="fa-solid fa-store"
              url="/dashboard"
            />
            <DashBoardNavItem
              name="Alumni"
              fontAwesome="fa-solid fa-graduation-cap"
              url="/dashboard/alumni"
            />
            <DashBoardNavItem
              name="All News"
              fontAwesome="fa-regular fa-file-lines"
              url="/dashboard/news"
            />
            {(pathname === "/dashboard/news" ||
              pathname === "/dashboard/news/add-a-news") && (
              <DashBoardNavItem
                name="Add a News"
                fontAwesome="fa-regular fa-file-lines"
                url="/dashboard/news/add-a-news"
              />
            )}

            <DashBoardNavItem
              name="All Events"
              fontAwesome="fa-regular fa-file-lines"
              url="/dashboard/events"
            />

            {(pathname === "/dashboard/events" ||
              pathname === "/dashboard/events/add-a-event") && (
              <DashBoardNavItem
                name="Add a Event"
                fontAwesome="fa-regular fa-file-lines"
                url="/dashboard/events/add-a-event"
              />
            )}

            <DashBoardNavItem
              name="All Charity"
              fontAwesome="fa-regular fa-file-lines"
              url="/dashboard/charity"
            />

            {(pathname === "/dashboard/charity" ||
              pathname === "/dashboard/charity/add-a-charity") && (
              <DashBoardNavItem
                name="Add a Charity"
                fontAwesome="fa-regular fa-file-lines"
                url="/dashboard/charity/add-a-charity"
              />
            )}

            <DashBoardNavItem
              name="Gallery"
              fontAwesome="fa-solid fa-photo-film"
              url="/dashboard/gallery"
            />
            <DashBoardNavItem
              name="Successful Story"
              fontAwesome="fa-solid fa-photo-film"
              url="/dashboard/successfulStory"
            />
            {(pathname === "/dashboard/successfulStory" ||
              pathname ===
                "/dashboard/successfulStory/add-a-successfulStory") && (
              <DashBoardNavItem
                name="Add a Story"
                fontAwesome="fa-regular fa-file-lines"
                url="/dashboard/successfulStory/add-a-successfulStory"
              />
            )}

            <DashBoardNavItem
              name="Profile"
              fontAwesome="fa-solid fa-user"
              url={`/dashboard/profile/${user?.email}`}
            />

            {/* LOG OUT BUTTON */}
            <li className="mt-0.5 mb-2 w-full " onClick={() => handleLogout()}>
              <NavLink
                className={`bg-gradient-to-tl from-primary to-[#1E79DE]  px-4 py-2.7 text-xs my-0 mx-4 flex items-center whitespace-nowrap transition-colors
           ${
             isActive
               ? "rounded-lg drop-shadow-2xl bg-[#fff] px-4 font-semibold"
               : "bg-transparent"
           }`}
                to=""
              >
                <div
                  className={`text-white shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg   bg-center stroke-0 text-center xl:p-2.5 ${
                    isActive
                      ? "bg-gradient-to-tl from-primary to-[#1E79DE]"
                      : "bg-transparent text-slate-700"
                  }`}
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                </div>
                <span
                  className={`text-white ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-500 font-sans`}
                  activeClassName="text-white"
                >
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
