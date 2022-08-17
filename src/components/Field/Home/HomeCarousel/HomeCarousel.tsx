import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./ReactSlider.less";
import { useState, useEffect } from "react";

const images = [
  { url: "./src/images/Carousel/Carousel1.jpg" },
  { url: "./src/images/Carousel/Carousel2.jpg" },
  { url: "./src/images/Carousel/Carousel3.jpg" },
  { url: "./src/images/Carousel/Carousel4.jpg" },
];
const imagesmob = [
  { url: "./src/images/Carousel/Carousel1mob.jpg" },
  { url: "./src/images/Carousel/Carousel2mob.jpg" },
  { url: "./src/images/Carousel/Carousel3mob.jpg" },
  { url: "./src/images/Carousel/Carousel4mob.jpg" },
];

export const HomeCarousel = () => {
  const [destkop, setDestkop] = useState<boolean>(false);

  useEffect(() => {
    handleResizeViewport();
  }, []);
  window.addEventListener("resize", () => {
    handleResizeViewport();
  });

  const handleResizeViewport = () => {
    setDestkop(document.body.offsetWidth > 768);
  };

  return destkop ? (
    <div className="HomeCarousel">
      <Carousel
        width="50vw"
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
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
  ) : (
    <div className="HomeCarouselMob">
      <Carousel
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
      >
        {imagesmob.map((imageMob) => {
          return (
            <div>
              <img src={imageMob.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
