import React from "react";

const FundsForCause = () => {
  return (
    <div className="mt-3 max-w-5xl mx-auto relative">
      <div className="m-2">
        <h2 className="text-2xl md:text-2xl font-semibold mb-3">Funds for a cause</h2>
        <p className="mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, pariatur velit?
          Ab voluptate sed optio repellendus doloremque odit natus, eligendi voluptatem
          impedit quam atque neque tenetur laboriosam esse, qui nam.
        </p>

        <button className="px-5 py-6 w-full md:w-auto text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white">
          $ 25
        </button>
        <button className="px-5 py-6 w-full md:w-auto md:ml-4 mt-3 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white">
          $ 50
        </button>
        <button className="px-5 py-6 w-full md:w-auto md:ml-4 mt-3 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white">
          $ 100
        </button>

        <input
          className="px-5 py-6 w-full lg:w-auto lg:ml-4 mt-3 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white"
          type="text"
          placeholder="Others"
        />

        <section className="flex mt-5">
          <input type="checkbox" class="w-8 md:w-16" />
          <p>
            I agee with all <span className="text-blue-500">Condition</span>
          </p>
        </section>

        <button className="px-5 py-6 w-full md:w-auto mt-4 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white">
          Submit Funds
        </button>

        <button className="px-5 py-6 w-full md:w-auto mt-4 md:ml-5 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white">
          Cancel Funds
        </button>
      </div>
    </div>
  );
};

export default FundsForCause;
