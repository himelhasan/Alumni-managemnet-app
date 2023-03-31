import React from "react";

const Gallery = () => {
  return (
    <div className="mt-10">
      <p className="text-4xl lg:text-5xl font-semibold my-3">Our Gallery</p>

      <div>
        <button className="px-5 py-6 w-full md:w-auto mt-4 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white hover:bg-green-600 hover:text-white">
          Old Memory
        </button>
        <button className="px-5 py-6 w-full md:w-auto md:ml-4 mt-2 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white hover:bg-green-600 hover:text-white">
          Events
        </button>
        <button className="px-5 py-6 w-full md:w-auto md:ml-4 mt-2 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white hover:bg-green-600 hover:text-white">
          Picnic
        </button>
        <button className="px-5 py-6 w-full md:w-auto md:ml-4 mt-2 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white hover:bg-green-600 hover:text-white">
          Foundations
        </button>
        <button className="px-5 py-6 w-full md:w-auto lg:ml-4 mt-2 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white hover:bg-green-600 hover:text-white">
          Convocations
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        <img
          className="rounded-tl-3xl rounded-br-3xl mt-3"
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="University"
        />
        <img
          className="rounded-tl-3xl rounded-br-3xl mt-3"
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="University"
        />
        <img
          className="rounded-tl-3xl rounded-br-3xl mt-3"
          src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="University"
        />
      </div>
    </div>
  );
};

export default Gallery;
