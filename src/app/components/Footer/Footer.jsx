import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <>
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div>
          <div>
            <h2>Ned Com Imobiliare</h2>
            <p>Agentie imobiliare Bucuresti</p>
          </div>
          <div>
            <a href="tel:+4041124400">+40 741 124 400</a>
            <br />
            <a href="mailto:nedcom.imob@gmail.com">nedcom.imob@gmail.com</a>
            <br />
          </div>
          <div>
            <p>str.Dumbrava Noua 33, 051147, Bucuresti</p>
            <a href="https://maps.google.com/?q=str.%20Dumbrava%20Noua%2033,%20051147%20Bucuresti">
              Deschide cu Google Maps
            </a>
          </div>
        </div>
        <div>
          <Image
            width={465}
            className={styles.map}
            height={210}
            src="https://thumb.rebs-site-builder.com/Hm1f2Hco-yiTYjEsGh2agKMMDwrZkJ3RMY8ficFKz0s/fit/1312/592/ce/0/aHR0cHM6Ly9zdGF0/aWMucmVicy1zaXRl/LWJ1aWxkZXIuY29t/L3N0YXRpY21hcC83/NTQvNDM0MmVkMTMy/NDhjNDU3NmE1NGMz/ZDhlNDY3YWY0ZWUu/cG5n.webp"
            alt="company location on google maps"
          />
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.mainNav}>
            <Link href={"/pages/contact"}>Contact</Link>
            <Link href={"/pages/proprietati"}>Proprietati</Link>
            <Link href={"/pages/vinde-cu-noi"}>Vinde cu noi</Link>
          </div>
          <a href="https://anpc.ro/">ANPC</a>
          <a href="https://www.nedcom.properties/politica-de-confidentialitate/">
            Politica cookies si de confidentialitate
          </a>
          <Image
            className={styles.footerAnaf}
            src="https://dcwebdesign.ro/wp-content/uploads/2022/08/anpc-sal1-1.png"
            alt="ANPC logo"
            width={200}
            height={50}
          />
          <Image
            className={styles.footerAnaf}
            src="https://www.familytravel.ro/images/SAL_1.png"
            alt="SAL logo"
            width={200}
            height={50}
          />
        </div>
      </div>

      
    </footer>
    <div className={styles.logoContainer}>
        <Image
        className={styles.logo}
          src="https://thumb.rebs-site-builder.com/8BlhGljwCNMRvH-KkAylNMb2qViPN_ObWbAjE7NOUVw/fit/120/80/ce/0/aHR0cHM6Ly9tZWRp/YS5jcm1yZWJzLmNv/bS9hZ2VuY2llcy9u/ZWRjb20vbG9nby8x/NzQxYjU1ZS1jNjM3/LTQyZmQtOGUzMC03/OWI5YTc1NTY3ZWYv/aW1hZ2VlZGl0XzFf/MzI4OTU2MTExOC5w/bmc.webp"
          width={67}
          height={80}
          alt="NED Com Imobiliare logo"
        />
        <p className={styles.copyright}>&copy;2024 NED Com S.R.L.</p>
      </div>
      </>
  );
}
