import Image from "next/image";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div>
     <Image className={styles.contactImg} style={{objectFit:'contain'}} src='https://thumb.rebs-site-builder.com/_dTpHvSFMaarvbeBy5iN_-_hGLZxtaIsGlpnRaA3lFM/fit/1920/1080/ce/0/aHR0cHM6Ly9zdGF0/aWMucmVicy1zaXRl/LWJ1aWxkZXIuY29t/L2ZpbGVzLzc1NC9l/NzcyNTA0ODc2Y2I0/MTg4ODMwODA0ODJi/MGQyYmI4Zi9jbGlj/a19mb3Jfd2hhdHNh/cHAucG5n.jpg' width={1920} height={500} alt="Contact information"/>
    </div>
  );
}