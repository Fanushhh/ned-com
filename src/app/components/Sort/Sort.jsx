'use client';

import styles from "./Sort.module.css";
import { FilterContext } from "../../providers/FilterProvider/FilterProvider";
import { useContext } from "react";

export const Sort = ({length}) => {
    const {setSortBy, isVisible, setIsVisible} = useContext(FilterContext);
    

    const handleChange = (e) => {
        setSortBy(e.target.value);
    }
    console.log(isVisible);
    

    return(
        <div className={styles.propertySortWrapper}>
          <p>{length} rezultate</p>
          <button onClick={() => setIsVisible(!isVisible)} className={styles.showFilters}>Filtreaza</button>
          <select onChange={handleChange} className={styles.propertySort}>
            <option value="actualizate-recent">Actualizate recent</option>
            <option value="Pret crescator">Pret crescator</option>
            <option value="Pret descrescator">Pret descrescator</option>
            <option value="Suprafata crescator">Suprafata crescator</option>
            <option value="Suprafata descrescator">Suprafata descrescator</option>
          </select>
        </div>
    )
}