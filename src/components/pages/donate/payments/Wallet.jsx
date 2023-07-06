
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import SelectOption from "./SelectOption";


export default function Wallet(){
  return(
    <>
     
       {/* paytme option  */}
       <section className="mt-4" >
       <Container>
        <Row>
         <Col xs={12} lg={5} md={5} className="mx-auto bg-white p-3 " style={{ boxShadow: '1px 2px 9px #F4AAB9'}}> 
         <p><strong>Select Wallet</strong></p>
        <Row style={{border:"1px solid #eee"}}>
        <Col xs={12} lg={12} md={12} className="d_flex_center bg-white"> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Phonepe</p>
          </div>
         <div className="ddddd">
           <SelectOption/>
         </div>
         </Col>

         <Col xs={12} lg={12} md={12} className="d_flex_center bg-white "  style={{borderTop:"1px solid #eee"}}> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Google pay</p>
          </div>
         <div className="ddddd">
            <SelectOption/>
         </div>
         </Col>
         <Col xs={12} lg={12} md={12} className="d_flex_center bg-white "  style={{borderTop:"1px solid #eee"}}> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Airtel payments banks</p>
          </div>
         <div className="ddddd">
           <SelectOption/>
         </div>
         </Col>

         <Col xs={12} lg={12} md={12} className="d_flex_center bg-white "  style={{borderTop:"1px solid #eee"}}> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Jiomoney</p>
          </div>
         <div className="ddddd">
           <SelectOption/>
         </div>
         </Col>
         <Col xs={12} lg={12} md={12} className="d_flex_center bg-white "  style={{borderTop:"1px solid #eee"}}> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Phonepey</p>
          </div>
         <div className="ddddd">
           <SelectOption/>
         </div>
         </Col>
         <Col xs={12} lg={12} md={12} className="d_flex_center bg-white "  style={{borderTop:"1px solid #eee"}}> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Phonepey</p>
          </div>
         <div className="ddddd">
           <SelectOption/>
         </div>
         </Col>
         <Col xs={12} lg={12} md={12} className="d_flex_center bg-white "  style={{borderTop:"1px solid #eee"}}> 
          <div className="phone_option d_flex_center">
            <i class="fa-brands fa-google-plus xx3"></i>
            <p>Phonepey</p>
          </div>
         <div className="ddddd">
           <SelectOption/>
         </div>
         </Col>


        </Row>
         </Col>
        
        </Row>
       </Container>
      </section>

    </>
  )
}