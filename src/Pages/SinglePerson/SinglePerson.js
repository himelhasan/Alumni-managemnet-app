import React, { useContext, useState } from "react";
import {
  FaAddressCard,
  FaArrowLeft,
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaRegComment,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import {
  useGetAllAlumniQuery,
  useGetSingleAlumniQuery,
} from "../../features/Api/apiSlice";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";

const SinglePerson = () => {
  const { user } = useContext(AuthContext);
  // const singleAlumni = useLoaderData();
  const [userEmail, setUserEmail] = useState(null);

  const getUserEmail = async () => {
    const userEmail = await user?.email;
    return await userEmail;
  };

  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/alumni/")[1];
  //load data using redux
  const {
    data: singleAlumni,
    isLoading,
    isError,
    error,
  } = useGetSingleAlumniQuery(currentPath);

  const {
    name,
    profile_picture,
    graduation_year,
    major,
    email,
    degree,
    department,
    phone,
    _id,
    phone_2,
    address,
    careers,
    education,
    personal_information,
  } = singleAlumni || {};
  console.log(singleAlumni);

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
        <>
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center  ">
            {profile_picture ? (
              <div
                className={`!w-64 !h-64 !block	 border-4 border-primary rounded-full m-0 bg-cover bg-center	bg-no-repeat`}
                style={{
                  backgroundImage: `url(${profile_picture})`,
                }}
              ></div>
            ) : (
              <div
                style={{
                  backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                }}
                className={`!w-64 !h-64 !block border-4 border-primary rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
              ></div>
            )}

            <div>
              <h2 className="text-4xl mb-3 text-primary ">{name}</h2>
              {user?.uid ? (
                <>
                  {email ? (
                    <>
                      {" "}
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>

                        <p> {email}</p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  {phone ? (
                    <>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-5 h-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                          />
                        </svg>

                        <p> {phone}</p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                  <p>
                    {address?.street === "" &&
                    address?.city === "" &&
                    address?.state === "" &&
                    address?.zip === "" ? (
                      <></>
                    ) : (
                      <>
                        <div className="flex items-start gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                            />
                          </svg>
                          <p className="break-words	">
                            {` ${address?.city} ${address?.state} ${address?.zip}`}
                          </p>
                        </div>
                      </>
                    )}
                  </p>
                </>
              ) : (
                <></>
              )}
              <div className="flex items-center gap-3 mt-3 cursor-pointer ">
                <FaFacebook className="text-primary hover:text-secondary duration-500 ease-in-out"></FaFacebook>
                <FaGithub className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGithub>
                <FaGoogle className="text-primary hover:text-secondary duration-500 ease-in-out"></FaGoogle>
                <FaLinkedin className="text-primary hover:text-secondary duration-500 ease-in-out"></FaLinkedin>
              </div>
              <button className="bg-primary px-6 py-2  items-center text-white font-semibold shadow-soft-xl  rounded-md mt-3">
                <a href={`mailto: ${email}`} alt="" className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                    />
                  </svg>
                  <h2>Contact Me</h2>
                </a>
              </button>
            </div>
          </div>
          <div className="mb-4">
            <div className="">
              <div>
                <div className="mb-5"></div>
              </div>
              <div>
                <h2 className="text-2xl my-8">Personal Information</h2>
                <div className="overflow-x-auto">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>DOB</th>
                        <th>Blood Group</th>
                        <th>Gender</th>
                        <th>Fathers Name</th>
                        <th>Mothers Name</th>
                        <th>Languages</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          {" "}
                          {personal_information?.date_of_birth ? (
                            <>{personal_information?.date_of_birth}</>
                          ) : (
                            <></>
                          )}
                        </th>
                        <td>
                          {" "}
                          {personal_information?.blood_group ? (
                            <>{personal_information?.blood_group}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {" "}
                          {personal_information?.gender ? (
                            <>{personal_information?.gender}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {" "}
                          {personal_information?.fathers_name ? (
                            <> {personal_information?.fathers_name}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>
                          {personal_information?.mothers_name ? (
                            <> {personal_information?.mothers_name}</>
                          ) : (
                            <></>
                          )}
                        </td>

                        <td>
                          {personal_information?.languages ? (
                            <>
                              {" "}
                              {personal_information?.languages?.map((language, i) => {
                                return (
                                  <>
                                    <p key={i} className="inline-block ">
                                      {language}
                                    </p>
                                  </>
                                );
                              })}{" "}
                            </>
                          ) : (
                            <></>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl my-8">Education</h2>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Institution</th>
                      <th>Major</th>
                      <th>Graduation Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      <tr>
                        <th>{education?.degree ? <>{education?.degree}</> : <></>}</th>
                        <td>
                          {education?.institution ? (
                            <> {education?.institution}</>
                          ) : (
                            <></>
                          )}
                        </td>
                        <td>{education?.major ? <>{education?.major}</> : <></>}</td>
                        <td>
                          {education?.graduation_year ? (
                            <>{education?.graduation_year}</>
                          ) : (
                            <></>
                          )}
                        </td>
                      </tr>
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      </>
    );
  }

  // slide button previous and next
  const [previous, setPrevious] = useState(0);
  const [next, setNext] = useState(8);

  const handlePrevious = () => {
    if (previous > 0) {
      setPrevious(previous - 8);
      setNext(next - 8);
    }
    console.log("Clicked Previous");
  };
  const handleNext = () => {
    setPrevious(previous + 8);
    setNext(next + 8);
    console.log("clicked next");
  };

  const {
    data: similarAlumni,
    isLoading: isSimiliarAlumniLoading,
    isError: isSimiliarAlumniError,
    error: similarAlumniError,
  } = useGetAllAlumniQuery();

  let similarAlumniContent;

  if (isSimiliarAlumniLoading && !isSimiliarAlumniError) {
    similarAlumniContent = <Loading />;
  }
  if (!isSimiliarAlumniLoading && isSimiliarAlumniError) {
    similarAlumniContent = <ErrorAlert text={similarAlumniError} />;
  }
  if (!isSimiliarAlumniLoading && !isSimiliarAlumniError) {
    similarAlumniContent = (
      <div>
        {similarAlumni
          ?.slice(previous, next)
          .filter((per) => per?._id !== _id)
          .map((person, i) => {
            return (
              <div key={i} className="flex items-center gap-5 mb-12 ">
                <div
                  className={` rounded-full  m-0 bg-cover bg-center	bg-no-repeat`}
                  style={{
                    backgroundImage: `url(${person?.profile_picture})`,
                    height: "80px",
                    width: "80px",
                  }}
                ></div>
                <div>
                  <h2 className="text-lg">
                    {" "}
                    <Link to={`/alumni/${person?.email}`}>{person?.name}</Link>
                  </h2>
                  <Link to={`/alumni/${person?.email}`}>
                    <button className="text-secondary ">Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    );
  }

  return (
    <div>
      <div data-aos="fade-up"
     data-aos-duration="3000" className="bg-primary text-center text-white md:py-24 md:px-24 py-16 px-12 ">
        <div className="md:w-1/2 mx-auto ">
          <h2 className="md:text-4xl text-2xl mb-5">About {name}</h2>
          <hr className="border-2 w-24 mx-auto border-secondary " />
          <p className="mt-5">
            {`${name} is a valued member of our alumni community
            ${
              personal_information?.blood_group
                ? `, with a blood group of ${personal_information?.blood_group}`
                : ""
            }. Stay connected with ${name} 
            ${email ? `through their email at ${email}` : ""}
          `}
          </p>
        </div>
      </div>
      <div className="w-9/12 mx-auto md:my-32 my-16">
        <div className="grid md:grid-cols-3 gap-12">
          <>
            <div className="lg:col-span-2">{content}</div>
          </>
          <div className="bg-accent md:p-5 p-2 lg:col-span-1">
            <h2 className="md:text-xl text-2xl md:mb-8 mb-5">
              Similar <br /> Batch Student
            </h2>
            <div>{similarAlumniContent}</div>

            <div className="flex items-center justify-end gap-3">
              <button onClick={() => handlePrevious()}>
                <FaArrowLeft className="text-primary cursor-pointer"></FaArrowLeft>
              </button>
              <button
                disabled={next > similarAlumni?.length}
                onClick={() => handleNext()}
              >
                <FaArrowRight className="text-primary   cursor-pointer"></FaArrowRight>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePerson;
