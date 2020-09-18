
import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import { faHome, faUser, faIdCard, faSuitcase, faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Navbar extends Component {
	
	render(){
		return(
				<Nav >
					<ul>
						<li>
							<NavLink to="/" className="nav-link" > 
								<FontAwesomeIcon icon={faHome} /> &nbsp;
								HOME
								<span className="border"></span>
							</NavLink>
						</li>
						<li>
							<NavLink to="/AboutMe" className="nav-link" activeStyle={{color:"white"}}>
								<FontAwesomeIcon  icon={faUser}/> &nbsp;
								ABOUT ME
							</NavLink>
						</li>
						<li>
							<NavLink to="/Resume" className="nav-link" activeStyle={{color:"white"}}>
								<FontAwesomeIcon icon={faIdCard}/> &nbsp;
								RESUME
							</NavLink>
						</li>
						<li>
							<NavLink to="/Portfolio" className="nav-link" activeStyle={{color:"white"}}>
								<FontAwesomeIcon icon={faSuitcase}/> &nbsp;
								PORTFOLIO
							</NavLink>
						</li>
						<li>
							<NavLink to="/Contact" className="nav-link" activeStyle={{color:"white"}}>
								<FontAwesomeIcon icon={faEnvelope}/> &nbsp;
								CONTACT
							</NavLink>
						</li>
					</ul>
				</Nav>
			);
	}
}

export default Navbar;
