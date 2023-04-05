import React from "react";

const EmailSubScribe = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/5M3bCB1/meeting.jpg)] w-full h-[350px] object-cover overflow-hidden mt-[5rem] relative backdrop-blur-sm bg-primary/60 bg-no-repeat">
      <div className="w-10/12 text-center text-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] backdrop-blur-sm bg-primary/20">
        <h1 className="font-semibold text-xl md:text-3xl">
          Don't Miss Awesome Story From Our Alumni
        </h1>
        <p>
          Please drop your email address to get news latest from us. We will inform you
          for next event.
        </p>

        <div>
          <span className="font-semibold text-white peer-focus:text-purple-600 text-left mt-2">
            Email
          </span>
          <br />
          <input
            type="email"
            required
            className='bg-transparent border-b-2 py-1 focus:outline-none focus:border-white-600 focus:border-b-2 transition-colors peer" autocomplete="off w-2/6'
          />
        </div>
        <button
          type="submit"
          className="mt-8 py-4 px-8 text-right text-primary font-bold bg-secondary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmailSubScribe;
