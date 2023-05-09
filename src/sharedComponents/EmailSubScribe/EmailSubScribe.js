import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./customCSS.css";
import { toast } from 'react-toastify';
const EmailSubScribe = () => {



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const from = e.target;

    emailjs.sendForm('service_ext28dn', 'template_ywck859', form.current, 'X-2xv7e67kS3CPWxj')
      .then((result) => {
          console.log(result.text);
          toast.success("Your request sent.");
          from.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className="relative bg-[url(https://i.ibb.co/5M3bCB1/meeting.jpg)] bg-cover bg-center bg-no-repeat h-[400px]">
      <div className="absolute inset-0 bg-primary/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-primary/70 sm:to-primary/70"></div>

      <form ref={form} onSubmit={sendEmail} className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:flex lg:h-[100%] lg:items-center lg:px-8">
        <div className="max-w-5xl mx-auto text-white">
          <h1 className="font-semibold text-xl md:text-3xl text-center">
            Don't Miss Awesome Story From Our Alumni
          </h1>
          <p className="text-center">
            Please drop your email address to get news latest from us. We will
            inform you for next event.
          </p>

          <div className="text-center relative form">
            <span className="font-semibold text-white peer-focus:text-purple-600 text-left mt-2 absolute email-label">
              Email
            </span>
            <br />
            <input
              type="email"
              name='email'
              required
              className="bg-transparent border-b-2 py-1 focus:outline-none focus:border-white-600 focus:border-b-2 w-2/6 input-field"
            />
            <br />
            <button
              type="submit"
              className="bg-white text-gray-900 font-semibold p-2 rounded-tl-lg rounded-br-lg mt-6"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default EmailSubScribe;
