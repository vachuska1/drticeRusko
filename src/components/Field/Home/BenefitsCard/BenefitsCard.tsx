import * as React from "react";
import { Card } from "./Card/Card";
import "./BenefitsCard.less";

export const BenefitsCard = () => {
  return (
    <div className="BenefitsCard">
      <div className="BenefitsCard__Name">Výhody spolupráci s námi</div>
      <div className="BenefitsCard__Column">
        <Card
          text="Zaručené včasné dodání zařízení."
          icon="./src/images/Icons/Cooperation.png"
        />
        <Card
          text="Spolehlivé, vysoce kvalitní zařízení z certifikovaných materiálů."
          icon="./src/images/Icons/Quality.png"
        />
      </div>
      <div className="BenefitsCard__Column">
        <Card
          text="Individuální přístup k řešení problémů zákazníků."
          icon="./src/images/Icons/Settings.png"
        />
        <Card
          text="Podpora pro jakékoli technické problémy 24/7. Uvedení do provozu a
          školení personálu."
          icon="./src/images/Icons/Support.png"
        />
      </div>
    </div>
  );
};
