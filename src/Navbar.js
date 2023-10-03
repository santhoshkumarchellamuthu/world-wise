import React from "react";
import "./Navbar.scss";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/HOME">
          <li>
            <img src="/image/logo.png"></img>
          </li>
        </Link>
      </div>
      <div className="list">
        <ul>
          <Link to="/PRICE">
            <li>PRICE</li>
          </Link>
          <Link to="/PRODUCT">
            {" "}
            <li>PRODUCT</li>
          </Link>
          <Link to="/LOGIN">
            <li className="log_btn">LOGIN</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
