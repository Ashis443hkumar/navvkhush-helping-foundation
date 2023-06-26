import React from "react";
import Heading from "../../common/Heading";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import Slide from "../../common/slide/Slide";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Media(){
  return (
    <>

      <section className="">
       <Container>
         <Heading title="Running Projects" />
        <Row>
         <Col xs={12} lg={4} md={4}> 
         <Card >
          <Card.Body>
            <Card.Title  className="text-center"> WOMEN  EMPOWERMENT</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text>
              <ul>
                <li>Fashion Designing Course for women.</li>
                <li>absolutely free of cost.</li>
                <li>Stitching Course.</li>
              </ul>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={4} md={4}> 
         <Card >
          <Card.Body>
            <Card.Title  className="text-center"> PROJECT NIPUN UNDER MINISTRY OF HOUSING AND URBAN AFFAIRS 
             IMPLEMENTED BY - CCSDO</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
            <Card.Text>
              <ul>
                <li>RPL (Recognition of prior learning) Programme  for Construction Workers.</li>
                <li>Project Implementing Agencies (PIAs) Construction Sector Skill Council.</li>
                <li>RPL at Construction sites.</li>
              </ul>
            
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={4} md={4}> 
         <Card >
          <Card.Body>
            <Card.Title  className="text-center">CHILD EDUCATION </Card.Title>
            <Card.Text>
              <ul>
                <li> Opening  School  for underpriviledged children so they can gain quality education.</li>
                <li>Summer Camp for children.</li>
              </ul>

            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>
        </Row>
       </Container>
      </section>


      <section className="upcomming_projects mt-4 pt-5">
       <Container>
         <Heading title="Upcomming Projects" />
        <Row className="text-center">
         <Col xs={12} lg={3} md={3}> 
         <Card style={{ height: '14rem' }}>
          <Card.Body>
            <Card.Title  className="text-start"> CSR Project with Apparel Made-ups and Home Furnishing Sector Skill Council </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            {/* <Card.Text>
              <ul>
                <li>Fashion Designing Course for women.</li>
                <li>absolutely free of cost.</li>
                <li>Stitching Course.</li>
              </ul>
            </Card.Text> */}
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3}> 
         <Card style={{ height: '14rem' }}>
          <Card.Body>
            <Card.Title className="text-start"> Sfurti Scheme – Regeneration of Traditional Industries sponsored by MSME </Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle> */}
            {/* <Card.Text>
              <ul>
                <li>RPL (Recognition of prior learning) Programme  for Construction Workers.</li>
                <li>Project Implementing Agencies (PIAs) Construction Sector Skill Council.</li>
                <li>RPL at Construction sites.</li>
              </ul>
            </Card.Text> */}
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3}> 
         <Card style={{ height: '14rem' }}>
          <Card.Body>
            <Card.Title  className="text-start">Capacity Building Program sponsored by (Social Justice Empowerment Ministry) NIESBUD for Specially abled Persons</Card.Title>
            {/* <Card.Text>
              <ul>
                <li> Opening  School  for underpriviledged children so they can gain quality education.</li>
                <li>Summer Camp for children.</li>
              </ul>

            </Card.Text> */}
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>
         <Col xs={12} lg={3} md={3}> 
         <Card style={{ height: '14rem' }}>
          <Card.Body>
            <Card.Title  className="text-start">RPL with Paint & Coating  Sector Skill Council </Card.Title>
            {/* <Card.Text>
              <ul>
                <li> Opening  School  for underpriviledged children so they can gain quality education.</li>
                <li>Summer Camp for children.</li>
              </ul>

            </Card.Text> */}
            <Card.Link href="#">Card Link</Card.Link>
          </Card.Body>
        </Card>
         </Col>

        </Row>
       </Container>
      </section>
      
    </>
  );
}
 


