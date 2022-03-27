import React from "react";
import "./index.scss";
import Landing from "../../../assets/black-man.png";

const Landing3 = ({ onContinue }) => {
  return (
    <div className="landing-3">
      <img src={Landing} alt="black-man" />
      <div className="content">
        <h1>Events</h1>
        <p>
          Join events made by your neighbours or create your own events with a
          push of a button.
        </p>
        <button onClick={onContinue}> Continue</button>
      </div>
    </div>
  );
};

export default Landing3;
