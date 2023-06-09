import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./style.css"
import HeroButton from '../../../common/heroButton/HeroButton';
import { Link, useNavigate } from 'react-router-dom';
import SelectOption from './SelectOption';


export default function PaytmScanner() {
   
  const navigate = useNavigate()
   

  return (
    <>
      <section className="">
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton className="ewrewreret">
              <div className="d_flex pb--4">
                <div className="ddggd">
                  <i class="fa-brands fa-google-plus xx3"></i>
                </div>
                <div className="paymentoption">
                 <p className="titlee" >Navvkhush Bharat</p>
                 <p className="titledesc">Razorpay Trusted Business</p>
               </div>
              </div>
            </Modal.Header>

            <Modal.Body>
              <article className="paytm_options">

              <p className="paytm_title">Pay With UPI QR</p>
              <Container>
                <Row className="allpay_scanner">
                  <Col xs={12} lg={6} md={6}>
                    <img
                      src="https://tse4.mm.bing.net/th?id=OIP.jrRhYO3wMxKOQrtCUN2BzwHaHa&pid=Api&P=0&h=180"
                      alt=""
                    />
                  </Col>
                  <Col xs={12} lg={6} md={6} className="py-1">
                    <p>Scan the QR using any UPI app on your phone.</p>
                    <div className="all_pay_scanner_icons">
                      <i class="fa-brands fa-google-plus xx3"></i>
                      <i class="fa-brands fa-google-plus xx3"></i>
                      <i class="fa-brands fa-google-plus xx3"></i>
                      <i class="fa-brands fa-google-plus xx3"></i>
                    </div>
                    <p>The previous QR got expired</p>
                  </Col>
                </Row>

                <p className="paytm_title pt-3">Preferred Payment Methods</p>
                <Row className="fgggee">
                  <Col lg={12}>
                    <div className="mobikwik_payment">
                      <div  className="d_flex">
                       <i class="fa-brands fa-google-plus xx3"></i>
                       <span>Wallet-mibikiwi</span>
                      </div>
                      <div>
                      <SelectOption/>
                      </div>
                    </div>
                  </Col>
                </Row>

                  {/* debitcard option */}
                <p className="paytm_title pt-3 ">Cards, UPI & More</p>
                <Row className="multiple_payment_option"> 


                <Nav className="donate" onClick={() =>navigate("/debitcard")}>
                   {/* <HeroButton title="Contact Us" /> */}
                   <Col lg={12} className="border_bottom">
                      <div className="card_title">
                       <i class="fa-solid fa-credit-card"></i>
                       <span>Card</span>
                      </div>
                      <div className="mastercard-icon">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-paypal"></i>
                        <i class="fa-brands fa-cc-mastercard mr-2"></i>
                        <span> & more </span>
                      </div>
                   </Col>
                </Nav>

                  <Col lg={12} className="border_bottom">
                      <div className="card_title">
                       <i class="fa-solid fa-qrcode"></i>
                       <span>UPI & QR</span>
                      </div>
                      <div className="mastercard-icon">
                        <i class="fa-brands fa-cc-visa"></i>
                        <i class="fa-brands fa-cc-paypal"></i>
                        <i class="fa-brands fa-cc-mastercard mr-2"></i>
                        <span> & more </span>
                      </div>
                  </Col>

                  <Col lg={12} className="border_bottom">
                    <Link to="/netbanking">
                      <div className="card_title">
                       <i class="fa-brands fa-internet-explorer"></i>
                       <span>Netbanking</span>
                      </div>
                      <div className="mastercard-icon">
                        <p>All Indian Banks</p>
                      </div>
                    </Link>
                  </Col>

                  <Col lg={12} className="border_bottom border-none">
                    <Link to="/wallet">
                      <div className="card_title">
                          <i class="fa-solid fa-wallet"></i>
                          <span>Wallet</span>
                      </div>
                      <div className="mastercard-icon">
                          <p>PhonePay & More</p>
                      </div>
                    </Link>

                  </Col>
                </Row>
              </Container>
              </article>

                <Row>
                  <p className="border_bottomm"></p>
                  <Col xs={12} lg={12} md={12} className="d_flex_center">
                    <p>Account</p>
                    <p>secured by <i class="fa-solid fa-wallet"></i> <span className="span" >Razorpay</span></p>
                  </Col>
                  <Col xs={12} lg={12} md={12} className="d_flex_center select_pay">
                    <div className="">
                     <p className="indianrupees">₹ 789</p>
                     <p className="viewdetails">view Details</p>
                    </div>
                    <HeroButton title="Pay Now" />
                  </Col>
                </Row>

            </Modal.Body>
          </Modal.Dialog>
        </div>
      </section>
    </>
  );
}
