import React from 'react';
import L from 'leaflet';
import { Marker, Popup, useMap,Tooltip } from 'react-leaflet';
import { imgUrl } from '../../../config';

function OneMaker({ dataFromSelect, location }) {
  const OneMarker = L.icon({
    iconUrl: `${imgUrl}/images/PinColor_0DA8B4.png`,
    iconSize: [15, 15],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  const map = useMap();
  map.flyTo(location,18);

  console.log(location.lat);
  console.log(location);
  return dataFromSelect.map((e, i) => {
    if (e.marker === 1) {
      return (
        <Marker position={[e.lat, e.lng]} icon={OneMarker} key={i}>
          <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>{e.name}</Tooltip>
          <Popup></Popup>
        </Marker>
      );
    }
  });
}

export default OneMaker;
