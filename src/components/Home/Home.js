import React, { Component } from 'react';
// import Particles from 'react-tsparticles'
import '../../App.css';
import './Home.css';
import Particles from '../../assets/particles'

class Home extends Component {
  render(){
    return(
      <div className="home"> 
        <Particles/>
        <div className="banner">
          <h1>Roman <span>Kantor</span></h1>
          <h2>Software Developer</h2>
        </div>
      </div>
    )
  }
}

export default Home;
