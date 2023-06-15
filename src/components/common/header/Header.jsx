import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./header.css"
import {NavLink, Link} from "react-router-dom"
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
             className="mx-auto my-2 my-lg-0  navigation" >
             {/* home pages  */}
            <NavLink to="/" className="home" >Home</NavLink>

             {/* abouts pages */}
            <NavDropdown title="Abouts Us" id="collasible-nav-dropdown" className="ml-4 dropdown_menu">
              <NavDropdown.Item ><NavLink to="/introduction">Introduction</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/mission">Mission&Vision </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/aim">Aim & Objective </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/legal">Legal Status</NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/annual">Annual Reaports </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/socialVenture">Social Venture </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/navvkhushTeam">NavvkhushTeam </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/awardsRecognition">AwardsRecognition </NavLink> </NavDropdown.Item>
            </NavDropdown>
            
             {/* Our programs  */}
            <NavDropdown title="Our Program" id="collasible-nav-dropdown" className="ml-4 dropdown_menu">
              <NavDropdown.Item ><NavLink to="/butterfly">buttryfly</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/toyLibrary">toy libarary</NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/rooh">Rooh</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/successStores">Success Stories</NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/events">Events</NavLink></NavDropdown.Item>
            </NavDropdown>

            {/* Celebrity & Media */}
            <NavDropdown title="Celebrity & Media" id="collasible-nav-dropdown" className="dropdown_menu" >
              <NavDropdown.Item ><NavLink to="/celebritySuppor">Celebrity Support</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/media">Media</NavLink></NavDropdown.Item>
            </NavDropdown>

            {/* joins */}
            <NavLink to="/Joins">Join Us</NavLink>
          </Nav>

          <Nav className="donate">
            <Link to="/contact/Contact" eventKey={2}>
              <HeroButton title="Contact Us" />
            </Link>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
