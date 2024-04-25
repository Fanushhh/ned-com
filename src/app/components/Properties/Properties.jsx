'use client'
import Image from "next/image";
import styles from "./Properties.module.css";
import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { FilterContext } from "@/app/providers/FilterProvider/FilterProvider";

export default function Properties({properties, isHero}) {
  const {filter, isSorted} = useContext(FilterContext);
  console.log(properties[0])
  if(!properties){
    return <p>No properties found.</p>
  }
  
  const sortedProperties = properties.filter(property => {
    if(filter.propertyType && property.property_type !== parseInt(filter.propertyType)){
      return false;
    }
    if(filter.transactionType && property.currency_rent !== parseInt(filter.transactionType)){
      return false;
    }
    if(filter.zone && !property.city.toLowerCase().includes(filter.zone.toLowerCase()) || !property.region.toLowerCase().includes(filter.zone.toLowerCase())){
      return false;
    }
    return true;
  
  });
  if(sortedProperties.length === 0){
    return <p>No properties found.</p>
  }
  const newProperties = isSorted ? sortedProperties : properties;
  console.log(newProperties);
  
  
  if(isHero){
    return (
      <section id="properties" className={styles.propertiesWrapper}>
        {properties.map((property) => {
          return (
            <Link href={`/proprietati/${property.id}`} key={property.id}> 
            <div key={property.id} className={styles.propertyCard}>
              <Image
              style={{ objectFit: "cover" }}
                src={property.resized_images[0]}
                alt={property.title}
                width={316}
                height={200}
              />
              <h2 className={styles.propertyTitle}>{property.title}</h2>
              <p className={styles.price}>{property.verbose_price}</p>
              <p className={styles.description}>{property.city}, {property.region} {property.building_construction_year} {property.surface_useable ? property.surface_useable : property.surface_land}mp</p>
            </div>
            </Link>
          );
        })}
      </section>
    );
  }
  else{
    return(<div className={styles.propertiesList}>
        {newProperties.map((property) => {
          return (
           
              <div key={property.id} className={styles.propertyWrapper}>
              <Link href={`/proprietati/${property.id}`} key={property.id} className={styles.imageLink}>
                <Image
                  style={{ objectFit: "cover" }}
                  src={property.resized_images[0]}
                  alt={property.title}
                  width={316}
                  height={200}
                  className={styles.propertyImage}
                />
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
                    <Link href={`/proprietati/${property.id}`} className={styles.propertyCTA}>Vezi proprietate</Link>
                </div>
              </div>
            
          );
        })}
      </div>
  )}
  
}
