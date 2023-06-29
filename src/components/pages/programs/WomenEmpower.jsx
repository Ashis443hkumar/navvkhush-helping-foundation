import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Sdg from "../home/Sdg";
import Ratio from 'react-bootstrap/Ratio';
import Carousel from 'react-bootstrap/Carousel';

export default function WomenEmpower() {
  return (
    <>
        <section className="butteryFlay_section">
        <Container>
          <Heading title="WOMEN EMPOWERMENT " />
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              <p>This project aims to explore the concept of women empowerment and its significance in promoting gender equality and creating opportunities for women. It focuses on the social, economic, and political aspects of women's empowerment and presents strategies and initiatives that can contribute to empowering women in various spheres of life. The project includes research, analysis of case studies, and recommendations for individuals, organizations, and policymakers to foster an environment conducive to women's empowerment.</p>

              <ul>
                <li>Provide an overview of the concept of women empowerment and its importance in achieving gender equality.</li>
                <li>Highlight the historical context and challenges faced by women in various societies.</li>
              </ul>
       
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src="https://media.licdn.com/dms/image/D4D22AQHRXtEn5pBZpg/feedshare-shrink_1280/0/1685684249868?e=1691020800&v=beta&t=SEtBdUbzHNWImtBMgDoSYrtL3m_coszOcFt7SPfy1XE" alt="" />
            </Col>
          </Row>
        </Container>

      </section>

      <section className="buttryimapct">
        <Container>
          <Heading title="Impact numbers" />
          <Row className="mt-5">
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
            <Col xs={12} md={3} lg={3} className="buttryimapct_desc" >
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/our-impact-5.png" alt=""/>
              <div className="">
                <p>58,000 children from 75 Govt. schools benefitted</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

  

      <Sdg/>

        {/* STORIES OF CHANGE */}
     <section className="home_stori_Chnage" >
        <Container className="py-2 mt-0">
        <Heading title="SUCCESS STORIES"  />
        <Row>
          <Col xs={12} md={12} lg={12} className="">
            <p>We are delighted to introduce some of Navvkhush Bharat exceptionally brilliant and bright children who have triumphed over tremendous adversities and hold a special place in our hearts. These remarkable young individuals have reshaped their destinies through their unwavering determination and hard work. Their zest for life serves as a constant inspiration, motivating us to provide them with the finest resources and opportunities.</p>
         
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

     <section className="home_stori_Chnage my-4" >
        <Container className="py-2 mt-0">
        <Heading title="LOCATIONS"  />
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

      
    </>
  );
}
 