import React from "react";
import { useHistory } from "react-router-dom";
import "./index.scss";

const Login = () => {
  const history = useHistory();
  return (
    <div className="login">
      <button>LOG IN WITH GOOGLE</button>
      <input type="email" placeholder="Email..." />
      <input type="password" placeholder="Password..." />
      <p
        onClick={() => {
          history.push("/signup");
        }}
        style={{ cursor: "pointer" }}
      >
        Don't have an account? <span>Signup Now</span>
      </p>

      <button
        className="main"
        style={{ cursor: "pointer" }}
        onClick={() => {
          history.push("/home");
        }}
      >
        Log in
      </button>
    </div>
  );
};

export default Login;
