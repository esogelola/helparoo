import React, { useEffect, useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import { BottomSheet } from "react-spring-bottom-sheet";

import "react-spring-bottom-sheet/dist/style.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW1lcm9mdCIsImEiOiJjbDE4ODZ1amkxamttM292MDZrNmIzcGIzIn0.EPHs9VwZJWUiRZw5RSyX3Q";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [-122.4, 37.8] },
    },
  ],
};
const layerStyle = {
  id: "point",
  type: "circle",
  paint: {
    "circle-radius": 10,
    "circle-color": "#007cbf",
  },
};

function MapView() {
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      //   setViewState({
      //     latitude: position.coords.latitude,
      //     longitude: position.coords.longitude,
      //     zoom: 14,
      //   });
    });

    console.log(viewState);
  }, [viewState]);

  return (
    <div>
      <Map
        viewState={viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer {...layerStyle} />
        </Source>
        {[0.5, 0.3, 0.1, 0.12].map((x) => {
          return (
            <Marker longitude={-122.4 - x / 10} latitude={37.8 - x / 10} />
          );
        })}
      </Map>
    </div>
  );
}

export default MapView;
