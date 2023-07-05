import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./style.css"

export default function PaytmScanner() {
  return (
    <>
      <section className="">
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p className="paytm_title">Pay With UPI QR</p>
              <Container>
                <Row className=" allpay_scanner">
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
                        pay
                      </div>
                    </div>
                  </Col>
                </Row>
                  {/* debitcard option */}
                <p className="paytm_title pt-3">Cards, UPI & More</p>
                <Row className="multiple_payment_option">
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
                      <div className="card_title">
                       <i class="fa-brands fa-internet-explorer"></i>
                       <span>Netbanking</span>
                      </div>
                      <div className="mastercard-icon">
                        <p>All Indian Banks</p>
                      </div>
                  </Col>

                  <Col lg={12} className="border_bottom border-none">
                      <div className="card_title">
                      <i class="fa-solid fa-wallet"></i>
                       <span>Wallet</span>
                      </div>
                      <div className="mastercard-icon">
                        <p>PhonePay & More</p>
                      </div>
                  </Col>
                </Row>

                <Row>
                <p className="border_bottomm"></p>

                  <Col xs={12} lg={6} md={6}>
                    <p>Account</p>
                    <p>sequred by <i class="fa-solid fa-wallet"></i></p>


                    
                  </Col>
                  <Col xs={12} lg={6} md={6}> </Col>
                </Row>


              </Container>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      </section>
    </>
  );
}
