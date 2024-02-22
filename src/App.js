import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';
import { Route, Switch} from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from 'react-transition-group';
import Home from './components/Home/Home'
import AboutMe from './components/About_me/AboutMe'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import NotFound from './components/Not_found/NotFound'
import Navbar from './components/nav'
import OutsideClickHandler from 'react-outside-click-handler';

import './App.css';

class App extends Component { 
  state = {
    mobileToggle: false,
    isActive: false,
  }
  
  render() {
    return(
      <div className="container">
        {/* mobile menu */}
        <OutsideClickHandler onOutsideClick={() => { this.setState({mobileToggle:false}) }}>

        <div className="mobile-nav">
          <span className="mobile-toggle" onClick={() => { this.setState({mobileToggle: !this.state.mobileToggle}) }}>
            <FontAwesomeIcon icon={faBars}/>  
          </span>
          <h2><Link to="/" className="nav-link">ROMAN KANTOR</Link></h2>
        </div>

        {/* main menu */}
        <CSSTransition in={this.state.mobileToggle} timeout={300} classNames="main-nav" > 

          <div className={this.state.mobileToggle ? "main-nav-on" : "main-nav"}>
            <div className="head-shot-section"> 
              <img className="HeadShotImage" src={require('../src/images/myphoto2.jpg')} alt="Original"/>
              <h2>ROMAN KANTOR</h2>
            </div>
              <div className="main-menu-links" id="NavLinks">
                <Navbar/>
              </div>
            <div className="main-menu-links">
              <p id="githubIcon">  
              <Nav.Link href="https://github.com/RomanKantor89" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare}/>
              </Nav.Link>
              </p>
            </div>
            <div className="main-menu-links">
              <p>2020 © Roman Kantor.<br></br>
                  All Rights Reserved.
              </p>
            </div>
          </div>
        </CSSTransition >
        </OutsideClickHandler>

        <div className="content"  >
          <Switch >
            <Route exact path='/' render={() => (<Home />)} />
            <Route exact path='/AboutMe' render={() => (<AboutMe />)} />
            <Route exact path='/Resume' render={() => (<Resume />)} />
            <Route exact path='/Portfolio' render={() => (<Portfolio />)} />
            <Route exact path='/Contact' render={() => (<Contact />)} />
            <Route render={() => (<NotFound />)} />
          </Switch> 
        </div>

      </div>
    )
  }
}

export default App;


