import * as React from "react";
import "./Printer.less";
import { PrinterSpecies } from "./PrinterSpecies/PrinterSpecies";
import { Carousel } from "react-responsive-carousel";

const images6044 = [
  { url: "./src/images/Printer/S-6044/1.jpg" },
  { url: "./src/images/Printer/S-6044/2.jpg" },
  { url: "./src/images/Printer/S-6044/3.jpg" },
  { url: "./src/images/Printer/S-6044/4.jpg" },
];

const images6044Long = [{ url: "./src/images/Printer/S-6044Long/1.png" }];

const images6045 = [
  { url: "./src/images/Printer/S-6045/1.jpg" },
  { url: "./src/images/Printer/S-6045/2.jpg" },
];

const images6044LongTwo = [{ url: "./src/images/Printer/S-6044LongTwo/1.jpg" }];

const images300 = [
  { url: "./src/images/Printer/S-300/1.jpg" },
  { url: "./src/images/Printer/S-300/2.jpeg" },
  { url: "./src/images/Printer/S-300/3.jpg" },
  { url: "./src/images/Printer/S-300/4.jpg" },
  { url: "./src/images/Printer/S-300/5.jpg" },
];

const images500 = [{ url: "./src/images/Printer/S-500/1.jpg" }];

//       <Carousel showStatus={false} showThumbs={false}>
//         {images.map((image) => {
//           return (
//             <div>
//               <img src={image.url} />
//             </div>
//           );
//         })}
//       </Carousel>

