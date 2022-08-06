import * as React from "react";
import "./Home.less";
import { Carousel } from "react-responsive-carousel";
import "./ReactSlider.less";
import ReactPlayer from "react-player";
import { MenuCard } from "./MenuCard/MenuCard";
import { BenefitsCard } from "./BenefitsCard/BenefitsCard";
import { GoogleMap } from "./GoogleMap/GoogleMap";
import { Inputs } from "./Inputs/Inputs";

const images = [
  { url: "./src/images/Carousel/Carousel1mob.jpg" },
  { url: "./src/images/Carousel/Carousel2mob.jpg" },
  { url: "./src/images/Carousel/Carousel3mob.jpg" },
  { url: "./src/images/Carousel/Carousel4mob.jpg" },
];

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__Carousel">
        <Carousel
          width="100vw"
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {images.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="Home__Content">
        <div className="Home__Item">Zařízení pro zpracování polymerů</div>
        <div className="Home__Video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sLUcnbHNk1k"
            width="1000px"
            height="500px"
          />
        </div>
        <div className="Home__Paragraph">
          Společnost "Stankopolimer" nabízí zařízení pro zpracování polymerů.
          Máme bohaté zkušenosti s realizací projektů. Naše integrovaná řešení
          fungují v různých městech a zemích. Dnes jsme rádi, že nabízíme
          zpracovatelské linky na PET lahve, fóliové materiály, tvrdé plasty,
          granulační linky, ale i jednotlivá zařízení jako jsou drtiče, drtiče,
          odstředivky a další zařízení pro kompletní cyklus zpracování polymerů.
        </div>
        <div className="Home__Poly Home__Poly1">
          Naše zařízení řeší širokou škálu úloh zpracování polymerů
        </div>
      </div>
      <div className="Home__Column">
        <div className="Home__ItemsOne">
          <MenuCard
            name={"Zařízení na recyklaci PET"}
            image={"./src/images/CardName/CardName1.jpg"}
          />
        </div>
        <div className="Home__TextOne">
          Naše společnost poskytuje komplexní řešení pro zpracování
          recyklovaných PET surovin. Nabízíme automatizované linky na třídění,
          čištění, mletí, sušení a granulaci PET.
        </div>
        <div className="Home__ItemsTwo">
          <MenuCard
            name={"Zařízení na recyklaci fóliových materiálů"}
            image={"./src/images/CardName/CardName2.jpg"}
          />
        </div>
        <div className="Home__TextTwo">
          Linky na klíč pro recyklaci big bagů, spunbond, stretch fólií a
          dalších obalů řeší problém recyklace použitých obalů.
        </div>
        <div className="Home__ItemsThree">
          <MenuCard
            name={"Zařízení na recyklace tvrdých plastů"}
            image={"./src/images/CardName/CardName3.jpg"}
          />
        </div>
        <div className="Home__TextThree">
          Komplexy na zpracování polyolefinů umožňují získávat suroviny z
          odpadních plastových výrobků a výrobních odpadů pro výrobu nových
          poptávaných výrobků.
        </div>
        <div className="Home__PaleOne">
          <span>Broušení polymerů</span>
        </div>
        <div className="Home__ItemOne">
          <MenuCard
            name={"Drtiče a gilotiny"}
            image={"./src/images/CardName/CardName4.jpg"}
          />
        </div>
        <div className="Home__PaleTwo">
          <span>Čištění polymerů</span>
        </div>
        <div className="Home__ItemTwo">
          <MenuCard
            name={"Linky pro praní a separaci sekundárních polymerů"}
            image={"./src/images/CardName/CardName5.jpg"}
          />
        </div>
        <div className="Home__PaleThree">
          <span>Granulace polymerů</span>
        </div>
        <div className="Home__ItemThree">
          <MenuCard
            name={"Výroba polymerních granulí"}
            image={"./src/images/CardName/CardName6.jpg"}
          />
        </div>
      </div>
      <div className="Home__Poly Home__Poly2">Průzkum na webu</div>
      <div className="Home__Paragraph">
        Naše společnost je připravena předvést všem nová technologická řešení
        pro zpracování polymerů. Chceme znát váš názor na to, s jakým druhem
        zařízení byste se chtěli v moskevské oblasti seznámit.
      </div>
      <div className="Home__PicturesCont">
        <div className="Home__Picture"></div>
        <div className="Home__Button">Zúčastněte se</div>
      </div>
      <BenefitsCard />
      <div className="Home__ElementPoly">
        <div className="Home__Element">Naše vybavení dělá svět čistším!</div>
      </div>
      <Inputs />
      <div className="Home__Poly Home__Poly3">
        Naše PET komplexy fungují ve více než 20 městech
      </div>
      <GoogleMap />
    </div>
  );
};
