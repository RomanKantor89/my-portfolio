import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import ProgressBar from 'react-bootstrap/ProgressBar'
import './Resume.css';
import '../../App.css';
import skills from '../../assets/skills.json'

class Resume extends Component {

  render() {
    return (
      <div className="page">
        <div className="heading">
          <div> <h2>My Resume. </h2> </div>
          <div> <FontAwesomeIcon className="icon" icon={faIdCard} /></div>
        </div>

        <div className="main-resume">
          <div className="section">
            <h3>Experience</h3>
            <ul>
              <li>
                <span className="line-left"></span>
                <div className="info">
                  <h4>Software Developer</h4>
                  <h5>Peraso Technologies, Toronto, CA</h5>
                  <p>
                    Led major projects from conception to completion, meticulously analyzing requirements and mastering new functionalities. Crafted strategic test plan frameworks, fostering collaboration with stakeholders and cross-functional software teams. Enhanced test automation by innovating methods and integrating existing APIs in JavaScript, including pioneering automation for Windows driver certification. Spearheaded the automation of critical test scenarios for cutting-edge driver features, focusing on WPA2/WPA3 security protocols, Fast Transition, and adherence to the 802.11 Wi-Fi standard. Launched and executed a transformation project to streamline existing utilities, significantly reducing technical debt and boosting test automation efficiency by simplifying utility access for engineers. Provided mentorship to co-op students, immersing them in the company’s technological environment and steering them towards the successful completion of their projects.
                  </p>
                </div>
                <span className="year">
                  <span className="to">2024</span>
                  <span className="from">2021</span>
                </span>
              </li>
              <li>
                <span className="line-left"></span>
                <div className="info">
                  <h4>Software Developer (4 months Co-Op)</h4>
                  <h5>Info-Tech Research Group, Toronto, CA</h5>
                  <p>
                    Developed software solutions within an agile web development team while adhering to review protocols and actively engaging in code reviews. Tackled complex problems primarily utilizing Ruby on Rails (back-end), SQL, and JavaScript. Debugged challenges pertaining to the back-end and SQL databases, devising and deploying scripts to rectify database relationships. Contributed to new feature development that broadened the company's service offerings to accommodate smaller-sized customers previously outside our product scope. Actively participated in and made valuable contributions to feature planning and design discussions.
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
                  <h4>Software Developer (4 months Co-Op)</h4>
                  <h5>Peraso Technologies, Toronto, CA</h5>
                  <p>
                    Enhanced testing automation for Wi-Fi devices by gathering and analyzing precise specifications from electronics engineers to grasp the testing parameters. Utilized UML for crafting the class diagram of the envisioned solution. Executed an object-oriented, scalable design in Python to aggregate data across various testing machines, including heat chambers, signal analyzers, and devices under test. Streamlined the data collection process, transforming raw data into actionable insights and evaluation benchmarks. Employed TortoiseSVN for source control and JIRA for tracking issues.
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
              <a className="btn-main" href="https://indigo-hummingbird-6424.twil.io/assets/Roman_Kantor_Resume.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD RESUME</a>
            </div>
          </div>

          <div className="section">
            <h3>Coding Skills</h3>
            <Section skills={skills[0]} />
          </div>

          <div className="section">
            <h3>Web Technologies</h3>
            <Section skills={skills[1]} />
          </div>

        </div>
      </div>
    )
  }
}

// section for skill category
function Section(props) {
  let items = props.skills.items
  return (
    <div>
      {
        items.map((item, index) =>
          <SectionItem key={index} item={item} />
        )
      }
    </div>
  )
}

// adding each skills item to progress bar
function SectionItem(props) {
  let { name, progress } = props.item;
  return (
    <div className="skill-item">
      <h4 className="skill-name"> {name} </h4>
      <ProgressBar now={progress}></ProgressBar>
    </div>
  )
}

export default Resume;
