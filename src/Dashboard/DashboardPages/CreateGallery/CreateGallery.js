import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";

const CreateGallery = () => {
  const [galleryCategory, setGalleryCategory] = useState([]);
  const [batchYear, setBatchYear] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/galleryCategories")
      .then((res) => res.json())
      .then((data) => {
        setGalleryCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://alumni-managemnet-app-server.vercel.app/all-batches")
      .then((res) => res.json())
      .then((data) => {
        setBatchYear(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleGallery = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const batchNumber = form.batchNumber.value;
    const gallery_category = form.gallery_category.value;
    const details = form.details.value;
    const time = new Date().toLocaleDateString();

    const image_url = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image_url);
    fetch("https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const galleryInfo = {
          title,
          batchNumber,
          details,
          gallery_category,
          total_view: 0,
          is_fatured: false,
          is_trending: true,
          time,
          image_url: data?.data?.display_url,
          name: user?.displayName,
          email: user?.email,
          img: user?.photoURL,
        };

        fetch("https://alumni-managemnet-app-server.vercel.app/gallery", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(galleryInfo),
        })
          .then((res) => res.json())
          .then((data) => {})
          .catch((error) => {
            console.log(error);
          });

        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-4xl my-5">Gallery</h2>

      <form onSubmit={(event) => handleGallery(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="Gallery Title"
            className="input input-bordered w-full "
            name="title"
            required
          />

          <div className="form-control w-full  ">
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              name="image"
              required
            />
          </div>
          <div className="form-control w-full ">
            <select required className="select select-bordered" name="gallery_category">
              {galleryCategory?.map((gCaterogy) => (
                <option key={gCaterogy.gallery_category_id}>{gCaterogy.name}</option>
              ))}
            </select>
          </div>
          <div className="form-control w-full ">
            <select required className="select select-bordered" name="batchNumber">
              {batchYear?.map((batchYear) => (
                <option key={batchYear._id}>{batchYear.batchNumber}</option>
              ))}
            </select>
          </div>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="Gallery Details"
          name="details"
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateGallery;
