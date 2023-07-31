import React, { useState } from "react";
import "./Navbar.css";
import images from "../../constants/images";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gr__navbar">
      <div className="gr__navbar-logo">
        <img src={images.grandeur} alt="logo" />
      </div>
      <ul className="gr__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="gr__navbar-login">
        <a href="#login" className="p__opensans">
          LogIn / Registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="gr__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontsize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="gr__navbar-smallscreen_overlay flex__center slide bottom">
            <MdOutlineRestaurantMenu
              color="#fff"
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="gr__navbar-smallscreen_links">
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  href="#menu"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  href="#awards"
                >
                  Awards
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