export const Printer = () => {
  return (
    <div className="Printer">
      <h1>Betonové 3D-tiskárny</h1>
      <div className="Printer__Species">
        <h2 className="Printer__Easy">Tiskárny pro dílenskou výrobu</h2>
        <PrinterSpecies
          name="S-6044"
          area="tiskové rozměry: 3,5 х 3,1 х 1 m"
          description="Nejekonomičtější model stavební 3D tiskárny, který vám umožňuje organizovat výrobu celé řady malých architektonických prvků (venkovní nábytek, ploty, betonové výrobky, architektonické prvky, výrobky pro terénní úpravy atd). Jedná se o podnikateli a malými podniky velmi žádaný model a příležitost, jak s malými náklady vstoupit na trh a zavést si vlastní stavební výrobu 3D výrobků."
          descTwo="Stavební tiskárna АМТ S-6044 je nejkompaktnější z modelové řady 3D tiskáren. Patří do kategorie profesionálního vybavení. Všechny komponenty 3D tiskárny jsou vysoce kvalitní a zařízení je určeno pro vysoké zatížení. Stavební 3D tiskárna S-6044 je konstrukčně jednoduché, ale extrémně spolehlivé zařízení. Záruční doba je 12 měsíců."
        />
        <Carousel showStatus={false} showThumbs={false}>
          {images6044.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
        <br />
        <br />
        <PrinterSpecies
          name="S-6044 LONG"
          area="tiskové rozměry: 7,5 х7,1 х 1,05 m"
          description="Nejekonomičtější model stavební 3D tiskárny s tiskovou plochou 53 m2, který vám umožňuje organizovat výrobu celé řady malých architektonických prvků (venkovní nábytek, ploty, betonové výrobky, architektonické prvky, výrobky pro terénní úpravy atd). Jedná se o podnikateli a malými podniky velmi žádaný model a příležitost, jak s malými náklady vstoupit na trh a zavést si vlastní stavební výrobu 3D výrobků."
          descTwo="Stavební tiskárna АМТ S-6044 je nejkompaktnější z modelové řady 3D tiskáren. Patří do kategorie profesionálního vybavení. Všechny komponenty 3D tiskárny jsou vysoce kvalitní a zařízení je určeno pro vysoké zatížení. Stavební 3D tiskárna S-6044 je konstrukčně jednoduché, ale extrémně spolehlivé zařízení. Záruční doba je 12 měsíců."
        />
        <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
          {images6044Long.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
        <br />
        <br />
        <PrinterSpecies
          name="S-6045M"
          area="tiskové rozměry: 3,5 х 3,1 х 1 m"
          description="Model S-6045 M má reprezentativní výstavní vzhled a zvýšenou rychlost tisku. Doporučeno pro vzdělávací a výzkumné instituce, stavební laboratoře, stavební společnosti jako předváděcí zařízení pro demonstraci stavebního 3D tisku zákazníků. Dodává se se třemi různými tryskami tiskové hlavy."
          descTwo="Stavební 3D tiskárna АМТ S-6045 М je maloformátová portálová 3D tiskárna s vylepšeným designem. Od ostatních maloformátových modelů se liší rozložením pojezdu a vozíku, což umožnilo zvýšit rychlost tisku stavebních prvků se stabilní kvalitou."
        />
        <Carousel showStatus={false} showThumbs={false}>
          {images6045.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
        <br />
        <br />
        <br />
        <h2 className="Printer__Single">
          Tiskárny pro tisk jednopatrových budov
        </h2>
        <PrinterSpecies
          name="S-6044 LONG 2"
          area="tiskové rozměry: 7,5 х 7,1 х 2,7 m"
          description="Stavební 3D tiskárna středního formátu АМТ S-6044 LONG 2 vychází z 3D tiskárny S-6044 LONG, umožňuje tisk budov a staveb s plochou až do 53 m2. Dílenská verze 3D tiskárny АМТ S-6044 LONG 2 je zároveň nejlepší volbou pro organizaci celoroční výroby 3D betonových výrobků"
          descTwo="3D stavební tiskárna středního formátu АМТ S-6044 LONG 2 se dodává ve dvou verzích (dílenské a exteriérové provedení). Tiskárna umožňuje tisk budov a staveb betonem na základě o rozloze až 53 m2."
        />
        <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
          {images6044LongTwo.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
        <br />
        <br />
        <br />
        <h2 className="Printer__Double">
          Tiskárny pro tisk vícepodlažních budov
        </h2>
        <PrinterSpecies
          name="S-300"
          area="tiskové rozměry: 11,5 х 11 х 6 m"
          strongdesc="Stavební 3D tiskárny 3D S-300 umožňují tisk 1 - 2 podlažních budov vysokých až 6,0 m."
          description="Model АМТ S-300 je velkoformátová portálová 3D tiskárna. Výhodou této 3D tiskárny je vysoká produktivita práce (až 2,5 m3 zpracované stavební směsi za hodinu), velká pracovní plocha, jednoduchá údržba a ovládání. 3D tiskárna S-300 pro je určena pro tisk stavebních objektů o rozloze až 120 m2, přímo na vybudovaném základu. Tiskárna S-300 je v základní sestavě je vybavena elektrozdvihy s výškou 6 metrů, což umožňuje výstavbu 2patrových budov, a je vybavena tiskovou hlavou s přímým tokem stavební směsi pro rychlý tisk. Součástí základní sestavy je i zařízení pro výrobu a dopravu betonu, speciálně navržené pro tuto tiskárnu. Výkon zařízení a rychlost čerpání stavební směsi je koordinována s výkonem tiskové hlavy. Záruka na zařízení je 12 měsíců"
          descTwo="Základní sestava 3D tiskárny S-300 je připravena pro okamžité nasazení a obsahuje vysokotlaký čistič, a mísící zařízení s čerpadlem stavebních směsí. Sestava obsahuje řídicí počítač s předinstalovaným licencovaným softwarem. Všechny 3D tiskárny procházejí důslednou výrobní kontrolou a testováním ve výrobním závodě. Specialisté výrobce poskytují školení zaměřené na navrhování 3D stavebních prvků a objektů, přípravu stavebních směsí a ovládání tiskárny."
          descThree="Stavební tiskárna S-300 pracuje s transportním betonem i betonem ze suchých směsí, s cementem řady CEM 42,5 a 52,5, s velikostí kameniva až do 6 mm."
        />
        <Carousel showStatus={false} showThumbs={false}>
          {images300.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
        <br />
        <br />
        <PrinterSpecies
          name="S-500"
          area="tiskové rozměry: 11,5 х 11 х 15 m"
          strongdesc="Stavební 3D tiskárny 3D S-500 umožňují tisk budov až do výšky 80 m."
          description="Model АМТ S-500 je velkoformátová portálová 3D tiskárna. Výhodou této 3D tiskárny je vysoká produktivita práce (až 2,5 m3 zpracované stavební směsi za hodinu), velká pracovní plocha, jednoduchá údržba a ovládání. 3D tiskárna S-500 pro je určena pro tisk stavebních objektů o rozloze až 120 m2, na přání zákazníka lze pracovní plochu tiskárny zvětšit na 11 x 31 metrů, tj. až 340 m2. Tiskárna S-500 je v základní sestavě je vybavena elektrozdvihy s výškou 16 metrů, což umožňuje výstavbu 5-ti patrových budov. Výšku pracovní plochy tiskárny lze zvýšit až na 80 metrů (!). Elektrozdvihy se v takovém případě připevňují k fasádě v intervalech až 7 metrů a jsou instalovány na základně sestávající z podpěr opatřených šrouby, aby byla zachována stabilita celé konstrukce. je vybavena tiskovou hlavou s přímým tokem stavební směsi pro rychlý tisk. Součástí základní sestavy je i zařízení pro výrobu a dopravu betonu, speciálně navržené pro tuto tiskárnu. Výkon zařízení a rychlost čerpání stavební směsi je koordinována s výkonem tiskové hlavy. Záruka na zařízení je 12 měsíců"
          descTwo="Základní sestava 3D tiskárny S-500 je připravena pro okamžité nasazení a obsahuje vysokotlaký čistič, a mísící zařízení s čerpadlem stavebních směsí. Sestava obsahuje řídicí počítač s předinstalovaným licencovaným softwarem. Všechny 3D tiskárny procházejí důslednou výrobní kontrolou a testováním ve výrobním závodě. Specialisté výrobce poskytují školení zaměřené na navrhování 3D stavebních prvků a objektů, přípravu stavebních směsí a ovládání tiskárny."
          descThree="Stavební tiskárna S-500 pracuje s transportním betonem i betonem ze suchých směsí, s cementem řady CEM 42,5 a 52,5, s velikostí kameniva až do 6 mm."
        />
        <Carousel showStatus={false} showThumbs={false} showIndicators={false}>
          {images500.map((image) => {
            return (
              <div>
                <img src={image.url} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <br />
      <br />
      <br />
      <div className="Printer__Company">
        <strong>
          <p>Společnost HORTEN je distributorem stavebních tiskáren AMT</p>
        </strong>
        <p>
          Stavební 3D tiskárny jsou počítačem řízená zařízení pro vrstvené
          ukládání betonu nebo směsí na bázi betonu a jiných stavebních
          materiálů a směsí. Výsledkem 3D tisku stavebních směsí jsou stavební
          objekty jako například domy nebo jejich části (stěnové a stropní
          prvky) a různé architektonické prvky ve skutečné velikosti. Tiskárna
          netiskne celý objem stěn jako najednou, ale jen vnější a vnitřní stěny
          – bednění o tloušťce 3 až 8 cm s možnými výztuhami. Prázdný prostor
          mezi stěnami se vylívá výplňovým materiálem podle účelu použití
          stavební konstrukce.
        </p>
        <p>
          Tiskneme s betonem, geopolymerem, sádrou, hlínou a s pomocí dalších
          speciálních směsí
        </p>
      </div>
    </div>
  );
};
