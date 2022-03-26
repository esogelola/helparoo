import React from "react";
import "./index.scss";
import AddSquare from '../../assets/add-square.svg'
import Settings from '../../assets/settings.svg'
import World from '../../assets/world.svg'
function Navigation({ props }) {
  return (
    
    <div className="Nav">
      <button className="">
        <img src={AddSquare} alt="add"/>
      </button>
      <button className="map active">
        <img src={World} alt='world' />
      </button>
      <button className="">
        <img src={Settings} alt='settings' />
      </button>
    </div>
  );
}

export default Navigation;
