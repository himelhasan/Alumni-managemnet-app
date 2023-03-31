import React from "react";

const MembersStat = () => {
  return (
    <div className="md:w-9/12 mx-auto my-16">
      <div className="bg-gray-100 flex justify-around items-center py-16">
        <div>
          <h2>Members</h2>
          <p>3458+</p>
        </div>
        <div>
          <h2>Events</h2>
          <p>58+</p>
        </div>
        <div>
          <h2>Awards</h2>
          <p>3245+</p>
        </div>
        <div>
          <h2>Picnic</h2>
          <p>45+</p>
        </div>
      </div>
    </div>
  );
};

export default MembersStat;
