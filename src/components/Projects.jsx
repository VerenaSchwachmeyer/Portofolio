import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Downtown1 from "./Projects/Downtown/Downtown1";
import Downtown2 from "./Projects/Downtown/Downtown2";
import Downtown3 from "./Projects/Downtown/Downtown3";
import Downtown4 from "./Projects/Downtown/Downtown4";
import Linov1 from "./Projects/Linov/Linov1";

function Projects() {
  //This list of projects could be "outsourced" into a separate file or even database in the future
  // the current "projects" are still crappy and need to be replaced with bigger and more complex projects!

  // {
  //   id: 2,
  //   logo: "/images/apple-transparent.png",
  //   name: "Cider Maker",
  //   link: false,
  //   src: "/images/Cider-Maker-3.png",
  //   alt: "Screenshot of App",
  //   caption: (
  //     <p>
  //       Upcoming: A regional cider maker spends way too much time answering
  //       phone calls of the customers to schedule an appointment for the apple
  //       juice making. The time spent on the phone is lacking elsewhere in the
  //       process of the company.
  //       <br></br> <br></br>
  //       This website is being designed with an interactive calendar that will
  //       make it easy to book and manage appointments online. This way, the
  //       person and phone will not be blocked the whole day anymore. Used
  //       Tools: React, a calendar tool, SQL, Leaflet, and more. Link coming
  //       soon.
  //     </p>
  //     // Please note: the website linked here is not the one of the actual cider maker but a prototype instead
  //   ),
  // },
  //];

  // const handleDragStart = (e) => e.preventDefault();

  const items = [<Downtown1 />, <Downtown2 />, <Downtown4 />, <Downtown3 />];

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
  };
  return (
    <section id="projects" className="primary">
      <div className="content">
        <h2 className="sectionTitle">My Work</h2>

        <AliceCarousel
          role="list"
          aria-label="Project named Downtown"
          mouseTracking
          // infinite
          autowidth
          items={items}
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
