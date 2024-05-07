'use client'

import styles from "./ContactForm.module.css";
import emailjs from 'emailjs-com';
export const ContactForm = ({ propertyDetails }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phoneNr = e.target.phoneNr.value;
    const propertyMessage = e.target.propertyMessage.value;
    const message = `${phoneNr} - ${propertyMessage}`;
    console.log(message)
    await emailjs.sendForm('service_a4mjyf9', 'template_glu23fh', e.target, 'ZUFI60sRcmDZk0ocU');
    
  }



  return (
    <section className={styles.formContainer}>
      <div className={styles.agentDetails}>
        <img
          src="https://thumb.rebs-site-builder.com/b8Zdck_POkn2KmcSiIGmHvsii8ghMhR7YghlQ3sw7ns/fill/100/100/ce/0/aHR0cHM6Ly9tZWRp/YS5jcm1yZWJzLmNv/bS9hdmF0YXJzLzc0/NjQvYzRmYmU3NmIt/MTUwMi00ZGI4LWFi/ZWUtZjQ0ZmQ3YTAy/NzEwLmpwZw.jpg"
          alt="Cristiana Nicorici, consilier imobiliar"
        />
        <div>
          <h4>Cristiana Nicorici</h4>
          <p>Consilier Imobiliar</p>
          <a href="tel:+40741124400">+40741124400</a>
        </div>
      </div>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <p>Solicita chiar acum o vizionare</p>
        
        <input type="text" required="true" id="phoneNr" name="phoneNr" placeholder="Telefon" />

        <textarea
          name="propertyMessage"
          id="propertyMessage"
          cols="30"
          rows="10"
          value={`Bună ziua, aș dori sa programăm o vizionare pentru proprietatea CP${propertyDetails.id}: ${propertyDetails.title}`}
        >
          {`Bună ziua, aș dori sa programăm o vizionare pentru proprietatea CP${propertyDetails.id}: ${propertyDetails.title}`}
        </textarea>
        <button>Solicita Vizionare</button>
      </form>
    </section>
  );
};
