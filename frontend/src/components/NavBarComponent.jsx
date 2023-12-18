import React, { useState } from "react";

const NavBar = () => {
    //Keeps track of the current "Active" section
    const [activeSection, setActiveSection] = useState(null);

    // Function to update the "Active" section and scroll to the appropriate section
    const navigateTo = (sectionId) => {
        setActiveSection(sectionId);
    };

    return (
        <nav>
            <div className="navbar">
                <div className="nav-title">Army Learning App</div>
                <div className="nav-links">
                    <button
                        onClick={() => {
                            navigateTo("home");
                            // Using scrollIntoView to smoothly scroll to the selected section
                            document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                        }}
                        className={activeSection === "home" ? "active" : ""}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => {
                            navigateTo("aboutUs");
                            document.getElementById("aboutUs").scrollIntoView({ behavior: "smooth" });
                        }}
                        className={activeSection === "aboutUs" ? "active" : ""}
                    >
                        About Us
                    </button>
                    <button
                        onClick={() => {
                            navigateTo("contactUs");
                            document.getElementById("contactUs").scrollIntoView({ behavior: "smooth" });
                        }}
                        className={activeSection === "contactUs" ? "active" : ""}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;