import React from "react";
import RegisterUserCard from "./RegisterUserCard";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <section className="bg-white ">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <main
          aria-label="Main"
          className="flex flex-col items-center justify-center px-0 py-0 md:px-8 md:py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl bg-slate-100">
            <div className="relative block md:hidden px-6 py-8">
              <div className="-mb-10 mt-10">
                <span className="text-xl text-center">Welcome to Alumni </span>
                <span className="text-md font-sans text-center font-semibold">
                  Sign up your Account
                </span>
              </div>
              <RegisterUserCard />
            </div>
          </div>
          <div className="relative hidden md:block">
            <p className="text-xl font-semibold text-center">Welcome to Alumni </p>
            <p className="text-md font-sans text-center">Sign up your Account </p>
          </div>
          <RegisterForm />
        </main>
        <section className="hidden relative md:flex h-32 items-start justify-center pt-10 bg-slate-100 lg:col-span-5 lg:h-full xl:col-span-6">
          <RegisterUserCard />
        </section>
      </div>
    </section>
  );
};

export default RegisterPage;
