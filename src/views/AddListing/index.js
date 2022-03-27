import React from "react";
import "./index.scss";
function AddListingView() {
  return (
    <div className="AddListingContainer">
      <h2>Add Listing</h2>

      <div className="formContainer">
        <div className="inputGroup">
          <label>Title</label>
          <input />
        </div>
        <div className="inputGroup">
          <label>Location</label>
          <input />
        </div>
        <div className="inputGroup">
          <label>Date</label>
          <input />
        </div>
        <div className="inputGroupSplit">
          <p>Time</p>
          <div className="group">
            <input type="time" />
            <label>To</label>
            <input type="time" />
          </div>
        </div>
        <button className="btnSubmit">Create Listing</button>
      </div>
    </div>
  );
}

export default AddListingView;
