import React from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

function ClinicMaker({ dataFromSelect }) {
  console.log(dataFromSelect);

  const customMarker = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  return dataFromSelect.map((e, i) => {
    return (
      <Marker position={[e.lat, e.lng]} icon={customMarker} key={i}>
        <Popup>You are here</Popup>
      </Marker>
    );
  });
}

export default ClinicMaker;
