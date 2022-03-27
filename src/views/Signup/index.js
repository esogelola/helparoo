import React, { useEffect, useRef, useState } from "react";
import "./index.scss";

import { useHistory } from "react-router-dom";
const Signup = (props, { firebase }) => {
  const [busy, setBusy] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const history = useHistory();
  async function authenticateUser() {
    setBusy(true);

    try {
      await firebase.register(
        props.user.firstName + " " + props.user.lastName,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log("You have signed up successfully!");
    } catch (err) {
      console.error("Authentication Error", err);
      console.log(err.message);
    }
    setBusy(false);
  }

  return (
    <div className="signup">
      <button>SIGN UP WITH GOOGLE</button>
      <input type="email" placeholder="Email..." ref={emailRef} />
      <input type="password" placeholder="Password..." ref={passwordRef} />
      <p
        onClick={() => {
          history.push("/login");
        }}
        style={{ cursor: "pointer" }}
      >
        Already have an account? <span>Login Now</span>
      </p>

      <button className="main" onClick={authenticateUser} disabled={busy}>
        {busy ? "Loading" : "Sign Up"}
      </button>
    </div>
  );
};

export default Signup;
