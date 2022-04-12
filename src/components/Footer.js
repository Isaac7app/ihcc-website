import React from "react";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subcription-heading">
          Please Leave Us Your Info So We Can Reach Out To You. Thanks!
        </p>
        <p className="footer-subscription-text">Jesus Loves You</p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Submit</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
