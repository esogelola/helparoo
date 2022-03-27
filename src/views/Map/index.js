import React, { useEffect, useState, useRef } from "react";
import Map, { Marker, Source, Layer, GeolocateControl } from "react-map-gl";
import { BottomSheet } from "react-spring-bottom-sheet";
import "./index.scss";

import "react-spring-bottom-sheet/dist/style.css";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoiYW1lcm9mdCIsImEiOiJjbDE4ODZ1amkxamttM292MDZrNmIzcGIzIn0.EPHs9VwZJWUiRZw5RSyX3Q";

function MapView() {
  const [viewState, setViewState] = useState({
    longitude: -122.4,
    latitude: 37.8,
    zoom: 14,
  });
  const mapRef = useRef();
  const canvasRef = useRef();
  const [ctx, setCtx] = useState();
  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
    if (ctx) {
      canvasRef.current.style.display = "none";
    }
  }, [canvasRef]);

  function Circle(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;

    this.radius = radius;

    this.draw = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.strokeStyle = color;
      ctx.stroke();
    };

    this.update = function () {
      if (this.x + this.radius > 400 || this.x - this.radius < 0) {
        this.dx = -this.dx;
      }

      if (this.y + this.radius > 400 || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }

      this.x += this.dx;
      this.y += this.dy;

      this.draw();
    };
  }
  const onMapLoad = React.useCallback(() => {
    console.log(mapRef.current);
    mapRef.current.addLayer({
      id: "canvas-layer",
      type: "raster",
      source: "canvas-source",
    });
  }, []);

  return (
    <div>
      <canvas id="canvasID" width="400" height="400" ref={canvasRef}></canvas>

      <Map
        viewState={viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        style={{ width: 800, height: 600 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
        showUserLocation={false}
        showAccuracyCircle={false}
        ref={mapRef}
        onLoad={onMapLoad}
      ></Map>
    </div>
  );
}

export default MapView;
