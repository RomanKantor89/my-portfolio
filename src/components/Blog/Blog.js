import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
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

      
    </div>  
    )
  }
}

export default Blog;
