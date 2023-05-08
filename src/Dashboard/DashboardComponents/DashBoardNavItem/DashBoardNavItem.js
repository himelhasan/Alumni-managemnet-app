import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const DashBoardNavItem = ({ url, name, fontAwesome, bg, text }) => {
  const location = useLocation();
  const isActive = location.pathname === `${url}`;

  return (
    <li className="mt-0.5 mb-2 w-full ">
      <NavLink
        className={`${bg} px-4 py-2.7 text-xs my-0 mx-4 flex items-center whitespace-nowrap transition-colors
           ${
             isActive
               ? "rounded-lg drop-shadow-2xl bg-[#fff] px-4 font-semibold"
               : "bg-transparent"
           }`}
        to={url}
      >
        <div
          className={`${text} shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg   bg-center stroke-0 text-center xl:p-2.5 ${
            isActive
              ? "bg-gradient-to-tl from-primary to-[#1E79DE]"
              : "bg-transparent text-slate-700"
          }`}
        >
          <i className={fontAwesome}></i>
        </div>
        <span
          className={`${text} ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-slate-500 font-sans`}
          activeClassName="text-white"
        >
          {name}
        </span>
      </NavLink>
    </li>
  );
};

export default DashBoardNavItem;
