import React, { Component } from 'react';
import Particles from '../../assets/particles'
import {Link} from 'react-router-dom';
import '../../App.css';
import './NotFound.css';

class NotFound extends Component {
  render(){
    return(
    <div className="page">        
      <Particles />
      <div className="main-not-found">
        <h1 className="lost"> You got lost.. its time to go.. </h1>
        <h1 className="home-link"> <Link to="/" className="nav-link"> HOME </Link></h1>
        <img className="lost-image" src={require('../../images/lost.png')} alt="Original"/>
      </div>
    </div>  
    )
  }
}

export default NotFound;
