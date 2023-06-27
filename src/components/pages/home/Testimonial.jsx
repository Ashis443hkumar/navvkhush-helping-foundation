
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// Import Swiper React components
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, Autoplay } from 'swiper/react';

import 'swiper/css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Heading from "../../common/Heading";

export default function Demo(){
  return(
    <>
    <div className="tesimonial">
    <Heading subtitle="TESTIMONIALS" title="Explore the experience"  />

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
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          “Providing expensive courses free of cost to women could be a great opportunity in order to making women independent & confident. Great work !.”
          </Card.Text>
         <Card.Title>Renu Devi</Card.Title>
         <p>Stitching Teacher</p>
       </Card.Body>
       </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          “ Initiative by this NGO to providing fashion designing & stitching courses free of cost is very helpful for women who cannot afford but want to learn and do something in this field..”
          </Card.Text>
         <Card.Title>Komal Kumari </Card.Title>
         <p>Stitching Teacher</p>
       </Card.Body>
       </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          Education for underprivileged children is the best initiative that an NGO could have taken, I would say. Providing quality education to those who don’t have opportunity to study, this is a blessing for them.”
          </Card.Text>
         <Card.Title>Saurabh  </Card.Title>
         <p>Finance Head</p>
       </Card.Body>
       </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
              "Ashis is a brilliant software engineer. Their technical skills and problem-solving abilities consistently deliver outstanding results. Highly recommended for any software development project."
          </Card.Text>
         <Card.Title>Ashis kumar </Card.Title>
         <p>Software Engineer</p>
       </Card.Body>
       </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          "Nisha is an exceptional social media expert. Their strategic insights and creative approach have significantly boosted our online presence. Highly recommended for social media marketing."
          </Card.Text>
         <Card.Title>Nisha yadav</Card.Title>
         <p> Social Media Expert</p>
       </Card.Body>
       </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          "Ranjana is an outstanding HR professional. Their expertise in talent acquisition and employee engagement has greatly contributed to our company's success. Highly recommended for HR initiatives."
          </Card.Text>
         <Card.Title>Ranjana Paul</Card.Title>
         <p>Hr</p>
       </Card.Body>
       </Card>
      </SwiperSlide>
      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          “Providing expensive courses free of cost to women could be a great opportunity in order to making women independent & confident. Great work !.”
          </Card.Text>
         <Card.Title>Priyanka</Card.Title>
         <p>Stitching Teacher</p>
       </Card.Body>
       </Card>
      </SwiperSlide>

      <SwiperSlide>
       <Card style={{ width: '22rem' }} className="testi_content" >
        <Card.Body className="text-center">
          <Card.Text>
          “Providing expensive courses free of cost to women could be a great opportunity in order to making women independent & confident. Great work !.”
          </Card.Text>
         <Card.Title>Aakanksha</Card.Title>
         <p>Fashion Designing Traineer</p>
       </Card.Body>
       </Card>
      </SwiperSlide>

    </Swiper>
    </div>
   

    </>
  )
}