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

import "./style.css"
import Sdg from "./Sdg";
import Slide from "../../common/slide/Slide";
import Sliding from "./Sliding"

// Import Swiper styles
import { Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 

export default function Home() {
  return (
    <>
      {/* home About */}
      <section className="home_about">
        <Container className="">
        <Heading title="about Us" subtitle="Lakshyam’ is derived from the word ‘Lakshya’ in Hindi Language which means ‘Goal’ in English.
              
                Lakshyam was founded in the year 2012 by a young social entrepreneur named Rashi Anand with a mission to enhance the lives of disadvantaged children and women, and to offer a positive direction and a healthier approach towards life. Our logo (a hand colored in 6 colors) & tagline ‘hands to heart’ symobolize with our thought that every helping hand can touch the heart and life of others. And this is what we are doing at Lakshyam, impacting the lives of the people who belong to the marginalized communities" />
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
              <p>Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
               <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/toy-1.png"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
              <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/rooh-1.png"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
            </Col>
          </Row>
          </Col>

          <Col xs={12} md={4} lg={6}>
             <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-program-4.png" />
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
              <span> <strong >3</strong> Countries</span>
              <span> <strong>17</strong> States</span>
             </div>
             <article className="achimed_date">
                <Row>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date " >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-1.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>2012</h4>
                      <p>Since</p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date" >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-2.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>300000</h4>
                      <p>Lives Impacted Directly</p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date " >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-3.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>37</h4>
                      <p>Award Received</p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} className="d_flex mt-4 border_left_sine_date" >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-4.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>700000</h4>
                      <p>Lives Impacted Indirectly</p>
                    </div>
                  </Col>
                </Row>
             </article>

             <div className="mt-5 pt-3 khefhfhj">
                 <Row className="">
                   <Col xs={12} md={6} lg={6} className="d_flex  boder_right_desc">
                      <Row  className="border_bottom">
                        <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      </Row>
                   </Col>

                   <Col xs={12} md={6} lg={6} className="d_flex boder_right_desc border_left_impact">
                      <Row className="border_bottom">
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      </Row>
                   </Col>
                 </Row>
             </div>
             <Row style={{borderTop:"1px solid #000"}}>
               <Col md={6} lg={6}  className="d_flex pt-3" >
                 <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/solar-girl.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                 <p>2 Lakh benefitted through community development initiatives</p>
               </Col>
               <Col md={6} lg={6} className="d_flex pt-3" >
                 <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/waster-converted.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} />
                 <p>of waste converted into handicrafts 23,000 kg</p>
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
            <p>We are happy to introduce some of Lakshyam’s exceptionally brilliant and bright kids who have overcome tremendous adversities and are very close to our heart. We have many such successful warriors who have changed their fate with their sheer hardwork and determination. Their love for life inspires us to extend the best of resources to the</p>
         
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
           <p> Contribute for a noble cause. Your help can make a big difference in the life of a child. You can sponsor a child by donating <strong>Rs. 1000 a month</strong> only.</p>
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




    </>
  );
}
