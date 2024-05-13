import Gallery from "@/app/components/Gallery/Gallery";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import { getProperty } from "@/app/lib/properties";
import { Table } from "@/app/components/DetailsTable/Table";
import { ExpandableText } from "@/app/components/ExpandableText/Text";
import { mapFacilities } from "@/app/lib/helpers";
import { Facilities } from "@/app/components/Facilities/Facilities";
const Map = dynamic(() => import("@/app/components/Map/Map"), { ssr: false });
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
              <p>Pret negociabil: {property.negotiable_rent_price || property.negotiable_sale_price ? 'Da' : 'Nu'}</p>
              <p>Comision: {property.zero_comission_sale || property.zero_comission_rent ? 'Nu' : '2%'} </p>
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
