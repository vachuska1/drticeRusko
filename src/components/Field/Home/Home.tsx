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
  { url: "./src/images/Carousel/Carousel1.jpg" },
  { url: "./src/images/Carousel/Carousel2.jpg" },
  { url: "./src/images/Carousel/Carousel3.jpg" },
  { url: "./src/images/Carousel/Carousel4.jpg" },
];
const imagesMob = [
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
      <div className="Home__CarouselMob">
        <Carousel
          width="100vw"
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
        >
          {imagesMob.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <br />
      <div className="Home__Content">
        <div className="Home__Item">Zařízení pro zpracování plastů</div>
        {/* <div className="Home__Video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sLUcnbHNk1k"
            width="1000px"
            height="500px"
          />
        </div> */}
        {/* <div className="Home__VideoMob">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=sLUcnbHNk1k"
            width="100vw"
            height="40vh"
          />
        </div> */}
        <br />
        <div className="Home__Paragraph">
          Společnost Horten nabízí zařízení pro zpracování plastů a dalších
          materiálů, jako je například dřevo, papír, stavební a demoliční
          odpady. Máme bohaté zkušenosti s realizací různých projektů a naše
          integrovaná řešení pracují v různých státech. Nabízíme jednotlivá
          zařízení jako jsou drtiče, třídiče, odstředivky, ale i zpracovatelské
          linky na PET lahve, fóliové materiály, tvrdé plasty, granulační linky
          a další zařízení pro kompletní cyklus zpracování plastů.
        </div>
        <br />
        <br />
        <br />
        <div className="Home__Poly Home__Poly1">
          Námi dodávaná zařízení řeší širokou škálu úloh spojených se
          zpracováním plastů
        </div>
      </div>
      <div className="Home__SecondColumn">
        <div>
          <div className="Home__PaleOne">
            <span>Drcení plastů</span>
          </div>
          <MenuCard
            name={"Drtiče a gilotiny"}
            image={"./src/images/CardName/CardName4.jpg"}
          />
        </div>
        <div>
          <div className="Home__PaleTwo">
            <span>Čištění plastů</span>
          </div>
          <MenuCard
            name={"Linky pro praní a separaci sekundárních polymerů"}
            image={"./src/images/CardName/CardName5.jpg"}
          />
        </div>
        <div>
          <div className="Home__PaleThree">
            <span>Granulace plastů</span>
          </div>
          <MenuCard
            name={"Výroba polymerních granulí"}
            image={"./src/images/CardName/CardName6.jpg"}
          />
        </div>
      </div>
      <br />
      <br />
      <div className="Home__Column">
        <MenuCard
          name={"Zařízení na recyklaci PET"}
          image={"./src/images/CardName/CardName1.jpg"}
          text={
            "Naše společnost poskytuje komplexní řešení pro zpracování recyklovaných PET surovin. Nabízíme automatizované linky na třídění, čištění, mletí, sušení a granulaci PET."
          }
        />
        <MenuCard
          name={"Zařízení na recyklaci fóliových materiálů"}
          image={"./src/images/CardName/CardName2.jpg"}
          text={
            "Linky na klíč pro recyklaci big bagů, spunbond, stretch fólií a dalších obalů řeší problém recyklace použitých obalů."
          }
        />
        <MenuCard
          name={"Zařízení na recyklace tvrdých plastů"}
          image={"./src/images/CardName/CardName3.jpg"}
          text={
            "Komplexy na zpracování polyolefinů umožňují získávat suroviny z odpadních plastů a výrobních odpadů pro výrobu nových výrobků."
          }
        />
      </div>
      <br />
      <br />
      <div className="Home__Poly Home__Poly2">Průzkum zájmu</div>
      <div className="Home__Paragraph">
        Naše společnost je připravena navrhnout Vám nová technologická řešení
        pro zpracování polymerů. Zajímá nás Váš názor na to, s jakým druhem
        zařízení byste chtěli pracovat.
      </div>
      <div className="Home__PicturesCont">
        <img
          className="Home__Picture"
          src="./src/images/ForWeb/ForWeb1.jpg"
          alt="drtic"
        />
        <div className="Home__Button">Zúčastněte se</div>
      </div>
      <br />
      <br />
      <BenefitsCard />
      <div className="Home__ElementPoly">
        <div className="Home__Element">Naše vybavení dělá svět čistším!</div>
      </div>
      <Inputs />
      <br />
      <div className="Home__Poly">
        Naše zařízení fungují ve více než 20 státech
      </div>
      <GoogleMap />
    </div>
  );
};
