import React from "react";
import CreateEvents from "./CreateEvents";

const AddAEvent = () => {
  return (
    <div className="flex w-full">
      <div className="w-3/4 p-2 m-2 ">
        <CreateEvents />
      </div>
      <div className="w-1/4 p-2 m-2 "></div>
    </div>
  );
};

export default AddAEvent;
