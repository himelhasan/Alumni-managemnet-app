import React from "react";
import { useForm } from "react-hook-form";

const PasswordChange = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <div>
      {/* password and confirm password */}
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("password", {
              required: true,
              focus: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            })}
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Your Password
          </label>
          {errors.password && (
            <span className="text-red-600">
              Password must contain at least one uppercase letter, one lowercase letter,
              one number, and be at least 6 characters long
            </span>
          )}
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("confirmPassword", { required: true })}
            type="password"
            name="confirmPassword"
            id="floating_confirm_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_confirm_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm Password
          </label>
          {errors.confirmPassword && (
            <span className="text-red-600">please retype your password</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordChange;
