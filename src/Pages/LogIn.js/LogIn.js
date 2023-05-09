import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import { toast } from "react-toastify";
import { useState } from "react";

const LogIn = () => {
  const [isSaving , setIsSaving] = useState(false)
  const { signin, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogIn = (data) => {

    setIsSaving(true)

    signin(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setIsSaving(false)
        toast.success("SuccessFully Login");
      })
      .catch((error) => {
        setIsSaving(false)
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    setIsSaving(true)
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        
        toast.success("SuccessFully  Login");
        setIsSaving(false)
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setIsSaving(false)
        toast.error(error.message);
      });
  };

  return (
    <div className=" flex justify-center items-center  bg-accent rounded-lg py-20">
      <div className=" lg:w-1/2">
        <h2 className="text-4xl text-primary font-semibold text-center mb-5">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <div className="form-control lg:w-2/3 mx-auto">
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
              className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control lg:w-2/3 mx-auto mt-5">
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
              className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
              placeholder="***"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <div className="lg:w-2/3 mx-auto">
          <button type="submit" className="btn btn-primary w-full bg-primary text-lg mt-5 text-white border-none rounded-none" disabled={isSaving}>
             {
              isSaving ? <span className="flex items-center cursor-not-allowed">
              <svg class="animate-spin text-white  rounded-full border-4 border-dashed h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                 
                 </svg>
                 Loging ...
              </span> : "Log in"
             }
            </button>
          
          </div>
        </form>
        <p className="text-center mt-5 mb-10">
          Don't Have An Account?{" "}
          <span>
            <Link to="/signup" className="text-blue-600 font-semibold">
              SignUp
            </Link>
          </span>
        </p>
        <p className="text-xl text-center mt-5">Social Media Login</p>
        {/*  */}

        <div className="flex justify-center">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-primary bg-secondary border-none text-primary text-lg font-semibold rounded-none mr-5"
          >
            Google
          </button>
          <button className="btn btn-primary bg-secondary border-none text-primary text-lg font-semibold rounded-none mr-5">
            FaceBook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;