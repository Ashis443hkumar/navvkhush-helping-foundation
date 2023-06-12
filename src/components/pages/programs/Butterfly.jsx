import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Sdg from "../home/Sdg";
import Ratio from 'react-bootstrap/Ratio';
import Carousel from 'react-bootstrap/Carousel';

export default function Butterfly() {
  return (
    <>

      <section className="butteryFlay_section">
        <Container>
          <Heading title="BUTTERFLY - CHILD WELFARE AND EDUCATION" />
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              <p>Unable to afford basic human needs like water, food, and shelter, parents are left with no choice but to catapult their children into the same unjust world of child labor that they have grown up in. Few can barely save money and admit their child into a school, hence living a life of struggle and injustice.</p>
              <p>The butterfly is a symbol of freedom. The freedom from the clutches of inequality and child labor. Lakshyam (NGO in India for children’s education) vowed to right these wrongs and ensures that the human rights of these children are no longer violated. Butterfly- Child Welfare and Education program aims to provide comprehensive assistance to impoverished children through a learning program focusing on textual and practical knowledge as well as personality development.</p>
              <p>The attention and efforts of Lakshyam focus on increasing the school enrollment at the primary level and reducing school drop-out rates, particularly for girls. 
              Lakshyam believes that education is the key to breaking the cycle of poverty.</p>
              <p>Basic Education is the human right of every individual as laid down in the International Human Rights Law by the United Nations.</p>
           
            </Col>
            <Col xs={12} md={6} lg={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Butterfly-Main-Picture.jpg" alt="" />
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

      <section className="buttry_flowChat">
        <Container>
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6} className="lowChat_title" >
              <h4>Flow chart of activities carried under our program:</h4>
            <Row>
              <Col xs={12} lg={6} md={6} className="card_border"> 
                <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Butterfly-prog-Flowchart.jpg" alt="" className="w-100" />
              </Col>
            </Row>
            </Col>
            <Col xs={12} md={6} lg={6} className="lowChat_title" >
              <h4>Program Expenses:</h4>
            <Row>
              <Col xs={12} lg={6} md={6}  className="card_border"> 
                <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/Butterfly-prog-Flowchart.jpg" alt="" className="w-100" />
              </Col>
            </Row>
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
 