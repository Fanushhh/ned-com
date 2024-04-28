"use client";

import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import styles from "./Modal.module.css";
import React, { useEffect, useRef } from "react";

export const Modal = ({ images, setIsModalOpen, currentImage, setCurrentImage }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleModalClose = (e) => {
        if (e.target === modalRef.current) {
          document.body.style.overflow = "auto";
          setIsModalOpen(false);
        }
      };
    
    document.addEventListener("click", handleModalClose);

    return () => {
      document.removeEventListener("click", handleModalClose);
    };
  }, []);
  if (setIsModalOpen) {
    document.body.style.overflow = "hidden";
  }

  return (
    <section className={styles.modalWrapper} ref={modalRef}>
    <button className={styles.modalCloseButton} onClick={() => {
        document.body.style.overflow = "auto";
        setIsModalOpen(false);
      
    }}>Inchide</button>
      <div className={styles.modalContainer}>
        <SwiperComponent
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true, type: "fraction" }}
          navigation
          initialSlide={currentImage}
          onSlideChange={(e) => setCurrentImage(e.activeIndex)}
          update
          
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className={styles.modalImage}
                src={image}
                alt={`gallery-image-${index}`}
                width={1200}
                height={750}
              />
            </SwiperSlide>
          ))}
        </SwiperComponent>
      </div>
    </section>
  );
};
