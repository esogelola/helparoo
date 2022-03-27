import React from "react";
import "./index.scss";
function Settings() {
  return (
    <div className="SettingsContainer">
      <h2>Settings</h2>

      <div className="inputGroup">
        <label className="">
          Adjust Radius <input type="number" />
        </label>
      </div>

      <h2>Manage listings</h2>
      <p>No Listing Available</p>
    </div>
  );
}

export default Settings;
