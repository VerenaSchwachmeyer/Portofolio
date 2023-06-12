import React from "react";
import CodingSampleTile from "./CodingSampleTile";

function Samples() {
  const samples = [
    {
      id: 3,
      name: "Meme Generator",
      link: "https://charming-pothos-c44bc4.netlify.app/",
      src: "/images/Meme-Generator.png",
      alt: "Screenshot of Website",
      caption:
        "Small app to create own memes using React, REST-API and upload/save file functions.",
    },
    {
      id: 4,
      name: "To-Do List",
      link: "https://verenaschwachmeyer.github.io/Blog/",
      src: "/images/Notizzettel.png",
      alt: "Screenshot of Blog",
      caption:
        "Make notes on the fly, no biggie. Using HTML, Vanilla CSS and Javascript.",
    },
    {
      id: 5,
      name: "Blog",
      link: "https://verenaschwachmeyer.github.io/Blog/",
      src: "/images/Blog.png",
      alt: "Screenshot of Blog",
      caption:
        "Just a small blog example using plain HTML and CSS including responsive design. ",
    },
  ];

  return (
    <section>
      <h2 className="sectionTitle">Coding Samples</h2>

      <div className="samples">
        {samples.map((project) => {
          return <CodingSampleTile {...project} key={project.id} />;
        })}
      </div>
    </section>
  );
}

export default Samples;
