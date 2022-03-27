import React from "react";
import "./index.scss";
import AddSquare from "../../assets/add-square.svg";
import Settings from "../../assets/settings.svg";
import World from "../../assets/world.svg";
import { useHistory } from "react-router-dom";

function Navigation({ props }) {
  const history = useHistory();
  return (
    <div className="Nav">
      <button className="" onClick={() => history.push("/add")}>
        <img src={AddSquare} alt="add" />
      </button>
      <button className="map active" onClick={() => history.push("/")}>
        <img src={World} alt="world" />
      </button>
      <button className="">
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
