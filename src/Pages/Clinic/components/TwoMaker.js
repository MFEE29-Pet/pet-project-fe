import React from 'react';
import L from 'leaflet';
import { Marker, Popup, Tooltip } from 'react-leaflet';
import { imgUrl } from '../../../config';
import TwoTable from './TwoTable';

const TwoMarker = L.icon({
  iconUrl: `${imgUrl}/images/PinColor_F3796C.png`,
  iconSize: [15, 15],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});

function TwoMaker({ dataFromSelect }) {
  return dataFromSelect.map((e, i) => {
    if (e.marker === 2) {
      return (
        <Marker position={[e.lat, e.lng]} icon={TwoMarker} key={i}>
          <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>
            {e.clinic_name}
          </Tooltip>
          <Popup style={{width:'300px',padding:'0px'}}>
            <TwoTable/>
          </Popup>
        </Marker>
      );
    }
  });
}

export default TwoMaker;
