import React from "react";

const NavBar = () => {
    const navigateTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav>
            <div className="navbar">
                <div className="nav-title">Army Learning App</div>
                <div className="nav-links">
                    <button onClick={() => navigateTo("home")}>Home</button>
                    <button onClick={() => navigateTo("aboutUs")}>About Us</button>
                    <button onClick={() => navigateTo("contactUs")}>Contact Us</button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
