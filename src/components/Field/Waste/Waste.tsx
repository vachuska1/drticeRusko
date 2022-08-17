import * as React from "react";
import "./Waste.less";

export const Waste = () => {
  return (
    <div className="Waste">
      <h1 className="Waste__Name">Zpracování odpadů</h1>
      <div className="Waste__Text">
        <p>
          Společnost HORTEN a.s. se zabývá využitím odpadních materiálů, zejména
          ve stavebnictví. Největší pozornost věnujeme zpracování prašných
          anorganických odpadů, stavebních a demoličních odpadů a odpadních
          plastů.
        </p>
        <p>
          Stavíme na moderních řešeních, která vedou v průmyslu výroby
          stavebních hmot a zpracování odpadů ke snižování nákladů a zároveň ke
          snižování spotřeby přírodních neobnovitelných zdrojů.
        </p>
        <p>
          Opíráme se o vlastní, více jak 20leté zkušenosti v oblasti zpracování
          vybraných odpadů a jejich praktické využití. Našim cílem je přispívat
          k udržitelné výrobě stavebních materiálů, a to nejenom efektivním
          využitím dostupných odpadních materiálů, spoluprací s výrobci
          stavebních hmot a municipalitami, ale také cílenou osvětou.
        </p>
        <p>
          Navrhujeme konkrétní řešení uplatnění odpadních materiálů, a to
          nejenom pro zákazníky v ČR, ale také na Slovensku, Litvě, Srbsku,
          Jižní Koreji.
        </p>
      </div>
    </div>
  );
};
