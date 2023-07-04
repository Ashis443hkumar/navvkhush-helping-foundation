
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlideVideo from "./SlideVideo";


export default function LegalComp(){
  return(
    <> 
      
      <section className="">
          <Container>
            <Heading title="LEGAL STATUS"/>
            <Row>
               <Col lg={6} col={6} className="">
                 <h4>Registrations/Exemption under various Acts</h4>
                 <p>RRegistration: Navvkhush Bharat is a duly registered non-governmental organization (NGO) in accordance with the applicable laws and regulations of the country. We have successfully obtained all the required registrations and certifications, ensuring our full compliance with the legal framework as a nonprofit organization.</p>
                 <h4>Other Important Registration</h4>
                 <p><stong>E-Mail</stong>INFO@THECRIMECONTROL.COM</p>
                 <p><stong>Date of Establishment:- </stong>15TH OCT 2020</p>
                 <p><stong>Registration No:- </stong>2325</p>
                 <p><stong>MSME No:- </stong>UDYAM-DL-02-0045921</p>
                 <p><stong>PAN:- </stong>AACTC7828E</p>
                 <p><stong>NGO Darpan No:- </stong>DL/2021/0300598</p>
                 <p><stong>TAN:- </stong>DELC23076E</p>
                 <p><stong>80G:- </stong>AACTC7828EF20222</p>
                 <p><stong>12A:- </stong>AACTC7828EE20216</p>

              </Col>
              <Col lg={6} col={6} className="">
                 <h4>Donations/voluntary contributions are exempt under section :</h4>
                 <p>Tax Exemption: Lakshyam has received official recognition from the appropriate authorities, granting us tax-exempt status. This means that donations and contributions made to our organization are eligible for tax benefits in accordance with the current tax laws and regulations in place.</p>
                 <p>We are committed to upholding the trust and confidence of our stakeholders and supporters by diligently adhering to all legal requirements and maintaining transparency in our operations. We place great importance on compliance and strive to ensure that our activities are conducted in a transparent and accountable manner. This approach allows us to build strong relationships with our stakeholders and demonstrate our commitment to responsible and ethical practices.</p>
               </Col>
            </Row>
          </Container>
        </section>
    
    </>
  )
}