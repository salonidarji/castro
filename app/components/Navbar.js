"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="main-menu navbar-expand-md navbar-light">
      <div
        className=" navbar-collapse show clearfix"
        id="navbarSupportedContent"
      >
        {/* <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent"> */}
        <ul className="navigation clearfix">
          <li>
            <a
              href="/"
              onClick={() => handleLinkClick("Home")}
              className={activeLink === "Home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/login"
              onClick={() => handleLinkClick("Login")}
              className={activeLink === "Login" ? "active" : ""}
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/signup"
              onClick={() => handleLinkClick("Signup")}
              className={activeLink === "Signup" ? "active" : ""}
            >
              Signup
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
