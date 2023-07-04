 
 
import React from "react"

// Import Swiper styles
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function SlideVideo(){
  return(
    <> 
      <section className="slide_video" >
      <Swiper  
        // install Swiper modules
      modules={[Navigation, Scrollbar]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQH1xunuqkoghA/feedshare-shrink_800/0/1685355472111?e=1691625600&v=beta&t=1NhwTckSLjAKRG6JDIRP2HNUk3drQiVLpX93053Bh8M" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQEhrzyrFs7h2A/feedshare-shrink_800/0/1685684251244?e=1691625600&v=beta&t=pxIGcpQ6mcU2Op0a2jdJjYeBwHkFiIuLtbCVDmeJOjU " alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQHFXLl5DSwEkg/feedshare-shrink_1280/0/1685355472112?e=1691625600&v=beta&t=u8iDN612p4-A4VDDoMCxju9Eg18b0WX3kGvVkz83DgU" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQGkyeABpIZi-Q/feedshare-shrink_1280/0/1685355472314?e=1691625600&v=beta&t=CH2HYjNeuJm2Ap-Nkja6hdLF7un5KCOVlM238qalXpU" alt=""  />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQEOvFF-Phcj_g/feedshare-shrink_1280/0/1685947254008?e=1691625600&v=beta&t=hQscxP7ARI7RqOSgBs3vWao7VSURnVltegL8rvtBpXA" alt=""  />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide_image">
          <img src="https://media.licdn.com/dms/image/D4D22AQGp8U8i5cST0g/feedshare-shrink_1280/0/1685947253150?e=1691625600&v=beta&t=UwC2NUyrvujxNuzRQVILf5LaOnlrWJd0PA0MTe_7boI" alt=""  />
        </div>
      </SwiperSlide>

      </Swiper>
      </section>


    </>
  )
}

 
 