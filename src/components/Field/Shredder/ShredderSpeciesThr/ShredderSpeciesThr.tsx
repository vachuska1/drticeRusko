import * as React from "react";
import "./ShredderSpeciesThr.less";

interface ShredderSpeciesThrProps {
  a?: string;
  b?: string;
  c?: string;
  d?: string;
  e?: string;
  f?: string;
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

export const ShredderSpeciesThr: React.FC<ShredderSpeciesThrProps> = ({
  a,
  b,
  c,
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
    <div className="ShredderSpeciesThr">
      <h3 className="ShredderSpeciesThr__Model">{model}</h3>
      <div className="ShredderSpeciesThr__Desc">{desc}</div>
      <br />
      <strong>
        <u>
          <div className="ShredderSpeciesThr__Tech">Technické parametry </div>
        </u>
      </strong>
      <p>
        {a} <strong>{perf} mm</strong>
      </p>
      <p>
        {b} <strong>{width} mm</strong>
      </p>
      <p>
        {c} <strong>{diam}</strong>
      </p>
      <p>
        Celková spotřeba: <strong>{perfeng} kW</strong>
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
          <div className="ShredderSpeciesThr__Props">Vlastnosti zařízení</div>
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
