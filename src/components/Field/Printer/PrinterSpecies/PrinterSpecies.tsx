import * as React from "react";
import "./PrinterSpecies.less";

interface PrinterSpecies {
  name?: string;
  area?: string;
  strongdesc?: string;
  description?: string;
  descTwo?: string;
  descThree?: string;
}

export const PrinterSpecies: React.FC<PrinterSpecies> = ({
  name,
  area,
  strongdesc,
  description,
  descTwo,
  descThree,
}) => {
  return (
    <div className="PrinterSpecies">
      <h3 className="PrinterSpecies__Name">{name}</h3>
      <h4 className="PrinterSpecies__Area">{area}</h4>
      <strong>
        <p className="PrinterSpecies__Description">{strongdesc}</p>
      </strong>
      <p className="PrinterSpecies__Description">{description}</p>
      <p className="PrinterSpecies__Description">{descTwo}</p>
      <p className="PrinterSpecies__Description">{descThree}</p>
    </div>
  );
};
