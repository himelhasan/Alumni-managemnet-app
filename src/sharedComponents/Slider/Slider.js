import React from "react";
// import sliderimg1 from "../../assets/sliderIMG01.jpg";
// import sliderimg2 from "../../assets/sliderIMG02.jpg";
// import sliderimg3 from "../../assets/sliderimg03.jpg";
// import sliderimg4 from "../../assets/sliderIMG04.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { SliderInfo } from "./SliderInfo";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import "./styles.css";

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        {SliderInfo.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <div className="flex flex-wrap items-center  justify-around  ">
                <div className="relative">
                  <img
                    src={product.img}
                    alt=""
                    className="brightness-50 h-64 md:h-full w-full "
                  />
                  <div className=" px-1 mb-3 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white w-full md:w-1/2 mx-auto ">
                    <h2 className="md:text-3xl text-xl ">{product.Tittle}</h2>
                    <p>{product.description}</p>
                    <div className="flex gap-3 justify-center items-center">
                      <Link to="/">
                        <button className="bg-primary text-white px-4 py-2 my-4">
                          More Stories
                        </button>
                      </Link>
                      <Link to="/">
                        <button className="bg-secondary text-primary px-4 py-2 my-4">
                          Learn More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
