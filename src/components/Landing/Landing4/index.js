import React, { useRef, useState } from "react";
import "./index.scss";
import Landing from "../../../assets/fireman.png";
import { useDispatch } from "react-redux";

import {
  SET_FIRST_NAME,
  SET_LAST_NAME,
  SET_DOB,
} from "../../../store/actions/actionTypes";
import { useHistory } from "react-router-dom";

const Landing4 = ({ onContinue }) => {
  const dispatch = useDispatch();
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const dobRef = useRef(null);
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleSubmit = () => {
    const firstName = firstNameRef.current.value;

    const lastName = lastNameRef.current.value;
    const dob = dobRef.current.value;

    dispatch({ type: SET_FIRST_NAME, payload: firstName });
    dispatch({ type: SET_LAST_NAME, payload: lastName });

    dispatch({ type: SET_DOB, payload: dob });

    if (!firstName && !lastName && !dob) {
      setError("Invalid credentials!");
    } else {
      history.push("/signup");
    }
  };
  return (
    <div className="landing-4">
      <img src={Landing} alt="fireman" />
      <div className="content">
        <p>{error}</p>
        <input type="text" placeholder="First Name" ref={firstNameRef} />
        <input type="text" placeholder="Last Name" ref={lastNameRef} />
        <input type="date" placeholder="Birth Date" ref={dobRef} />

        <button onClick={handleSubmit}>Continue</button>
      </div>
    </div>
  );
};

export default Landing4;
