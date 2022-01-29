import * as React from "react";
import MapGL from "react-map-gl";
import { useState } from "react";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoidmFjaHVza2ExIiwiYSI6ImNreXJ3OG5idDB4enEzMW1teWs5dDVwbHIifQ.9K3dvymrXot2JiRRLj2SAA"; // Set your mapbox token here

export const Content = () => {
  const [viewport, setViewport] = React.useState({
    width: 800,
    height: 600,
    latitude: 37.78,
    longitude: -122.45,
    zoom: 14,
  });

  const goToNYC = () => {
    setViewport({
      ...viewport,
      longitude: -74.1,
      latitude: 40.7,
      zoom: 14,
    });
  };

  return (
    <div>
      <MapGL {...viewport} onViewportChange={setViewport} />
      <button onClick={goToNYC}>New York City</button>
    </div>
  );
};
