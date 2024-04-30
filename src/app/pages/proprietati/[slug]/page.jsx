import Gallery from "@/app/components/Gallery/Gallery";
import styles from "./page.module.css";

import { getProperty } from "@/app/lib/properties";
import { Table } from "@/app/components/DetailsTable/Table";
import { ExpandableText } from "@/app/components/ExpandableText/Text";

export default async function Page({ params }) {
  const property = await getProperty(params.slug);
  
  return (
    <main className={styles.propertyPage}>
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
    </main>
  );
}
