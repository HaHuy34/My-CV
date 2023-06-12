import React, { useState } from "react";
import "../src/Component/Style.css";
import About from "./About";
import Contact from "./Contact";
import Skills from "./Component/Skills";
import loGo from "../src/image/avatar.png";

const App = () => {
  const [activeTab, setActiveTab] = useState("About");

  const handleMenuClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <div className="main-cv">
        <div className="left">
          <div className="main-left-header">
            <h1 className="name-title">Hà Văn Huy</h1>
            <p className="job-position">Internship - Frontend</p>
            <div className="menu-header">
              <div className="main-left-menu">
                <ul className="menu">
                  <ul>
                    <li onClick={() => handleMenuClick("About")}>
                      Introduction
                    </li>
                    <li onClick={() => handleMenuClick("About")}>About me</li>
                    <li onClick={() => handleMenuClick("Service")}>Service</li>
                    <li onClick={() => handleMenuClick("Experience")}>
                      Experience
                    </li>
                    <li onClick={() => handleMenuClick("Skills")}>Skills</li>
                    <li onClick={() => handleMenuClick("Contact")}>Contact</li>
                  </ul>
                </ul>
              </div>
              <div className="main-left-image">
                <img src={loGo} alt="logo" />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          {activeTab === "About" && <About />}
          {activeTab === "Contact" && <Contact />}
          {activeTab === "Skills" && <Skills />}
        </div>
      </div>
    </div>
  );
};

export default App;
