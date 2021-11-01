import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';
import {  MDBIcon  } from "mdbreact";
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <div >
    <Nav className="justify-content-center" >
      
      <Navbar variant="dark" expand="lg" color="#2E2E2E">
      
           <Navbar.Brand >
             <Link to="/" className="nav-link" style={{color: 'white'}}> <MDBIcon far icon="user" /></Link>
          </Navbar.Brand>
              
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center">

            <Nav.Item> 
                 <Link to="/about-me" className="nav-link"> About Me</Link>
            </Nav.Item>   
            <Nav.Item> 
                  <Link to="/education" className="nav-link"><MDBIcon icon="university" /> Education</Link>
            </Nav.Item>
            <Nav.Item> 
                  <Link to="/internships" className="nav-link"><MDBIcon icon="briefcase" /> Internships </Link>
            </Nav.Item>
            <Nav.Item>
                  <Link to="/project" className="nav-link"><MDBIcon icon="project-diagram" /> Projects </Link>
             </Nav.Item>
            <Nav.Item> 
                  <Link to="/certificates" className="nav-link"><MDBIcon icon="certificate" /> Certificates </Link>
            </Nav.Item>
            <Nav.Item>
                  <Link to="/skills" className="nav-link"><MDBIcon fab icon="sketch" /> Skills</Link>
             </Nav.Item>
            <Nav.Item> 
                  <Link to="/activities" className="nav-link"><MDBIcon far icon="hand-peace" /> Activities</Link>
            </Nav.Item>
            <Nav.Item> 
                  <Link to="/blog" className="nav-link"><MDBIcon icon="book-open" /> Blogs</Link>
            </Nav.Item>
            {/* <Nav.Item> 
                  <Link to="/connect" className="nav-link"><MDBIcon fab icon="connectdevelop" /> Connect</Link>
            </Nav.Item> */}
            <Nav.Item> 
                  <Link to="/contact-me" className="nav-link"><MDBIcon fab icon="mailchimp" /> Contact Me</Link>
            </Nav.Item>
            <Nav.Item> 
                  <div to="" className="nav-link">
                  <a href="https://drive.google.com/file/d/1WZf-Nh0dQ_ByOYSfoXmPtUYl5kAjUbNJ/view?usp=sharing" style={{color: 'white'}}>
                  <MDBIcon far icon="newspaper" /> Resume</a></div>
            </Nav.Item>


          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Nav>
      
    </div>
  )
}

export default NavBar

