'use client'

import { createContext, useState } from "react";
export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
    const [isSorted, setIsSorted] = useState(false);
    const [filter, setFilter] = useState({
        propertyType: "",
        transactionType: "",
        zone:"",
        priceMin:0,
        priceMax:0,
        rooms:0,
        surfaceMin:0,
        surfaceMax:0,
        constructionYear:0,
    });

    return(
        <FilterContext.Provider value={{filter, setFilter, isSorted, setIsSorted}}>
            {children}
        </FilterContext.Provider>
    )


}
