import React from "react";
import "./AboutUs.css";
import { images } from "../../constants";
const AboutUs = () => (
  <div className="gr__aboutus app__bg flex__center section__padding" id="about">
    <div className="gr__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>
    <div className="gr__aboutus-content flex__center">
      <div className="gr__aboutus-content_about">
        <h1 className="headtext__cormorant ">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="gr__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="gr__aboutus-content_history">
        <h1 className="headtext__cormorant ">Our History</h1>
        <img className="spoon__img" src={images.spoon} alt="about_spoon" />
        <p className="p__opensans">
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
