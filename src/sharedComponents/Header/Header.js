import React from "react";

const Header = () => {
  return (
    <nav className="bg-green-500 text-white ">
      <div className="w-9/12 mx-auto flex flex-wrap  list-none justify-between items-center py-5 text-xl font-bold">
        <div>
          <li>Alumni</li>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row gap-5 ">
          <li>Home</li>
          <li>Events</li>
          <li>News</li>
          <li>Gallery</li>
        </div>
      </div>
    </nav>
  );
};

export default Header;
