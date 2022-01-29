import * as React from "react";
import "./Header.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";

export const Header: React.FC = () => {
  /* const values = [
    { id: 1, text: "LI-1", className: "Header__Novelty--active" },
    { id: 2, text: "LI-2", className: "Header__Komplex--active" },
    { id: 3, text: "LI-3", className: "Header__Granulation--active" },
    { id: 4, text: "LI-4", className: "Header__Equipment--active" },
  ];
  const [activeId, setActiveId] = useState<Number>(0);
  const [toggleClass, setToggleClass] = useState();

  return (
    <div className="Header">
      {values.map((val) => (
        <div
          onClick={() => setActiveId(val.id)}
          className={
            toggleClass ? "Header__Novelty" : "Header__Novelty--active"
          }
        >
          {val.text} -- {activeId === val.id ? "Active" : "Inactive"}
        </div>
      ))}
    </div>
  );
};
*/
  {
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
      setActive(!isActive);
    };
  }

  return (
    <div>
      <div className="Header" id="myDIV">
        <NavLink
          to="/"
          id="HeadMenu"
          className="Header__Contact"
          activeClassName="Header__Contact--active"
        >
          <span className="Header__Number">774104020</span>
          <br />
          <span className="Header__Email">ahoj@seznam.cz</span>
        </NavLink>
        <NavLink
          to="/Comppsssss"
          activeClassName="Header__Komplex--active"
          className="Header__Komplex"
        >
          Komplex
        </NavLink>
        <NavLink
          to="/Comp"
          className="Header__Granulation"
          activeClassName="Header__Granulation--active"
        >
          Granulace
        </NavLink>
        <NavLink
          to="/Content"
          className="Header__Equipment"
          activeClassName="Header__Equipment--active"
        >
          Vybavení
        </NavLink>
        <NavLink
          to="/novinky"
          className="Header__Novelty"
          activeClassName="Header__Novelty--active"
        >
          Novinky
        </NavLink>
        <NavLink
          to="/sluzby"
          className="Header__Services"
          activeClassName="Header__Services--active"
        >
          Služby
        </NavLink>
        <NavLink
          to="/spolenost"
          className="Header__Company"
          activeClassName="Header__Company--active"
        >
          Společnost
        </NavLink>
      </div>
    </div>
  );
};
