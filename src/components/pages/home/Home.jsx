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
import Testimonial from "./Testimonial";


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
        <Row className="py-3">
          <Col xs={12} md={8} lg={6} className="home_program_left">
          <Row >
            <Col xs={12} md={6} lg={5} className="rounded" >
               <Image src="https://thumbs.dreamstime.com/b/child-learn-logo-design-kid-education-icon-illustration-element-vector-177466500.jpg"  className="w-100" />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <h5>Child Education</h5>
              <p>In the enchanting realm of education, the most precious gems are the minds of children. <Link to="./childEducation" className="home_read_more" >...Read More</Link>  </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
               <Image src="https://qph.fs.quoracdn.net/main-qimg-0a400f0e7cc4be25ad380edab941abe5"  className="w-100 h-100"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <h5>Fashion Designing Course</h5>
              <p>Health and Wellness: We provide healthcare services, including medical check-ups, immunizations, and health education, promoting the well-being of individuals and communities. <Link to="./fashion" className="home_read_more" >...Read More</Link>  </p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
              <Image src="https://tse1.mm.bing.net/th?id=OIP.Fz1gXjuYKcuU1sFnbsMxYgHaEp&pid=Api&P=0&h=180"  className="w-100 h-100"  />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <h5>Women Empowerment Education</h5>
              <p>In a world where barriers are being broken and glass ceilings shattered, the pursuit of women`s empowerment has become more crucial than ever.  <Link to="./womenEmpower" className="home_read_more" >...Read More</Link> </p>
            </Col>
          </Row>
          </Col>

          <Col xs={12} md={4} lg={6}>
             <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-program-4.png" className="w-100" />
          </Col>
        </Row>
      </Container>
     </section>


     {/* How Could you  help? */}
     <section className="">
      <Container>
         <Heading title="How Could you  help?" />
        <Row>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://thumbs.dreamstime.com/b/poor-people-pakistan-poor-child-lack-education-poor-people-pakistan-poor-child-lack-education-161130962.jpg"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Expertise Skill</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse3.mm.bing.net/th?id=OIP.Q495w2wvVkbY-NJE3FCcuQAAAA&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Expertise Skill</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse1.mm.bing.net/th?id=OIP.llK8VJ41qxfWHOwDkNjpQgHaEK&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Expertise Skill</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse4.explicit.bing.net/th?id=OIP.Gj2QIpiwB5ROpLbfVv89_gHaLH&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Expertise Skill</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
        </Row>
       </Container>
      </section>

      <section className="donate_banner">
       <Container>
        <Row>
         <Col xs={12} lg={6} md={6}> 
           <Image src="https://media.licdn.com/dms/image/D4D22AQFVJN16Qov_mQ/feedshare-shrink_1280/0/1685684251181?e=1688601600&v=beta&t=fl7-ZYWId6EktJ4BrGEpMu6M2xPiA2Bc1qcA-ASrvKI"  className="w-100" />
         </Col>
         <Col xs={12} lg={6} md={6} > 
           <div>
           <h4>We Are <br/> Nonprofit Team</h4>
           <p> Some quick example text to build on the card title and make up the
             bulk of the card's content.</p>
           <Button variant="primary" className="my-2">Donate Now</Button>
           </div>
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
              <img src="https://tse2.mm.bing.net/th?id=OIP.YMn9z9mTM8Wqnp6vfSq5AwHaE6&pid=Api&P=0&h=180" className="w-100"  alt="" />
           </Col>
           <Col xs={12} md={6} lg={5}>
             <article className="achimed_date">
                <Row>
                  <Col lg={6} md={12} xs={12} className="d_flex border_left_sine_date " >
                    <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-1.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt="" />
                    <div className="content_desc">
                      <h4>1779</h4>
                      <p>Number of Children Educated </p>
                    </div>
                  </Col>
                  <Col lg={6} md={12} xs={12} className="d_flex  border_left_sine_date" >
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
           </Col>
         </Row>
         
      </Container>
     </section>

     <section className="impact_box">
     <Container>
         {/* 2nd row */}
        <Row className="mt-4">
          <Col lg={3}  className="d_flex impact_content ">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p className="">47,000 children from 75 Govt. schools transformed through our initiatives.</p>
          </Col>
          <Col lg={3}  className="d_flex impact_content ">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p className="">2,000 street children enrolled in schools, transforming their lives.</p>
          </Col>
          <Col lg={3}  className="d_flex impact_content ">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p className="">23,000 children across diverse NGOs experienced transformative benefits.</p>
          </Col>
          
          <Col lg={3}  className="d_flex impact_content ">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p className="">Empowering women through one lakh sanitary pads distributed.</p>
          </Col>
          <Col lg={3}  className="d_flex impact_content ">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p className="">4,000 women empowered, creating positive change.</p>
          </Col>
          <Col lg={3}  className="d_flex impact_content ">
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p className="">We are proud to announce the collection of 2.5 lakh books and toys, providing joy and educational resources to children in need.</p>
          </Col>
          <Col md={6} lg={3}  className="d_flex impact_content" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/solar-girl.png" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
              <p>2 lakh individuals transformed through impactful community development initiatives</p>
            </Col>
          <Col md={6} lg={3} className="d_flex impact_content" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/waster-converted.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} />
              <p>23,000 kg of waste transformed into beautiful handicrafts.</p>
          </Col>
        </Row>
      </Container>
      </section>

     <Sdg/>

     {/* donate_them */}
     <section className="donate_them">
       <Container>
         <Heading title="Donate For them" />
        <Row>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse1.mm.bing.net/th?id=OIP.Sh-iQt1v2Uu36zG7C2sZ8QHaEK&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Ration </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse2.mm.bing.net/th?id=OIP.xBN3vc05X7gLqtN90ei4RAHaIq&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>School Bag</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse3.mm.bing.net/th?id=OIP.7eJtVK9zXAYSUs7EWEqaBwHaGb&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Stationary</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3} className="py-5"> 
         <Card className="text-center" >
          <Image src="https://tse2.mm.bing.net/th?id=OIP.rJdUEsRl8_lOtJiE3Jf9agHaHa&pid=Api&P=0&h=180"  className=" imagesad" />
          <Card.Body>
            <Card.Title>Sewing Machine</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
         </Col>
        </Row>
       </Container>
      </section>


     <section className="home_volunterr_banner">
       <Container>
        <Row >
         <Col xs={12} lg={8} md={8}>
           <h4 className="text-white">Start with helping one poor person and pave way for the bigger changes!</h4>
         </Col>
         <Col xs={12} lg={4} md={4} className="text-end ">
           <Link to="/volunteer">
              <HeroButton title="Become a volunteer" />
           </Link>
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

       <Testimonial/>


     {/* SHOP FOR A CAUSE card */}
     <section className="home_card mt-5 ">
      <Container className="pt-4">
        <Heading title="SHOP FOR A CAUSE" subtitle="Handmade Products by Women" />
        <Row >
        <Col xs={12} md={3} lg={3} className="home_card_space">
        <Card >
          <Card.Img variant="top" src="https://5.imimg.com/data5/VV/OO/BW/SELLER-22984048/whatsapp-image-2019-09-30-at-12-20-30-pm-500x500.jpeg" />
          <Card.Body>
            <Card.Title>Doll Potlis</Card.Title>
            <Card.Text>
              <p>Some quick example text to build on the Doll Pencils and make up the bulk of the card's content..</p>
            </Card.Text>
            <p>Price: Rs 49</p>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} md={3} lg={3} className="home_card_space">
        <Card >
          <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.6rG_ickR9aKXZcRxxyRrrQHaFj&pid=Api&P=0&h=180" />
          <Card.Body>
            <Card.Title>Doll Pencils</Card.Title>
            <Card.Text>
              Some quick example text to build on the Doll Pencils and make up the
              bulk of the card's content.
            </Card.Text>
            <p>Price: Rs 99</p>
          </Card.Body>
         </Card>
         </Col>

        <Col xs={12} md={3} lg={3} className="home_card_space">
         <Card >
          <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.0gu1lKZsxJwLszS3vVBPaQHaEK&pid=Api&P=0&h=180" />
          <Card.Body>
            <Card.Title>Doll Bangles</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>Price: Rs 129</p>
          </Card.Body>
         </Card>
         </Col>

         <Col xs={12} md={3} lg={3} className="home_card_space">
         <Card >
          <Card.Img variant="top" src="https://tse4.mm.bing.net/th?id=OIP.0sUWp683XffYm-2ueffgJwHaFM&pid=Api&P=0&h=180" />
          <Card.Body>
            <Card.Title>Doll Pencils</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <p>Price: Rs 149</p>
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
         <Col xs={12} lg={6} md={6} className="text-end ">
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
