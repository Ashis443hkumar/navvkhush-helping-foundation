import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';
import "./style.css"

import Button from 'react-bootstrap/Button';
import Slide from "../../common/slide/Slide";
import HeroButton from "../../common/heroButton/HeroButton";

export default function Joins() {
  return (
    <>

<section class="Internship mt-4">
     <Heading title="Apply for Internship" />
       <Container className="container mt-4">
         <Row className="row">
         <Col  xs={12} md={6} lg={6} className="intershop_content">
           <h1>Brief Summary of Internship Program</h1>
           <p>We offer internships to students and recent graduates who are passionate about making a positive impact in their community. Our internships provide a unique opportunity to gain hands-on experience and develop new skills while working alongside our dedicated team of professionals</p>

           <p>As an intern with our organisation, you will have the opportunity to contribute to meaningful projects and initiatives, learn from experienced professionals in the field, and gain valuable experience in your area of interest. Our internships are designed to be challenging, engaging, and rewarding, providing you with the opportunity to make a significant impact in your community</p>

           <p>We offer internships in a variety of areas, including program development, community outreach, fundraising and development, marketing and communications, and more. We also offer both in-person and remote internships to accommodate different schedules and preferences.</p>

           <p>To apply for an internship with our organisation, please visit our website and complete the online application form. Be sure to include your resume, cover letter, and any other relevant documents or materials. Our team will review your application and contact you if you are selected for an interview.</p>

           <p>We value diversity, equity, and inclusion and encourage applicants from all backgrounds and experiences to apply. Join us in our mission to make a positive impact in our community and gain valuable experience through an internship with our organisation.</p>
               
         </Col>

         <Col  xs={12} md={6} lg={6}  className="intership_form">
               <h4> Internship Form</h4>
               <form action="">
                 <div className="row d-flex align-items-center">
                   <div className="col-md-3">
                     <label htmlFor="" class="dfre">Your Name</label>
                   </div>
                 <div className="col-md-9 inter_suser_form">
                  <div class="">
                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder="" />
                  </div>
                  <div class="">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder="" />
                  </div>
                 </div>
                </div>
                {/* gender   */}
                <div className="row d-flex align-items-center mt-4">
                   <div className="col-md-3">
                     <label htmlFor="" class="dfre">Gender</label>
                   </div>
                 <div className="col-md-9 inter_suser_form">
                  <div className="radio-container">
                  <div className="radio-wrapper">
                    <label className="radio-button">
                      <input type="radio" name="radio-group" id="option1" />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Male</span>
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <label className="radio-button">
                      <input type="radio" name="radio-group" id="option2" />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Female</span>
                    </label>
                  </div>
                  <div className="radio-wrapper">
                    <label className="radio-button">
                      <input type="radio" name="radio-group" id="option3" />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Other</span>
                    </label>
                  </div>
                </div>
               </div>
              </div>

                <div className="row d-flex align-items-center mt-3">
                   <div className="col-md-3">
                     <label htmlFor="" class="dfre">Date OF Birth</label>
                   </div>
                 <div className="col-md-9 date_of_birth">
                  <div class="date_day">
                    <label htmlFor="">Day</label>
                    <select name="" id="">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option> 
                    </select>
                  </div>
                  <div class="date_day date_of_month">
                    <label htmlFor="">Month</label>
                    <select name="" id="">
                      <option value="">January</option>
                      <option value="">February</option>
                      <option value="">March</option>
                      <option value="">April</option>
                      <option value="">may</option>
                      <option value="">June</option>
                      <option value="">July</option>
                      <option value="">August</option>
                      <option value="">September</option>
                      <option value="">October</option>
                      <option value="">November</option>
                      <option value="">December</option>
                    </select>
                  </div>
                  <div class="date_day">
                    <label htmlFor="">years</label>
                    <select name="" id="">
                      <option value="">2001</option>
                      <option value="">2002</option>
                      <option value="">2003</option>
                 
                      <option value="">2007</option>
                      <option value="">2008</option>
                    </select>
                  </div>
                 </div>
                </div>

                <div className="row d-flex align-items-center mt-4">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">School Name:</label>
                   </div>
                 <div className="col-md-8 input_form">
                  <div class="">
                    <input type="text" placeholder="school name" />
                  </div>
                 </div>
                </div>


                <div className="row d-flex align-items-center mt-2">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">Phone Number:</label>
                   </div>
                 <div className="col-md-8 input_form">
                  <div class="">
                    <input type="text" placeholder="+91 787 776 678" />
                  </div>
                 </div>
                </div>

                <div className="row d-flex align-items-center mt-2 ">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">E-mail Address:</label>
                   </div>
                 <div className="col-md-8 input_form">
                  <div class="">
                    <input type="text" placeholder="name:example@gmail.com" />
                  </div>
                 </div>
                </div>

                <div className="row d-flex align-items-flex-start  pb-1">
                   <div className="col-md-4">
                     <label htmlFor="" class="dfre">Address:</label>
                   </div>
                 <div className="col-md-8 input_form">
                    <div className="row">
                      <div className="col-md-12">
                      <div class="">
                        <label htmlFor="">City</label>
                        <input type="text" placeholder="" />
                      </div>
                      </div>
                      <div className="col-md-12 mt-1">
                      <div class="">
                        <label htmlFor="">Postal / Zip Code</label>
                        <input type="text" placeholder="" />
                      </div>
                      </div>

                    </div>
                 </div>
                </div>

                <div class="intership_submit_btn" >
                   <HeroButton title="Submit" />
                </div>
               </form>
             </Col>
          
         </Row>
       </Container>
     </section>


<section class=" volunteer pt-4">
        <Heading title="Volunteer with Us "  />
       <Container className="container mt-3">
         <Row className="row">
           <Col xs={12} md={6} lg={6} className="volunteer_content">
             <h3>Volunteer with Us</h3>
             <p>Volunteering is an incredibly rewarding experience that allows individuals to contribute their time and skills towards a worthy cause. At our organisation, we welcome volunteers from all walks of life who share our vision of making a positive impact in our community. Whether you are a student, a working professional, or a retiree, there are numerous opportunities for you to get involved and make a difference.</p>

             <p>As a volunteer, you can choose to participate in a variety of programs and activities, including fundraising events, community outreach programs, and education and skill development programs. You can also work with our team to develop and implement new initiatives that align with your interests and skills. Our volunteers play an essential role in helping us achieve our mission, and we are grateful for their dedication and support.
             We believe that volunteering is a two-way street. Not only do our volunteers help us achieve our goals, but they also benefit from the experience by gaining new skills, building their networks, and making a positive impact in their community. We provide our volunteers with training, support, and guidance to ensure that they feel comfortable and confident in their roles. </p>

             <p>Join us in our mission to make a difference in the lives of those who need it most. Contact us today to learn more about how you can get involved and make a meaningful contribution to our organisation</p>

           </Col>
         <Col xs={12} md={6} lg={6} className=" volunteer_info">
               <h1>Register as Volunteer</h1>
               <form action="">
                <div className="user_form my-2">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>

                <div className="user_form my-2">
                  <label htmlFor="">Email Address</label>
                  <input type="text" placeholder="Enter Your Email Address" />
                </div>

                <div className="user_form my-2">
                  <label htmlFor="">Contact Number</label>
                  <input type="text" placeholder="+6577 788 7788 " />
                </div>
                <div className="user_form my-4">
                  <label htmlFor="">City</label>
                  <input type="text" placeholder="city " />
                </div>
              
                <div className="user_form my-2">
                  <label htmlFor="">Remraks</label>
                  <input type="text" placeholder=" Remraks" />
                </div>
                <div className="volunteer_button mt-4">
                   <div className="submitt">
                      <HeroButton title="Submit"  />
                   </div>
                   <div className="cancelfr">
                     <HeroButton title="Cancel"  />
                   </div>
                </div>
               </form>
           </Col>
         </Row>
       </Container>
     </section>
     


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
       <div className="card_button text-center ">
         <Button className="text-center" variant="">Applay Now </Button>
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
       <Row className="">
         <Slide/>
       </Row>
      </Container>
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
       <Row className="">
         <Slide/>
       </Row>
      </Container>
   </section>
      
    </>
  );
}
 