import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out our Ministries</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-chior.jpg"
              text="Harvest Music Ministry"
              label="Song Ministry"
              path="/services"
            />
            <CardItem
              src="images/img-children.jpg"
              text="Children's Ministry"
              label="Jesus Loves Kids"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-yth.jpg"
              text="Harvest Life Church"
              label="Youth Ministry"
              path="/services"
            />
            <CardItem
              src="images/img-min.jpg"
              text="Ushering Ministry"
              label="Ushers"
              path="/products"
            />
            <CardItem
              src="images/img-outrch.jpg"
              text="Harvest Outreach"
              label="Outreach"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
