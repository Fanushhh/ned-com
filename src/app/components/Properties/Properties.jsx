"use client";
import Image from "next/image";
import styles from "./Properties.module.css";
import React, { useRef } from "react";
import Link from "next/link";
import { useContext, useEffect } from "react";
import { FilterContext } from "@/app/providers/FilterProvider/FilterProvider";
import { sortFunction, filterProperties } from "@/app/lib/helpers";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useInView, LayoutGroup } from "framer-motion";
export default function Properties({ properties, isHero }) {

  const { filter, isFiltered, heroPropertyRef, sortBy,setFilter, setPropertyCount } =
  useContext(FilterContext);
  
  const filteredProperties = filterProperties(properties, filter);

  let newProperties = isFiltered ? filteredProperties : properties;

  if (sortBy.length > 0) {
    newProperties = sortFunction(newProperties, sortBy);
  }
  useEffect(() => {
    if (isFiltered) {
      setPropertyCount(filteredProperties.length);
    } else {
      setPropertyCount(properties.length);
    }
  }, [filteredProperties, properties]);
  const propRef = useRef(null);
  const isInView = useInView(propRef);

  if ((!isHero && filteredProperties.length === 0) || !properties) {
    return <p>No properties found.</p>;
  }
  

  if (isHero) {
    return (
      <section
        id="properties"
        className={styles.propertiesWrapper}
        ref={heroPropertyRef}
      >
        {properties.map((property, index) => {
          return (
            <Link
              href={`pages/proprietati/${property.id}`}
              key={property.id}
              className={styles.propertyCard}
            >
              <motion.div
                ref={propRef}
                initial={{ y: 300, opacity: 0 }}
                transition={{ duration: .5, delay: 0.5 * index }}
                animate={isInView && { y: 0, opacity: 1 }}
                key={property.id}
                
              >
                <Image
                  style={{ objectFit: "cover" }}
                  src={property.resized_images[0]}
                  alt={property.title}
                  width={316}
                  height={200}
                />

                <motion.div
                  
                  className={styles.propertyDesc}
                >
                  <h2 className={styles.propertyTitle}>{property.title}</h2>
                  <p className={styles.price}>{property.verbose_price}</p>
                  <p className={styles.description}>
                    {property.city}, {property.region}{" "}
                    {property.building_construction_year}{" "}
                    {property.surface_useable
                      ? property.surface_useable
                      : property.surface_land}
                    mp
                  </p>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}
      </section>
    );
  } else {
    return (
      <div className={styles.propertiesList}>
      <LayoutGroup>
        {newProperties.map((property) => {
          return (
            <motion.div layout="position" layoutId={property.id} animate={{y:0}} initial={{y:100}} key={property.id} className={styles.propertyWrapper}>
              <Link
                href={`proprietati/${property.id}`}
                
                
                className={styles.imageLink}
              >
                <SwiperComponent
                  navigation={true}
                  pagination={{ type: "fraction" }}
                  modules={[Navigation, Pagination]}
                  loop={property.resized_images.length > 1}
                >
                  {property.resized_images.map((image, index) => {
                    while (index < 10) {
                      return (
                        <SwiperSlide key={index}>
                          <Image
                            style={{ objectFit: "cover" }}
                            src={image}
                            alt={property.title}
                            width={316}
                            height={200}
                            className={styles.propertyImage}
                          />
                        </SwiperSlide>
                      );
                    }
                  })}
                </SwiperComponent>
              </Link>
              <div className={styles.propertyDesc}>
                <h2 className={styles.propertyTitle}>{property.title}</h2>
                <p className={styles.price}>{property.verbose_price}</p>
                <p className={styles.description}>
                  {property.city}, {property.region}{" "}
                  {property.building_construction_year}{" "}
                  {property.surface_useable
                    ? property.surface_useable
                    : property.surface_land}
                  mp
                </p>
                <Link
                  href={`proprietati/${property.id}`}
                  className={styles.propertyCTA}
                >
                  Vezi proprietate
                </Link>
              </div>
            </motion.div>
          );
        })}
        </LayoutGroup>
      </div>
      
    );
  }
}