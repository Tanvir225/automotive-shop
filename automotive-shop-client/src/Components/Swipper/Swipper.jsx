// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Swipper.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import ListingCard from "../ListingCard";

const Swipper = () => {
  //popular types car
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popular")
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {popular.map((car) => (
          <SwiperSlide key={car._id}>
            <ListingCard listing={car}></ListingCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;
