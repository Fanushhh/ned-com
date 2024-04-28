'use client'
import Image from 'next/image';
import {Swiper as SwiperComponent, SwiperSlide, onSlideChange} from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './Gallery.module.css';
import React from 'react';
import { Modal } from '../Modal/Modal';

export default function Gallery({images}){
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState(0);
    const swiperRef = React.useRef(null);

    React.useEffect(() => {
        if (swiperRef.current) {
          swiperRef.current.swiper.slideTo(currentImage);
        }
      }, [currentImage]);

    return(
        <section className={styles.galleryWrapper}>
            <SwiperComponent
                update
                parallax={true}
                zoom={true}
                modules={[Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true, type:'fraction'}}
                navigation
                onSlideChange={(e) => setCurrentImage(e.activeIndex)}
                ref={swiperRef}
                loop={true}
            >
                {images.map((image, index) => (
                    <SwiperSlide onClick={() => setIsModalOpen(true)} key={index}>
                        <Image className={styles.galleryImage} src={image} alt={`gallery-image-${index}`} width={938} height={527}/>
                        
                    </SwiperSlide>
                    
                ))}
                
            </SwiperComponent>
            
            {isModalOpen && <Modal images={images} currentImage={currentImage} setCurrentImage={setCurrentImage} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
        </section>
    )
}