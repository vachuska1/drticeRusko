import * as React from "react";
import "./ShredderSpecies.less";

interface ShredderSpeciesProps {
  model?: string;
  desc?: string;
  perf?: string;
  width?: string;
  or?: string;
  otacky?: string;
  rozmer?: string;
  diam?: string;
  perfeng?: string;
  dimen?: string;
  mass?: string;
  props?: string;
  props1?: string;
  props2?: string;
  props3?: string;
  props4?: string;
  props5?: string;
  props6?: string;
}

export const ShredderSpecies: React.FC<ShredderSpeciesProps> = ({
  model,
  desc,
  perf,
  width,
  or,
  otacky,
  rozmer,
  diam,
  perfeng,
  dimen,
  mass,
  props,
  props1,
  props2,
  props3,
  props4,
  props5,
  props6,
}) => {
  return (
    <div className="ShredderSpecies">
      <h3 className="ShredderSpecies__Model">{model}</h3>
      <div className="ShredderSpecies__Desc">{desc}</div>
      <br />
      <strong>
        <u>
          <div className="ShredderSpecies__Tech">Technické parametry </div>
        </u>
      </strong>
      <p>
        Výkon drtiče: <strong>{perf} kg/hod</strong>
      </p>
      <p>
        {or} rotoru:{" "}
        <strong>
          {width} {otacky}
        </strong>
      </p>
      <p>
        {rozmer} <strong>{diam} mm</strong>
      </p>
      <p>
        Výkon motoru: <strong>{perfeng} kW</strong>
      </p>
      <p>
        Rozměry: <strong>{dimen} mm</strong>
      </p>
      <p>
        Hmotnost: <strong>{mass} kg</strong>
      </p>
      <br />
      <strong>
        <u>
          <div className="ShredderSpecies__Props">{props} </div>
        </u>
      </strong>
      <p>{props1}</p>
      <p>{props2}</p>
      <p>{props3}</p>
      <p>{props4}</p>
      <p>{props5}</p>
      <p>{props6}</p>
    </div>
  );
};
