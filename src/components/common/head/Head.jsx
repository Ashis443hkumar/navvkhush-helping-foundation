
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import "./head.css"
import Socialicons from "../socialIcons/SocialIcons";


export default function Head(){
  return(
    <>
      <section className="head_section">
        <Container className="">
        <Row>
          <Col xs={6} md={6} lg={6} className="head_left">
            <Image src="https://media.licdn.com/dms/image/D4D22AQFpF6XnIVilsg/feedshare-shrink_1280/0/1685791142227?e=1688601600&v=beta&t=yA5p52Dgs48ezP6R0iRphLPK7vgh4GknujzgAUW3ySY" roundedCircle  />
            
          </Col>
          <Col xs={6} md={6} lg={6}  className="head_right">
            <div class="social_head">
            <Socialicons/>
            </div>
          </Col>
          
        </Row>
      </Container>
      </section>
    </>
  )
}