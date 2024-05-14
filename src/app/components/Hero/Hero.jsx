import styles from "./Hero.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Hero() {
  return (
    <section className={styles.heroWrapper}>
    <Image className={styles.heroBackgroundImage} width={1920} height={1080} src="https://thumb.rebs-site-builder.com/0XrQJEkZIc2o5fT7OcDYEVEyAf-qrF3P1qmGMyfK234/fill/1920/1080/ce/0/aHR0cHM6Ly9zdGF0/aWMucmVicy1zaXRl/LWJ1aWxkZXIuY29t/L2ZpbGVzLzc1NC83/ZTJlZTkxY2Q5M2Q0/MDlmOGZiYzgwYzRk/YTU1Njg0My9CYXNh/cmFiLWNvdmVyLTEu/anBn.jpg"  alt="background image showing a part of the city on the night time"/>
      <div>
          <h1 className={styles.title}>Ned Com Imobiliare</h1>
          <p className={styles.description}>Din 1994, suntem o agenție de familie - pentru familii</p>
          <Link className={styles.heroCta} href="pages/proprietati">Vezi toate proprietatile</Link>
      </div>
      <Link aria-label="scroll-down" className={styles.navigateDown} href="#properties" id="properties">
        <div className={styles.arrowIcon}></div>
      </Link>
    </section>
  );
}
