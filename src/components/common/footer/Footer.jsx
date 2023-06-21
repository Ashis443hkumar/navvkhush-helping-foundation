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
            <Image src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/girls.png"   />
            <div className="footer_scroll">
             <img src="https://scontent.fdel24-1.fna.fbcdn.net/v/t39.30808-6/349849717_5661928917241475_7074863927270693829_n.jpg?stp=dst-jpg_p235x350&_nc_cat=110&ccb=1-7&_nc_sid=110474&_nc_ohc=z0ZLwKPuM3EAX9EKhZy&_nc_ht=scontent.fdel24-1.fna&edm=AEDRbFQEAAAA&oh=00_AfBFWZG3Ra9BSMvk9wdb6vqp8xTrwpVWE4MVNc3g1LBprA&oe=649199DD" />
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quisquam nostrum natus iste asperiores neque laudantium quo tenetur itaque voluptas.</p>
            </div>
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