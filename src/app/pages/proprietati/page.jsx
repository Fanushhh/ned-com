
import styles from "./proprietati.module.css";
import { getProperties } from "@/app/lib/properties";
import Properties from "@/app/components/Properties/Properties";
import { Filter } from "@/app/components/Filter/Filter";

export default async function PropertiesPage() {
  const properties = await getProperties();
  

  return (
    <main className={styles.propertiesPage}>
      <div className={styles.propertiesHeader}>
        <h1 className={styles.propertiesTitle}>
          Oferte imobiliare Ned Com Imobiliare
        </h1>
        <div className={styles.propertyFilterWrapper}>
          <p>{properties.length} rezultate</p>
          <select className={styles.propertyFilter}>
            <option value="actualizate-recent">Actualizate recent</option>
            <option value="actualizate-recent">Pret crescator</option>
            <option value="actualizate-recent">Pret descrescator</option>
            <option value="actualizate-recent">Suprafata crescator</option>
            <option value="actualizate-recent">Suprafata descrescator</option>
          </select>
        </div>
      </div>
      <section className={styles.propertiesContainer}>
        <Properties properties={properties} isHero={false} />
        <Filter />
      </section>
    </main>
  );
}
