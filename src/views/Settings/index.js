import React from "react";
import "./index.scss";
function Settings() {
  return (
    <div className="SettingsContainer">
      <h2>Settings</h2>
      <span>
        <label>Adjust Radius</label>
        <input type="number" />
      </span>
      <h2>Manage listings</h2>
      <p>No Listing Available</p>
    </div>
  );
}

export default Settings;