{/* <section  className="celebrity_media">
<Container>
 <Heading title="Media" />
 <Row className="mb-3 mx-auto text-center">
   <Col xs={12} md={12} lg={12} className="tabs">
   <Tabs
     defaultActiveKey="home"
     id="uncontrolled-tab-example"
     className="mb-3 mx-auto text-center main_head_title"
     justify
   >
    <Tab eventKey="home" title="Print Media" className="text-center ">
     <Slide/>

    </Tab>

    <Tab eventKey="Online_Media" title="Online Media" className="text-start mt-4  gtetry">
       <Tabs
           defaultActiveKey="NavvkhushStory"
           id="uncontrolled-tab-example"
           className="mb-3 mt-4" justify
         >
           <Tab eventKey="NavvkhushStory" title="Navvkhush Story " className="thrtghrt">
             <ul>
               <li>A Catalyst for Change – Lakshyam and Ircon International Ltd’s Rooh Program Uplifts Women in Umri Village, Madhya Pradesh</li>
               <li>Distribution of Solar Lamps & Ration Kits in collaboration with Binomo</li>
               <li>Lakshyam helping women change their lives by providing skilled based training & jobs</li>
               <li>Lakshyam NGO Uplifting at-risk communities through education and employment</li>
             </ul>
           </Tab>
           <Tab eventKey="Founder’s Story" title="Founder’s Story" className="thrtghrt">
             <ul>
               <li>How Rashi Anand is transforming the lives of street children and women with her NGO</li>
               <li>Lakshyam NGO has‌ ‌positively‌ ‌impacted‌ ‌the‌ ‌lives‌ ‌of‌ ‌more‌ ‌than‌ ‌7‌ lakh‌ women‌ ‌and ‌ ‌children‌ ‌in‌ ‌India,‌ ‌directly‌ ‌or‌ ‌indirectly</li>
               <li>Feel Good Factor August 09 2020</li>
               <li>From Educating Street Children To Creating Livelihood For Their Mothers, This Social Entrepreneur Is Transforming Lives</li>
               <li>This social entrepreneur stepped in to help destitute women and children during the coronavirus pandemic</li>
               <li>When Covid leads to aggression</li>
               <li>Rashi Anand: Helping children with her NGO</li>
               <li>Rashi Anand Recalls A Trafficked Woman’s Visit That Awoke An Activist In Her</li>
               <li>Celebrating National Girl Child Day With These 7 Girls Who Made Us Proud</li>

             </ul>
           </Tab>
           <Tab eventKey="Fashion for a cause" title="Fashion for a cause" className="thrtghrt">
           <ul>
               <li>How Rashi Anand is transforming the lives of street children and women with her NGO</li>
               <li>Lakshyam NGO has‌ ‌positively‌ ‌impacted‌ ‌the‌ ‌lives‌ ‌of‌ ‌more‌ ‌than‌ ‌7‌ lakh‌ women‌ ‌and ‌ ‌children‌ ‌in‌ ‌India,‌ ‌directly‌ ‌or‌ ‌indirectly</li>
               <li>Feel Good Factor August 09 2020</li>
               <li>From Educating Street Children To Creating Livelihood For Their Mothers, This Social Entrepreneur Is Transforming Lives</li>
               <li>This social entrepreneur stepped in to help destitute women and children during the coronavirus pandemic</li>
               <li>When Covid leads to aggression</li>
               <li>Rashi Anand: Helping children with her NGO</li>
               <li>Rashi Anand Recalls A Trafficked Woman’s Visit That Awoke An Activist In Her</li>
               <li>Celebrating National Girl Child Day With These 7 Girls Who Made Us Proud</li>

             </ul>
           </Tab>
           <Tab eventKey="Delhi Primes" title="Delhi Primes" className="thrtghrt">
            <ul>
               <li>A Catalyst for Change – Lakshyam and Ircon International Ltd’s Rooh Program Uplifts Women in Umri Village, Madhya Pradesh</li>
               <li>Distribution of Solar Lamps & Ration Kits in collaboration with Binomo</li>
               <li>Lakshyam helping women change their lives by providing skilled based training & jobs</li>
               <li>Lakshyam NGO Uplifting at-risk communities through education and employment</li>
              </ul>
           </Tab>
           <Tab eventKey="Others" title="Others" className="thrtghrt" >
           <ul>
               <li>How Rashi Anand is transforming the lives of street children and women with her NGO</li>
               <li>Lakshyam NGO has‌ ‌positively‌ ‌impacted‌ ‌the‌ ‌lives‌ ‌of‌ ‌more‌ ‌than‌ ‌7‌ lakh‌ women‌ ‌and ‌ ‌children‌ ‌in‌ ‌India,‌ ‌directly‌ ‌or‌ ‌indirectly</li>
               <li>Feel Good Factor August 09 2020</li>
               <li>From Educating Street Children To Creating Livelihood For Their Mothers, This Social Entrepreneur Is Transforming Lives</li>
               <li>This social entrepreneur stepped in to help destitute women and children during the coronavirus pandemic</li>
               <li>When Covid leads to aggression</li>
               <li>Rashi Anand: Helping children with her NGO</li>
               <li>Rashi Anand Recalls A Trafficked Woman’s Visit That Awoke An Activist In Her</li>
               <li>Celebrating National Girl Child Day With These 7 Girls Who Made Us Proud</li>
             </ul>
           </Tab>
         </Tabs>
     </Tab>

     <Tab eventKey="Electronic Media" title="Electronic Media" className="">
       <Slide/>
     </Tab>

   </Tabs>
   </Col>

 </Row>
</Container>
</section> */}
