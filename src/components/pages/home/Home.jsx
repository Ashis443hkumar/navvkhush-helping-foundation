import React from "react";
import HeroButton from "../../common/heroButton/HeroButton";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from "../../common/Heading";
import Image from 'react-bootstrap/Image';

import "./style.css"

export default function Home() {
  return (
    <>
   
        <section className="">
        <Container className="">
        <Heading title="about Us" />
        <Row>
          <Col xs={12} md={12} lg={12}>
            <p>‘Lakshyam’ is derived from the word ‘Lakshya’ in Hindi Language which means ‘Goal’ in English.
                Lakshyam was founded in the year 2012 by a young social entrepreneur named Rashi Anand with a mission to enhance the lives of disadvantaged children and women, and to offer a positive direction and a healthier approach towards life. Our logo (a hand colored in 6 colors) & tagline ‘hands to heart’ symobolize with our thought that every helping hand can touch the heart and life of others. And this is what we are doing at Lakshyam, impacting the lives of the people who belong to the marginalized communities.</p>
          </Col>
        </Row>
      </Container>
      </section>


     <section className="home_program">
        <Container className="mt-5">
        <Heading title="OUR PROGRAMS"/>
        <Row>
          <Col xs={12} md={6} lg={6} className="home_program_left">
          <Row >
            <Col xs={12} md={6} lg={5} className="rounded" >
               <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/prg-3-1-1.png" />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
               <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/toy-1.png" />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={6} lg={5}  className="rounded">
              <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/rooh-1.png" />
            </Col>
            <Col xs={12} md={6} lg={7}>
              <p>Lakshyam’s Butterfly Program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
            </Col>
          </Row>

          </Col>
          <Col xs={12} md={6} lg={6}>
          <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-program-4.png" />
          </Col>
         
        </Row>
      </Container>
     </section>

     <section class="home_impact">
      <Container>
        <Heading title="Our impact" />
         <Row>
           <Col xs={12} md={6} lg={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact.png" alt="" />
           </Col>
           <Col xs={12} md={6} lg={6}>
             <div className="our_reach">
              <h4>Our Reach</h4>
              <span> <strong >3</strong> Countries</span>
              <span> <strong>17</strong> States</span>
             </div>
           <div className="achive_since mt-4">
             <Row className="mt-4 mx-3">
                 <Col lg={7} className="achive_content" >
                 <div className="d_flex_start ">
                   <div className="mt-3">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-1.png" alt="" className="" />
                   </div>
                 <div className="d_flex_centert since_desc mx-4">
                   <div className="since_date">
                     <h4>2012</h4>
                     <p>Since</p>
                   </div>
                   <div className="icons">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-2.png" alt="" className="" />
                   </div>
                  </div>
                 </div>
                </Col>
                <Col lg={5} >
                 <div className="sine_right d-flex">
                   <div className="">
                     <h4>300000</h4>
                     <p>Lives Impacted Directly</p>
                   </div>
                 </div>
                </Col>  
               </Row>

               <Row className="mt-4 mx-3">
                 <Col lg={7} className="achive_content" >
                 <div className="d_flex_start ">
                   <div className="mt-3">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-3.png" alt="" className="" />
                   </div>
                 <div className="d_flex_centert since_desc mx-4">
                   <div className="since_date">
                     <h4>37</h4>
                     <p>Award Received</p>
                   </div>
                   <div className="icons">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-4.png" alt="" className="" />
                   </div>
                  </div>
                 </div>
                </Col>
                <Col lg={5} >
                 <div className="sine_right d-flex">
                   <div className="">
                     <h4>700000</h4>
                     <p>Lives Impacted Indirectly</p>
                   </div>
                 </div>
                </Col>  
               </Row>
             </div>
             <div className="mt-4">
                 <Row>
                   <Col lg={6} className="d_flex ">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                     <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-6.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                 </Row>
                 <Row className="mt-3">
                   <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                     <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-6.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                 </Row>
                 <Row className="mt-3">
                   <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                     <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-6.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                 </Row>
                 <Row className="mt-3">
                   <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                     <Col lg={6} className="d_flex">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-6.png" className="w-100" alt=""/>
                       <p className="">58,000 children from 75 Govt. schools benefitted</p>
                   </Col>
                 </Row>
             </div>
           </Col>
         </Row>
      </Container>

       
     </section>
      
    </>
  );
}
