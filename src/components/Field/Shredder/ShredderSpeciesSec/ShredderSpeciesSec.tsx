import * as React from "react";
import "./ShredderSpeciesSec.less";

interface ShredderSpeciesSecProps {
  model?: string;
  desc?: string;
  perf?: string;
  width?: string;
  diam?: string;
  perfeng?: string;
  dimen?: string;
  mass?: string;
  props1?: string;
  props2?: string;
  props3?: string;
  props4?: string;
  props5?: string;
  props6?: string;
}

export const ShredderSpeciesSec: React.FC<ShredderSpeciesSecProps> = ({
  model,
  desc,
  perf,
  width,
  diam,
  perfeng,
  dimen,
  mass,
  props1,
  props2,
  props3,
  props4,
  props5,
  props6,
}) => {
  return (
    <div className="ShredderSpeciesSec">
      <h3 className="ShredderSpeciesSec__Model">{model}</h3>
      <div className="ShredderSpeciesSec__Desc">{desc}</div>
      <br />
      <strong>
        <u>
          <div className="ShredderSpeciesSec__Tech">Technické parametry </div>
        </u>
      </strong>
      <p>
        Průměr rotoru: <strong>{perf} mm</strong>
      </p>
      <p>
        Otáčky rotoru: <strong>{width} ot/min</strong>
      </p>
      <p>
        Šířka podávacího dopravníku: <strong>{diam} mm</strong>
      </p>
      <p>
        Celková spotřeba: <strong>{perfeng} kW</strong>
      </p>
      <p>
        Rozměry (bez dopravníku): <strong>{dimen} mm</strong>
      </p>
      <p>
        Hmotnost (bez dopravníku): <strong>{mass} kg</strong>
      </p>
      <br />
      <strong>
        <u>
          <div className="ShredderSpeciesSec__Props">Vlastnosti zařízení</div>
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
