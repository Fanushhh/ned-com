
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Properties from "./components/Properties/Properties";
import Cta from "./components/Cta/Cta";
import Contact from "./components/Contact/Contact";
import Socials from "./components/Socials/Socials";
import { getProperties } from "./lib/properties";

export default async function Home() {
  const properties = await getProperties(3);
  
  return (
    <>
    
    <main className={styles.heroSection}>
      
      <Hero />
      <Properties properties={properties} isHero={true}/>
      <Cta />
      <Contact />
      <Socials/> 
    </main>
  
    
    </>
  );
}