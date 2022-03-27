import React from "react";
import "./index.scss";
import Landing from "../../../assets/white-woman.png";

const Landing2 = ({ onContinue }) => {
  return (
    <div className="landing-2">
      <img src={Landing} alt="white-woman" />
      <div className="content">
        <h1>Giveaways</h1>
        <p>
          Easy way to share your unused things with the people in your
          commmunity,
        </p>
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default Landing2;
