import React from "react";
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';
import "./style.css"
import {NavLink,useNavigate, Link} from "react-router-dom"



import Button from 'react-bootstrap/Button';
import Slide from "../../common/slide/Slide";
import HeroButton from "../../common/heroButton/HeroButton";

export default function Joins() {

    const navigate = useNavigate()

  return (
    <>
      <section className="py-4">
       <Container>
       <Heading title="THE Navvkhush baharat FAMILY" />
       <Row>
         <Col>
          <p>Navvkhush firmly believes that there is an abundance of good intentions and helping hands within our society. We are consistently eager and excited to welcome passionate and dedicated volunteers to join our budding team. If you have a strong desire to contribute positively to society and possess any skills or knowledge that can be put to good use, Navvkhush could be the perfect place for you to make a difference.</p>
          <p>At Navvkhush, we value the unique talents and expertise that each individual brings. Whether you have skills in teaching, arts and crafts, technology, event management, or any other field, we enthusiastically invite you to be a part of our team. Your skills and knowledge can be utilized across various initiatives and projects aimed at making a positive impact in society.</p>
          <p>By joining Navvkhush, you will have the opportunity to work closely with our team and other passionate volunteers who share a common goal of creating a better world. We are dedicated to addressing social issues and promoting holistic development in underprivileged communities through education, healthcare, skill development, and other sustainable initiatives.</p>
          <p>If you feel the urge to do something meaningful for society and make a tangible difference, we encourage you to reach out to Navvkhush. Together, we can create a brighter future and improve the lives of those in need.</p>
          <p>To learn more about Navvkhush and how you can get involved as a volunteer, please visit our website or contact us directly. We are eagerly looking forward to welcoming you to our team of passionate and dedicated individuals.</p>
         </Col>
       </Row>
       </Container>
      </section>

   

    <section className="joins_section ">
     <Container className="join_background">
        <Heading title="WHY INTERN / VOLUNTEER WITH Navvkhush" />
       <Row className="py-0">
         <Col xs={12} lg={6} md={6}>
          <p>Volunteering or interning with us can be a simple yet impactful and fulfilling way to contribute to a cause you care about. Here are some compelling reasons to consider volunteering or interning with our organization:</p>
           <ul>
             <li>Make a Difference: By volunteering or interning with us, you have the opportunity to make a tangible impact on the lives of others. Whether it's helping underprivileged communities, promoting education, supporting healthcare initiatives, or advocating for social change, your efforts can create positive and lasting effects.</li>

             <li>Personal Growth: Volunteering or interning provides a unique space for personal growth and development. It allows you to enhance your skills, gain practical experience, and broaden your perspective. You can develop leadership abilities, improve communication and teamwork skills, and gain valuable insights into social issues.</li>

             <li>Learn and Apply Your Skills: Volunteering or interning with us gives you a platform to apply your skills and knowledge in a real-world setting. Whether you have expertise in a specific field like teaching, marketing, fundraising, or project management, or you're looking to learn new skills, we provide opportunities to contribute your strengths and learn from hands-on experiences.</li>
             
           </ul>
         </Col>
         <Col xs={12} lg={6} md={6}>
         <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/intern-pic.png" className="w-100" rounded  />
              
         </Col>
       </Row>
      </Container>
      </section>

     <section className="joins_section py-4">
       <Container>
        <Heading title="VOLUNTEER / INTERN"  />
        <p>Navvkhush now offers a volunteering and internship program in India, providing individuals an opportunity to contribute to society. Join our team for a holistic experience that includes direct interaction with beneficiaries and a chance to make a meaningful impact during your association with us.</p>

        <p>We greatly appreciate your time, skills, knowledge, and most importantly, your passion for creating positive change in society. Your dedication is precisely why we would be thrilled to have you join our team. Together, we can make a real difference and work towards building a better future for all.</p>

        <p>Navvkhush provides a diverse range of tasks for volunteers. A volunteer may choose from any (One or more) from below:</p>
       <Row className="mt-3 py-4">
         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Media & Communications:</Card.Title>
            <Card.Text>
            NGOs use media to raise awareness, advocate for social issues, provide information, monitor media content, and promote responsible journalism.
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Performing Arts:</Card.Title>
            <Card.Text>
            NGOs in performing arts support artists, promote cultural diversity, provide arts education, and organize community performances and events.
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Academics:</Card.Title>
            <Card.Text>
            NGOs in academics promote access to education, support educational initiatives, provide scholarships, and advocate for equitable and inclusive learning opportunities.
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>

         <Col xs={12} lg={3} md={3}>
         <Card >
          <Card.Img variant="top" src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/icon-1.png" style={{width:"80px", height:"80px", margin: "10px auto"}} />
          <Card.Body className="text-center">
            <Card.Title>Building and Construction</Card.Title>
            <Card.Text>
              NGOs in building and construction focus on sustainable practices, community development, housing projects, and 
            </Card.Text>
          </Card.Body>
         </Card>
         </Col>
       </Row>
       <div className=" applay_intership_form" onClick={() =>navigate("/Intership")}>
              <HeroButton title="Applay Now" />
       </div>

     

       </Container>
      </section>
   
  {/* PROGRAM REQUIREMENTS */}
   <section className="join_program">
     <Container>
       <Heading title="PROGRAM REQUIREMENTS" />
       <Row className="py-5">
         <Col xs={12} lg={12} md={12}>
           <ul>
             <li>Mission and Values: Understand the NGO's mission, goals, and core values to align the content with their objectives..</li>
             <li>Target Audience: Identify the target audience or stakeholders the NGO aims to reach with the content, such as donors, volunteers, or the communities they serve.</li>

             <li>Content Strategy: Develop a content strategy that outlines the purpose, themes, and formats for the new content, ensuring it supports the NGO's objectives and engages the target audience effectively.</li>
             <li>Research and Analysis: Conduct research on relevant topics and analyze the current content landscape to identify gaps, trends, and opportunities for the NGO's content creation</li>

             <li>Storytelling: Utilize storytelling techniques to convey the NGO's impact, success stories, and the challenges they address, creating an emotional connection with the audience.</li>

             <li>Visual and Multimedia Content: Incorporate visual elements such as images, infographics, videos, or interactive media to enhance engagement and deliver messages effectively.</li>

             <li>Call-to-Action: Include a clear call-to-action in the content to encourage the audience to get involved, donate, volunteer, or support the NGO's initiatives.</li>

             <li>Brand Consistency: Ensure consistency in branding elements, such as logos, colors, and messaging, to maintain a recognizable and cohesive brand identity throughout the content.</li>

           </ul>
         </Col>
       </Row>
      </Container>
   </section>

   {/* FOR JOB AND OTHER QUERIES */}
   <section className="join_requrement">
     <Container>
       <Row className="py-5">
         <Col xs={12} lg={6} md={6}>
           <h3>FOR JOB AND OTHER QUERIES</h3>
           <ul>
             <li>I apologize for any confusion, but it seems like you are requesting assistance with job-related queries or have some other specific questions. Please go ahead and provide more details or ask your specific query so that I can assist you accordingly.  please fill the form by clicking on Applay Now </li>
             <li>For any other queries, email us at info@thecrimecontrol.com</li>
           </ul>
         </Col>
         <Col xs={12} lg={6} md={6}>
           <h3>CORPORATE VOLUNTEER PROGRAMS</h3>
           <ul>
             <li>Corporate volunteer programs are initiatives established by companies to encourage their employees to engage in volunteer activities and contribute to the community. These programs offer employees the opportunity to participate in various volunteer projects and make a positive impact on social and environmental issues. Here's some information regarding corporate volunteer programs: </li>
           </ul>
         </Col>

       </Row>
      </Container>
   </section>

   {/* WHAT OUR INTERNS HAVE TO SAY */}
   <section className="join_requrement">
     <Container>
       <Heading title="WHAT OUR INTERNS HAVE TO SAY" />
     
      </Container>
      <Slide/>

   </section>


   {/* OTHER WAYS OF CONTRIBUTION */}
   <section className="join_contributtion">
     <Container>
       <Heading title="OTHER WAYS OF CONTRIBUTION" />
       <Row className="">
         <Col xs={12} md={12} lg={12} >
            <h4>Payroll Contribution:</h4>
            <p>Donate a part of your salary/earnings for the cause</p>
         </Col>
         <Col xs={12} md={12} lg={12} >
            <h4>Leverage Grant/Project Sponsorships:</h4>
            <p>Sponsor a Child, Skill Building Workshop, Lakshyam Toy Library</p>
         </Col>
         <Col xs={12} md={12} lg={12} >
            <h4>Kind Donations/Charity/Philanthropy:</h4>
            <p>Donate materials like food, clothes, toys, books, newspapers, waste paper, computers for Lakshyam projects</p>
         </Col>
         <Col xs={12} md={12} lg={12} >
            <h4>Consumer’s Participation:</h4>
            <p>Donate a part of your salary/earnings for the cause</p>
         </Col>
         <Col xs={12} md={12} lg={12} >
            <h4>Payroll Contribution:</h4>
            <p>Place bulk orders to purchase handmade products</p>
            <p>Recommend Lakshyam for product’s sale at exhibitions and stalls</p>

         </Col>
       </Row>
      </Container>
    </section>

    <section className="join_volunteer my-5">
     <Container>
       <Heading title="VOLUNTEER AT WORK" />
      </Container>
      <Slide/>

   </section>
      
    </>
  );
}
 