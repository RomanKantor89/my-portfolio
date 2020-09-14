import React, { Component } from 'react';
import Particles from 'react-tsparticles'
import Nav from 'react-bootstrap/Nav';
import '../../App.css';
import './NotFound.css';

class NotFound extends Component {
  render(){
    return(
    <div className="page">        
      <Particles className="particles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 150,
              duration: 0.3,
            },
          },
        },
        particles: {
          color: {
            value: "rgb(143, 12, 0)",
          },
          links: {
            color: "rgb(87, 172, 230)",
            distance: 210,
            enable: true,
            opacity: 0.1,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 1000,
            },
            value: 100,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 4,
          },
        },
       
      }}
    />
    <div className="main-not-found">
      <h1 className="lost"> You got lost.. its time to go.. </h1>
      <h1 className="home-link"> <Nav.Link href="/"> HOME </Nav.Link></h1>
      <img className="lost-image" src={require('../../images/lost.png')} alt="Original"/>
    </div>

   </div>  
    )
  }
}

export default NotFound;
