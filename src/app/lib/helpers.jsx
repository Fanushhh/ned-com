export const sortFunction = (properties, sortBy) => {
    switch (sortBy) {
        case "Pret crescator":
        return properties.toSorted((a, b) => a.price_sale - b.price_sale);
        case "Pret descrescator":
        return properties.toSorted((a, b) => b.price_sale - a.price_sale);
        case "Suprafata crescator":
        return properties.toSorted((a, b) => {
            if (a.surface_useable) {
                return a.surface_useable - b.surface_useable;
            }
            return a.surface_land - b.surface_land;
        });
        case "Suprafata descrescator":
        return properties.toSorted((a, b) => {
            if (a.surface_useable) {
                return b.surface_useable - a.surface_useable;
            }
            return b.surface_land - a.surface_land;
        });
        default:
        return properties.toSorted((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }
}

export const filterProperties = (properties, filter) => {
    return properties.filter((property) => {
        if (
          filter.propertyType &&
          property.property_type !== parseInt(filter.propertyType)
        ) {
          return false;
        }
        if (
          filter.transactionType &&
          property.currency_rent !== parseInt(filter.transactionType)
        ) {
          return false;
        }
        if (
          (filter.zone &&
            !property.city.toLowerCase().includes(filter.zone.toLowerCase())) ||
          !property.region.toLowerCase().includes(filter.zone.toLowerCase())
        ) {
          return false;
        }
        if(filter.minPrice && property.price_sale < filter.minPrice){
            return false;
        }
        if(filter.maxPrice && property.price_sale > filter.maxPrice){
            return false;
        }
        if(filter.nrOfRooms && property.rooms < filter.nrOfRooms){
            return false;
        }
        return true;
      })
}