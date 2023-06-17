import React,{useState} from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./donate.css"
import Model from "./model/Model";

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
                  <input type="text" placeholder="1899" class="subscribe-input" />
                  <button class="subscribe-btn">Donate</button>
              </div>
              <p className="max-amount" > (Min. amount Rs. 50) </p>
            </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2022/01/Sponsor-a-Child.png" className="w-100 mb-2" alt="" />
            </Col>
         </Row>
          </Tab>
          <Tab eventKey="women" title="SUPPORT WOMEN EMPOWERMENT">
          <Row>
           <Col xs={12} lg={6} md={6}> 
            <div className="sponsor">
            <div class="radio-buttons">
              <label class="radio-button">
                <input value="option1" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label"> 15000 INR (For menstrual hygiene requirements of 50 females for a year) </span>
              </label>
              <label class="radio-button">
                <input value="option2" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">3000 INR (For menstrual hygiene requirements of 10 females for a year)</span>
              </label>
              <label class="radio-button">
                <input value="option3" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">1500 INR (Support a woman for 2 months)</span>
              </label>
              <label class="radio-button">
                <input value="option3" name="option" type="radio"/>
                <div class="radio-circle"></div>
                <span class="radio-label">4000 INR (For a skill training session)</span>
              </label>
              </div>
              <div className="dd">
                <p>Choose from above options</p>
                <p className="or_breack">Or</p>
                <p>Pay what you want</p>
              </div>
              <div className="ddd">
                  <input type="text" placeholder="1899" class="subscribe-input" />
                  <button class="subscribe-btn">Donate</button>
              </div>
              <p className="max-amount" > (Min. amount Rs. 50) </p>
            </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2022/01/Sponsor-a-Child.png" className="w-100 mb-2" alt="" />
            </Col>

          </Row>
         </Tab>
          <Tab eventKey="longer-tab" title="TOY LIBRARY">
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
              </div>
              <div className="dd">
                <p>Choose from above options</p>
                <p className="or_breack">Or</p>
                <p>Pay what you want</p>
              </div>
              <div className="ddd">
                  <input type="text" placeholder="1899" class="subscribe-input" />
                  <button class="subscribe-btn">Donate</button>
              </div>
              <p className="max-amount" > (Min. amount Rs. 50) </p>
            </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2022/01/Toy-Library.png" className="w-100 mb-2" alt="" />
            </Col>
         </Row>
          </Tab>
          <Tab eventKey="contact" title="SUPPORT NAVKHUSH - YI MEMBERS">
          <Row>
           <Col xs={12} lg={6} md={6}> 
            <div className="sponsor">
            <div className="dd py-5 mt-5">
                <p>Choose from above options</p>
                <p className="or_breack">Or</p>
                <p>Pay what you want</p>
              </div>
              <div className="ddd">
                  <input type="text" placeholder="1899" class="subscribe-input" />
                  <button class="subscribe-btn">Donate</button>
              </div>
              <p className="max-amount" > (Min. amount Rs. 50) </p>
            </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2022/01/Support-Lakshyam-Yi-Members.jpeg" className="w-100 mb-2" alt="" />
            </Col>
         </Row>
          </Tab>
          <Tab eventKey="profile" title="PAY WHAT YOU WANT">
          <Row>
           <Col xs={12} lg={6} md={6}> 
            <div className="sponsor">
              <div className="dd mt-5 pt-5">
                <p>Choose from above options</p>
                <p className="or_breack">Or</p>
                <p>Pay what you want</p>
              </div>
              <div className="ddd">
                  <input type="text" placeholder="1899" class="subscribe-input" />
                  <button class="subscribe-btn">Donate</button>
              </div>
              <p className="max-amount" > (Min. amount Rs. 50) </p>
            </div>
            </Col>
            <Col xs={12} lg={6} md={6}>
              <img src="https://www.lakshyam.co.in/wp-content/uploads/2022/01/Pay-What-You-Want.png" className="w-100 mb-2" alt="" />
            </Col>
         </Row>
          </Tab>
        </Tabs>
         </Col>
        </Row>
       </Container>
      </section>
     

     <Model/>
   
    </>
  );
}
