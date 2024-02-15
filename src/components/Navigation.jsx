import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  
  return (
    <nav className="navigation">
      <div className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        <FontAwesomeIcon icon={isNavExpanded ? faToggleOn : faToggleOff} size="3x"/>
      </div>
      <div className={isNavExpanded ? "nav-bar expanded" : "nav-bar"}>
        <ul>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/Sijia-Han-Portfolio">
            Home
            <span className="sr-only">(current)</span>
          </NavLink>
          </li><div className="divider-bar"/>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/Sijia-Han-Portfolio/About">
            About
          </NavLink>
          </li><div className="divider-bar"/>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/Sijia-Han-Portfolio/Blog">
            Blog
          </NavLink>
          </li><div className="divider-bar"/>
          <li className="nav-item">
          <NavLink className="nav-link" onClick={() => {setIsNavExpanded(!isNavExpanded)}} to="/Sijia-Han-Portfolio/Contact">
            Contact
          </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;