import Link from "next/link"
import styles from "./Cta.module.css"
export default function Cta() {
    return(
        <section className={styles.ctaWrapper}>
            <Link className={styles.ctaButton} href={'/pages/vinde-cu-noi'}>Vinde cu noi</Link>
            <Link className={styles.ctaButton} href={'/pages/contact'}>Contact</Link>
        </section>
    )

}