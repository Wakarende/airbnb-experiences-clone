import React from "react";
import './Card.css';
import star from '../img/Star.png'



// import Data from "./data";
const Card = (props) => {
  return(
    <section className="cards">
      <div className="card">
        <div className='card-img'>
          <img src={`../img/${props.img}`}  alt=""></img>
        </div>
        <div className="card--rating">
          <img className="star" src={star} alt="star">
            </img>
          <small className="star-text">{props.rating}({props.reviewCount}).{props.location}</small>
        </div>
        <p>{props.title}</p>
        <p><b>From {props.price}</b>/person</p>
      </div>
    </section>
  )
}

export default Card;


