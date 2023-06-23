import React, { useState, useEffect } from "react"

// Import Swiper React components
import 'swiper/css';
import "./slide.css"


// Import Swiper styles
import { Navigation, Autoplay,  Scrollbar } from 'swiper';
import { Swiper, Autoplay, SwiperSlide, Scrollbar,Navigation,  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
import Slide_Data from "./Slide_Data"



export default function Slide() {

  const [data, setData] = useState(Slide_Data)
  return (
    <div className="slide">
      <Swiper  
        // install Swiper modules
      modules={[Navigation, Autoplay, Scrollbar]}
      spaceBetween={30}
      slidesPerView={3}
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
          slidesPerView: 2,
          spaceBetween: 40,
        },
        "@1.50": {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        data.map((value) =>{
          return(
            <SwiperSlide>
            <div className="slide_image">
              <img src={value.image} alt=""  />
            </div>
          </SwiperSlide>
          )
        })
      }

{/* 
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide> */}

    </Swiper>
    {/* <div class="swiper-button-next"></div> */}

    </div>
  );
}
