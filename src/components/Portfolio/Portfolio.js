import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";
import Card from 'react-bootstrap/Card'
import Categories from "../../assets/portfolio_category.json";
import './Portfolio.css';
import '../../App.css';

class Portfolio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentCategory: Categories[0]
    };

  }

  changeCategory = newCategory => {
    this.setState(prevState => ({currentCategory: newCategory}));
  }

  render(){
    return(
      <div className="page">
        <div className="heading">
          <div> <h2>Portfolio. </h2> </div>
          <div> <FontAwesomeIcon className="icon" icon={faSuitcase}/></div>
        </div>

        <div className="portfolio-filter">
          <CategoriesPanel
            onCategoryChange={this.changeCategory}
            currentCategory={this.state.currentCategory}
          />
        </div>

        <div className="main-portfolio">
          <div className="section">
            <ActiveSection category={this.state.currentCategory}/>
          </div>
        </div>
      </div> 
    )
  }
}  

// each category title 
function CategoryItem (props) {
  let {name} = props.category;

  return(
    <li onClick={props.onCategoryItemSelect}
        className={ props.isActive ? 'active' : ''}
    >
      {name}
    </li>
  )
}

// categories titles
function CategoriesPanel(props) {
  return (
    <ul>
      {Categories.map((category, index) => <CategoryItem
        key={index}
        isActive={category.name === props.currentCategory.name}
        onCategoryItemSelect={() => props.onCategoryChange(category)}
        category={category} />
      )}
    </ul>
  );
}

// load all the items based on category
function ActiveSection (props) {
  let items = props.category.items;

  return(
    <div className="portfolio-items">
      {
        items.map((item, index) => 
          <InventoryItem key={index} item={item} />
        )
      }
    </div>
  )
}

// return each item in the category in a card
function InventoryItem (props) {
  let {mobileTitle, cardImage, cardTitle, gitLink } = props.item;
  let imageUrl = require(`../../images/${cardImage}`);

  return(
    <>
      <h3 className="mobile-title"> {mobileTitle} </h3>
      <Card >
        <Card.Link  href={gitLink} target="_blank">
          <Card.Img src={imageUrl} alt="Card image"/>
          <Card.ImgOverlay >
            <Card.Title> {cardTitle} </Card.Title>
          </Card.ImgOverlay>
        </Card.Link>
      </Card> 
    </>
  )
}

export default Portfolio;

