import React from "react";
import CodingSampleTile from "./CodingSampleTile";
import { useTranslation } from "react-i18next";

function Samples() {
  const { t } = useTranslation();

  const samples = [
    {
      id: 1,
      name: t("samples.scrollh3"),
      linkSite: "https://verenaschwachmeyer.github.io/Scroll-Effect/",
      linkRepo: "https://github.com/VerenaSchwachmeyer/Scroll-Effect",
      src: "/images/Screenshot_Scroll-Effect.webp",
      alt: "Screenshot of Scroll-Effect",
      caption: t("samples.scrolltext"),
    },
    {
      id: 2,
      name: "Meme Generator",
      linkSite: "https://charming-pothos-c44bc4.netlify.app/",
      linkRepo: "https://github.com/VerenaSchwachmeyer/Meme-Generator",
      src: "/images/Screenshot_MemeGenerator-2.webp",
      alt: "Screenshot of Meme Generator",
      caption: t("samples.memetext"),
    },
    {
      id: 3,
      name: t("samples.todoH3"),
      linkSite: "https://mariamac92.github.io/Notizzettel/",
      linkRepo: "https://github.com/MariamaC92/Notizzettel/",
      src: "/images/Screenshot_Memorandum-1.webp",
      alt: "Screenshot of To-Do-List",
      caption: t("samples.todotext"),
    },
  ];

  return (
    <section id="samples" className="primary">
      <div className="content">
        <h2 className="sectionTitle">{t("samples.heading")}</h2>

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
