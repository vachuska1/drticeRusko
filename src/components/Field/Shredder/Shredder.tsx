import * as React from "react";
import "./Shredder.less";
import { ShredderSpecies } from "./ShredderSpecies/ShredderSpecies";
import { Carousel } from "react-responsive-carousel";
import { ShredderSpeciesSec } from "./ShredderSpeciesSec/ShredderSpeciesSec";
import { ShredderSpeciesThr } from "./ShredderSpeciesThr/ShredderSpeciesThr";

const images800 = [
  { url: "./src/images/Shredder/Slu800/1.jpg" },
  { url: "./src/images/Shredder/Slu800/2.jpg" },
  { url: "./src/images/Shredder/Slu800/3.jpg" },
  { url: "./src/images/Shredder/Slu800/4.jpg" },
];
const images2000 = [
  { url: "./src/images/Shredder/Slu2000/1.jpg" },
  { url: "./src/images/Shredder/Slu2000/2.jpg" },
  { url: "./src/images/Shredder/Slu2000/3.jpg" },
  { url: "./src/images/Shredder/Slu2000/4.jpg" },
  { url: "./src/images/Shredder/Slu2000/5.jpg" },
  { url: "./src/images/Shredder/Slu2000/6.jpg" },
];
const images1550 = [
  { url: "./src/images/Shredder/Slf1550/1.jpg" },
  { url: "./src/images/Shredder/Slf1550/2.jpg" },
  { url: "./src/images/Shredder/Slf1550/3.jpg" },
  { url: "./src/images/Shredder/Slf1550/4.jpg" },
];

const images1600 = [
  { url: "./src/images/Shredder/Slu1600/1.jpg" },
  { url: "./src/images/Shredder/Slu1600/2.jpg" },
  { url: "./src/images/Shredder/Slu1600/3.jpg" },
  { url: "./src/images/Shredder/Slu1600/4.jpg" },
];
const images330pet = [
  { url: "./src/images/Shredder/Slu330Pet/1.jpg" },
  { url: "./src/images/Shredder/Slu330Pet/2.jpg" },
  { url: "./src/images/Shredder/Slu330Pet/3.jpg" },
  { url: "./src/images/Shredder/Slu330Pet/4.jpg" },
];
const images1600pet = [
  { url: "./src/images/Shredder/Slu1600Pet/1.jpg" },
  { url: "./src/images/Shredder/Slu1600Pet/2.jpg" },
  { url: "./src/images/Shredder/Slu1600Pet/3.jpg" },
  { url: "./src/images/Shredder/Slu1600Pet/4.jpg" },
];
const images750pet = [
  { url: "./src/images/Shredder/Slu750pet/1.jpg" },
  { url: "./src/images/Shredder/Slu750pet/2.jpg" },
  { url: "./src/images/Shredder/Slu750pet/3.jpg" },
  { url: "./src/images/Shredder/Slu750pet/4.jpg" },
];
const images1000pet = [
  { url: "./src/images/Shredder/Slu1000Pet/1.png" },
  { url: "./src/images/Shredder/Slu1000Pet/2.png" },
  { url: "./src/images/Shredder/Slu1000Pet/3.png" },
  { url: "./src/images/Shredder/Slu1000Pet/4.png" },
];
const images1200 = [
  { url: "./src/images/Shredder/Sls1200/3.jpg" },
  { url: "./src/images/Shredder/Sls1200/4.jpg" },
];
const images900 = [{ url: "./src/images/Shredder/Sls900/1.jpg" }];

const images1000scut = [
  { url: "./src/images/Shredder/Scut1000/1.jpg" },
  { url: "./src/images/Shredder/Scut1000/2.jpg" },
];

const images1200sgl = [
  { url: "./src/images/Shredder/Sgl1200/1.jpg" },
  { url: "./src/images/Shredder/Sgl1200/2.jpg" },
  { url: "./src/images/Shredder/Sgl1200/3.jpg" },
  { url: "./src/images/Shredder/Sgl1200/4.jpg" },
];

