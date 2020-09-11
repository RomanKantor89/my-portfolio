import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import Particles from 'react-tsparticles'
import '../../App.css';
import './Blog.css';

class Blog extends Component {
  render() {
    return(
      <div className="page">

        <div className="heading">
          <div> <h2>My Blogs. </h2> </div>
          <div> <FontAwesomeIcon className="icon" icon={faBlog}/></div>
        </div>

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
                value: "rgb(87, 172, 230)",
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

        <div className="main-blog">
          <h1 className="coming-soon"> COMING SOON.. </h1>
        </div>

       </div>  
    )
  }
}

export default Blog;
