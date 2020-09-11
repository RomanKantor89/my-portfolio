import React, { Component } from 'react';
import Particles from 'react-tsparticles'
import '../../App.css';
import './Home.css';

class Home extends Component {
  render(){
    return(
      <div className="home"> 
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
                value: "#FFF",
              },
              links: {
                color: "#FFF",
                distance: 210,
                enable: true,
                opacity: 0.3,
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
        <div className="banner">
          <h1>Roman <span>Kantor</span></h1>
          <h2>Software Developer</h2>
        </div>

      </div>
    )
  }
}

export default Home;
