import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {Outlet} from "react-router-dom";
import Heading from "../../common/Heading";
import "./contact.css"
import HeroButton from "../../common/heroButton/HeroButton";

export default function Contact(){
  return(
    <>
       <Heading title="Contact" />
      
      <section class="user_info my-5 py-3">
         <div className="container">
           <div className="row my-4 gx-5">
             <div className="col-md-6 contact_form_details">
               <h3>We'd love to hear from you</h3>
               <form action="">
                <div class="user_form">
                  <label htmlFor="">Full Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Email Address</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>
                <div class="user_form">
                  <label htmlFor="">Contact Number</label>
                  <input type="text" placeholder="256 565 665 44" />
                </div>
                
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                </div>

                <div class="submit_btn">
                   {/* <HeroButton buttonTitle="Submit" /> */}
                   {/* <HeroButton title="" /> */}
                </div>
               </form>
             </div>
             <div className="col-md-6">
                <div class="contact_info">
                    <p>
                      <i class="fa fa-quote-left fg"></i> 
                       "  A man's true wealth is the good he does in this world. 
                      <i class="fa fa-quote-right fg"></i>
                    </p>
                    <p>Just A Little Help Can Make Their Hearts Happier! "</p>
 
                    <HeroButton buttonTitle="Donate Now" />
                </div>
             </div>
           </div>
         </div>
       </section>

     <section className="py-4">
     <Container className="contact">
       <Heading title="COMPANY ADDRESS" />
        <Row>
          <Col xs={12} md={6} lg={6} className="">
            <h4>HEAD OFFICE</h4>
            <address> <strong>Address:</strong> B 1/27-A, Ground Floor, Hauz Khaz, New Delhi, India – 110016</address>
            <address><strong>Tel No :</strong> +91 8287372178, +91 9971725342</address>
            <address><strong>Email Address:</strong>  info@thecrimecontrol.com</address>
          </Col>
         
          <Col xs={12} md={6} lg={6} className="">
            <h4>BRANCH OFFICE</h4>
            <address> <strong>Address:</strong> C-314 3rd Floor, Nirvana Courtyard, Sector-50, Gurugram - 122018.</address>
            <address><strong>Tel No :</strong> +91 8287372178, +91 9971725342</address>
            <address><strong>Email Address:</strong>  info@thecrimecontrol.com</address>
          </Col>

        </Row>
      </Container>
     </section>
     
     <section class="contact_map">
          <Heading title="Google Maps" />
          <div className="container-fluid">
            <div className="row px-0 rhytyuy">
              <div className="col-md-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.59171498198!2d77.29533437556813!3d28.61783353718104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4c6ac4a5c47%3A0x636c03e915bd97eb!2sKalyan%20Puri%2C%20Delhi%2C%20110091!5e0!3m2!1sen!2sin!4v1685006232496!5m2!1sen!2sin" allowfullscreen="" class="location_map" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-md-6 gtrr">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1701501933894!2d77.06121787379954!3d28.414122290467642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d227acdfa680b%3A0xb5956ee1a1df36f!2sNirvana%20Courtyard%2C%20Nirvana%20Country%2C%20Sector%2050%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1685006093966!5m2!1sen!2sin" class="location_map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>

        </section>


    </>
  )
}