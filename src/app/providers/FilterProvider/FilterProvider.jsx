"use client";

import { createContext, useState } from "react";
export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const [sortBy, setSortBy] = useState("actualizate-recent");
  const [isFilterVisible, setIsFilterVisible] = useState('hidden');
  const [propertyCount, setPropertyCount] = useState(0);
  const [filter, setFilter] = useState({
    propertyType: "",
    transactionType: "",
    zone: "",
    minPrice: 0,
    maxPrice: 0,
    nrOfRooms: 0,
    surfaceMin: 0,
    surfaceMax: 0,
    constructionYear: 0,
  });

  return (
    <FilterContext.Provider
      value={{
        filter,
        setFilter,
        isFiltered,
        setIsFiltered,
        setSortBy,
        sortBy,
        isFilterVisible,
        setIsFilterVisible,
        setPropertyCount,
        propertyCount,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
