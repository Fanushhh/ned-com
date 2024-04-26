'use client'

import { createContext, useState } from "react";
export const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
    const [isFiltered, setIsFiltered] = useState(false);
    const [sortBy, setSortBy] = useState("actualizate-recent");
    const [isVisible, setIsVisible] = useState(false);
    const [filter, setFilter] = useState({
        
        propertyType: "",
        transactionType: "",
        zone:"",
        minPrice:0,
        maxPrice:0,
        nrOfRooms:0,
        surfaceMin:0,
        surfaceMax:0,
        constructionYear:0,
    });
    
    

    return(
        <FilterContext.Provider value={{filter, setFilter, isFiltered, setIsFiltered,setSortBy, sortBy, isVisible, setIsVisible}}>
            {children}
        </FilterContext.Provider>
    )


}
