import * as React from "react";
import "./Ledge.less";

export const Ledge = () => {
  return (
    <div className="Ledge">
      <div className="Ledge__MenuLine">
        <span>Linky na recyklaci plastů</span>
        <span>Drtiče</span>
        <span>Nožové mlýny</span>
        <span>Granulace polymerů</span>
      </div>
      <div className="Ledge__Cont">
        <div className="Ledge__ColumnOne">
          Společnost HORTEN dodává technologická řešení pro recyklaci plastů a
          dalších odpadů s využitím zkušeností, dovedností, které jsme během let
          získali.
        </div>
        <div className="Ledge__ColumnTwo">
          <img className="Ledge__Logo" src="./src/images/Logo/HortenLogo.svg" />
        </div>
        <div className="Ledge__ColumnThree">
          <span>+420 603570572 | +420 602305209</span>
          <span>s.pohoral1@gmail.com</span>
          <span>Braunerova 563/7, Libeň (Praha 8), 180 00 Praha</span>
          <span>Otevírací doba</span>
        </div>
      </div>
    </div>
  );
};
