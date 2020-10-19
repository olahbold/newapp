/* eslint-disable react/jsx-no-undef */
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavLink} from 'react-bootstrap';


import './Nav.css'
import { Link} from 'react-router-dom'


 function Navbars() {
    return (

<>
  <Navbar bg="light" expand ="lg" variant="danger" className = 'fixed-top'  >
    <Navbar.Brand >
    <Link to="/">
    <img
      src="/Pictures/navbar2.jpg"
      alt="Third slide"
      className="Navbarimage"/>
      </Link>
     <p className = 'firetext'>Fire Prayer house</p>  
    </Navbar.Brand>
     

    <Nav className=" justify-content-center">
      <NavLink  componentClass = {Link}  href ="/"to = "/">Home</NavLink>
      <NavLink  componentClass = {Link} href ="/about" to = "/about">About</NavLink>
      <NavLink  componentClass = {Link} href ="/give" to = "/give">Give</NavLink>
      <NavLink  componentClass = {Link} href ="/connect" to = "/connect">Connect</NavLink>
      <NavLink  componentClass = {Link} href ="/contact" to ="/contactus">Contact Us</NavLink>
    </Nav>
    
  </Navbar>
  
  
</>

           
    )
}



export default Navbars