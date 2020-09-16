import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Route, Switch} from "react-router-dom";
import { faHome, faUser, faIdCard, faSuitcase, faBlog, faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from 'react-transition-group';
import Home from './components/Home/Home'
import AboutMe from './components/About_me/AboutMe'
import Resume from './components/Resume/Resume'
import Portfolio from './components/Portfolio/Portfolio'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import NotFound from './components/Not_found/NotFound'

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.updateMenuState = this.updateMenuState.bind(this);

  }
  state = {
    mobileToggle: false,
    isActive: false,
  }

  updateMenuState(){
    this.setState({mobileToggle: !this.state.mobileToggle})
  }
  
  render() {
    return(
      <div className="container">

        {/* mobile menu */}
        <div className="mobile-nav">
          <a className="mobile-toggle" onClick={this.updateMenuState}>
            <FontAwesomeIcon icon={faBars}/>  
          </a>
          <h2>ROMAN KANTOR</h2>
        </div>
        {/* main menu */}
        <CSSTransition in={this.state.mobileToggle} timeout={500} classNames="main-nav" > 

          <div className={this.state.mobileToggle ? "main-nav-on" : "main-nav"}>
            <div className="head-shot-section"> 
              <img className="HeadShotImage" src={require('../src/images/RomanHeadShotCroped.jpg')} alt="Original"/>
              <h2>ROMAN KANTOR</h2>
            </div>
            <div className="main-menu-links" id="NavLinks" >
              <Navbar />
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

        <div className="content">
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/Home'} render={() => (<Home />)} />
            <Route path={process.env.PUBLIC_URL + '/AboutMe'} render={() => (<AboutMe />)} />
            <Route path={process.env.PUBLIC_URL + '/Resume'} render={() => (<Resume />)} />
            <Route path={process.env.PUBLIC_URL + '/Portfolio'} render={() => (<Portfolio />)} />
            <Route path={process.env.PUBLIC_URL + '/Blog'} render={() => (<Blog />)} />
            <Route path={process.env.PUBLIC_URL + '/Contact'} render={() => (<Contact />)} />
            <Route render={() => (<NotFound />)} />
          </Switch> 
        </div>
        
      </div>
    )
  }
}

export default App;

const Navbar = () => {
  return(
    <Nav defaultActiveKey="/my-portfolio/Home">
      <ul>
        <li>
          <Nav.Link href="/my-portfolio/Home"> 
            <FontAwesomeIcon icon={faHome} /> &nbsp;
            HOME
            <span className="border"></span>
          </Nav.Link>
        </li>
        <li>
          <Nav.Link href="/my-portfolio/AboutMe">
            <FontAwesomeIcon  icon={faUser}/> &nbsp;
            ABOUT ME
          </Nav.Link>
        </li>
        <li>
          <Nav.Link href="/my-portfolio/Resume">
            <FontAwesomeIcon icon={faIdCard}/> &nbsp;
            RESUME
          </Nav.Link>
        </li>
        <li>
          <Nav.Link href="/my-portfolio/Portfolio">
            <FontAwesomeIcon icon={faSuitcase}/> &nbsp;
            PORTFOLIO
          </Nav.Link>
        </li>
        <li>
          <Nav.Link href="/my-portfolio/Blog">
            <FontAwesomeIcon icon={faBlog}/> &nbsp;
            BLOG
          </Nav.Link> 
        </li>
        <li>
          <Nav.Link href="/my-portfolio/Contact">
            <FontAwesomeIcon icon={faEnvelope}/> &nbsp;
            CONTACT
          </Nav.Link>
        </li>
      </ul>
    </Nav>
  );
}


