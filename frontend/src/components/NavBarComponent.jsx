import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-title">History Explorer App</div>

      <div className="nav-links">
        <button>
          <Link className="home" to="/">Home</Link>
        </button>
        <button>
          <Link className="aboutUs" to="/about">About</Link>
        </button>
      </div>

    </nav>
  );
};

export default NavBar;
