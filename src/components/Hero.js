import React from "react";
import './Hero.css'
import photogrid from './/img/photogrid.png'

// const Hero = () => {
//   return(
//     <h1 className="Hero">Is the font working</h1>
//   )
// }
function Hero () {
  return(
    <section className="Hero">
      <img src={photogrid} alt='photogrid' className="Grid"></img>
      <div className="Content">
      <h1 className="Title">Online Experiences</h1>
      <p className="Text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  )
}

export default Hero;