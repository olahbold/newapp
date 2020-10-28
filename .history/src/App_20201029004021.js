/* eslint-disable react/jsx-no-undef */
import React, {Component} from 'react';
import  Navbars  from './Component/Homepage/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ComposedHomepage from './Component/ComposedHomepage'
import Aboutpage2 from './Component/About_us/Aboutpage2';
import Contactus from './Component/Contact/Contactus'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { Container } from 'react-bootstrap';


class App extends Component {
  render(){
  return (
    
    <Container>
      <Ro
        <div>
        <Navbars/>
          <Switch>
            <Route  exact path ="/" component ={ComposedHomepage}/>
            < Route path = "/about" component ={Aboutpage2}/>
            <Route path = "/contact" component = {Contactus}/>
          </Switch>
        </div>
    </Router>
      
      </Container>
      
    
  )
  };
}

export default App;
