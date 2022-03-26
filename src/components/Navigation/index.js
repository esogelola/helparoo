import React from "react";
import "./index.scss";
function Navigation({ props }) {
  return (
    <div className="Nav">
      <a href="#home" class="active">
        ADD
      </a>
      <a href="#news">MAP</a>
      <a href="#contact">Settings</a>
    </div>
  );
}

export default Navigation;
