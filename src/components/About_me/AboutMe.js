import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
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

        <h3>Junior Software Developer</h3>

        <div className="main">
          <div className="about-text">
            <p>
              I am a fourth year software development degree student; 
              however, you already probably knew this information from my resume. 
              In this page I would like you to meet me not as a set of skills, but rather from a personal perspective. 
            </p><br/>
            <p>
              I love coding and although I am a late bloomer in this field, 
              I am glad I discovered my passion towards coding sooner than later. 
              I am a very social person, and therefore I have many friends with whom I like spending my free time, 
              I am also very easy going and very easy to get along with. 
              My favorite stress relieving activity is to jog in the summer time 
              and exercise in the gym. 
            </p><br/>
            <p>
                I am very excited for my new career path that I am fully engaged in, 
                and I can’t wait to see where it is going to take me. 
                Software development field is the challenge I have been missing in my life to feel accomplished, 
                and I finally feel like I am on the right path.
            </p><br/>
          </div>

          <div className="private">
           <img src={require('../../images/personal.jpg')} alt="Original" style={{width:"26rem"}}/>
          </div>
        </div>

        <div className="personal">
          <h3> Personal Information </h3>
          <div className="personal-list"></div>
          <ul>
            <li>
              <span className="title"> Name: </span>
              <span className="value"> Roman Kantor </span> 
            </li> &nbsp; &nbsp;
            <li>
              <span className="title"> Residence: </span>
              <span className="value"> Toronto, Canada </span>
            </li> &nbsp; &nbsp;
            <li>
              <span className="title"> Email: </span>
              <span className="value"> <a href="mailto: Roman.Kantor89@gmail.com"> Roman.Kantor89@gmail.com </a> </span>
            </li> &nbsp; &nbsp;
            <li>
              <span className="title"> Phone: </span>
              <span className="value"> <a href="tel: 6478608455"> (647) 860 8455 </a> </span>
            </li> &nbsp; &nbsp;
          </ul>

        </div>

      </div>
    )
  }
}

export default AboutMe;