"use client";
import React, { useState, useEffect } from "react";
import Handy from "../Cards/Handy";
import CarouselItem from "../Cards/CarouselItem";
import styles from "./carousel.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Carousel({ data }) {
  const [slide, setSlide] = useState(1);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {}, [slide]);

  const handleSwipeStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleSwipeMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleSwipeEnd = () => {
    if (touchStartX - touchEndX > 50) {
      // Swiped left
      if (slide < data.length) {
        setSlide((prevSlide) => prevSlide + 1);
      } else {
        setSlide(1);
      }
    }

    if (touchStartX - touchEndX < -50) {
      // Swiped right
      if (slide > 1) {
        setSlide((prevSlide) => prevSlide - 1);
      } else {
        setSlide(data.length);
      }
    }
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        <button
          className={styles.carouselButton}
          onClick={() => {
            if (slide > 1) {
              setSlide((prevSlide) => Math.max(1, prevSlide - 1));
            } else if (slide === 1) {
              setSlide(data.length);
            }
          }}
        >
          <IoIosArrowBack className={styles.icons} />
        </button>
        <div
          className={styles.carousel}
          tabIndex={0}
          onTouchStart={handleSwipeStart}
          onTouchMove={handleSwipeMove}
          onTouchEnd={handleSwipeEnd}
        >
          {slide &&
            data.map((el) => {
              return el.id === slide ? (
                <CarouselItem key={el.id} item={el} />
              ) : null;
            })}
        </div>

        <button
          className={styles.carouselButton}
          onClick={() => {
            if (slide < data.length) {
              setSlide((prevSlide) => Math.max(1, prevSlide + 1));
            } else if (slide === data.length) {
              setSlide(1);
            }
          }}
        >
          <IoIosArrowForward className={styles.icons} />
        </button>
      </div>
      <div className={styles.dotContainer}>
        {data &&
          data.map((el, index) => {
            return (
              <button
                key={el.id}
                className={
                  slide === el.id
                    ? `${styles.dot} ${styles.active}`
                    : styles.dot
                }
                onClick={() => {
                  setSlide(el.id);
                }}
              ></button>
            );
          })}
      </div>
    </>
  );
}

export default Carousel;
