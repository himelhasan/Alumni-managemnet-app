import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useAddAlumniMutation,
  useGetAllBatchesQuery,
  useGetAllGraduationMajorQuery,
} from "../../features/Api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  addBlood,
  addEmail,
  addFirstName,
  addGraduationYear,
  addLastName,
  addMajor,
  addPhone,
  addProfilePhoto,
} from "../../features/userCreate/userCreate";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const { user } = useContext(AuthContext);
  const { data: majorSubject } = useGetAllGraduationMajorQuery();
  const { data: graduationYear } = useGetAllBatchesQuery();
  const [photo, setPhoto] = useState(null);
  const [photoURL, setPhotoURL] = useState(null);

  const [addAlumni, { data, isSuccess, isError, isLoading, error }] =
    useAddAlumniMutation();

  // use navigate
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const setFirstName = (name) => {
    dispatch(addFirstName(name));
  };
  const setLastName = (data) => {
    dispatch(addLastName(data));
  };
  const setProfilePhoto = (data) => {
    dispatch(addProfilePhoto(data));
  };
  const setEmail = (data) => {
    dispatch(addEmail(data));
  };
  const setPhone = (data) => {
    dispatch(addPhone(data));
  };
  const setBlood = (data) => {
    dispatch(addBlood(data));
  };
  const setMajor = (data) => {
    dispatch(addMajor(data));
  };
  const setGradYear = (data) => {
    dispatch(addGraduationYear(data));
  };

  const handleSaveAlumniToDB = (data) => {
    addAlumni(data);
    navigate(`/dashboard/profile/${data.email}`);
  };

  const handleSignUp = (data) => {
    const firstName = data.firstName;
    const lastName = data.lastName;
    const name = `${data.firstName} ${data.lastName}`;
    const email = data.email;
    const password = data.password;
    const blood_group = data.bloodGroup;
    const date_of_birth = data.dateOfBirth;
    const graduation_year = data.GraduationYear;
    const major = data.major;
    const phone = data.phone;
    const image_url = data.image[0];
    const formData = new FormData();
    formData.append("image", image_url);

    fetch("https://api.imgbb.com/1/upload?key=dd1a5cd35aa9d832298beb50053079da", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotoURL(data.data.display_url);
        createUser(email, password)
          .then((result) => {
            toast.success("SuccessFully Signup");
            const userfromData = result.user;
            const user = {
              firstName: firstName,
              lastName: lastName,
              name: `${firstName} ${lastName}`,
              profile_picture: data.data.display_url,
              graduation_year: graduation_year,
              degree: "",
              department: "",
              major: major,
              email: email,
              phone: phone,
              address: {
                street: "",
                city: "",
                state: "",
                zip: "",
              },
              education: {
                degree: "",
                major: major,
                institution: "",
                graduation_year: graduation_year,
                gpa: "",
              },

              is_employed: false,

              personal_information: {
                date_of_birth: date_of_birth,
                gender: "",
                blood_group: blood_group,
                fathers_name: "",
                mothers_name: "",
                marital_status: "",
                nationality: "",
                languages: ["English", "Bengali"],
                hobbies: [],
              },
            };

            updateUserProfile({
              displayName: name,
              photoURL: photoURL,
            })
              .then(() => {
                handleSaveAlumniToDB(user);
              })
              .catch((error) => {
                console.log(error);
              });
          })

          .catch((error) => {
            console.log(error);
            toast.error(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_LEFT,
        });
      });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("SuccessFully  Signup  from userEffect");
      reset();
    }
  }, [isSuccess, reset]);

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("SuccessFully  Signup");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex">
      <div>
        {/* <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 "> */}
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:rounded-lg">
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
                </label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  onKeyUp={(e) => setFirstName(e.target.value)}
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="John"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-600">{errors.firstName?.message}</p>
                )}
              </div>
              <div>
                <label
                  for="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  onKeyUp={(e) => setLastName(e.target.value)}
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="Doe"
                  required
                />
                {errors.lastName && (
                  <p className="text-red-600">{errors.lastName?.message}</p>
                )}
              </div>
              <div>
                <label
                  for="EmailAddress"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email Address
                </label>
                <input
                  onKeyUp={(e) => setEmail(e.target.value)}
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  id="EmailAddress"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="your@email.com"
                  required
                />
                {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
              </div>
              <div>
                <label
                  for="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  onKeyUp={(e) => setPhone(e.target.value)}
                  {...register("phone", {
                    required: "phone Address is required",
                  })}
                  type="tel"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder="123-4567-8910"
                  required
                />
                {errors.phone && <p className="text-red-600">{errors.phone?.message}</p>}
              </div>
              <div>
                <label
                  for="bloodGroup"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your blood group
                </label>
                <select
                  onClick={(e) => setBlood(e.target.value)}
                  id="bloodGroup"
                  {...register("bloodGroup", {
                    required: "blood Group is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>

                {errors.bloodGroup && (
                  <p className="text-red-600">{errors.bloodGroup?.message}</p>
                )}
              </div>
              <div>
                <label
                  for="dateOfBirth"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Date Of Birth
                </label>
                <input
                  type="date"
                  {...register("dateOfBirth", {
                    required: "Date of Birth is required",
                  })}
                  id="dateOfBirth"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                  placeholder=""
                  required
                />
              </div>

              <div>
                <label
                  for="GraduationYear"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Graduation Year
                </label>
                <select
                  onClick={(e) => setGradYear(e.target.value)}
                  id="GraduationYear"
                  {...register("GraduationYear", {
                    required: "Student of years required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  {graduationYear &&
                    graduationYear.map((e) => (
                      <option key={e._id} value={e.batchNumber}>
                        {e.batchNumber}
                      </option>
                    ))}
                </select>
                {errors.GraduationYear && (
                  <p className="text-red-600">{errors.GraduationYear?.message}</p>
                )}
              </div>

              <div>
                <label
                  for="major"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Major Subject
                </label>
                <select
                  onClick={(e) => setMajor(e.target.value)}
                  id="major"
                  {...register("major", {
                    required: "Major Subject is required",
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  {majorSubject &&
                    majorSubject.map((e) => (
                      <option key={e._id} value={e.graduationMajor}>
                        {e.graduationMajor}{" "}
                      </option>
                    ))}
                </select>
                {errors.department && (
                  <p className="text-red-600">{errors.department?.message}</p>
                )}
              </div>
            </div>
            {/* file choose */}

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                for="file_input"
              >
                Upload file
              </label>
              <input
                {...register("image", {
                  required: "Image is required",
                })}
                onChange={(e) => setProfilePhoto(e.target.files[0])}
                className="file-input block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input"
                type="file"
              />
              <p
                className="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="file_input_help"
              >
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>

              {errors.file && <p className="text-red-600">{errors.file?.message}</p>}
            </div>

            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                {...register("password", {
                  required: "Password is required",
                })}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="•••••••••"
                required
              />
            </div>
            {/* <div className="mb-6">
              <label
                for="confirm_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                id="confirm_password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="•••••••••"
                required
              />
            </div> */}
            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-secondary dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  className="text-primary font-semibold hover:underline dark:text-primary"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-primary dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>

          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <Link className="text-secondary hover:underline" to="/login">
                Log in
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" />
            <p className="px-3 ">OR</p>
            <hr className="w-full" />
          </div>
          <div className="my-6 space-y-2">
            <button
              onClick={handleGoogleSignup}
              aria-label="Login with Google"
              type="button"
              className=" flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
              <p>Login with Google</p>
            </button>
            <button className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
              <p>Login with GitHub</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RegisterForm;
