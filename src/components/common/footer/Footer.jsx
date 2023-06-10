import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import "./footer.css"
import Socialicons from "../socialIcons/SocialIcons";
import { Link } from "react-router-dom";

export default function Footer(){
  return(
    <> 
    <section className="footer_section mt-3">
    <Container className="">
        <Row>
        <Col xs={12} md={6} lg={5} className="footer_left">
          <h3>GET IN TOUCH WITH US</h3>
          <p>For donations / sponsorship queries / collaborations / others, please connect with us at support@lakshyam.co.in or you can also reach out to us at 011-40154493</p>
           <h3>TIME </h3>
           <p>9:30 AM to 5:30 PM</p>
        </Col>
          <Col xs={12} md={6} lg={4} className="footer_middle">
            <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/shop-2.png"   />
          </Col>

          <Col xs={12} md={6} lg={3}  className="footer_right">
             <ul>
              <li><Link to="">Youtube<img src="https://cdn-icons-png.flaticon.com/128/4008/4008208.png" class="youtube" alt=""/></Link></li>
              <li><Link to="" >Linkedin<img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" class="linkedin" alt="" /></Link></li>
              <li><Link to="" >Instagram<img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" class="instagram" alt=""/></Link></li>
              <li><Link to="" >Facebook <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" class="facebook" alt=""/></Link></li>
              <li><Link to="" >Twitter<img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" class="facebook" alt=""/></Link></li>
            </ul>
          </Col>
          
        </Row>
      </Container>

    </section>


    <section className="tfooter">
    <Container className="">
        <Row>
          <Col xs={12} md={6} lg={6} className="">
            <h3>Contact Us | Privacy Policy</h3>
          
          </Col>
          <Col xs={12} md={6} lg={6} className="copy_right">
            <h3>COPYRIGHT © 2023. DESIGNED & DEVELOPED BY CITY INNOVATES PVT. LTD.</h3>
          
          </Col>
        
        </Row>
      </Container>
    </section>

   
  

    
    </>
  );
}