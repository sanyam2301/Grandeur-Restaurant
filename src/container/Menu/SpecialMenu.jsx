import React from "react";
import { MenuItem, SubHeading } from "../../components";
import "./SpecialMenu.css";
import { data, images } from "../../constants";
const SpecialMenu = () => (
  <div className="gr__specialMenu flex__center section__padding" id="menu">
    <div className="gr__specialMenu-title">
      <SubHeading title="Menu that fits your palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="gr__specialMenu-menu">
      <div className="gr__specialMenu-menu_wine flex__center">
        <p className="gr__specialMenu-menu_heading">Wine & Beer</p>
        <div className="gr__specialMenu-menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="gr__specialMenu-menu_img">
        <img src={images.menu} alt="menu" />
      </div>
      <div className="gr__specialMenu-menu_cocktails flex__center">
        <p className="gr__specialMenu-menu_heading">Cocktails</p>
        <div className="gr__specialMenu-menu_items">
          {data.cocktails.map((coktails, index) => (
            <MenuItem
              key={coktails.title + index}
              title={coktails.title}
              price={coktails.price}
              tags={coktails.tags}
            />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop1: 15 }}>
      <button className="custom__button" type="button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
