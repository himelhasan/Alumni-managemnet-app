import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className=" flex justify-center items-center  bg-accent rounded-lg py-20">
      <div className=" lg:w-1/2 m-2">
        <h2 className="text-4xl text-primary font-semibold text-center mb-5">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="md:grid md:grid-cols-2 gap-5">

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  First Name
                </span>
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="first name"
              />
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Last Name
                </span>
              </label>
              <input
                type="text"
                {...register("lastName", {
                  required: "Last Name is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="last name"
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Email 
                </span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Password
                </span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="*******"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Male/Female
                </span>
              </label>
              <input
                type="text"
                {...register("gender", {
                  required: "Gender is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="Male/Female"
              />
              {errors.gender && (
                <p className="text-red-600">{errors.gender?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Date Of Birth
                </span>
              </label>
              <input
                type="text"
                {...register("dateOfBirth", {
                  required: "Date of Birth is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="Date Of Birth"
              />
              {errors.dateOfBirth && (
                <p className="text-red-600">{errors.dateOfBirth?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Years Of Student
                </span>
              </label>
              <input
                type="text"
                {...register("yearsOfStudent", {
                  required: "Student of years required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="Years Of Student"
              />
              {errors.yearsOfStudent && (
                <p className="text-red-600">{errors.yearsOfStudent?.message}</p>
              )}
            </div>

            <div className="form-control ">
              <label className="label">
                {" "}
                <span className="label-text text-xl text-primary font-bold">
                  Department
                </span>
              </label>
              <input
                type="text"
                {...register("department", {
                  required: "Department is required",
                })}
                className="input input-bordered input-primary bg-gray-200 py-2 pl-3 text-xl rounded-tl-2xl rounded-br-2xl w-full"
                placeholder="Department name"
              />
              {errors.department && (
                <p className="text-red-600">{errors.department?.message}</p>
              )}
            </div>

            
          </div>

          <div className="">
              <button className="btn btn-primary w-full  bg-primary text-2xl mt-5 text-white rounded-tl-2xl rounded-br-2xl py-2 ">
                Log In
              </button>
            </div>

        </form>

        <p className="text-2xl text-center mt-5">Social Media SignUp</p>

        <div className="flex justify-center">
          <button className="text-primary text-xl font-bold mr-5">
            Google
          </button>
          <button className="text-primary text-xl font-bold mr-5">
            FaceBook
          </button>
        </div>

        <p className="text-center mt-5 mb-10">
          Already Have An Account?{" "}
          <span>
            <Link to="/login" className="text-blue-600 font-semibold">
             LogIn
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
