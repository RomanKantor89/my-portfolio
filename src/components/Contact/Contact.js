import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../../App.css';
import './Contact.css';

class Contact extends Component {
  render(){
    return (
      <div className="page">
      <div className="heading">
        <div> <h2>Contact Me. </h2> </div>
        <div> <FontAwesomeIcon className="icon" icon={faEnvelope}/></div>
      </div>

      
    </div>  
    )
  }
}

export default Contact;
