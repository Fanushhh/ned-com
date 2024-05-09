import Image from "next/image";
import styles from "./page.module.css";
import { ContactForm } from "@/app/components/ContactForm/ContactForm";
import { UploadForm } from "@/app/components/UploadForm/UploadForm";

export default function Page() {
  return (
    <main className={styles.mainPage}>
      <div className={styles.ctaWrapper}>
        <h1>Vinde cu noi</h1>
        <p>
          Bun venit la Ned Com Imobiliare, o agenție de încredere în domeniul
          imobiliar cu o prezență solidă pe piață începând din 1994. De-a lungul
          anilor, am reușit să câștigăm încrederea clienților noștri, devenind
          un partener de încredere pentru toate nevoile lor imobiliare.
        </p>
        <br />
        <p>
          {" "}
          La Ned Com Imobiliare, ne mândrim cu serviciile complete și
          personalizate pe care le oferim clienților noștri. Suntem conștienți
          că fiecare tranzacție imobiliară este unică și vine la pachet cu
          cerințe specifice. De aceea, ne adaptăm la nevoile și preferințele
          fiecărui client pentru a le oferi o experiență imobiliară pe măsură.
          Iată o scurtă prezentare a serviciilor noastre:
        </p>
      </div>
      <div className={styles.perksContainer}>
        <div className={styles.perk}>
          <Image
            className={styles.perkImage}
            src="https://thumb.rebs-site-builder.com/N9YsAg2z_SApP_uztluRvgZUAmIlD84EQL6JllKcnIA/fit/810/670/ce/0/aHR0cHM6Ly9zdGF0/aWMucmVicy1zaXRl/LWJ1aWxkZXIuY29t/L2ZpbGVzLzc1NC9h/MzcwOTlhNDYwODI0/Njk2OTJhMjNmNjZl/NzczYWI2MC9wZXhl/bHMtYWxlbmEtZGFy/bWVsLTc2NDE4OTku/anBn.webp"
            alt=""
            width={500}
            height={340}
          />
          <div className={styles.textContainer}>
            <h4 className={styles.perkTitle}>Vânzări și închirieri</h4>
            <p className={styles.perkDescription}>
              Ned Com Imobiliare are o vastă rețea de proprietăți disponibile
              pentru vânzare și închiriere. Indiferent dacă sunteți în căutarea
              unei locuințe noi, a unui apartament elegant sau a unei
              proprietăți comerciale, suntem aici pentru a vă ajuta să găsiți
              ceea ce căutați. Echipa noastră de experți în vânzări și
              închirieri vă va ghida prin procesul de selecție și vă va oferi
              asistență deplină în negocieri și formalități.
            </p>
          </div>
        </div>
        <div className={styles.perk}>
          <Image
            className={styles.perkImage}
            src="https://thumb.rebs-site-builder.com/My0lpMxJd0OCermUa3CvG3ySQZr2bX88FIZP3gIpy5s/fit/912/750/ce/0/aHR0cHM6Ly9zdGF0/aWMucmVicy1zaXRl/LWJ1aWxkZXIuY29t/L2ZpbGVzLzc1NC82/YWYwMWFiZjQ5ODU0/M2Q4ODRkODdlYzg1/M2Y1NmU1ZC9wZXhl/bHMtcm9kbmFlLXBy/b2R1Y3Rpb25zLTgy/OTM2NTEuanBn.webp"
            alt=""
            width={500}
            height={340}
          />
          <div className={styles.textContainer}>
            <h4 className={styles.perkTitle}>Evaluări și consultanță</h4>
            <p className={styles.perkDescription}>
              Înțelegem importanța unei evaluări corecte și precise a
              proprietății dvs. înainte de a o vinde sau a o închiria. Echipa
              noastră de evaluatori profesioniști vă poate oferi o evaluare
              completă a valorii imobilului dvs., ținând cont de toți factorii
              relevanți. De asemenea, vă stăm la dispoziție cu consultanță
              imobiliară personalizată, sfaturi și strategii pentru a vă ajuta
              să luați deciziile corecte în tranzacțiile imobiliare.
            </p>
          </div>
        </div>
        <div className={styles.perk}>
          <Image
            className={styles.perkImage}
            src="https://thumb.rebs-site-builder.com/4AzXCrB5kFA-_iDc4gzcYmXifmWg0PFAHbDljKRyEjQ/fit/912/750/ce/0/aHR0cHM6Ly9zdGF0/aWMucmVicy1zaXRl/LWJ1aWxkZXIuY29t/L2ZpbGVzLzc1NC9h/NGQzMmZiYjk3NjY0/Yjc0YWNmNDA5YmY2/YjU0Nzk1NS9wZXhl/bHMtdGhpcmRtYW4t/ODQ4MjU1My5qcGc.webp"
            alt=""
            width={500}
            height={340}
          />
          <div className={styles.textContainer}>
            <h4 className={styles.perkTitle}>Administrare imobile</h4>
            <p className={styles.perkDescription}>
              Suntem aici pentru a vă oferi o soluție completă de administrare a
              proprietăților dvs. dacă doriți să închiriați sau să gestionați
              investiții imobiliare. Echipa noastră experimentată se va ocupa de
              toate aspectele administrative, inclusiv închirierea și colectarea
              chiriilor, întreținerea proprietății și comunicarea cu chiriașii,
              pentru a vă asigura că proprietățile dvs. sunt în mâini bune.
            </p>
          </div>
        </div>
      </div>
      <UploadForm />
    </main>
  );
}
