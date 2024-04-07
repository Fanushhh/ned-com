import Image from "next/image";
import styles from "./Properties.module.css";
const fetchProperties = async () => {
  const data = await fetch("http://localhost:3000/api/properties", {
    method: "GET",
  });
  return data.json();
};

export default async function Properties() {
  const data = await fetchProperties();
  if (!data) return <p>No data found.</p>;
  return (
    <section id="properties" className={styles.propertiesWrapper}>
      {data.map((property) => {
        return (
          <div key={property.id} className={styles.propertyCard}>
            <Image
            style={{ objectFit: "cover" }}
              src={property.img}
              alt={property.name}
              width={316}
              height={200}
            />
            <h2 className={styles.propertyTitle}>{property.name}</h2>
            <p className={styles.price}>{property.price}</p>
            <p className={styles.description}>{property.description}</p>
          </div>
        );
      })}
    </section>
  );
}
