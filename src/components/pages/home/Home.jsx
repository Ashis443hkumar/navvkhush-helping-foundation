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
        <Container className="mt-3">
        <Heading title="OUR PROGRAMS"/>
        <Row className="mt-5">
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
         <Row className="mt-4">
           <Col xs={12} md={6} lg={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact.png"  alt="" />
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
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-1.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} className="" />
                   </div>
                 <div className="d_flex_centert since_desc mx-4">
                   <div className="since_date">
                     <h4>2012</h4>
                     <p>Since</p>
                   </div>
                   <div className="icons">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-2.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} className="" />
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
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-3.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} className="" />
                   </div>
                 <div className="d_flex_centert since_desc mx-4">
                   <div className="since_date">
                     <h4>37</h4>
                     <p>Award Received</p>
                   </div>
                   <div className="icons">
                     <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-4.png" alt="" style={{width:"42px", height:"42px", marginRight:"12px"}} className="" />
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
             <div className="mt-5 pt-3 khefhfhj">
                 <Row>
                   <Col lg={6} className="d_flex ">
                      <Row style={{borderRight:"1px solid #000"}}>
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
                      <Col lg={12} className="d_flex ">
                          <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" className="" style={{width:"42px", height:"42px", marginRight:"12px"}} alt=""/>
                          <p className="">58,000 children from 75 Govt. schools benefitted h1</p>
                      </Col>
                      </Row>
                   </Col>

                   <Col lg={6} className="d_flex ">
                      <Row>
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
      

     <section className="">
       <Container style={{background:"#f9f9f9"}} className="mx-auto my-5 py-2" >
         <Heading title="CONTRIBUTION TO SDG’S" />
         <Row  className="mx-auto my-5 py-2">
           <Col lg={2} md={3} sm={6} xs={12}>
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-1.png" alt="" />
           </Col>
           <Col lg={2} md={3} sm={6} xs={12}>
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-2.png" alt="" />
           </Col>
           <Col lg={2} md={3} sm={6} xs={12}>
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-3.png" alt="" />
           </Col>

           <Col lg={2} md={3} sm={6} xs={12}>
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-4.png" alt="" />
           </Col>

           <Col lg={2} md={3} sm={6} xs={12}>
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-5.png" alt="" />
           </Col>

           <Col lg={2} md={3} sm={6} xs={12}>
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-6.png" alt="" />
           </Col>
         </Row>
       </Container>
     </section>

     <section className="home_stori_Chnage" >
     <Container className="py-4">
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

     <section className="home_video_banner" >
      <Container className="">
        <Heading title="VIDEOS" />
        <Row >
          <Col xs={12} md={4} lg={4}>
            <Ratio aspectRatio="16x9">
              <embed type="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
            </Ratio>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Ratio aspectRatio="16x9">
              <embed type="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
            </Ratio>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <Ratio aspectRatio="16x9">
              <embed type="image/svg+xml" src="https://www.youtube.com/embed/YFSl4MqzdrA?start=39" />
            </Ratio>
          </Col>
          <p className="text-center my-4">VIEW ALL VIDEOS</p>
        </Row>
      </Container>
     </section>

     <section className="home_card ">
      <Container className="">
        <Heading title="SHOP FOR A CAUSE" subtitle="Handmade Products by Women" />
        <Row >
        <Col xs={12} md={3} lg={3}>
        <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-1.png" />
          <Card.Body>
            <Card.Title>Doll Pencils</Card.Title>
            <Card.Text>
              <p>Some quick example text to build on the Doll Pencils and make up the bulk of the card's content..</p>
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} md={3} lg={3}>
        <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-2.png" />
          <Card.Body>
            <Card.Title>Doll Pencils</Card.Title>
            <Card.Text>
              Some quick example text to build on the Doll Pencils and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
         </Card>
         </Col>

        <Col xs={12} md={3} lg={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
         </Card>
         </Col>

         <Col xs={12} md={3} lg={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-4.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
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
