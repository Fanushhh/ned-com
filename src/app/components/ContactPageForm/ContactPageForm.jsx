'use client'
import React from "react";
import styles from './ContactPageForm.module.css';


export const ContactPageForm = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    const [phoneNr, setPhoneNr] = React.useState('');
    const [propertyMessage, setPropertyMessage] = React.useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.set("phoneNr", phoneNr);
      formData.set("propertyMessage", propertyMessage);
      formData.set('isUpload', false);
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.ok) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error(error);
      }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNr') {
            setPhoneNr(value);
        }
        if (name === 'propertyMessage') {
            setPropertyMessage(value);
        }
    }
  
    if (isSubmitted) {
      return (
        <section className={styles.formContainer}>
          <p>Formularul a fost trimis cu succes!</p>
        </section>
      );
    }
    return (
      <section className={styles.formContainer}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Scrie-ne acum</h2>
          <div>
            <label htmlFor="phoneNr">Telefon</label>
          <input
            type="text"
            required
            value={phoneNr}
            onChange={handleChange}
            id="phoneNr"
            name="phoneNr"
            placeholder="Telefon"
          />
          </div>
        <div>
            <label htmlFor="propertyMessage">Mesajul tau</label>
            <textarea
            name="propertyMessage"
            value={propertyMessage}
            onChange={handleChange}
            id="propertyMessage"
            cols="30"
            rows="10"
            
          ></textarea>
        </div>
          
          
          <button>Solicita Vizionare</button>
        </form>
      </section>
    );
}