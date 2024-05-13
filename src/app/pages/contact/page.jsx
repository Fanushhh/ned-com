
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/app/components/Map/Map"), { ssr: false });
import styles from "./page.module.css";
import { ContactPageForm } from "@/app/components/ContactPageForm/ContactPageForm";

export default async function Page() {
  return (
    <main className={styles.contactPage}>
      <h1>Contacteaza-ne</h1>
      <section className={styles.mapContainer}>
        <Map x={44.41557567657802} y={26.067935775265926} />
        <div className={styles.contactDetails}>
          <p>Ned Com Imobiliare</p>
          <a href="tel:+40741124400">+40741124400</a>
          <a href="mailto:nedcom.imob@gmail.com">nedcom.imob@gmail</a>
          <p>str. Dumbrava Noua 33, 051147, Bucuresti</p>
          <a href="https://maps.google.com/?q=str.%20Dumbrava%20Noua%2033,%20051147%20Bucuresti">
            Deschide cu Google Maps
          </a>
        </div>
      </section>
      <ContactPageForm  isContactPage={true}/>
    </main>
  );
}
