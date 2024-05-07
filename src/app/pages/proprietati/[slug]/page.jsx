import Gallery from "@/app/components/Gallery/Gallery";
import styles from "./page.module.css";

import { getProperty } from "@/app/lib/properties";
import { Table } from "@/app/components/DetailsTable/Table";
import { ExpandableText } from "@/app/components/ExpandableText/Text";
import { mapFacilities } from "@/app/lib/helpers";
import { Facilities } from "@/app/components/Facilities/Facilities";
import Map from "@/app/components/Map/Map";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";

export default async function Page({ params }) {
  const property = await getProperty(params.slug);
  
  
 
  
  
  return (
    <main className={styles.propertyPage}>
      
        <div className={styles.propertyDetailsWrapper}>
          <section>
            <div className={styles.pageHeader}>
              <h1>{property.title}</h1>
              <p>ID CP{property.id} </p>
            </div>
            <div className={styles.propertyDetails}>
              <p className={styles.price}>{property.verbose_price}</p>
              <p>
                {property.zone ? property.zone + "," : ""} {property.region}{" "}
              </p>
              <p>
                {property.surface_useable
                  ? property.surface_useable
                  : property.surface_land}
                mp{" "}
              </p>
              {property.construction_year && <p>{property.building_construction_year}</p>}
            </div>
          </section>
          <Gallery
            images={property.resized_images}
            bigImages={property.full_images}
          />
          <section className={styles.propertySpecifications}>
            <ExpandableText text={property.description}/>
            <p>Detalii:</p>
            <div>
                <Table property={property} />
            </div>
          </section>
          <Facilities facilities={mapFacilities(property.tags)} />
          <Map x={property.lat} y={property.lng}/>
        </div>
      
        <ContactForm propertyDetails={property}/>
        
      
     
    </main>
  );
}
