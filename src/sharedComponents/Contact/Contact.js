import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const {
    register,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.preventDefault();

    emailjs
      .sendForm("service_yyonvfo", "template_iiq69cw", data.target, "gGLUdmrxjvm2YSRQD")
      .then(
        (result) => {
          toast.success("Message Sent Successfully");
          reset();
        },
        (error) => {
          console.log("error form email.js:", error.text);
        }
      );
  };

  return (
    <div className="mt-16 mb-20">
      <h1 className=" text-2xl font-bold mb-10">Contact</h1>
      <form onSubmit={onSubmit}>
        <div className=" gap-12 ">
          <div className="flex gap-2">
            <input
              {...register("firstName")}
              type="text"
              required
              minLength={3}
              name="firstName"
              id="name"
              placeholder="First Name"
              className="w-full p-6 mb-5 text-xs  bg-[#F2F2F2]"
            />

            <input
              {...register("lastName", {
                // required: "input Field is Required",
                // minLength: { value: 3, message: "MinimumLength 3" },
              })}
              type="text"
              required
              minLength={3}
              name="lastName"
              id="name"
              placeholder="Last Name"
              className="w-full p-6 mb-5 text-xs  bg-[#F2F2F2]"
            />
          </div>
          <input
            {...register("email", {
              // pattern: /^[A-Za-z\.@]+$/i,
            })}
            type="email"
            required
            name="email"
            id="name"
            placeholder="Email"
            className="w-full p-6  mb-8 text-xs  bg-[#F2F2F2]"
          />

          <textarea
            {...register("message")}
            required
            name="message"
            id="message"
            rows="3"
            placeholder="Message"
            className="w-full p-6 mb-5 text-xs  bg-[#F2F2F2]"
          />
        </div>

        <button className=" py-4 px-8 text-right text-secondary font-bold bg-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
