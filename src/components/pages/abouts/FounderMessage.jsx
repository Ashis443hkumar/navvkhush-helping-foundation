
import React from "react"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Heading from "../../common/Heading";
import Card from 'react-bootstrap/Card';



export default function FounderMessage(){
  return(
    <> 

    {/* founder messages  */}
    <section class="founder mt-4">
      <Heading title="FOUNDER'S MESSAGE" />
        
       <Container className="container py-3">
        <Row className="row founder_content">
          <Col className="col-md-4 card_content">
          <div className="card">
            <div className="founder_image">
            <img src="https://media.licdn.com/dms/image/D4D22AQGVTV2N-rVrQw/feedshare-shrink_800/0/1685791142191?e=1688601600&v=beta&t=-To_qf9YHuOlpX9POTK2Lwx1ZNLg1jqcQiVJSzRBTrw" class="card-img-top " alt="" />
            <div class="home_icons">
                {/* <SocialsIcons/> */}
              </div>
            </div>
             <div className="card-body text-center">
              <h2>KAVITA RAWAT</h2>
              <h4>FOUNDER, NavvKhush Bharat</h4>
             </div>
           </div>
          </Col>
             <Col className="col-md-8">
               <div class="founder_content  content_desc">
                 <p>Since my childhood, I have been drawn towards  community development and serving those in need. Witnessing the struggles and hardships that many individuals and families face on a daily basis, I developed a deep sense of empathy and a strong desire to help make a </p>

                 <p>positive impact in their lives. I always had a dream to start my own foundation and work towards the goal of empowering women in particular.</p>
                 <p>Women in our society face numerous challenges and obstacles, including gender-based violence, discrimination, and lack of access to education and resources. I strongly believe that empowering women is not only a fundamental human right, but also a key factor in promoting social and economic development.</p>
                 <p>After years of planning and research, CCSDO (Crime Control & Social Development Organization) became a reality. This organisation is a dream and passion project of mine, dedicated to creating a brighter future for those who are most in need. I am committed to putting in my 100% effort and giving my best to serve the society through CCSDO.</p>
                 <p>With the help of a dedicated team of volunteers and supporters, CCSDO is working tirelessly to improve the lives of women and children living in semi-urban slums and villages. Our organisation provides education and skill development programs, as well as social and economic support, to help women become financially independent and break the cycle of poverty.</p>
                 <p>At CCSDO, we also strive to raise awareness about issues such as gender-based violence and discrimination, and work towards creating a safer and more equal society for all. I am grateful to have the opportunity to work towards my dream of community development and women empowerment through CCSDO, and I am excited to continue making a positive impact in the lives of those we serve.</p>
               </div>
             </Col>
           </Row>

         </Container>
       </section>


     
    </>
  )
}