import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';
import '../../App.css';
import './AboutMe.css';

class AboutMe extends Component {
  render(){
    return(
      <div className="page">
        <div className="heading">
          <div> <h2>About Me. </h2> </div>
          <div> <FontAwesomeIcon className="icon" icon={faUser}/></div>
        </div>

        <h3>Software Developer</h3>

        <div className="main">
          <div className="about-text">
            <p>
              Hello, I'm Roman, an enthusiastic Software Developer with almost 3 years of experience in automation, alongside a profound fascination with web technologies and tools. 
            </p><br/>
            <p>
              My development journey commenced at Seneca College, where I pursued a Bachelor of Technology (Honours) for four years. This period was marked by two pivotal Co-Op terms that significantly shaped my career path. My initial Co-Op at Info-Tech Research Group saw me contributing to an agile team; there, I played a key role in enhancing service offerings and broadening client categories. My subsequent Co-Op, and eventual post-graduation employer, was Peraso Technologies—a company at the forefront of millimeter wave technology. Peraso's groundbreaking work in wireless solutions not only captured my interest but also offered me a platform to contribute to the evolution of wireless communications.
            </p><br/>
            <p>
              In my tenure at Peraso, I've honed my skills in JavaScript for automation tasks, while during my free time delving into React for front-end development and NodeJS/Firebase for backend API construction in personal projects, including the development of this portfolio and an entertainment website for a client.
            </p><br/>
            <p>
              I encourage you to explore my resume for a detailed overview of my experiences, and to take a look at my portfolio to get a sense of my work's breadth. I am keen on exploring new project opportunities or collaborations. Let's &nbsp;
              <NavLink to="/Contact"  style={{color:"white"}}>
								connect 
							</NavLink> 
              &nbsp; and explore how we can work together!
            </p>
            <br></br>
          </div>

          <div className="private">
           <img src={require('../../images/personal.jpg')} alt="Original" style={{width:"26rem"}}/>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutMe;