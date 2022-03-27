import React, { useEffect } from "react";
import "./index.scss";
import AddSquare from "../../assets/add-square.svg";
import Settings from "../../assets/settings.svg";
import World from "../../assets/world.svg";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation(props) {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="Nav">
      <button
        className={` ${location.pathname === "/add" && "active"}`}
        onClick={() => history.push("/add")}
      >
        <img src={AddSquare} alt="add" />
      </button>
      <button
        className={`map ${location.pathname === "/" && "active"}`}
        onClick={() => history.push("/")}
      >
        <img src={World} alt="world" />
      </button>
      <button className={` ${location.pathname === "/settings" && "active"}`}>
        <img
          src={Settings}
          alt="settings"
          onClick={() => history.push("/settings")}
        />
      </button>
    </div>
  );
}

export default Navigation;
