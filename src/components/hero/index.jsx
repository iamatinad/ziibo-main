import React from "react";
import Shogun from "../../assets/images/Shogun-2.jpg";
import Typewriter from "typewriter-effect";
import "./index.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <img className="picture" src={Shogun} alt="Shogun" />
      <div className="overlay" >
      <div className="centered-text">
        <h1 className="intro">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Welcome to Ziibo")
                .pauseFor(2000)
                .deleteAll()
                .typeString("your ultimate destination")
                .pauseFor(2000)
                .deleteAll()
                .typeString("for endless entertainment.")
                .start();
            }}
          />
        </h1>
        <div className="">
          <p className="dive">
            Dive into a world of cinematic wonders with our vast collection of
            movies, from Hollywood blockbuster to indie gems.
          </p>
          <Link to={'/Checkout'} style={{color: 'white'}}>Starts at US$10.99 Cancel anytime</Link>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
