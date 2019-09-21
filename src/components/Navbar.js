import React from "react";
import logo from "../rogers-brand.png";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav-primary">
        <div className="menu-left">
          <a href="/personal" className="personal">
            Personal
          </a>
          <a href="/business">Business</a>
        </div>
        <div className="menu-right">
          <a href="/ON">
            ON
            <span>
              <i className="fas fa-angle-down"></i>
            </span>
          </a>
          <a href="/FR">FR</a>
          <a href="/findastore">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            find a store
          </a>
          <a href="/signin">
            <span>
              <i className="far fa-user-circle"></i>
            </span>
            Sign in
          </a>
        </div>
      </nav>
      <nav className="nav-secondary">
        <img src={logo} alt="logo" className="logo" />
        <div className="menu-left">
          <div className="menu-left-links">
            <a href="/shop">
              Shop
              <span>
                <i className="fas fa-angle-down"></i>
              </span>
            </a>
            <a href="/myrogers">MyRogers</a>
            <a href="/support">Support</a>
          </div>
        </div>
        <span>
          <i className="fas fa-search"></i>
        </span>
      </nav>
    </div>
  );
}
