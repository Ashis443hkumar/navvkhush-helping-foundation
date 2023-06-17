import React,{useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./donate.css"

export default function Donate() {
  return (
    <>
       <section className=" py-4">
       <Container>
        <Row>
         <Col xs={12} lg={12} md={12} className="donate_content">
         <Tabs defaultActiveKey="profile" id="justify-tab-example" className="mb-0 main_donate_title" fill >
          <Tab eventKey="home" title="SPONSOR A CHILD" className="home_title">
          <Row>
           <Col xs={12} lg={6} md={6}> 
            <div className="sponsor">
            <div class="radio-buttons">
              <label class="radio-button">
                <input value="option1" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label"> 4,825 INR (Support a child for 1 months) </span>
              </label>
              <label class="radio-button">
                <input value="option2" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">14,785 INR (Support a child for 3 months)</span>
              </label>
              <label class="radio-button">
                <input value="option3" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">28,950 INR (Support a child for 6 months)</span>
              </label>
              <label class="radio-button">
                <input value="option3" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">57,900 INR (Support a child for 1 year)</span>
              </label>
              <label class="radio-button">
                <input value="option3" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">2,95,000 INR (Support a child for 5 year)</span>
              </label>
              </div>
              <div className="dd">
                <p>Choose from above options</p>
                <p className="or_breack">Or</p>
                <p>Pay what you want</p>
              </div>
              <div className="ddd">
                  <input type="text" placeholder="" class="subscribe-input" />
                  <button class="subscribe-btn">Donate</button>
              </div>
              <p className="max-amount" > (Min. amount Rs. 50) </p>
            </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2022/01/Sponsor-a-Child.png" alt="" />
            </Col>

         </Row>
          </Tab>
          <Tab eventKey="women" title="SUPPORT WOMEN EMPOWERMENT">
            Tab content for Profile
          </Tab>
          <Tab eventKey="longer-tab" title="TOY LIBRARY">
            Tab content for Loooonger Tab
          </Tab>
          <Tab eventKey="contact" title="SUPPORT NAVKHUSH - YI MEMBERS">
            Tab content for Contact
          </Tab>
          <Tab eventKey="profile" title="PAY WHAT YOU WANT">
            Tab content for pay want you want
          </Tab>
        </Tabs>
         </Col>
        </Row>
       </Container>
      </section>
   
    </>
  );
}
