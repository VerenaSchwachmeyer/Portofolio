import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Flowerbauer1 from "./Projects/Flowerbauer/Flowerbauer1";
import Flowerbauer2 from "./Projects/Flowerbauer/Flowerbauer2";
import Flowerbauer3 from "./Projects/Flowerbauer/Flowerbauer3";
import Flowerbauer4 from "./Projects/Flowerbauer/Flowerbauer4";
import Linov1 from "./Projects/Linov/Linov1";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  // const handleDragStart = (e) => e.preventDefault();

  const itemsFB = [
    <Flowerbauer1 />,
    <Flowerbauer2 />,
    <Flowerbauer3 />,
    <Flowerbauer4 />,
  ];

  // const itemsDT = [<Downtown1 />, <Downtown2 />, <Downtown3 />, <Downtown4 />];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <section id="projects" className="primary">
      <div className="content">
        <h2 className="sectionTitle">{t("projects.heading")}</h2>
        <p className="aboutmeText">{t("projects.text")}</p>
        {/* <AliceCarousel
          role="list"
          aria-label="Project named Downtown"
          mouseTracking
          infinite
          autowidth
          items={itemsDT}
          paddingLeftt={5}
          paddingRight={0}
          responsive={responsive}
          itemsFit="fill"
          renderPrevButton={() => {
            return (
              <GrPrevious
                className="carouselPrevButton"
                role="button"
                aria-label="go to previous slide"
              />
            );
          }}
          renderNextButton={() => {
            return (
              <GrNext
                className="carouselNextButton"
                role="button"
                aria-label="go to next slide"
              />
            );
          }}
        /> */}
        <AliceCarousel
          role="list"
          aria-label="Project named Downtown"
          mouseTracking
          infinite
          autowidth
          items={itemsFB}
          paddingLeftt={5}
          paddingRight={0}
          responsive={responsive}
          itemsFit="fill"
          renderPrevButton={() => {
            return (
              <GrPrevious
                className="carouselPrevButton"
                role="button"
                aria-label="go to previous slide"
              />
            );
          }}
          renderNextButton={() => {
            return (
              <GrNext
                className="carouselNextButton"
                role="button"
                aria-label="go to next slide"
              />
            );
          }}
        />
        <Linov1 />
      </div>
    </section>
  );
}

export default Projects;
