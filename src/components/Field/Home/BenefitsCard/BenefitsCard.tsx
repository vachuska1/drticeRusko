import * as React from "react";
import { Card } from "./Card/Card";
import "./BenefitsCard.less";

export const BenefitsCard = () => {
  return (
    <div className="BenefitsCard">
      <div className="BenefitsCard__Name">Výhody spolupráce s námi</div>
      <div className="BenefitsCard__Column">
        <Card
          text="Včasné dodání zařízení."
          icon="./src/images/Icons/Cooperation.png"
        />
        <Card
          text="Spolehlivé, osvědčené a vysoce kvalitní zařízení."
          icon="./src/images/Icons/Quality.png"
        />
      </div>
      <div className="BenefitsCard__Column">
        <Card
          text="Individuální přístup k řešení problémů zákazníků."
          icon="./src/images/Icons/Settings.png"
        />
        <Card
          text="Technická podpora, uvedení do provozu a školení personálu."
          icon="./src/images/Icons/Support.png"
        />
      </div>
    </div>
  );
};
