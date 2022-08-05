import * as React from "react";
import "./Header.less";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { ToggleButton } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";

export const Header: React.FC = () => {
  const [activePrinter, setActivePrinter] = useState(false);
  const [closePrinter, setClosePrinter] = useState(false);
  const [click, setClick] = useState(false);

  const toggleClassPrinter = () => {
    setClosePrinter(!closePrinter);
    setActivePrinter(!activePrinter);
  };

  const toggleMenu = () => {
    setClick(!click);
  };

  const ChangePage = (event) => {
    document.body.className = "";
    document.body.classList.add(event.currentTarget.id);
  };

  return (
    <div>
      <div className="Header" id="myDIV">
        <img
          onClick={toggleClassPrinter}
          className="Header__Logo"
          src="./src/images/Icons/Menu/Menu.svg"
        />
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
          className={`Header__Equipment ${
            closePrinter ? "Header__Equipment--active" : ""
          }`}
          activeClassName="Header__Equipment--reactive"
        >
          Enviro
        </NavLink>
        <NavLink
          to="/3Dtisk"
          onClick={() => {
            window.location.href = "/3Dtisk";
          }}
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