export const Shredder = () => {
  return (
    <div className="Shredder">
      <h1 className="Shredder__Header">Drtiče a gilotinové řezačky</h1>
      <h1>Drtiče</h1>
      <h2>Drtiče fólií a tenkostěnných materiálů</h2>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-800"}
          desc={
            "Model drtiče má vysokou produktivitu díky speciální konfiguraci rotoru (52 řezných rovin) a silnému 55 kW elektromotoru. Je vybaven hydraulickým pohonem pro rychlý přístup k jednotlivým dílům a pohodlí obsluhy. Šikmé tělo mlecí komory zajišťuje efektivní zachycení surovin pro zpracování objemných kusů materiálu. Přívod vody do násypky předpírá surovinu a prodlužuje interval broušení nožů. Model je navržen jako univerzální řešení pro recyklaci plastů. Drtič je vhodný pro drcení fóliových materiálů (PP, PVD, PET), malých plastových dílů (kanystry, krabice, lahve, plechy) tloušťky stěny do 7 mm, drobné ingoty (max. 100x200x50 mm)."
          }
          perf={"800"}
          width={"780"}
          or={"Šířka"}
          otacky={"mm"}
          rozmer={"Průměr rotoru"}
          diam={"500"}
          perfeng={"55"}
          dimen={"1190 x 1550 x 3450"}
          mass={"3500"}
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images800.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images800.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images800.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-2000"}
          desc={
            "Drtič je určen pro mechanické drcení tenkostěnných materiálů (tvrdé plasty, PET lahve, fólie). Velikost suroviny na výstupu závisí na instalovaném sítu."
          }
          perf={"2000"}
          width={"1000"}
          or={"Šířka"}
          otacky={"mm"}
          rozmer={"Průměr rotoru"}
          diam={"500"}
          perfeng={"90-100"}
          dimen={"2610 x 3950 x 3590"}
          mass={"6000"}
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images2000.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images2000.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images2000.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLF-1550"}
          desc={
            "Drtič je určen pro drcení fólií a tenkostěnných materiálů (krabice, fólie, desky, PET lahve). Velikost výsledných frakcí je dána průměrem otvorů v sítu umístěném pod rotorem drtiče. Surovina je zakládána do násypky a padá na rotor. Surovina se drtí mezi rotujícími a stacionárními noži. Přiváděná voda, která omývá drcený materiál zároveň ochlazuje nože a snižuje hlučnost drtiče. Drcená surovina dále prochází otvory roštu a vstupuje do násypky. Drtič se ve své třídě vyznačuje kompaktními rozměry, dobrým výkonem a hospodárností."
          }
          perf={"800"}
          width={"780"}
          or={"Šířka"}
          otacky={"mm"}
          rozmer={"Průměr rotoru"}
          diam={"500"}
          perfeng={"55"}
          dimen={"1850 x 1580 x 3130"}
          mass={"2800"}
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1550.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1550.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1550.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-1600"}
          desc={
            "Drtič je vhodný pro drcení tenkostěnných plastových výrobků a plastových obalů. Suroviny se vkládají do násypky. Drcení probíhá mezi rotujícími lopatkami rotoru a stacionárními lopatkami včetně mytí surovin. Vysokokapacitní drtič s konfigurací rotačních nožů - `Cascade`. Vybaveno systémem předčištění. Použití vody snižuje hluk a zvyšuje životnost nožů."
          }
          perf={"600"}
          width={"560"}
          or={"Šířka"}
          otacky={"mm"}
          rozmer={"Průměr rotoru"}
          diam={"500"}
          perfeng={"55"}
          dimen={"1910 x 1550 x 3450"}
          mass={"3250"}
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1600.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1600.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1600.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <h2>Drtiče a drtiče PET lahví</h2>
      <div className="Shredder__Text">
        Každý rok se po celém světě vyrobí a prodá více než 500 miliard
        plastových nápojových lahví. PET láhev je nejběžnějším plastovým obalem.
        Plastové lahve svým množstvím výrazně předčily skleněné obaly, což velmi
        akutně nastolilo problém s jejich recyklací. Moderní technologie
        umožňují recyklaci použitých PET obalů k získání nových produktů.
        Důležitou fází zpracování plstů je drcení surovin. Po rozdrcení se
        původní obal změní na PET vločky (flex).
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-330PET"}
          desc={
            "Drtič je určen zejména pro drcení PET surovin. Vyniká svými kompaktními rozměry a nízkou spotřebou energie. PET blok zajišťuje efektivní podávání a drcení lahví. Tělo drtiče je zhotoveno z kalené a otěruvzdorné oceli HARDOX. Konstrukce krytu poskytuje optimální přístup pro čištění, výměnu čepele a údržbu rotační jednotky. Provedení s mytím umožňuje čištění zařízení a má pozitivní vliv na životnost nožů. Pro zpracování nejproblematičtějších plastů je k dispozici setrvačník. Konfigurace prvků rotorového bloku má šachovnicový šikmý řez, který zajišťuje hladší a tišší chod drtiče a snižuje vibrace během provozu. Zařízení má nože nové generace. Umístění ložisek zajišťuje jejich izolaci od drtící komory pro zajištění požadovaných pracovních podmínek. Instalovaná čidla pro sledování teploty ložisek umožňují bezpečný a bezproblémový provoz po celou dobu provozu."
          }
          perf={"300"}
          width={"650"}
          or={"Otáčky"}
          otacky={"ot/min"}
          rozmer={"Rozměr vstupního otvoru"}
          diam={"620 x 720"}
          perfeng={"22"}
          dimen={"1190 x 1700 x 3430"}
          mass={"1760"}
          props={"Vlastnosti zařízení"}
          props1={
            "Zvýšená odolnost proti opotřebení a nízká energetická náročnost"
          }
          props2={"Malý, kompaktní design"}
          props3={"Snadný přístup ke všem prvkům zařízení při jeho údržbě"}
          props4={"Snadné ovládání"}
        />
        <div className="Shredder__CarouselDestOne">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images330pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images330pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images330pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-1660PET"}
          desc={
            "Plasty se vkládají do násypky, která zajišťuje, že lopatky rotoru zachycují materiál co nejefektivněji a zabraňují zpětnému vrhání materiálu. Ve skříni rotoru jsou drceny mezi rotujícími lopatkami rotoru a stacionárními lopatkami, při mytí surovin. Drcená surovina dále prochází otvory síta a vstupuje do zásobníku drti."
          }
          perf={"600"}
          width={"560"}
          or={"Otáčky"}
          otacky={"ot/min"}
          rozmer={"Rozměr vstupního otvoru"}
          diam={"790 x 580"}
          perfeng={"55"}
          dimen={"1910 x 1550 x 3450"}
          mass={"3250"}
          props={"Vlastnosti zařízení"}
          props1={
            "Vysokokapacitní drtič s mytím a konfigurací rotačních nožů - `Cascade`."
          }
          props2={"Zařízení je vybaveno systémem předčištění."}
          props3={"Použití vody snižuje hluk a zvyšuje životnost nožů."}
          props4={
            "Drtič SLU-1600PET se v této třídě drtičů  vyznačuje kompaktními rozměry, dobrým výkonem a hospodárností"
          }
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1600pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTabOne">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1600pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1600pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-750PET"}
          desc={
            "Drtič SLU-750 je určen pro drcení zejména PET lahví a fóliových materiálů. Láhve se plní do speciálně navržené vhozové násypky tak, aby lopatky rotoru zachytily materiál co nejúčinněji a zabránily zpětnému vymrštění materiálu. Ve skříni rotoru jsou drceny mezi rotujícími lopatkami rotoru a stacionárními lopatkami, stejně jako mytí surovin. Dále drcená surovina prochází otvory roštu a vstupuje do vykládacího bunkru."
          }
          perf={"800"}
          width={"840"}
          or={"Otáčky"}
          otacky={"ot/min"}
          rozmer={"Rozměr vstupního otvoru"}
          diam={"800 x 900"}
          perfeng={"55"}
          dimen={"1850 x 1400 x 3100"}
          mass={"4150"}
          props={"Vlastnosti zařízení"}
          props1={"Velký vsupní otvor (900 x 800 mm)"}
          props2={"Nadrozměrný průměr rotoru (500 mm)"}
          props3={"Vybaven systémem předmytí"}
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images750pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images750pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images750pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpecies
          model={"Model SLU-1000PET"}
          desc={
            "Drtič je určen pro mechanické drcení tenkostěnných materiálů (tvrdé plasty, PET lahve, fólie). Velikost suroviny na výstupu závisí na instalovaném sítu."
          }
          perf={"1000"}
          width={"1000"}
          or={"D0lka"}
          otacky={"mm"}
          rozmer={"Průměr rotoru"}
          diam={"650"}
          perfeng={"93,7"}
          dimen={"5000 x 2050 x 3000"}
          mass={"7500"}
        />
        <div className="Shredder__CarouselDest">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1000pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1000pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1000pet.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <h2>Drtiče pro napěněné plasty</h2>
      <div className="Shredder__Text">
        Drtiče řady SLS byly navrženy speciálně pro pěnové plošné materiály,
        jako je expandovaný extrudovaný polystyren (XPS). Konstrukce drtičů
        umožňuje drcení desek až do velikosti 3000x1200x200mm. Drtiče SLS-900 a
        SLS-1200 se liší šířkou dopravníkového pásu a rotorové jednotky, výkonem
        motoru a produktivitou. Výchozí materiál je umístěn na pásový dopravník,
        přes který je přiváděn k rotoru drtiče. V závislosti na zatížení motoru
        se automaticky nastavuje rychlost posuvu materiálu. Mletí probíhá mezi
        rotačními a stacionárními noži umístěnými na těle drtiče. Velikost
        konečné nadrcené frakce závisí na průměru otvorů síta, které je umístěné
        na dně drtící komory. Pro dopravu nadrceného materiálu se používá
        pneumatická doprava. Model SLS-1200
      </div>
      <div className="Shredder__Species">
        <ShredderSpeciesSec
          model={"Model SLS-1200"}
          desc={
            "Drtič SLS-1200 je určen pro drcení desek z extrudovaného polystyrenu (XPS) a dalších pěnových deskových materiálů. Drtič je vybaven pásovým dopravníkem pro podávání suroviny. Vysoké produktivita je dosažena výkonným motorem, velkou šířkou dopravníku, tlakovou podávací jednotkou, rotorem se zvětšeným průměrem (560 mm) a šířkou (1300 mm)."
          }
          perf={"560"}
          width={"490"}
          diam={"1300"}
          perfeng={"91,5"}
          dimen={"3200 x 1990 x 2040"}
          mass={"4500"}
          props1={"Model je určen pro plošné celopěnové materiály"}
          props2={"Kvalitní konstrukce podávacího dopravníku"}
          props3={"Mechanismus nastavitelného přítlaku"}
          props4={"Prodloužená délka rotoru"}
          props5={"Vysoký výkon"}
          props6={"Dodávka s dotykovým ovládacím panelem"}
        />
        <div className="Shredder__CarouselDestOne">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1200.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1200.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1200.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpeciesSec
          model={"Model SLS-900"}
          desc={
            "Drtič SLS-900 je určen pro drcení desek z extrudovaného polystyrenu (XPS) a dalších pěnových deskových materiálů. Surovina je umístěna na pásový dopravník, přes který je dopravována do drtící komory. V závislosti na zatížení motoru se automaticky nastavuje rychlost posuvu materiálu. Mletí probíhá mezi noži umístěnými na rotoru (rotoru) a pevnými noži umístěnými na těle drtiče. Surovina se drtí, dokud není prosévána otvory frakčního roštu umístěného na dně drtící komory. Pro vykládku se používá drcená surovinapneumatická doprava."
          }
          perf={"560"}
          width={"490"}
          diam={"1000"}
          perfeng={"76,5"}
          dimen={"2670 x 1800 x 2040"}
          mass={"3800"}
          props1={"Model je určen pro plošné celopěnové materiály"}
          props2={"Kvalitní konstrukce podávacího dopravníku"}
          props3={"Mechanismus nastavitelného přítlaku"}
          props4={"Vysoký výkon"}
          props5={"Dodávka s dotykovým ovládacím panelem"}
        />
        <div className="Shredder__CarouselDestOne">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images900.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images900.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images900.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <h1>Gilotinové řezačky</h1>
      <div className="Shredder__Species">
        <ShredderSpeciesThr
          model={"Model S-CUT-1000"}
          desc={
            "Gilotinová řezačka je vybavena pásovým dopravníkem a je určena pro skartování fólií a tkaných materiálů na rovnoměrné pásy. Tento model lze zabudovat do linky na granulaci plastů nebo jiné pro zpracování odpadních plastů. Surovina je umístěna na pásový dopravník, kterým je dopravována k přítlačným a podávacím válcům. Válce zhutňují surovinu a přivádějí ji ke stacionárnímu noži. Pohyblivý nůž pohybující se shora dolů odřízne pruh suroviny a vysype jej na přední vykládací plochu. Nastavení šířky řezaného materiálu je řízeno rychlostí pásového dopravníku a válečků."
          }
          a={"Šířka řezaných pásů"}
          perf={"20-100"}
          b={"Šířka řezu"}
          width={"600"}
          c={"Počet řezů za minutu "}
          diam={"200"}
          perfeng={"27"}
          dimen={"4250 x 1970 x 1450"}
          mass={"2560"}
          props1={"Kapacita až 1000 kg/h"}
          props2={"Nízká spotřeba energie oproti drtičům"}
          props3={"Zařízení je možné začlenit do automatizované linky"}
          props4={"Detektor kovů eliminuje vnikání kovů"}
          props5={"Možnost ručního ovládání"}
          props6={"Šířka řezu a výkon josu nastavitelné v reálném čase"}
        />
        <div className="Shredder__CarouselDestOne">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1000scut.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1000scut.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1000scut.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="Shredder__Species">
        <ShredderSpeciesThr
          model={"Model S-GL-1200"}
          desc={
            "Průmyslová hydraulická gilotinová řezačka rozřeže velké předměty na dvě části. Vysoká síla generovaná hydraulickou jednotkou umožňuje řezání balíků, ingotů a svitků o objemu větším než 1 m³ v jedné operaci. Tento model je vhodný pro předběžné mletí velkých surovin pro další zpracování."
          }
          a={"Maximální délka řezaného předmětu"}
          perf={"1100"}
          b={"Maximální průměr řezaného předmětu"}
          width={"600"}
          perfeng={"11"}
          dimen={"2360 x 2050 x 4215"}
          mass={"2560"}
          props1={"Dva samostatné hydraulické válce zabraňují vychýlení nožů"}
          props2={"Dobré pro řezání válcových materiálů"}
          props3={"Řeže předměty větší než 1 m³"}
          props4={
            "Geometrie rámu je navržena pro snadné nakládání a manipulaci"
          }
          props5={
            "Zvedací mechanismus zakrytování přispívá k bezpečné a efektivní práci"
          }
        />
        <div className="Shredder__CarouselDestOne">
          <Carousel
            width="20vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1200sgl.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselTab">
          <Carousel
            width="30vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1200sgl.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="Shredder__CarouselMob">
          <Carousel
            width="70vw"
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {images1200sgl.map((image) => {
              return (
                <div>
                  <img src={image.url} />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
