import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import ButtonSizeSkeletion from "../../../sharedComponents/Skeletion/ButtonSizeSkeletion";
import {
  useEditNewsMutation,
  useGetNewsCategoriesQuery,
  useGetSingleNewsQuery,
} from "../../../features/Api/apiSlice";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import { toast } from "react-hot-toast";

const NewsUpdate = () => {
  const { user } = useContext(AuthContext);
  const param = useParams();

  const {
    data: news,
    isLoading: isNewsLoading,
    isError: isNewsError,
    error: newsError,
  } = useGetSingleNewsQuery(param.id);

  const [
    editNews,
    {
      data,
      isSuccess: isEditNewsSuccess,
      isLoading: isEditNewsLoading,
      isError: isEditNewsError,
      error: errorEditNews,
    },
  ] = useEditNewsMutation();

  const { _id, heading, image, authorProfession, newsDetails, author, NewsCategory } =
    news || {};

  const handleNewsUpdate = (event) => {
    event.preventDefault();
    // console.log("clicked");
    const form = event.target;
    const heading = form.heading.value;
    const author = form.author.value;
    const authorProfession = form.profession.value;
    const newsDetails = form.newsDetails.value;
    const NewsCategory = form.newsCategory.value;
    const image = form.image.files[0];
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image);

    fetch("https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const newsInfo = {
          heading,
          image: data.data.display_url,
          author: user?.displayName,
          email: user?.email,
          img: user?.photoURL,
          NewsCategory,
          authorProfession,
          newsDetails,
          time,
          likes: 0,
          comments: 0,
        };

        editNews({
          id: _id,
          data: newsInfo,
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isEditNewsSuccess) {
      toast.success("News Creation Success");
    }
    if (isEditNewsError) {
      toast.error("News Creation Error");
    }
  }, [isEditNewsError, isEditNewsSuccess]);

  const { data: newsCategories, isError, isLoading, error } = useGetNewsCategoriesQuery();

  const selectedNewsCategories = newsCategories?.find(
    (news) => news?._id === NewsCategory
  );

  let newsNameContent;

  if (isEditNewsLoading && !isEditNewsError) {
    newsNameContent = <ButtonSizeSkeletion />;
  }
  if (!isEditNewsLoading && isEditNewsError) {
    newsNameContent = <ErrorAlert text={errorEditNews} />;
  }
  if (!isEditNewsLoading && !isEditNewsError && newsCategories?.length === 0) {
    newsNameContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isEditNewsLoading && !isEditNewsError && newsCategories?.length > 0) {
    newsNameContent = (
      <>
        {newsCategories.map((newsCategory) => (
          <option value={newsCategory._id} key={newsCategory._id}>
            {newsCategory.categoryName}
          </option>
        ))}
      </>
    );
  }

  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-xl my-5 font-sans font-semibold">Edit News</h2>

      <form onSubmit={(event) => handleNewsUpdate(event)}>
        <div className="grid md:grid-cols-2 gap-5">
          <input
            type="text"
            defaultValue={heading}
            className="input input-bordered w-full "
            name="heading"
          />
          <div className="form-control w-full ">
            <input
              type="file"
              defaultValue={image}
              className="file-input file-input-bordered w-full "
              name="image"
              required
            />
          </div>
          <input
            type="text"
            defaultValue={author}
            className="input input-bordered w-full "
            name="author"
            readOnly
          />
          <input
            type="text"
            defaultValue={authorProfession}
            className="input input-bordered w-full "
            name="profession"
          />
        </div>
        <div className="form-control w-full mt-5">
          <select className="select select-bordered " name="newsCategory">
            <option selected value={NewsCategory}>
              {selectedNewsCategories?.categoryName}
            </option>
            {newsNameContent}
          </select>
        </div>
        <textarea
          className="textarea textarea-bordered w-full my-5"
          defaultValue={newsDetails}
          name="newsDetails"
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          {" "}
          Update News
        </button>
      </form>
    </div>
  );
};

export default NewsUpdate;
