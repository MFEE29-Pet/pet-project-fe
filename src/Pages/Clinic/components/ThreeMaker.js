import React from 'react';
import L from 'leaflet';
import { Marker, Popup,Tooltip } from 'react-leaflet';
import { imgUrl } from '../../../config';
import ThreeTable from './ThreeTable';


const ThreeMarker = L.icon({
  iconUrl: `${imgUrl}/images/PinColor_E3D42F.png`,
  iconSize: [15, 15],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});


function ThreeMaker({ dataFromSelect }) {


  return dataFromSelect.map((e, i) => {
    if (e.marker === 3) {
      return (
      <Marker position={[e.lat, e.lng]} icon={ThreeMarker} key={i}>
      <Tooltip direction="top" offset={[0, -40]} opacity={1} permanent>{e.name}</Tooltip>
      <Popup style={{width:'300px',padding:'0px'}}>
            <ThreeTable/>
          </Popup>
      </Marker>
    );
    }
    
  });
}

export default ThreeMaker;
