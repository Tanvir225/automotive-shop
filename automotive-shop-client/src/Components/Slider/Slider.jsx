// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../assets/slider-1.jpg"
import slider2 from "../../assets/slider-2.jpg"
import slider3 from "../../assets/slider-3.jpg"
import slider4 from "../../assets/slider-4.jpg"

// Import Swiper styles
import "swiper/css";
import "./style.css";
import { Autoplay } from "swiper/modules";
const Slider = ({brand} ) => {
    return (
        <div>
              <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${slider1})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl  font-bold">Elegance in Motion, Unleash the Extraordinary with <span className="text-[#ff4605]">{brand}</span> cars</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${slider2})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl  font-bold">Drive the Future with <span className="text-[#ff4605]">{brand}</span>  Automotive Excellence.</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${slider3})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl  font-bold">Experience the Pinnacle of Driving Pleasure with <span className="text-[#ff4605]">{brand}</span> cars.</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              `url(${slider4})`,
          }}
        >
          <div className="hero-overlay bg-black bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-2xl  font-bold">Crafted for the Bold, Engineered for the Driven  <span className="text-[#ff4605]">{brand}</span> cars.</h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
        </div>
    );
};

export default Slider;


