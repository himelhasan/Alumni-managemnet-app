import React from "react";
import DisplayAllNews from "../../sharedComponents/NewsCards/DisplayAllNews";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import { useGetaLLNewsQuery } from "../../features/Api/apiSlice";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";

const AllNewsPage = () => {
  const {
    data: newsData,
    isError: newsIsError,
    isLoading: newsIsLoading,
    error: newsError,
  } = useGetaLLNewsQuery();

  let newsContent;

  if (newsIsLoading && !newsIsError) {
    newsContent = <Loading />;
  }
  if (!newsIsLoading && newsIsError) {
    newsContent = <ErrorAlert text={newsError} />;
  }
  if (!newsIsLoading && !newsIsError && newsData?.length === 0) {
    newsContent = <ErrorAlert text="No News Find" />;
  }
  if (!newsIsLoading && !newsIsError && newsData?.length > 0) {
    newsContent = (
      <>
        {" "}
        <div data-aos="fade-right"
     data-aos-duration="3000" className="grid lg:grid-cols-3 gap-10">
          {newsData?.map((news) => (
            <DisplayAllNews news={news} key={news._id}></DisplayAllNews>
          ))}
        </div>{" "}
      </>
    );
  }

  return (
    <div className="">
      <InnerPageHeader
        title={"All News"}
        img={
          "https://images.pexels.com/photos/7942549/pexels-photo-7942549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        description="Stay up to date with the latest news and updates from our alumni management system. From new features and product releases to industry trends and best practices, our news section provides valuable insights and information for institutions looking to build stronger relationships with their alumni communities. Scroll here to read our latest news and stay informed."
      ></InnerPageHeader>
      <div className="w-9/12 mx-auto my-16">
        <>{newsContent}</>
      </div>
    </div>
  );
};

export default AllNewsPage;
