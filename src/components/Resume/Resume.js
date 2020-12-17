import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Resume.css';
import '../../App.css';
import skills from '../../assets/skills.json'


class Resume extends Component {

  render(){
    return(
      <div className="page">
        <div className="heading">
          <div> <h2>My Resume. </h2> </div>
          <div> <FontAwesomeIcon className="icon" icon={faIdCard}/></div>
        </div>

        <div className="main-resume">
          <div className="section">
            <h3>Experience</h3>  
            <ul>
              <li>
                <span className="line-left"></span>
                <div className="info">
                  <h4>Software Developer (Summer Co-Op)</h4>
                  <h5>Info-Tech Research Group, Toronto, CA</h5>
                  <p>At this internship position I was a member of a web dev team that is partially responsible for maintaining some parts of the existing code, 
                     but mainly involved in the new feature development. 
                     I experienced a real-world agile web development environment and a true team work experience.
                     This position involved hands on problem solving using mainly Ruby on Rails (back-end), SQL and a bit of JavaScript.
                     The vast environments and databases were fascinating to work with. 
                  </p>
                </div>
                <span className="year">
                  <span className="to">2020</span>
                  <span className="from">2020</span>
                </span>
              </li>

              <li>
              <span className="line-left"></span>
                <div className="info">
                  <h4>Software Developer (Summer Co-Op)</h4>
                  <h5>Peraso Technologies, Toronto, CA</h5>
                  <p>Worked in a team of three Co-Op students to design and develop additional automation 
                     for testing microchips. Collected and processed detailed information from the electronics engineers to 
                     understand the test criteria. Used UML to design the class diagram for the proposed solution.
                     Implemented object oriented scalable design using python to collect data from multiple 
                     test related machines including the microchip under test. Used TortoiseSVN for versioning and JIRA
                     for issue tracking.
                  </p>
                </div>
                <span className="year">
                  <span className="to">2019</span>
                  <span className="from">2019</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="section">
            <h3>Education</h3>
            <ul>
              <li>
                <span className="line-left"></span>
                <div className="info">
                  <h4> Honours Bachelor of Technology - Software Development </h4>
                  <h5>Seneca College, Toronto, CA</h5>
                  <p>
                    Practical degree program with emphasis on Object Oriented design and development, Databases and Web Development.
                  </p>
                </div>
                <span className="year">
                  <span className="to">2021</span>
                  <span className="from">2018</span>
                </span>
              </li>
            </ul>  
            <div className="resume-button">
              <a className="btn-main" href="https://indigo-hummingbird-6424.twil.io/assets/Roman%20Kantor%20Resume.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD RESUME</a>
            </div>
          </div> 

          <div className="section">
            <h3>Coding Skills</h3>
            <Section skills={skills[0]}/>
          </div>

          <div className="section">
            <h3>Web Technologies</h3>
            <Section skills={skills[1]}/>
          </div>

        </div>
      </div>  
    )
  }
}

// section for skill category
function Section(props){
  let items = props.skills.items
  return(
    <div>
      {
        items.map((item,index) => 
          <SectionItem key={index} item={item}/>
        )
      }
    </div>
  )
}

// adding each skills item to progress bar
function SectionItem(props){
  let {name, progress} = props.item;
  return(
    <div className="skill-item">
      <h4 className="skill-name"> {name} </h4>
      <ProgressBar now={progress}></ProgressBar>
    </div>
  )
}

export default Resume;
