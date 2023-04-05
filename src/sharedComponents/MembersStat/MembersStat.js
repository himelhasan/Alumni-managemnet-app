import React from "react";

const MembersStat = () => {
  return (
    <div
      className="grid  md:grid-cols-4 
       grid-cols-1 "
    >
      <div className="text-center md:mb-0 mb-4">
        <h2 className="  text-xl font-semibold">Members</h2>
        <p className=" text-lg pt-2">3458+</p>
      </div>
      <div className="text-center md:mb-0 mb-4">
        <h2 className="  text-xl font-semibold">Events</h2>
        <p className=" text-lg pt-2">58+</p>
      </div>
      <div className="text-center md:mb-0 mb-4">
        <h2 className="  text-xl font-semibold">Awards</h2>
        <p className=" text-lg pt-2">3245+</p>
      </div>
      <div className="text-center md:mb-0 mb-4">
        <h2 className="  text-xl font-semibold">Picnic</h2>
        <p className=" text-lg pt-2">45+</p>
      </div>
    </div>
  );
};

export default MembersStat;
