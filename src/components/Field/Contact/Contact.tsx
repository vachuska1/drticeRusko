import * as React from "react";
import "./Contact.less";

export const Contact = () => {
  return (
    <div className="Contact">
      <h1 className="Contact__Heading">Kontakty</h1>
      <div className="Contact__Text">
        <p>
          <strong>Odp. osoba: </strong>Dr. Stanislav Pohořal
        </p>
        <p>
          <strong>Tel: </strong> +420 603570572, +420 602305209
        </p>
        <p>
          <strong>E-mail: </strong> s.pohoral1@gmail.com
        </p>
        <p>
          <strong>Sídlo: </strong> Braunerova 563/7, Libeň (Praha 8), 180 00
          Praha
        </p>
        <p>
          <strong>IČ: </strong> 25112902
        </p>
        <p>
          <strong>Datová schránka: </strong> 3qveffb
        </p>
      </div>
    </div>
  );
};
