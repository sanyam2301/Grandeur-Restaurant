import React from "react";
import SubHeading from "../SubHeading/SubHeading";

import "./Newsletter.css";

const Newsletter = () => (
  <div className="gr__newsletter">
    <div className="gr__newsletter-heading">
      <SubHeading title={"Newsletter"} />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans" style={{ fontSize: "16px" }}>
        And never miss latest Updates!
      </p>
    </div>
    <div className="gr__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
