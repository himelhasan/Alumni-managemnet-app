import React from "react";
<script src="../path/to/chartjs.min.js"></script>;
const DashboardChart = () => {
  return (
    <div className="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
      <div className="relative z-20 flex flex-col min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 border-black-125 shadow-soft-xl dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
        <div className="p-6 pb-0 mb-0 border-b-0 border-solid border-black-125 rounded-t-2xl">
          <h6 className="dark:text-white">Sales overview</h6>
          <p className="leading-normal text-sm dark:opacity-60">
            <i className="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
            <span className="font-semibold">4% more</span> in 2021
          </p>
        </div>
        <div className="flex-auto p-4">
          <div>
            <canvas id="chart-line" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
