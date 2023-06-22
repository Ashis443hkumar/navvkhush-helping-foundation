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
        <Col xs={12} md={4} lg={5} className="footer_left">
          <h3>GET IN TOUCH WITH US</h3>
          <p>At NavvKhush Bharat-CCSDO, we empower women for a dignified life, providing economic and social support, reducing violence, and fostering equality, with notable achievements in education, counseling, and financial independence for women and children.</p>
           <h3 className="time">Office Time  </h3>
           <p>9:30 AM to 5:30 PM</p>
           <p className="office_day">Monday To  Saturday</p>
        </Col>

         <Col xs={12} md={4} lg={4} className="footer_middle">
            <Image src="https://media.licdn.com/dms/image/D4D22AQEOvFF-Phcj_g/feedshare-shrink_1280/0/1685947254008?e=1688601600&v=beta&t=1cezrhoUwJNZ3O_SBWzt4K9lAaXXi2eQ0Pq4CFXkNB0"   />
            <div className="footer_scroll">
             {/* <img src="" /> */}
             <p>That sounds like a wonderful and memorable experience for the Navvkhush kids! Celebrating Rakhi with the esteemed Prime Minister, Shri Narendra Modi, would indeed create cherished and unforgettable moments. Rakhi is a significant festival in India that celebrates the bond between brothers and sisters, and having the opportunity to celebrate it with the Prime Minister would be a special occasion for anyone. It's great to hear that the Navvkhush kids had such an incredible opportunity.</p>
            </div>
            <p></p>
          </Col>

          <Col xs={12} md={4} lg={3}  className="footer_right">
            <h4 className="follow-title" >Follow Us</h4>
             <ul>
              <li><Link to="https://www.youtube.com/@Navvkhushbharat" target="_blank" >Youtube<img src="https://cdn-icons-png.flaticon.com/128/4008/4008208.png" class="youtube" alt=""/></Link></li>
              <li><Link target="_blank" to="https://www.linkedin.com/in/navv-khush-bharat-crime-control-and-social-development-organisation-54a979260" >Linkedin<img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" class="linkedin" alt="" /></Link></li>
              <li><Link target="_blank" to="https://instagram.com/navvkhushbharat.ccsdo?igshid=NGExMmI2YTkyZg==" >Instagram<img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" class="instagram" alt=""/></Link></li>
              <li><Link target="_blank" to="https://www.facebook.com/navvkhushbharat?mibextid=ZbWKwL" >Facebook<img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" class="facebook" alt=""/></Link></li>
              <li><Link target="_blank" to="" >Twitter<img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png" class="twitter" alt=""/></Link></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>


    <section className="tfooter">
    <Container className="">
        <Row>
          <Col xs={12} md={4} lg={6} className="footer_left">
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