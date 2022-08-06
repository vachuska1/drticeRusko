import * as React from "react";
import "./Header.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";

export const Header: React.FC = () => {
  const [closePrinter, setClosePrinter] = useState(false);
  const [click, setClick] = useState(false);

  const toggleClass = () => {
    setClick(!click);
    setClosePrinter(!closePrinter);
  };

  const toggleMenu = () => {
    location.pathname.match(/^\/3Dtisk/) ? "Header__Printer--active" : "";
  };
  const toggleMenuEnviro = () => {
    location.pathname.match(/^\/Conten/) ? "Header__Equipment--active" : "";
  };

  return (
    <div>
      <div className="Header" id="myDIV">
        <div
          onClick={toggleClass}
          className={`Header__Logo ${
            click ? "Header__Logo--active" : "Header__Logo"
          }`}
        ></div>
        <NavLink
          to="/"
          id="HeadMenu"
          className="Header__Contact"
          activeClassName="Header__Contact--active"
        >
          <span className="Header__Number">+420 602305209</span>
          <br />
          <span className="Header__Email">vachuska@ekostat.cz</span>
        </NavLink>
        <NavLink
          to="/Drtice"
          className="Header__Granulation"
          activeClassName="Header__Granulation--reactive"
        >
          Drtiče
        </NavLink>
        <NavLink
          to="/Conten"
          onClick={toggleMenuEnviro}
          className={`Header__Equipment ${
            closePrinter ? "Header__Equipment--active" : ""
          }`}
          activeClassName="Header__Equipment--reactive"
        >
          Enviro
        </NavLink>
        <NavLink
          to="/3Dtisk"
          onClickCapture={toggleMenu}
          className={`Header__Printer ${
            closePrinter ? "Header__Printer--active" : ""
          }`}
          activeClassName="Header__Printer--reactive"
        >
          3D-tisk
        </NavLink>
        <NavLink
          to="/sluzby"
          className="Header__Company"
          activeClassName="Header__Company--reactive"
        >
          Společnost
        </NavLink>
        <NavLink
          to="/spolecnost"
          className="Header__Services"
          activeClassName="Header__Services--reactive"
        >
          Kontakty
        </NavLink>
      </div>
    </div>
  );
};
