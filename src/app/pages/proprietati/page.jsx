
import styles from "./proprietati.module.css";
import { getProperties } from "@/app/lib/properties";
import Properties from "@/app/components/Properties/Properties";
import { Filter } from "@/app/components/Filter/Filter";
import { Sort } from "@/app/components/Sort/Sort";

export default async function PropertiesPage() {
  const properties = await getProperties();
  

  return (
    <main className={styles.propertiesPage}>
      <div className={styles.propertiesHeader}>
        <h1 className={styles.propertiesTitle}>
          Oferte imobiliare Ned Com Imobiliare
        </h1>
        <Sort length={properties.length} />
      </div>
      <section className={styles.propertiesContainer}>
        <Properties properties={properties} isHero={false} />
        <Filter />
      </section>
    </main>
  );
}
