import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [galleries, setGalleries] = useState([]);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleryCategories`)
      .then((res) => res.json())
      .then((data) => {
        setGalleries(data);
      });
  }, []);

  useEffect(() => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleries`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  }, []);

  if (!galleries) {
    return <progress className="progress w-56"></progress>;
  }

  if (!gallery) {
    return <progress className="progress w-56"></progress>;
  }
  const handleButtonClick = (id) => {
    fetch(`https://alumni-managemnet-app-server.vercel.app/galleries/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
      });
  };

  return (
    <div className="mt-3  mx-auto relative">
      <div className="mt-10">
        <h2 className="text-2xl lg:text-2xl font-semibold my-3">Our Gallery</h2>
        <div>
          {galleries.map((galcat) => (
            <button
              onClick={() => {
                handleButtonClick(galcat.id);
              }}
              className="px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-gray-300 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary"
            >
              {galcat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
          {gallery.map((img) => (
            <div
              loading="lazy"
              className={`h-80 bg-primary bg-cover`}
              style={{
                backgroundImage: `url(${img.image_url})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
