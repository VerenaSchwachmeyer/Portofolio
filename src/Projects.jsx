import React from "react";
import ProjectTile from "./ProjectTile";

function Projects() {
  //This list of projects could be "outcsourced" into a separate file in the future
  // the current "projects" are still crappy and need to be replaced with bigger and more complex projects!
  const projects = [
    {
      id: 1,
      name: "Blog",
      link: "https://verenaschwachmeyer.github.io/Blog/",
      src: "/images/Blog.png",
      alt: "Screenshot of Blog",
      caption: "a small blog example",
    },
    {
      id: 2,
      name: "memorandum",
      link: "https://michagottschalk.github.io/notizzettel_2/",
      src: "/images/Notizzettel.png",
      alt: "Screenshot of To-Do-List",
      caption: "make notes on-the-fly, no biggie",
    },
    {
      id: 1,
      name: "Blog",
      link: "https://verenaschwachmeyer.github.io/Blog/",
      src: "/images/Blog.png",
      alt: "Screenshot of Blog",
      caption: "a small blog example",
    },
  ];

  return (
    <section>
      <h2 className="sectionTitle">Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          return <ProjectTile {...project} key={project.id} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
