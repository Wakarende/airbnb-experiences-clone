import React from "react";
import './Card.css';
import star from '../img/Star.png'



// import Data from "./data";
const Card = (props) => {
  console.log(props);
  return(
    <section className="cards">
      <div className="card">
        <div>
          <img src={props.item.coverImg}  alt="" className="card-img"></img>
        </div>
        <div className="card--rating">
          <img className="star" src={star} alt="star">
            </img>
          <small className="star-text">{props.item.stats.rating}({props.item.stats.reviewCount}).{props.item.location}</small>
        </div>
        <p>{props.item.title}</p>
        <p><b>From {props.item.price}</b>/person</p>
      </div>
    </section>
  )
}

export default Card;


