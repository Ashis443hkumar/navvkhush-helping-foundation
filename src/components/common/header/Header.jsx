import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./header.css"
import {NavLink} from "react-router-dom"
import HeroButton from "../heroButton/HeroButton";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="light" style={{background:"#b2bec3"}} className="header" >
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-5" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav 
             className="mx-auto my-2 my-lg-0"
            //  style={{ maxHeight: '500px' }}
            //  navbarScroll
            >
              
            <NavLink to="/">Home</NavLink>

            <NavDropdown title="abouts Us" id="collasible-nav-dropdown" className="ml-4">
              <NavDropdown.Item ><NavLink to="/introduction">Introduction</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/mission">Mission&Vision </NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/aim">Aim & Objective </NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/legal">Legal Status</NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/annual">Annual Reaports </NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/socialVenture">Social Venture </NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/navvkhushTeam">NavvkhushTeam </NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/awardsRecognition">AwardsRecognition </NavLink> </NavDropdown.Item>




            </NavDropdown>

            <NavDropdown title="Our Program" id="collasible-nav-dropdown" className="ml-4">
              <NavDropdown.Item ><NavLink to="/buttrfly">Buttrfly</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/mission">Mission&Vision </NavLink> </NavDropdown.Item>
              <NavDropdown.Item ><NavLink to="/aim">Aim & Objective </NavLink> </NavDropdown.Item>
            </NavDropdown>

            {/* <NavDropdown title="Our Program" id="collasible-nav-dropdown">
              <NavDropdown.Item > <NavLink to="/buttrfly">Butterfly</NavLink> </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <NavLink to="">Another action</NavLink></NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="Celebrity & Media" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing">joins</Nav.Link>

          </Nav>
          <Nav className="donate">
            <Nav.Link eventKey={2} href="#memes">
              <HeroButton title="Contact Us" />
            </Nav.Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
