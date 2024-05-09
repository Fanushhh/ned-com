'use client'
import React from "react";
import styles from "./UploadForm.module.css";
import { validateFile } from "@/app/lib/helpers";
export const UploadForm = () => {
    const [isSubmitted, setIsSubmitted] = React.useState(false);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.set("photoAttachments", e.target.photoAttachments.files[0]);
        formData.set("isUpload", true);
        formData.set("phoneNr", e.target.phoneNr.value);
        formData.set("propertyMessage", e.target.propertyMessage.value);

        if (validateFile(e.target.photoAttachments.files[0]) === false) {
        alert(
            "Tipul de fișier nu este permis. Vă rugăm să încărcați doar fișiere de tip .jpg, .jpeg sau .png"
        );
        return;
        }
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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <p>Afla cat valoreaza proprietatea ta:</p>
            <input type="text" required id="phoneNr" name="phoneNr" placeholder="Telefon" />
            <textarea name="propertyMessage" id="propertyMessage" placeholder="Mesaj" />
            <input
            type="file"
            required
            id="photoAttachments"
            name="photoAttachments"
            accept=".jpg,.jpeg,.png"
            />
            <button type="submit">Încarcă</button>
        </form>
        </section>
    );
}