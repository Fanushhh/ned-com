import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
      <div>
          <h1 className={styles.title}>Ned Com Imobiliare</h1>
          <p className={styles.description}>Din 1994, suntem o agenție de familie - pentru familii</p>
          <Link className={styles.heroCta} href="pages/proprietati">Vezi toate proprietatile</Link>
      </div>
      <Link className={styles.navigateDown} href="#properties" id="properties">
        <div className={styles.arrowIcon}></div>
      </Link>
    </section>
  );
}
