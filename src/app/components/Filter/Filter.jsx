'use client';

import { FilterContext } from "@/app/providers/FilterProvider/FilterProvider";
import { useContext } from "react";
import styles from "./Filter.module.css";

export const Filter = () => {
    const {setFilter, setIsSorted} = useContext(FilterContext);

    function handleChange(e){
        const {name, value} = e.target;
        setFilter((prev) => ({...prev, [name]: value}));
        setIsSorted(true);
    }
    
    
    
    return(
    <div className={styles.filterWrapper}>
        <h2 className={styles.filterTitle}>Filtrare properietati</h2>
        <div className={styles.filterContainer}>
           
            <select name="propertyType" onChange={handleChange} className={styles.filterSelect}>
                <option value="" defaultValue>Tip proprietate</option>
                <option value="1">Apartament</option>
                <option value="2">Spatiu de birouri</option>
                <option value="3">Casa/ Vila</option>
                <option value="4">Spatiu comercial</option>
                <option value="5">Teren</option>
                <option value="6">Spatiu industrial</option>
            </select>
            <select onChange={handleChange} name="transactionType" className={styles.filterSelect}>
                <option value="" defaultValue>Tip tranzactie</option>
                <option value="1">Vanzare</option>
                <option value="2">Inchiriere</option>
            </select>
            <div className={styles.inputContainer}>
                <input onChange={handleChange} name="zone" className={styles.textInput} type="text" id="zone" placeholder="Zone"/>
            </div>
        </div>
      </div>
      );
}