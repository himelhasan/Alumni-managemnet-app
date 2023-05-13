import React, { useContext } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  useEditAlumniMutation,
  useGetAllBatchesQuery,
  useGetAllDegreeProgramsQuery,
  useGetAllGraduationMajorQuery,
  useGetAllUniversityNameQuery,
  useGetSingleAlumniQuery,
} from "../../../features/Api/apiSlice";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import useToken from "../../../customHooksReact/useToken";
const MembershipForm = () => {
  const [
    editAlumni,
    { data: alumniData, isLoading, isError, error: editError, isSuccess },
  ] = useEditAlumniMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/dashboard/profile/")[1];
  const [token] = useToken(pathname);
  const { user } = useContext(AuthContext);
  const {
    data: singleAlumni,
    isLoading: isSingleAlumniLoading,
    isError: isSingleAlumniLoadingError,
    error: isAlumniError,
  } = useGetSingleAlumniQuery(pathname);
  const { data: universityName } = useGetAllUniversityNameQuery();
  const { data: majorSubject } = useGetAllGraduationMajorQuery();
  const { data: degreeNames } = useGetAllDegreeProgramsQuery();
  const { data: graduationYear } = useGetAllBatchesQuery();

  const {
    firstName: initialFirstName,
    lastName: initialLastName,
    profile_picture: initialProfile_picture,
    name: initialName,
    email: initialEmail,
    phone: initialPhone,
    education: initialEducation,
    graduation_year: initialGraduation_year,
    degree: initialDegree,
    department: initialDepartment,
    major: initialMajor,
    address: initialAddress,
    personal_information: initialPersonal_information,
  } = singleAlumni || {};

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handelImageUpdate = (data) => {};

  const handelMembership = (data) => {
    // const formData = new FormData();
    // formData.append("image", photo);

    // fetch("https://api.imgbb.com/1/upload?key=dd1a5cd35aa9d832298beb50053079da", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPhoto(data.data.display_url);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error(`${error.message}`, {
    //       position: toast.POSITION.TOP_LEFT,
    //     });
    //   });

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      name: `${data.firstName} ${data.lastName}`,
      graduation_year: data.graduation_year,
      degree: data.degreeEarned,
      major: data.majorSubject,
      email: data.email,
      phone: data.mobile,
      universityName: data.yourUniversityName,
      address: {
        street: data.streetAddress,
        city: data.city,
        state: data.stateName,
        zip: data.zipCode,
      },
      education: {
        degree: data.degreeEarned,
        major: data.majorSubject,
        institution: data.yourUniversityName,
        graduation_year: data.graduation_year,
        gpa: "",
      },

      is_employed: false,

      personal_information: {
        date_of_birth: data.dateOfBirth,
        gender: data.gender,
        blood_group: data.bloodGroup,
        fathers_name: data.fatherName,
        mothers_name: data.motherName,
        marital_status: "",
        nationality: "Bangladeshi",
        languages: ["English", "Bengali"],
        hobbies: [],
      },
    };

    editAlumni({
      email: initialEmail,
      data: userData,
    });
    <>{isSuccess && toast.success(`UPDATED PROFILE`)}</>;
    <>{isError && toast.error(`Error Updating Profile`)}</>;
  };

  //   isLoading: isSingleAlumniLoading,
  // isError: isSingleAlumniLoadingError,
  // error: isAlumniError,

  let content;
  if (isSingleAlumniLoading && !isSingleAlumniLoadingError) {
    content = <Loading />;
  }
  if (!isSingleAlumniLoading && isSingleAlumniLoadingError) {
    content = <ErrorAlert text={isAlumniError} />;
  }
  if (!isLoading && !isError && singleAlumni !== undefined) {
    content = (
      <>
        {" "}
        <form onSubmit={handleSubmit(handelMembership)}>
          <div className="flex gap-10  flex-col-reverse	md:flex-row">
            <div className="w-full md:w-3/4">
              {/* first Name and Last Name */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("firstName", { required: true, maxLength: 20 })}
                    type="text"
                    name="firstName"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    defaultValue={initialFirstName}
                    required
                  />
                  <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    First name
                  </label>
                  {errors.firstName && (
                    <span className="text-red-600">Please Write your name</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("lastName", { required: true, maxLength: 20 })}
                    type="text"
                    name="lastName"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    defaultValue={initialLastName}
                    required
                  />
                  <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Last name
                  </label>
                  {errors.lastName && (
                    <span className="text-red-600">Write your last name</span>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i, // regular expression for email validation
                    })}
                    defaultValue={initialEmail}
                    readOnly
                    type="text"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Email
                  </label>
                  {errors.email && (
                    <span className="text-red-600">Enter your valid email</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("mobile", { required: true })}
                    defaultValue={initialPhone}
                    type="tel"
                    name="mobile"
                    id="floating_phone"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Phone
                  </label>
                  {errors.mobile && (
                    <span className="text-red-600">please write your Number</span>
                  )}
                </div>
              </div>

              {/* Education Information */}

              {/* University and Major */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="university"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your university
                  </label>
                  <select
                    {...register("yourUniversityName", { required: true })}
                    id="university"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option
                      value={
                        initialEducation?.institution ? initialEducation?.institution : ""
                      }
                      disabled
                      selected
                    >
                      {initialEducation?.institution
                        ? initialEducation?.institution
                        : " Select your university"}
                    </option>
                    {universityName &&
                      universityName.map((e) => (
                        <option value={e.name}>{e.name} </option>
                      ))}
                  </select>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="majorSubject"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your Major
                  </label>
                  <select
                    {...register("majorSubject", { required: true })}
                    id="majorSubject"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option value={initialMajor ? initialMajor : ""} disabled selected>
                      {initialMajor ? initialMajor : " Select your major"}
                    </option>
                    {majorSubject &&
                      majorSubject.map((e) => (
                        <option value={e.graduationMajor}>{e.graduationMajor} </option>
                      ))}
                  </select>
                  {errors.majorSubject && (
                    <span className="text-red-600">please select your Degree</span>
                  )}
                </div>
              </div>

              {/* degree and Batch number */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="degree"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    select your degree
                  </label>
                  <select
                    {...register("degreeEarned", { required: true })}
                    id="degree"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option
                      value={initialEducation?.degree ? initialEducation?.degree : ""}
                      disabled
                      selected
                    >
                      {initialEducation?.degree
                        ? initialEducation?.degree
                        : " Select your degree"}
                    </option>

                    {degreeNames &&
                      degreeNames.map((e) => (
                        <option value={e.degree}>{e.program_name} </option>
                      ))}
                  </select>
                  {errors.degreeEarned && (
                    <span className="text-red-600">please select your Degree</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="graduationYear"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Year of Graduation{" "}
                  </label>
                  <select
                    {...register("graduation_year", { required: true })}
                    id="graduationYear"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option
                      value={initialGraduation_year ? initialGraduation_year : ""}
                      disabled
                      selected
                    >
                      {initialGraduation_year
                        ? initialGraduation_year
                        : "Select your Graduation Year"}
                    </option>

                    {graduationYear &&
                      graduationYear.map((e) => (
                        <option value={e.batchNumber}>{e.batchNumber} </option>
                      ))}
                  </select>
                  {errors.graduation_year && (
                    <span className="text-red-600">
                      please select your Gratuation Year
                    </span>
                  )}
                </div>
              </div>

              {/* Personal data Optional */}
              {/* Father and Mother */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("fatherName")}
                    defaultValue={initialPersonal_information?.fathers_name}
                    type="text"
                    name="fatherName"
                    id="floating_father_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_father_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your father name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("motherName")}
                    defaultValue={initialPersonal_information?.mothers_name}
                    type="text"
                    name="motherName"
                    id="floating_mother_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_mother_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Your Mother name
                  </label>
                </div>
              </div>

              {/* Blood Group and Gender */}
              <div className="grid md:grid-cols-3 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="bloodGroup"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    select Blood Group
                  </label>
                  <select
                    {...register("bloodGroup", { required: true })}
                    id="bloodGroup"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option
                      selected
                      disabled
                      value={initialPersonal_information?.blood_group}
                    >
                      {initialPersonal_information?.blood_group
                        ? initialPersonal_information?.blood_group
                        : "Blood Group"}
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  {errors.bloodGroup && (
                    <span className="text-red-600">select Blood Group</span>
                  )}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="bloodGroup"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your gender
                  </label>
                  <select
                    {...register("gender", { required: true })}
                    id="bloodGroup"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  >
                    <option
                      selected
                      disabled={!initialPersonal_information?.gender}
                      value={initialPersonal_information?.gender}
                    >
                      {initialPersonal_information?.gender
                        ? initialPersonal_information?.gender
                        : "Gender"}
                    </option>

                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && <span className="text-red-600">select gender</span>}
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <label
                    for="birthDate"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select your Date of Birth
                  </label>

                  <div className="relative max-w-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>

                    <Controller
                      name="dateOfBirth"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <input
                          type="date"
                          onChange={onChange}
                          value={value}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Details street and city */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("streetAddress")}
                    defaultValue={initialAddress?.street}
                    type="text"
                    name="streetAddress"
                    id="floating_street"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_street"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Street
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("city")}
                    defaultValue={initialAddress?.city}
                    type="text"
                    name="city"
                    id="floating_city"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_city"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City Name
                  </label>
                </div>
              </div>
              {/* Contact Details state and zip */}
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("stateName")}
                    defaultValue={initialAddress?.state}
                    type="text"
                    name="stateName"
                    id="floating_state"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_state"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    State
                  </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    {...register("zipCode")}
                    defaultValue={initialAddress?.zip}
                    type="number"
                    name="zipCode"
                    id="floating_zip"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                    placeholder=" "
                  />
                  <label
                    for="floating_zip"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    zip
                  </label>
                </div>
              </div>

              {/* submit button */}
              <button
                disabled={isLoading}
                type="submit"
                className="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Update Profile
              </button>
            </div>
            <div className="w-full md:w-1/4">
              <div className="space-y-2 col-span-full lg:col-span-1 flex  justify-center ">
                <div>
                  <p className="font-medium">Photo *</p>
                  {initialProfile_picture ? (
                    <img
                      src={initialProfile_picture}
                      alt="user"
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    />
                  ) : (
                    <img
                      className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                      src={user?.photoURL}
                      alt=""
                    />
                  )}

                  {/* <input
              id="address"
              type="file"
              name="image"
              placeholder=""
              accept="photo/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            /> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }

  return <section className="p-6">{content}</section>;
};

export default MembershipForm;
