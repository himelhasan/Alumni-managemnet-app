import React from "react";
import AllNewsForAdmin from "./AllNewsForAdmin/AllNewsForAdmin";
import AllCharityForAdmin from "./AllCharityForAdmin/AllCharityForAdmin";

const SuperAdmin = () => {
  return (
    <div className="w-9/12 mx-auto my-16">
      <AllNewsForAdmin></AllNewsForAdmin>
      <AllCharityForAdmin></AllCharityForAdmin>
    </div>
  );
};

export default SuperAdmin;
