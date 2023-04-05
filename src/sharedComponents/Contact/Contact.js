import React from "react";

const Contact = () => {
  return (
    <div className="mt-16 mb-20">
      <h1 className=" text-2xl font-bold mb-10">Contact</h1>
      <form>
        <div className="flex gap-12 mb-12">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            className="w-1/2 p-6  text-xs  bg-[#F2F2F2]"
            required
          />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-1/2 p-6  text-xs  bg-[#F2F2F2]"
            required
          />
        </div>

        <div className="flex gap-12 mb-12">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            className="w-1/2 p-6  text-xs  bg-[#F2F2F2]"
            required
          />

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Last Name"
            className="w-1/2 p-6  text-xs  bg-[#F2F2F2]"
            required
          />
        </div>

        <textarea
          name="message"
          id="message"
          rows="3"
          placeholder="FeedBack"
          className="w-full p-6  text-xs  bg-[#F2F2F2]"
          required
        ></textarea>

        <button className="mt-8 py-4 px-8 text-right text-primary font-bold bg-secondary">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
