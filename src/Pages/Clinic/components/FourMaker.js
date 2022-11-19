import React from 'react';
import L from 'leaflet';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { imgUrl } from '../../../config';

const FourMarker = L.icon({
  iconUrl: `${imgUrl}/images/PinColor_F3796C.png`,
  iconSize: [15, 15],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

function FourMaker({ dataFromSelect }) {
  return dataFromSelect.map((e, i) => {
    if (e.marker === 4) {
      return (
        <Marker position={[e.lat, e.lng]} icon={FourMarker} key={i}>
          <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>
            {e.name}
          </Tooltip>
          <Popup>{e.name}</Popup>
        </Marker>
      );
    }
  });
}

export default FourMaker;
