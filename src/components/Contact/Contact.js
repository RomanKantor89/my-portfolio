import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faMapMarkerAlt, faPhone} from "@fortawesome/free-solid-svg-icons";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css';
import './Contact.css';

class Contact extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name:'',
    email:'',
    message:'',
    submitted: false
  };


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    
    const newContact = {
      'name': this.state.name,
      'email': this.state.email,
      'message': this.state.message
    };

    fetch("https://pacific-cliffs-62582.herokuapp.com/api/email", {
      method: 'POST',
      headers: { "Content-Type": 'application/json' },
      body: JSON.stringify(newContact)
    })
      .then(response => {
        if (response.ok) {
          // Parse the response body as JSON
          return response.json();
        } else if (response.status >= 400 && response.status < 500) {
          // Error caused by the requestor
          throw Error(`HTTP ${response.status}, ${response.statusText}`); 
        } else {
          // Some other situation
          throw Error(`HTTP ${response.status}, ${response.statusText}`);
        }
      })
      .then(responseData => {
        //success
      })
      .catch(error => {
        // Handles an error thrown above, as well as network general errors
        console.log(error)
      });

      this.setState({submitted: true});
  }

  render(){
    return (
      <div className="page">
      <div className="heading">
        <div> <h2>Contact Me. </h2> </div>
        <div> <FontAwesomeIcon className="icon" icon={faEnvelope}/></div>
      </div>

      <div className="main-contact">
        <div className="contact-form">
          <div className="subheading">
            <h3>LET'S CONNECT</h3>
          </div>
          <Form className={this.state.submitted ? "form-submitted" : "form"}>
            <Row>
              <Col>
                <Form.Control className="input" placeholder="Name" name="name" onChange={this.handleChange} />
              </Col>
              <Col>
                <Form.Control  className="input" name="email" type="email" placeholder="Email" onChange={this.handleChange} />
              </Col>
            </Row>
            <Row> 
              <Col className="message-col">
                <Form.Control as="textarea" rows="4" className="input" id="message"  name="message" placeholder="Your message" onChange={this.handleChange} />
              </Col>
            </Row>
            <div className="contact-button">
              <button className="btn-main" onClick={this.handleSubmit} type="submit" >SEND MESSAGE</button>
            </div>
          </Form>
        </div>

        <div className={this.state.submitted ? "form-after" : "form-submitted"}> <h3> Thank you for reaching out! </h3> </div>
        <div className="contact-info">
          <div className="contact-item">
            <div> <FontAwesomeIcon className="icon" icon={faPaperPlane}/></div>
            <h5> <a href="mailto: Roman.Kantor89@gmail.com"> Roman.Kantor89@gmail.com </a> </h5>
          </div>
          <div className="contact-item">
            <div> <FontAwesomeIcon className="icon" icon={faMapMarkerAlt}/></div>
            <h5> <a href="https://goo.gl/maps/Uxs77Sv6P2H23aZcA" target="_blank" rel='noopener noreferrer'> Toronto, Canada </a> </h5>
          </div>
          <div className="contact-item">
            <div> <FontAwesomeIcon className="icon" icon={faPhone}/></div>
            <h5> <a href="tel: 6478608455"> (647) 860 8455 </a> </h5>
          </div>
        </div>
      </div>
    </div>  
    )
  }
}

export default Contact;
