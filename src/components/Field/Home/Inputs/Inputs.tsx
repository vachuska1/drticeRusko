import * as React from "react";
import "./Inputs.less";
import { useFormState } from "react-use-form-state";

export const Inputs = () => {
  const [formState, { text, email, tel, textarea }] = useFormState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Inputs">
      <div className="Inputs__Text">
        Potřebujete poradit od našich odborníků?
      </div>
      <form className="Inputs__Form">
        <input
          className="Inputs__Name"
          {...text("name")}
          placeholder={"Jméno"}
        />
        <input
          className="Inputs__Number"
          {...tel("number")}
          type="tel"
          placeholder={"123-456-789"}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          required
        />
        <input
          className="Inputs__Email"
          {...email("email")}
          placeholder={"xxxx@xxx.xxx"}
          required
        />
        <br />
        <input
          className="Inputs__Message"
          {...textarea("text")}
          placeholder="Zpráva"
        />
        <br />
        <button className="Inputs__Submit" onSubmit={handleSubmit}>
          Poslat
        </button>
      </form>
    </div>
  );
};
