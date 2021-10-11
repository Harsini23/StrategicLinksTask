import React from "react";

import "./Navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <ul class="navbar">
          <li class="navitem" id="label">
            STRATEGIC LINK
          </li>
          <li class="navitem">Home</li>
          <li class="navitem">AboutUs</li>
          <li class="navitem">Services</li>
          <li class="navitem">Portfolio</li>
          <li class="navitem">Team</li>
          <li class="navitem">Dropdown</li>
          <button className="mybtn">GetStarted</button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
