"use client";
import Image from "next/image";
import styles from "./ContactForm.module.css";
import React from "react";
export const ContactForm = ({ propertyDetails }) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("phoneNr", e.target.phoneNr.value);
    formData.set("propertyMessage", e.target.propertyMessage.value);
    formData.set("photoAttachments", e.target.photoAttachments.files[0]);
    

    const response = await fetch("/api/contact", {
      method: "POST",
      body: formData, // Stringify the dataObject
    });
   const data = await response.json();
    if (data.ok) {
      setIsSubmitted(true);
    }
    
    
  };

  if (isSubmitted) {
    return (
      <section className={styles.formContainer}>
        <p>Formularul a fost trimis cu succes!</p>
      </section>
    );
  }
  return (
    <section className={styles.formContainer}>
      

      <div className={styles.agentDetails}>
        <Image
          src="https://thumb.rebs-site-builder.com/b8Zdck_POkn2KmcSiIGmHvsii8ghMhR7YghlQ3sw7ns/fill/100/100/ce/0/aHR0cHM6Ly9tZWRp/YS5jcm1yZWJzLmNv/bS9hdmF0YXJzLzc0/NjQvYzRmYmU3NmIt/MTUwMi00ZGI4LWFi/ZWUtZjQ0ZmQ3YTAy/NzEwLmpwZw.jpg"
          alt="Cristiana Nicorici, consilier imobiliar"
          width={100}
          height={100}
        />
        <div>
          <h4>Cristiana Nicorici</h4>
          <p>Consilier Imobiliar</p>
          <a href="tel:+40741124400">+40741124400</a>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="hidden" name="_subject" value="Interes pentru anunt imobiliar"/>
        <p>Solicita chiar acum o vizionare</p>
        <input
          type="text"
          required="true"
          id="phoneNr"
          name="phoneNr"
          placeholder="Telefon"
        />

        <textarea
          name="propertyMessage"
          id="propertyMessage"
          cols="30"
          rows="10"
          value={`Bună ziua, aș dori sa programăm o vizionare pentru proprietatea CP${propertyDetails.id}: ${propertyDetails.title}`}
        >
          {`Bună ziua, aș dori sa programăm o vizionare pentru proprietatea CP${propertyDetails.id}: ${propertyDetails.title}`}
        </textarea>
        <input type="file" name="photoAttachments" id="photoAttachments" />
        <button>Solicita Vizionare</button>
      </form>
    </section>
  );
};
