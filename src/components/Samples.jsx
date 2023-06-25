import React from "react";
import CodingSampleTile from "./CodingSampleTile";

function Samples() {
  const samples = [
    {
      id: 3,
      name: "Meme Generator",
      linkSite: "https://charming-pothos-c44bc4.netlify.app/",
      linkRepo: "https://github.com/VerenaSchwachmeyer/Meme-Generator",
      src: "/images/Screenshot_MemeGenerator-1.jpg",
      alt: "Screenshot of Website",
      caption:
        "Create your own memes using React JS, REST-API and upload/save file functions.",
    },
    {
      id: 4,
      name: `To-Do List "Memorandum"`,
      linkSite: "https://mariamac92.github.io/Notizzettel/",
      linkRepo: "https://github.com/MariamaC92/Notizzettel/",
      src: "/images/Screenshot_Memorandum-1.jpg",
      alt: "Screenshot of Blog",
      caption:
        "Make notes on the fly, no biggie. Using HTML, CSS and Vanilla Javascript.",
    },
    // {
    //   id: 5,
    //   name: "Blog",
    //   link: "https://verenaschwachmeyer.github.io/Blog/",
    //   src: "/images/Blog.png",
    //   alt: "Screenshot of Blog",
    //   caption:
    //     "Just a small blog example using plain HTML and CSS including responsive design. ",
    // },
  ];

  return (
    <section id="samples" className="primary">
      <div className="content">
        <h2 className="sectionTitle">Coding Samples</h2>

        <div className="sampleContainer">
          {samples.map((project) => {
            return <CodingSampleTile {...project} key={project.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Samples;
