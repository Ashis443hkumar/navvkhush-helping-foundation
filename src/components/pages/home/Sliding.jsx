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
          <img src="https://media.licdn.com/dms/image/D4D22AQHFWGqAR3pHVw/feedshare-shrink_800/0/1685792821945?e=1688601600&v=beta&t=uAM19SkN7jNBeLKwyJBPvEMhOC52Uloj6z4Yy5q7EnI" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQEO0YLx_NB5Lg/feedshare-shrink_800/0/1685792821919?e=1688601600&v=beta&t=9PZDW9NSk66HlsOM586_mga_wXuwGN2NQ3-6KJmcteU" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQEb57jIy3ZwdQ/feedshare-shrink_800/0/1685792821798?e=1688601600&v=beta&t=aAt_8UZMhZQYkAN6at9ZeUP7qM3VZrEN7PssHR5ggas" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQEEatFcfQxEKg/feedshare-shrink_800/0/1685792821898?e=1688601600&v=beta&t=HZ6rNRigIJr23oa1Fg7q4LG1x5VhnogfDXAXOWzLlkQ" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQGMS74rnwDbzw/feedshare-shrink_800/0/1685792822135?e=1688601600&v=beta&t=kHLPIFc4aUM2l7yu5it2vhyf8yYaT-6taUm8ulGCHl4" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQG70ip95ToVVg/feedshare-shrink_800/0/1685792822073?e=1688601600&v=beta&t=GZu1WVb1uK1NOTzWD0m_F8EsgI_8mDpCBW1KP0IKiwU" alt=""  />
        </div>
      </SwiperSlide>
   
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQEb57jIy3ZwdQ/feedshare-shrink_800/0/1685792821798?e=1688601600&v=beta&t=aAt_8UZMhZQYkAN6at9ZeUP7qM3VZrEN7PssHR5ggas" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQG70ip95ToVVg/feedshare-shrink_800/0/1685792822073?e=1688601600&v=beta&t=GZu1WVb1uK1NOTzWD0m_F8EsgI_8mDpCBW1KP0IKiwU" alt=""  />
        </div>
      </SwiperSlide>
      
      
    </Swiper>
 
    </div>
      
    </>
  );
}
