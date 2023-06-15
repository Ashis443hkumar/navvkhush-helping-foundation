import React from "react";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Heading from "../../common/Heading";

export default function Sdg() {
  return (
    <>
     <section className="sdg_section">
       <Container style={{background:"#f9f9f9"}} className="mx-auto my-5 py-2" >
         <Heading title="CONTRIBUTION TO SDG’S" />
         <Row  className="mx-auto pb-5" >
           <Col lg={2} md={4} sm={6} xs={12} className="sdg_section_space">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-1.png" alt="" className="w-100" />
           </Col>
           <Col lg={2} md={4} sm={6} xs={12} className="sdg_section_space">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-2.png" alt="" className="w-100" />
           </Col>
           <Col lg={2} md={4} sm={6} xs={12} className="sdg_section_space">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-3.png" alt="" className="w-100" />
           </Col>

           <Col lg={2} md={4} sm={6} xs={12} className="sdg_section_space">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-4.png" alt="" className="w-100" />
           </Col>

           <Col lg={2} md={4} sm={6} xs={12} className="sdg_section_space">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-5.png" alt="" className="w-100" />
           </Col>

           <Col lg={2} md={4} sm={6} xs={12} className="sdg_section_space">
             <img src="https://www.lakshyam.co.in/wp-content/uploads/2021/12/sdg-6.png" alt="" className="w-100" />
           </Col>
         </Row>
       </Container>
     </section>
    </>
  );
}
 