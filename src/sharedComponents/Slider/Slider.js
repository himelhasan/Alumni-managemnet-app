import React from "react";
import sliderimg1 from "../../assets/sliderIMG01.jpg";
import sliderimg2 from "../../assets/sliderIMG02.jpg";
import sliderimg3 from "../../assets/sliderimg03.jpg";
import sliderimg4 from "../../assets/sliderIMG04.jpg";

const Slider = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src={sliderimg1}
          className="w-full h-80 md:h-full brightness-50 "
          alt=""
        />
        <div className="absolute top-1/2 w-full bottom-[-130px] md:bottom-0   -translate-x-1/2 -translate-y-1/2   text-white md:w-1/2 md:left-1/3 left-1/2 md:px-12  px-5">
          <h2 className="md:text-3xl lg:text-5xl text-2xl mb-4">
            We Feel Proude
          </h2>
          <p className="md:mb-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis reprehenderit a, id delectus ut veniam est dolores non
            saepe?
          </p>
          <button className="bg-primary px-8 py-4 text-white">
            Our Mission
          </button>
          <button className="bg-secondary  px-8 py-4 text-white ml-4">
            Our Story
          </button>
        </div>
        <div className="absolute flex md:justify-end    gap-5  transform  md:right-44 md:bottom-10 left-4 bottom-4">
          <a
            href="#slide4"
            className="btn btn-circle bg-secondary text-primary hover:text-white "
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle bg-secondary text-primary hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={sliderimg2}
          className="w-full h-80 md:h-full brightness-50 "
          alt=""
        />
        <div className="absolute top-1/2 w-full bottom-[-140px] md:bottom-0   -translate-x-1/2 -translate-y-1/2   text-white md:w-1/2 md:left-1/3 left-1/2 md:px-12 px-5">
          <h2 className="md:text-5xl text-2xl mb-4">We Feel Proude</h2>
          <p className="mb-3 md:mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis reprehenderit a, id delectus ut veniam est dolores non
            saepe?
          </p>
          <button className="bg-primary px-8 py-4 text-white">
            Our Mission
          </button>
          <button className="bg-secondary  px-8 py-4 text-white ml-4">
            Our Story
          </button>
        </div>
        <div className="absolute flex md:justify-end    gap-5  transform  md:right-44 md:bottom-10 left-4 bottom-4">
          <a
            href="#slide1"
            className="btn btn-circle bg-secondary text-primary hover:text-white "
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle bg-secondary text-primary hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={sliderimg3}
          className="w-full h-80 md:h-full brightness-50 "
          alt=""
        />
        <div className="absolute top-1/2 w-full bottom-[-140px] md:bottom-0   -translate-x-1/2 -translate-y-1/2   text-white md:w-1/2 md:left-1/3 left-1/2 md:px-12 px-5">
          <h2 className="md:text-5xl text-2xl mb-4">We Feel Proude</h2>
          <p className="md:mb-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis reprehenderit a, id delectus ut veniam est dolores non
            saepe?
          </p>
          <button className="bg-primary px-8 py-4 text-white">
            Our Mission
          </button>
          <button className="bg-secondary  px-8 py-4 text-white ml-4">
            Our Story
          </button>
        </div>
        <div className="absolute flex md:justify-end    gap-5  transform  md:right-44 md:bottom-10 left-4 bottom-4">
          <a
            href="#slide2"
            className="btn btn-circle bg-secondary text-primary hover:text-white "
          >
            ❮
          </a>
          <a
            href="#slide4"
            className="btn btn-circle bg-secondary text-primary hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={sliderimg4}
          className="w-full h-80 md:h-full brightness-50 "
          alt=""
        />
        <div className="absolute top-1/2 w-full bottom-[-140px] md:bottom-0   -translate-x-1/2 -translate-y-1/2   text-white md:w-1/2 md:left-1/3 left-1/2 md:px-12 px-5">
          <h2 className="md:text-5xl text-2xl mb-4">We Feel Proude</h2>
          <p className="md:mb-5 mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            perspiciatis reprehenderit a, id delectus ut veniam est dolores non
            saepe?
          </p>
          <button className="bg-primary px-8 py-4 text-white">
            Our Mission
          </button>
          <button className="bg-secondary  px-8 py-4 text-white ml-4">
            Our Story
          </button>
        </div>
        <div className="absolute flex md:justify-end    gap-5  transform  md:right-44 md:bottom-10 left-4 bottom-4">
          <a
            href="#slide3"
            className="btn btn-circle bg-secondary text-primary hover:text-white"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle bg-secondary text-primary hover:text-white"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
