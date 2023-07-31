import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__wrapper app__bg section__padding" id="contact">
    <div className="app__wrapper-info">
      <SubHeading title={"Contact"} />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__opensans"
          style={{ color: "#AAAAAA", fontSize: "16px", marginBottom: "1.5rem" }}
        >
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>
        <p
          className="p__cormorant"
          style={{
            color: "var(--color-golden)",
            fontSize: "23px",
            marginBottom: "1.5rem",
          }}
        >
          Opening Hours
        </p>
        <p
          className="p__opensans"
          style={{
            marginBottom: "1rem",
          }}
        >
          Mon - Fri: 10:00 am - 02:00 am
        </p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2rem" }}
      >
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
