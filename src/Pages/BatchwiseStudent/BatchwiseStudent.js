import React from "react";
import student from "../../assets/batchwiseStudent.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import GallerySlider from "../../sharedComponents/GallerySlider/GallerySlider";
import AllEventsCard from "../../sharedComponents/Events/AllEvents/AllEventsCard";
import {
  useGetBatchWiseEventsQuery,
  useGetYearWiseAlumniQuery,
} from "../../features/Api/apiSlice";
import PersonCardSkeleton from "../../sharedComponents/Skeletion/PersonCardSkeletion";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import Loading from "../../sharedComponents/Loading/Loading";

const BatchWiseStudent = () => {
  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/alumni/batch/")[1];
  //load data using redux

  const {
    data: alumniData,
    isError: alumniDataIsError,
    isLoading: alumniDataIsLoading,
    error: alumniDataError,
  } = useGetYearWiseAlumniQuery(currentPath);

  let alumniContent;

  if (alumniDataIsLoading && !alumniDataIsError) {
    alumniContent = (
      <div className="mx-auto w-full">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4  lg:max-w-full">
          <PersonCardSkeleton /> <PersonCardSkeleton /> <PersonCardSkeleton />
          <PersonCardSkeleton /> <PersonCardSkeleton /> <PersonCardSkeleton />
          <PersonCardSkeleton /> <PersonCardSkeleton />
        </div>
      </div>
    );
  }
  if (!alumniDataIsLoading && alumniDataIsError) {
    alumniContent = <ErrorAlert text={alumniDataError} />;
  }
  if (!alumniDataIsLoading && !alumniDataIsError && alumniData?.length === 0) {
    alumniContent = <ErrorAlert text="No Data Found" />;
  }
  if (!alumniDataIsLoading && !alumniDataIsError && alumniData?.length > 0) {
    alumniContent = (
      <>
        <div className=" grid md:grid-cols-4 gap-10">
          {alumniData?.map((singleAlumni) => (
            <AlumniBatchDataCard key={singleAlumni._id} singleAlumni={singleAlumni} />
          ))}
        </div>
      </>
    );
  }

  const { year } = useParams();

  //
  const { data, isLoading, isError, error } = useGetBatchWiseEventsQuery(year);

  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {data?.slice(0, 4).map((item) => (
            <AllEventsCard key={item._id} item={item} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="bg-accent">
      <InnerPageHeader
        title={`Batch ${year}`}
        img={student}
        description={`Connecting  Graduates: Meet the Students of Our Batch`}
      />
      <div className="w-9/12 mx-auto md:py-32 py-16 ">
        <>{alumniContent} </>

        {alumniData?.length > 4 && (
          <div className="flex items-center justify-end gap-3 mt-5">
            <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
            <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
          </div>
        )}
      </div>

      <div className="bg-white py-10">
        <div className="w-9/12 mx-auto">
          <h2 className="text-3xl text-center">Upcoming Events for {year} </h2>
          {content}
        </div>
      </div>

      <GallerySlider year={year} />
    </div>
  );
};

export default BatchWiseStudent;
