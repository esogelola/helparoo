import React from "react";
import "./index.scss";
import Landing from "../../../assets/black-woman.png";

const Landing1 = ({ onContinue }) => {
  return (
    <div className="landing-1">
      <img src={Landing} alt="black-woman" />
      <div className="content">
        <h1>Quick Help</h1>
        <p>
          Get quick help from your neighbours. It'll take 60 seconds to post a
          quick help.
        </p>
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Landing1;
