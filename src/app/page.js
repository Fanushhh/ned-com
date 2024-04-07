
import styles from "./page.module.css";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Properties from "./components/Properties/Properties";
import Cta from "./components/Cta/Cta";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
    <main className={styles.heroSection}>
      <NavBar />
      <Hero />
      <Properties />
      <Cta />
      <Contact />
      <Socials/> 
    </main>
    <Footer />
    </>
  );
}
