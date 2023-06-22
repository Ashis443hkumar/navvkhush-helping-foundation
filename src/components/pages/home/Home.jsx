import React from "react";
import HeroButton from "../../common/heroButton/HeroButton";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from "../../common/Heading";
import Image from 'react-bootstrap/Image';
import Ratio from 'react-bootstrap/Ratio';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {NavLink, Link} from "react-router-dom"

import "./style.css"
import Sdg from "./Sdg";
import Slide from "../../common/slide/Slide";
import Sliding from "./Sliding"

// Import Swiper styles
import { Navigation, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, Autoplay } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Home() {
  return (
     <>
      <section className="home_about">
        <Container className="">
        <Heading title="about Us" subtitle="" />
        <p>CCSDO strives to empower women with dignity and independence through economic and social support, working towards reducing violence and discrimination. Their achievements include education, counseling, and financial empowerment for women and children, as well as collaborations with government projects and employment opportunities. Join CCSDO in creating a more just and equal society.<Link to="./introduction" className="home_read_more" >....Read More</Link> </p>
       </Container>
      </section>

      {/* OUR PROGRAMS */}
     <section className="home_program">
        <Container className="">
        <Heading title="OUR PROGRAMS"/>
        <Row className="">
          <Col xs={12} md={8} lg={6} className="home_program_left">
          <Row >
            <Col xs={12} md={6} lg={5} className="rounded" >
               <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Education for All: Our program ensures equal access to quality education for underprivileged children, empowering them with knowledge and skills for a better future. <Link to="./introduction" className="home_read_more" >...Read More</Link>  </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
               <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/toy-1.png"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Health and Wellness: We provide healthcare services, including medical check-ups, immunizations, and health education, promoting the well-being of individuals and communities. <Link to="./introduction" className="home_read_more" >...Read More</Link>  </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
              <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/rooh-1.png"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Sustainable Development: Our program focuses on environmental conservation, renewable energy, and community development projects to create a sustainable and thriving future for all. <Link to="./introduction" className="home_read_more" >...Read More</Link> </p>
            </Col>
          </Row>
          </Col>

          <Col xs={12} md={4} lg={6}>
             <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-program-4.png" className="w-100" />
          </Col>
        </Row>
      </Container>
     </section>

     {/* Our impact */}
     <section class="home_impact py-4">
      <Container>
        <Heading title="Our impact" />
         <Row className="">
           <Col xs={12} md={6} lg={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact.png" className="w-100"  alt="" />
           </Col>
           <Col xs={12} md={6} lg={5}>
             <div className="our_reach">
              <h4>Our Reach</h4>
              <span> <strong>13</strong> States</span>
             </div>
             <article className="achimed_date">
                <Row>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date " >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-1.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>1779</h4>
                      <p>Number of Children Educated </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date" >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-2.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>3000 +</h4>
                      <p>Women Counseling </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date " >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-3.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>1250+ </h4>
                      <p>Women Registered with us  </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date" >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-4.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>80+ </h4>
                      <p>Women Employed &  financially independent </p>
                    </div>
                  </Col>
                </Row>
             </article>

             <div className="mt-0 pt-3 khefhfhj">
                 <Row className="">
                   <Col xs={12} md={6} lg={6} className="d_flex  boder_right_desc">
                      <Row  className="border_bottom">
                        <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">47,000 children from 75 Govt. schools transformed through our initiatives.</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">2,000 street children enrolled in schools, transforming their lives.</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">23,000 children across diverse NGOs experienced transformative benefits.</p>
                      </Col>
                     
                      </Row>
                   </Col>

                   <Col xs={12} md={6} lg={6} className="d_flex boder_right_desc border_left_impact">
                      <Row className="border_bottom">
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">Empowering women through one lakh sanitary pads distributed.</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">4,000 women empowered, creating positive change.</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">We are proud to announce the collection of 2.5 lakh books and toys, providing joy and educational resources to children in need.</p>
                      </Col>
                    
                      </Row>
                   </Col>
                 </Row>
             </div>
             <Row style={{borderTop:"1px solid #000"}} className="sttrytr_center" >
               <Col md={6} lg={6}  className="d_flex pt-3 sttrytr_center" >
                 <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/solar-girl.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                 <p>2 lakh individuals transformed through impactful community development initiatives</p>
               </Col>
               <Col md={6} lg={6} className="d_flex pt-3 sttrytr_center" >
                 <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/waster-converted.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} />
                 <p>23,000 kg of waste transformed into beautiful handicrafts.</p>
               </Col>
             </Row>
           </Col>
           <Container>
            
           </Container>
         </Row>
      </Container>
     </section>

     <Sdg/>

     {/* STORIES OF CHANGE */}
     <section className="home_stori_Chnage" >
      <Container className="py-2 mt-0">
       <Heading title="STORIES OF CHANGE"  />
        <Row>
          <Col xs={12} md={12} lg={12} className="">
            <p>Our organization collects inspiring stories of individuals and communities who have experienced positive transformation. These stories highlight the impact of our programs, showcasing personal growth, improved livelihoods, and social progress. They serve as a testament to the power of collective action and the potential for change in even the most challenging circumstances.</p>
         
          </Col>
           <Col lg={12}>
             <Carousel slide={true} interval={2000}>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.licdn.com/dms/image/D4D22AQFFnkX20jbX_g/feedshare-shrink_2048_1536/0/1685791142446?e=1688601600&v=beta&t=xnH8WAO_d7XCIVDUFYifqFtF75dX4yFLWz50Zl1f6rw"  alt="First slide"  />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.licdn.com/dms/image/D4D22AQEwnNriCK-PIw/feedshare-shrink_1280/0/1686051614484?e=1689206400&v=beta&t=acq3cwoloExK0iBeeFuH6HyLfLr4EUuZZl_s6fiaorQ"  alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1688601600&v=beta&t=-7e-oBFp2ubl9jAWutSHfCvIChcY94Ok2ljCYpc-l-k" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>

        </Row>
      </Container>
     </section>

     {/* home banner */}
     <section className="home_child_banner" >
      <Container className="">
        <Row style={{display:'flex', textAline:"center" }}>
          <Col xs={12} md={6} lg={8} className="">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/girls.png" alt="" class="w-100" />
          </Col>
          <Col xs={12} md={6} lg={4} className="home_child_content">
           <p> Make a difference in a child's life. Contribute to our noble cause by sponsoring a child with a monthly donation of just Rs. 1000. Your support can provide education, healthcare, and a brighter future for a deserving child.</p>
           <HeroButton title="Donate" />
          </Col>
        </Row>
      </Container>
     </section>

     {/*   youtube video     */}
     <section className="slide_video" >
        <Heading title="VIDEOS" />
         <Swiper  
            // install Swiper modules
          modules={[Navigation, Scrollbar, Autoplay]}
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
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide_image">
              <Ratio aspectRatio="16x9">
                  <embed type="image/svg+xml" src="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
              </Ratio>
            </div>
          </SwiperSlide>
    
        </Swiper>
        <p className="text-center my-4">VIEW ALL VIDEOS</p>
     </section>

     {/* Sliding ASSOCIATION AND PARTNERS */}
       <section className="sliding">
         <Heading title="ASSOCIATION AND PARTNERS" />
         <Sliding/>
       </section>

     {/* Sliding AWARDS & RECOGNITION */}
        <section className="sliding_RECOGNITION py-4">
         <Heading title="AWARDS & RECOGNITION" />
         <Sliding/>
       </section>  

       {/* Sliding FEATURED IN*/}
        <section className="sliding_RECOGNITION py-4">
         <Heading title="FEATURED IN" />
         <Sliding/>
       </section>  

     {/* SHOP FOR A CAUSE card */}
     <section className="home_card mt-5 ">
      <Container className="pt-4">
        <Heading title="SHOP FOR A CAUSE" subtitle="Handmade Products by Women" />
        <Row >
        <Col xs={12} md={3} lg={3} className="home_card_space">
        <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-1.png" />
          <Card.Body>
            <Card.Title>Doll Pencils</Card.Title>
            <Card.Text>
              <p>Some quick example text to build on the Doll Pencils and make up the bulk of the card's content..</p>
            </Card.Text>
            <p>Price: Rs689</p>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} md={3} lg={3} className="home_card_space">
        <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-2.png" />
          <Card.Body>
            <Card.Title>Doll Pencils</Card.Title>
            <Card.Text>
              Some quick example text to build on the Doll Pencils and make up the
              bulk of the card's content.
            </Card.Text>
            <p>Price: Rs689</p>
          </Card.Body>
         </Card>
         </Col>

        <Col xs={12} md={3} lg={3} className="home_card_space">
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>Price: Rs689</p>
          </Card.Body>
         </Card>
         </Col>

         <Col xs={12} md={3} lg={3} className="home_card_space">
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-4.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>Price: Rs689</p>
          </Card.Body>
         </Card>
         </Col>
        </Row>
        <p className="text-center my-4">VIEW ALL VIDEOS</p>

      </Container>
     </section>
  

     <section className="home_Subscribe">
       <Container>
        <Row >
         <Col xs={12} lg={6} md={6}>
           <h4 className="text-white">Subscribe to our newsletter</h4>
         </Col>
         <Col xs={12} lg={6} md={6} className="text-center ">
         <div className="subcribe_box">
          <input placeholder="Enter your email" type="email" name="email" id="email-address"/>
          <button type="submit">Subscribe</button>
        </div>
         </Col>
        </Row>
       </Container>
      </section>


    </>
  );
}
