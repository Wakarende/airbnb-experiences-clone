import React from "react";
import './Card.css';
import star from './/img/Star.png'

const Card = () => {
  return(
    <section className="cards">
      {/* Card 1  */}
      <div className="card">
      <div className='card-img'>
        </div>
        <div className="card--rating">
          <img className="star" src={star} alt="star">
            {/* <p>Sold out</p> */}
            </img>
          <small className="star-text">5.0(6).USA</small>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><b>From $136</b>/person</p>
      </div>
      {/* Card 1  */}
      <div className="card">
      <div className='card-img'>
        </div>
        <div className="card--rating">
          <img className="star" src={star} alt="star">
            {/* <p>Sold out</p> */}
            </img>
          <small className="star-text">5.0(6).USA</small>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><b>From $136</b>/person</p>
      </div>
      {/* Card 1  */}
      <div className="card">
      <div className='card-img'>
        </div>
        <div className="card--rating">
          <img className="star" src={star} alt="star">
            {/* <p>Sold out</p> */}
            </img>
          <small className="star-text">5.0(6).USA</small>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><b>From $136</b>/person</p>
      </div>
    </section>
  )
}

export default Card;


