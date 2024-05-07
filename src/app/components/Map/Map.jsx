"use client";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
// import the marker icon from leaflet
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const icon = L.icon({ iconUrl: "/marker-icon-2x.png",
iconSize: [24,36],
    iconAnchor: [12,36] });

export default function Map({x, y}) {
  const position = [x,y];
  
  return (
      <MapContainer
        preferCanvas={true}
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        style={{ height: "400px", width: "938px", maxWidth:"100%", margin:'2rem 0'}}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker  position={position} icon={icon} />
      </MapContainer>
  );
}