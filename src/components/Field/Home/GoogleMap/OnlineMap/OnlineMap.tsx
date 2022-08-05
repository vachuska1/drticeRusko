import * as React from "react";
import "./OnlineMap.less";
import ReactMapGl from "react-map-gl";
import { useState } from "react";
import { Marks } from "./Marks/Marks";

export const OnlineMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.603241,
    longitude: 39.572941,
    width: "100vw",
    height: "350px",
    zoom: 2.5,
  });
  return (
    <div className="OnlineMap">
      {" "}
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken="pk.eyJ1IjoidmFjaHVza2ExIiwiYSI6ImNsNmRmZ2FwdTA1MTQzanFveHYxenFjY2QifQ.Z5wA7QsLdUA3z5n_1a_Zhw"
        mapStyle="mapbox://styles/vachuska1/cl3k7jixe000314nxhbstvzku"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        <Marks lat={50.0732} log={14.438} name={"Praha"} />
        <Marks lat={54.98} log={73.33} name={"Omsk"} />
        <Marks lat={56.858} log={60.5646} name={"Jekatěrinburg"} />
        <Marks lat={54.7334} log={55.9651} name={"Ufa"} />
        <Marks lat={56.851} log={53.19} name={"Iževsk"} />
        <Marks lat={55.7727} log={49.171} name={"Kazaň"} />
        <Marks lat={56.3137} log={44.027} name={"Nižnij Novgorod"} />
        <Marks lat={56.12} log={40.3727} name={"Vladimir"} />
        <Marks lat={52.607} log={39.58} name={"Lipetsk"} />
        <Marks lat={57.53} log={38.3} name={"Uglič"} />
        <Marks lat={59.9615} log={30.2831} name={"Petrohrad"} />
        <Marks lat={56.2321} log={37.2642} name={"Khimki"} />
        <Marks lat={55.7521} log={37.672} name={"Moskva"} />
        <Marks lat={55.53} log={37.804} name={"Lytkarino"} />
        <Marks lat={55.23} log={37.304} name={"Ovečkino"} />
        <Marks lat={43.5907} log={39.7313} name={"Soči"} />
        <Marks lat={44.56} log={33.4313} name={"Sevastopol"} />
        <Marks lat={55.5} log={28.7913} name={"Novopolotsk"} />
        <Marks lat={53.89} log={27.44} name={"Minsk"} />
        <Marks lat={40.45} log={-3.54} name={"Madrid"} />
      </ReactMapGl>
    </div>
  );
};
