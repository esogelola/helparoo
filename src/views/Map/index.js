import React from "react";
import Map, { Marker } from "react-map-gl";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW1lcm9mdCIsImEiOiJjbDE4ODZ1amkxamttM292MDZrNmIzcGIzIn0.EPHs9VwZJWUiRZw5RSyX3Q";

function MapView() {
  return (
    <div>
      <Map
        initialViewState={{
          latitude: 37.8,
          longitude: -122.4,
          zoom: 14,
        }}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Marker longitude={-122.4} latitude={37.8} color="red" />
      </Map>
    </div>
  );
}

export default MapView;
