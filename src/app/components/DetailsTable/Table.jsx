import {
  getBuildingStructure,
  getConstructionStatus,
  getHouseType,
  getInteriorState,
  getRoofType,
} from "@/app/lib/helpers";
import styles from "./Table.css";

export const Table = ({ property }) => {
  return (
    <table className="tableDetails">
      <tbody>
        <tr>
          <td>Numar camere:</td>
          <td>{property.rooms || 0}</td>
          <td>Dormitoare:</td>
          <td>{property.bedrooms || 0}</td>
        </tr>
        <tr>
          <td>Numar bucatarii:</td>
          <td>{property.kitchens || 0}</td>
          <td>Geam la baie:</td>
          <td>{property.has_bathroom_window ? "Da" : "Nu"}</td>
        </tr>
        <tr>
          <td>Numar balcoane:</td>
          <td>{property.balconies || 0}</td>
          <td>Numar terase:</td>
          <td>{property.terraces || 0}</td>
        </tr>
        <tr>
          <td>Disponibilitate:</td>
          <td>{property.disponibility || 0}</td>
          <td>Tip casa:</td>
          <td>{getHouseType(property.building_type) || 0}</td>
        </tr>
        <tr>
          <td>Stare interior:</td>
          <td>{getInteriorState(property.interior_state) || 0}</td>
          <td>Suprafata utila:</td>
          <td>{property.surface_useable || 0} mp</td>
        </tr>
        <tr>
          <td>Suprafata construita:</td>
          <td>{property.surface_built || 0} mp</td>
          <td>Suprafata totala: </td>
          <td>{property.surface_total || 0} mp</td>
        </tr>
        <tr>
          <td>Suprafata terasa:</td>
          <td>{property.surface_terrace || 0} mp</td>
          <td>Acoperiș:</td>
          <td>{getRoofType(property.roof) || 0}</td>
        </tr>
        <tr>
          <td>Stadiu constructie:</td>
          <td>{getConstructionStatus(property.construction_status) || 0}</td>
          <td>Constructie noua:</td>
          
          <td>{property.building_construction_year > 2000 ? "Da" : "Nu"}</td>
        </tr>
        <tr>
          <td>Tip constructie:</td>
          <td>{getBuildingStructure(property.building_structure) || 0} </td>
          <td>Numar etaje cladire:</td>
          <td>{property.building_floors}</td>
        </tr>
      </tbody>
    </table>
  );
};
