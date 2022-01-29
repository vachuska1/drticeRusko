import * as React from "react";
import "./Ledge.less";

export const Ledge = () => {
  return (
    <div className="Ledge">
      <div className="Ledge__MenuLine">
        <span>Linky na recyklaci Pet</span>
        <span>Drtiče</span>
        <span>Schroeder</span>
        <span>řezání Gilotinou</span>
        <span>Granulace polymerů</span>
        <span>Stiskněte spin</span>
      </div>
      <div className="Ledge__Cont">
        <div className="Ledge__ColumnOne">
          Společnost Stankopolimer vyvíjí a implementuje řešení pro recyklaci
          plastů s využitím znalostí, zkušeností a dovedností, které jsme během
          let získali. Od roku 1993 naše společnost zaujala přední místo mezi
          vývojáři a dodavateli kompletních průmyslových zpracovatelských
          zařízení v procesu zpracování plastů a druhotných polymerních
          materiálů.
        </div>
        <div className="Ledge__ColumnTwo">
          <img className="Ledge__Logo" src="./src/images/Logo/Logo.svg" />
        </div>
        <div className="Ledge__ColumnThree">
          <span>774104020</span>
          <span>ahoj@seznam.cz</span>
          <span>Adresa</span>
          <span>Otevírací doba</span>
          <span>Hodnocení</span>
        </div>
      </div>
    </div>
  );
};
