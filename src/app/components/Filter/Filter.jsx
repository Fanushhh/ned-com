"use client";

import { FilterContext } from "@/app/providers/FilterProvider/FilterProvider";
import { useContext, useState } from "react";
import styles from "./Filter.module.css";

export const Filter = () => {
  const { filter,setFilter, setIsFiltered, isVisible, setIsVisible } = useContext(FilterContext);
  const [isRoomSelected, setIsRoomSelected] = useState(null);
  console.log(isRoomSelected);
  if(typeof window !== "undefined"){
      const body = document.querySelector("body");
      body.style.overflow = isVisible ? "hidden" : "auto";
  }
  let rooms = ["1", "2", "3", "4+"];
  function handleChange(e) {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
    setIsFiltered(true);
    setIsRoomSelected(e.target.value);
  }
  const handleClick = (e) => {
    setIsVisible(false);
  }
  const resetFilters = () => {
    setFilter({
      propertyType: "",
      transactionType: "",
      zone: "",
      minPrice: "",
      maxPrice: "",
      nrOfRooms: ""
    });
    setIsFiltered(false); 
  }

  return (
    <div
      className={`${styles.filterWrapper} ${
        isVisible ? styles.visibleFilter : ""
      }`}
    >
      <div className={styles.titleContainer}>
        <h2 className={styles.filterTitle}>Filtrare properietati</h2>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className={styles.closeButton}
        >
          Inchide
        </button>
      </div>
      <div className={styles.filterContainer}>
        <select
          name="propertyType"
          onChange={handleChange}
          className={styles.filterSelect}
          value={filter.propertyType}
        >
          <option value="" defaultValue>
            Tip proprietate
          </option>
          <option value="1">Apartament</option>
          <option value="2">Spatiu de birouri</option>
          <option value="3">Casa/ Vila</option>
          <option value="4">Spatiu comercial</option>
          <option value="5">Teren</option>
          <option value="6">Spatiu industrial</option>
        </select>
        <select
          onChange={handleChange}
          name="transactionType"
          className={styles.filterSelect}
          value={filter.transactionType}
        >
          <option value="" defaultValue>
            Tip tranzactie
          </option>
          <option value="1">Vanzare</option>
          <option value="2">Inchiriere</option>
        </select>
        <div className={styles.inputContainer}>
          <input
            onChange={handleChange}
            value={filter.zone}
            name="zone"
            className={styles.textInput}
            type="text"
            id="zone"
            placeholder="Zona"
            
          />
        </div>
        <div className={styles.priceRange}>
          <div className={styles.priceContainer}>
              <label className={styles.priceLabel} htmlFor="minPrice">Min</label>
              <input
                onChange={handleChange}
                value={filter.minPrice}
                name="minPrice"
                className={styles.textInput}
                type="number"
                id="minPrice"
                placeholder="Pret minim"
              />
          </div>
          <div className={styles.priceContainer}>
              <label className={styles.priceLabel} htmlFor="maxPrice">Max</label>
              <input
                onChange={handleChange}
                value={filter.maxPrice}
                name="maxPrice"
                className={styles.textInput}
                type="number"
                id="maxPrice"
                placeholder="Pret maxim"
              />
          </div>
        </div>
        <div>
            <p>Numar de camere</p>
        </div>
        <div className={styles.roomContainer}>
            {rooms.map(room => {
                
                return (
                    <div key={room} className={`${styles.radioContainer} ${isRoomSelected == room ? styles.checked : ''}`}>
                        <label className={styles.roomLabel} htmlFor={`room${room}`}>{room}</label>
                        <input onChange={handleChange} className={styles.roomInput} type="radio" name="nrOfRooms" id={`room${room}`} value={room}/>
                    </div>
                )
            })}
        </div>
        <div className={styles.filterButtons}>
          <button className={styles.applyFilterBtn} onClick={handleClick}>Aplica filtre</button>
          <button onClick={resetFilters} className={styles.applyFilterBtn}>Sterge filtre</button>
        </div>
      </div>
    </div>
  );
};
