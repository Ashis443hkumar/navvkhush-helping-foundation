import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import "./header.css"
import {NavLink,useNavigate, Link} from "react-router-dom"
import HeroButton from "../heroButton/HeroButton";

import {NavLink,useNavigate, Link} from "react-router-dom"


export default function Header() {

   const navigate = useNavigate()


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
              <NavDropdown.Item ><NavLink to="/mission">Mission & Vision </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/aim">Aim & Objective </NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/legal">Legal Status</NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/annual">Annual Reaports </NavLink> </NavDropdown.Item>
{/*    
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/navvkhushTeam">NavvkhushTeam </NavLink> </NavDropdown.Item> */}
             
            </NavDropdown>
            
             {/* Our programs  */}
            <NavDropdown title="Our Program" id="collasible-nav-dropdown" className="ml-4 dropdown_menu">
              <NavDropdown.Item ><NavLink to="/childEducation">CHILD EDUCATION</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/toyLibrary">toy libarary</NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/rooh">Rooh</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/fashion">Fashion Designing Course</NavLink> </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/womenEmpower">Women Empowerment Education</NavLink></NavDropdown.Item>
            </NavDropdown>

            {/* Celebrity & Media */}
            <NavDropdown title="Career" id="collasible-nav-dropdown" className="dropdown_menu" >
              <NavDropdown.Item ><NavLink to="/celebritySuppor">Gallery</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/media">Projects</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/Intership">Intership</NavLink></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item ><NavLink to="/volunteer">Volunteer</NavLink></NavDropdown.Item>
            </NavDropdown>


            {/* joins */}
            <NavLink to="/Joins">Join Us</NavLink>
          </Nav>

          <Nav className="donate" onClick={() =>navigate("./contact")}>
              <HeroButton title="Contact Us" />
          </Nav>

        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
