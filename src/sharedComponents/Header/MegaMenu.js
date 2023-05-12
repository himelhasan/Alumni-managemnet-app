import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [batchData, setBatchData] = useState([""]);
  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  // get all batchs data

  const batch = async () => {
    const reqBatch = await fetch(
      `https://alumni-managemnet-app-server.vercel.app/all-batches`
    );
    const responseData = await reqBatch.json();
    setBatchData(responseData);
  };

  useEffect(() => {
    batch();
  }, []);

  return (
    <div className="flex justify-between items-center">
      <ul className="flex items-center">
        <li
          className=" relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <p>Batches</p>
          {showMenu && (
            <div className="absolute top-8 right-[-340px] w-[1130px] h-[300px]  overflow-y-scroll rounded-md bg-white text-black py-2 px-4 shadow-md">
              <div className="grid lg:grid-cols-3">
                <div className="lg:col-span-1 p-5">
                  <div
                    style={{
                      backgroundImage: `url("https://images.pexels.com/photos/7942545/pexels-photo-7942545.jpeg?auto=compress&cs=tinysrgb&w=1600")`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "410px",
                    }}
                    className="brightness-50"
                  ></div>
                </div>
                <div className="lg:col-span-2 p-5 text-center">
                  <ul className="grid grid-cols-8 gap-4">
                    {batchData &&
                      batchData.map((batch) => (
                        <div className="border-2 border-accent px-6 py-2 ">
                          <li key={batch._id}>
                            <Link to={`alumni${batch.url}`}>{batch.batchNumber}</Link>
                          </li>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MegaMenu;
