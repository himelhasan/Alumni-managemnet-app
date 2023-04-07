import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    data.reset();
  };
  return (
    <div className="mt-16 mb-20">
      <h1 className=" text-2xl font-bold mb-10">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" gap-12 mb-12">
          <input
            {...register("firstName", {
              required: "input Field is Required",
              minLength: { value: 3, message: "MinimumLength 3" },
            })}
            type="text"
            name="firstName"
            id="name"
            placeholder="First Name"
            className="w-full p-6 mb-5 text-xs  bg-[#F2F2F2]"
          />
          <p className="my-3 font-bold text-red-500">
            {errors.firstName?.message}
          </p>

          <input
            {...register("lastName", {
              required: "input Field is Required",
              minLength: { value: 3, message: "MinimumLength 3" },
            })}
            type="text"
            name="lastName"
            id="name"
            placeholder="Last Name"
            className="w-full p-6 mb-5 text-xs  bg-[#F2F2F2]"
          />
          <p className="my-3 font-bold text-red-500">
            {errors.lastName?.message}
          </p>

          <input
            {...register("email", {
              pattern: /^[A-Za-z\.@]+$/i,
            })}
            type="email"
            name="email"
            id="name"
            placeholder="Email"
            className="w-full p-6  mb-5 text-xs  bg-[#F2F2F2]"
          />
          {errors?.email?.type === "pattern" && (
            <p className="my-3 font-bold text-red-500">Invalid Pattern</p>
          )}

          <textarea
            {...register("message", { required: "input Field is Required" })}
            name="message"
            id="message"
            rows="3"
            placeholder="FeedBack"
            className="w-full p-6 mb-5 text-xs  bg-[#F2F2F2]"
          />
          <p className="my-3 font-bold text-red-500">
            {errors.message?.message}
          </p>
        </div>

        <button className=" py-4 px-8 text-right text-primary font-bold bg-secondary">
          {" "}
          Submit{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
