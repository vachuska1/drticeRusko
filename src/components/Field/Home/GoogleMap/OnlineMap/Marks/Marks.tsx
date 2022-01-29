import * as React from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { useState } from "react";
import "./Marks.less";

interface MarksProps {
  lat: number;
  log: number;
  name: string;
}

export const Marks: React.FC<MarksProps> = ({ lat, log, name }) => {
  const [toggleTown, setToggleTown] = useState(false);

  const toggleClass = () => {
    setToggleTown(!toggleTown);
  };

  return (
    <div className="Marks">
      <Marker latitude={lat} longitude={log} offsetTop={-30}>
        <div className="Marks__Icon" onClick={toggleClass}>
          🚩
        </div>
        <div className={toggleTown ? "Marks__Name" : "Marks__Name--inactive"}>
          {name}
        </div>
      </Marker>
    </div>
  );
};
