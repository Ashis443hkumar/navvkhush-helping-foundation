import React from "react";
// Import Swiper React components
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, Autoplay } from 'swiper/react';

import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slide() {
  return (
    <>
    <div>
      <Swiper  
      // install Swiper modules
      modules={[Navigation, Scrollbar, Autoplay]}
      spaceBetween={20}
      slidesPerView={5}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        "@0.00": {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        "@0.75": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "@1.00": {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-9.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-25.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/spjimr.jpg" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-3-1.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-5.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-18.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/nmims-mumbai.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-1.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-10.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-15.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-27.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-28.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/partner-30.png" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Harbour-Education.jpg" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/fiib.png" alt=""  />
        </div>
      </SwiperSlide>
    </Swiper>
 
    </div>
      
    </>
  );
}
