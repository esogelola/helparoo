import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";
function Settings() {
  const history = useHistory();
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

      <button
        className="main"
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/");
        }}
      >
        Sign Out
      </button>
    </div>
  );
}

export default Settings;
