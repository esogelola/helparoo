import React from "react";
import "./index.scss";
import Landing from "../../assets/fireman.png";

const Landing4 = ({ onContinue }) => {
  return (
    <div className="landing-4">
      <img src={Landing} alt="fireman" />
      <div className="content">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last Name"></input>
        <input type="date" placeholder="Birth Date"></input>
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Landing4;
