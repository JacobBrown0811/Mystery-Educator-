import React, { useState } from "react";

const NavBar = () => {
  // Keeps track of the current "Active" section
  const [activeSection, setActiveSection] = useState(null);

  // Function to update the "Active" section
  const navigateTo = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="nav-title">Army Learning App</div>
        <div className="nav-links">
          <button
            onClick={() => navigateTo("home")}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </button>
          <button
            onClick={() => navigateTo("aboutUs")}
            className={activeSection === "aboutUs" ? "active" : ""}
          >
            About Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;