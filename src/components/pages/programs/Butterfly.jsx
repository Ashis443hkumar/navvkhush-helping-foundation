import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Sdg from "../home/Sdg";
import Ratio from 'react-bootstrap/Ratio';
import Carousel from 'react-bootstrap/Carousel';
import Slide from "../../common/slide/Slide";

export default function Butterfly() {
  return (
    <>


      <section className="butteryFlay_section">
        <Container>
          <Heading title="BUTTERFLY - CHILD WELFARE AND EDUCATION" />
          <Row className="mt-5">
            <Col xs={12} md={6} lg={6}>
              
              <p>Child Protection: The Butterfly program prioritizes the safety and protection of children, working to prevent child abuse, neglect, and exploitation.</p>
              <p>Quality Education: We ensure access to quality education for children, focusing on improving school infrastructure, providing learning materials, and enhancing teaching methodologies.</p>
              <p>Health and Nutrition: Our program emphasizes the importance of good health and nutrition for children, providing medical check-ups, hygiene education, and nutritious meals.</p>
              <p>Emotional Support: We offer counseling and emotional support to children, addressing their psychological well-being and helping them overcome trauma or difficult circumstances.</p>
              <p>Skill Development: The Butterfly program equips children with essential life skills, vocational training, and entrepreneurship education to enhance their future prospects.</p>
              <p>Parental and Community Engagement: We actively involve parents and the community in supporting children's welfare and education, fostering a strong support network.</p>
    
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
            <p>We are delighted to introduce some of Navvkhush Bharat exceptionally brilliant and bright children who have triumphed over tremendous adversities and hold a special place in our hearts. These remarkable young individuals have reshaped their destinies through their unwavering determination and hard work. Their zest for life serves as a constant inspiration, motivating us to provide them with the finest resources and opportunities.</p>
         
          </Col>
        </Row>
        </Container>
        <Slide/>
     </section>

     <section className="home_stori_Chnage my-4" >
        <Container className="py-2 mt-0">
        <Heading title="LOCATIONS"  />
        <Row>
          <Col xs={12} md={12} lg={12} className="">
            <p>We are happy to introduce some of Lakshyam’s exceptionally brilliant and bright kids who have overcome tremendous adversities and are very close to our heart. We have many such successful warriors who have changed their fate with their sheer hardwork and determination. Their love for life inspires us to extend the best of resources to the</p>  
          </Col>
        </Row>
        </Container>
        <Slide/>

     </section>

    </>
  );
}
 