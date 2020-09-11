import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav';
import './Portfolio.css';
import '../../App.css';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {active: 1};
  }

  activeSection () {

    if(this.state.active === 1){
      return(
        <div className="portfolio-items">
          <h3 className="mobile-title"> Words Suggestion </h3>
          <Card >
            <Card.Link  href="https://github.com/RomanKantor89/Maze_Project" target="_blank">
              <Card.Img src={require('../../images/word-suggestion.jpg')} alt="Card image"/>
              <Card.ImgOverlay >
                <Card.Title>Words Suggestion <br/> (Trees + Recursion)</Card.Title>
              </Card.ImgOverlay>
            </Card.Link>
          </Card>
          <h3 className="mobile-title"> Maze Project </h3>
          <Card >
          <Card.Link  href="https://github.com/RomanKantor89/Maze_Project" target="_blank">
            <Card.Img src={require('../../images/maze.jpg')} alt="Card image"/>
              <Card.ImgOverlay >
                <Card.Title>Maze Project <br/> (Data Structures)</Card.Title>
              </Card.ImgOverlay>
            </Card.Link>
          </Card>
          <h3 className="mobile-title"> Assembly Line </h3>
          <Card >
          <Card.Link  href="https://github.com/RomanKantor89/Assembly_Line_Project" target="_blank">
            <Card.Img src={require('../../images/assembly-line.png')} alt="Card image"/>
              <Card.ImgOverlay >
                <Card.Title>Assembly Line <br/> (C++)</Card.Title>
              </Card.ImgOverlay>
            </Card.Link>
          </Card>
        </div>
      )
    }
    else if(this.state.active === 2){
      return(
        <div className="portfolio-items">
        <h3 className="mobile-title"> Store Management </h3>
        <Card >
          <Card.Link  href="https://github.com/RomanKantor89/Store_Management_App" target="_blank">
            <Card.Img src={require('../../images/store-manage.png')} alt="Card image"/>
            <Card.ImgOverlay >
              <Card.Title>Store Management App<br/> (Angular + NodeJS + MongoDB) </Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Card>
        <h3 className="mobile-title"> Student Management </h3>
        <Card >
          <Card.Link  href="https://github.com/RomanKantor89/Student-Courses_Management" target="_blank">
            <Card.Img src={require('../../images/student-manage.png')} alt="Card image"/>
            <Card.ImgOverlay >
              <Card.Title>Student <br/> Management App <br/> (Angular + NodeJS)</Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Card>
        <h3 className="mobile-title"> Simple CRUD </h3>
        <Card >
          <Card.Link  href="https://github.com/RomanKantor89/Student-Courses_Management" target="_blank">
            <Card.Img src={require('../../images/crud.jpg')} alt="Card image"/>
            <Card.ImgOverlay >
              <Card.Title> Simple CRUD App <br/> (React + NodeJS)</Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Card>
        <h3 className="mobile-title"> My-Portfolio </h3>
        <Card >
          <Card.Link  href="https://github.com/RomanKantor89/Student-Courses_Management" target="_blank">
            <Card.Img src={require('../../images/portfolio.jpg')} alt="Card image"/>
            <Card.ImgOverlay >
              <Card.Title> My-Portfolio <br/> (React)</Card.Title>
            </Card.ImgOverlay>
          </Card.Link>
        </Card>
        </div>
      )
    }
    else if(this.state.active === 3){
      return(
        <div className="portfolio-items">
          <h3 className="mobile-title"> Malware Imitation </h3>
          <Card >
            <Card.Link  href="https://github.com/RomanKantor89/Malware_Imitation" target="_blank">
              <Card.Img src={require('../../images/malware.jpg')} alt="Card image"/>
              <Card.ImgOverlay >
                <Card.Title>Malware Imitation<br/> Daemonized App <br/> (Python) </Card.Title>
              </Card.ImgOverlay>
            </Card.Link>
          </Card> 
        </div>
      )
    }
    else if(this.state.active === 4){
      return(
        <div className="portfolio-items">
          <h3 className="mobile-title"> Company Database </h3>
          <Card >
            <Card.Link  href="https://github.com/RomanKantor89/Company_Database" target="_blank">
              <Card.Img src={require('../../images/erd.png')} alt="Card image"/>
              <Card.ImgOverlay >
                <Card.Title>Company Database<br/> (PLSQL) </Card.Title>
              </Card.ImgOverlay>
            </Card.Link>
          </Card> 
          <h3 className="mobile-title"> Song Rating DB </h3>
          <Card >
            <Card.Link  href="https://github.com/RomanKantor89/Songs_Rating_Database" target="_blank">
              <Card.Img src={require('../../images/plsql.jpg')} alt="Card image"/>
              <Card.ImgOverlay >
                <Card.Title>Song Rating Database<br/> (PLSQL) </Card.Title>
              </Card.ImgOverlay>
            </Card.Link>
          </Card> 
        </div>
      )
    }
  }

  render(){
    return(
      <div className="page">
        <div className="heading">
          <div> <h2>Portfolio. </h2> </div>
          <div> <FontAwesomeIcon className="icon" icon={faSuitcase}/></div>
        </div>

        <div className="portfolio-filter">
          <ul>
            <li onClick={() => this.setState({active: 1})} className={ this.state.active === 1 ? "active" : '' }>
              C++
            </li>
            <li onClick={() => this.setState({active: 2})} className={ this.state.active === 2 ? "active" : '' }>
              WEB
            </li>
            <li onClick={() => this.setState({active: 3})} className={ this.state.active === 3 ? "active" : '' }>
              PYTHON
            </li>
            <li onClick={() => this.setState({active: 4})} className={ this.state.active === 4 ? "active" : '' }>
              PLSQL
            </li>
          </ul>
        </div>

        <div className="main-portfolio">
          <div className="section">{this.activeSection()}</div>
        </div>
        
      </div> 
    )
  }
}   

export default Portfolio;

