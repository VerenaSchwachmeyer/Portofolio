import React from "react";
// import Image from "next/image";
import styles from "./carouselitem.module.css";

function CarouselItem({ item }) {
  return (
    <div className={styles.carouselItemContainer} tabIndex={0}>
      {/* <Link href="/" target_="_blank" rel="noreferrer">
        <FaCirclePlay className={styles.playButton} />
      </Link> */}
      <div className={styles.imageContainer}>
        <img className={styles.display} src={item.imageurl} alt="" />
        <div className={styles.textContainer}>
          <div className={styles.projekt}>{item.projekt}</div>
          <div className={styles.titel}>{item.titel}</div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
