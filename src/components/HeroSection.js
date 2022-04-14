import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/public/videos/video-1.mp4" autoPlay loop muted /> If you want to use a video for the homepage */}
      <h1>WORSHIP WITH US</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET TO KNOW GOD
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH LIVE ON FACEBOOK <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
