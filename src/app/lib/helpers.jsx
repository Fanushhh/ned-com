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
        if(filter.nrOfRooms && property.rooms <= filter.nrOfRooms){
            return false;
        }
        return true;
      });
}

export const getHouseType = (type) => {
    switch (type) {
        case 1:
            return "Individuală";
        case 2:
            return "Calcan";
        case 3:
            return "Duplex";
        case 4:
            return "Casă înșiruită";
        case 5:
            return "Triplex";
        case 6:
            return "Vilă";
        default:
            return "Necunoscut";
    }

}

export const getInteriorState = (state) => {
    switch (state) {
        case 1:
            return "Ultrafinisat";
        case 2:
            return "Finisat modern";
        case 3:
            return "Semifinisat";
        case 4:
            return "Finisat clasic";
        case 5:
            return "Bună";
        case 6:
            return "Nou";
        case 7: 
            return "Renovat";
        case 8: 
            return "Necesită renovare";
        default:
            return "Necunoscut";
    }

}

export const getRoofType = (type) => {
    switch (type) {
        case 1:
            return "Tablă";
        case 2:
            return "Țiglă";
        case 3:
            return "Șindrilă";
        case 4:
            return "Terasă";
        default:
            return "Necunoscut";
    }

}

export const getConstructionStatus = (status) => {
    switch (status) {
      case 1:
        return "Finalizată";
      case 2:
        return "Finisat";
      case 3:
        return "Semifinisat";
      case 4:
        return "În construcție";
      case 5:
        return "La gri";
      case 6:
        return "La roșu";
      case 7:
        return "Necesită renovare";
      case 8:
        return "De demolat";
      case 9:
        return "Structură";
      case 10:
        return "Proiect";
      default:
        return "Necunoscut";
    }
}

export const getBuildingStructure = (structure) => {
    switch (structure) {
        case 1:
            return "Beton";
        case 2:
            return "Cărămidă";
        case 3:
            return "BCA";
        case 4:
            return "Lemn";
        case 5:
            return "Metal";
        case 6:
            return "Altele";
        case 7:
            return "Cadre";
        case 8:
            return "Plăci";
        case 9:
            return "Monolit";
        default:
            return "Necunoscut";
    }

}

export const mapFacilities = (facilities) => {
    const facilitiesArray = Object.values(facilities).map(value => value);
    
    return facilitiesArray.flat().sort();
    
}