import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import {
  useEditSuccessfulStoriesMutation,
  useGetAllBatchesQuery,
} from "../../../features/Api/apiSlice";
import { toast } from "react-hot-toast";

const UpdateSuccessFullStory = () => {
  const updateStoryData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { data: batchYear } = useGetAllBatchesQuery();

  // useEditSuccessfulStoriesMutation

  const [
    editSuccessfulStories,
    {
      data,
      isLoading: isEditLoading,
      isSuccess: isEditSuccess,
      isError: isEditError,
      error: editError,
    },
  ] = useEditSuccessfulStoriesMutation();

  useEffect(() => {
    if (isEditSuccess) {
      toast.success("Successfully toasted!");
    }
    if (isEditError) {
      toast.error(editError?.message);
    }
  }, [editError, isEditError, isEditSuccess]);

  const updateSuccessStory = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const image_url = form.image.files[0];
    const batchNumber = form.batchNumber.value;
    const details = form.details.value;
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image_url);
    fetch("https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const successFullStoryInfo = {
          title,
          batchNumber,
          details,
          image_url: data?.data?.display_url,
          time,
          name: user?.displayName,
          email: user?.email,
          img: user?.photoURL,
          comments: 0,
          likes: 0,
        };

        editSuccessfulStories({
          id: updateStoryData._id,
          data: successFullStoryInfo,
        });

        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-4xl my-5">Update SuccessFull Story</h2>

      <form onSubmit={(event) => updateSuccessStory(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="SuccessFull Story Title"
            className="input input-bordered w-full "
            name="title"
            defaultValue={updateStoryData?.title}
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
        </div>
        <div className="form-control w-full mt-5 ">
          <select required className="select select-bordered" name="batchNumber">
            {batchYear?.map((batchYear) => (
              <option key={batchYear._id}>{batchYear.batchNumber}</option>
            ))}
          </select>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          placeholder="SuccessFull Story Details"
          name="details"
          defaultValue={updateStoryData?.details}
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateSuccessFullStory;
