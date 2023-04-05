import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (

    <nav className="bg-primary text-white ">

      <div className="w-9/12 mx-auto flex flex-wrap  list-none justify-between items-center py-5 text-xl font-bold">
        <div>
          <img src={logo} alt="" className="h-16" />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <>
              {" "}
              <AiOutlineClose className="md:hidden"></AiOutlineClose>{" "}
            </>
          ) : (
            <>
              {" "}
              <BiMenu className="md:hidden"></BiMenu>
            </>
          )}
          <div
            className={`  flex w-full left-0 px-12 py-3 z-50 bg-[#2D6B5A] md:bg-transparent  md:px-0  flex-col absolute md:static duration-700 ease-in-out md:flex-row gap-5 ${
              open ? "top-24" : "top-[-200px]"
            }`}
          >
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/">
              <li>Events</li>
            </Link>
            <Link to="/">
              <li>News</li>
            </Link>
            <Link to="/">
              <li>Gallery</li>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
