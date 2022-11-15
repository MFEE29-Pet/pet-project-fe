import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  useMapEvent,
} from 'react-leaflet';
import { useEventHandlers } from '@react-leaflet/core';
import { Rectangle } from 'react-leaflet/Rectangle';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ClinicMaker from './ClinicMaker';

//React control

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

const BOUNDS_STYLE = { weight: 1 };

function MinimapBounds({ parentMap, zoom }) {
  const minimap = useMap();

  // Clicking a point on the minimap sets the parent's map center
  const onClick = useCallback(
    (e) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap]
  );
  useMapEvent('click', onClick);

  // Keep track of bounds in state to trigger renders
  const [bounds, setBounds] = useState(parentMap.getBounds());
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    // Update the minimap's view to match the parent map's center and zoom
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  // Listen to events on the parent map
  const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), []);
  useEventHandlers({ instance: parentMap }, handlers);

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

function MinimapControl({ position, zoom }) {
  const parentMap = useMap();
  const mapZoom = zoom || 0;

  // Memoize the minimap so it's not affected by position changes
  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={mapZoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
      </MapContainer>
    ),
    []
  );

  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
}

//now location
function LocationMarker() {
  const [position, setPosition] = useState(null);

  const customMarker = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });

  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customMarker}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

//clinicMaker


function ClinicMap({ dataFromSelect }) {
  // const demoDataFromServer = [
  //   { lat: 41.19197, lng: 25.33719 },
  //   { lat: 41.26352, lng: 25.1471 },
  //   { lat: 41.26365, lng: 25.24215 },
  //   { lat: 41.26369, lng: 25.33719 },
  //   { lat: 41.26365, lng: 25.43224 },
  //   { lat: 41.26352, lng: 25.52728 },
  //   { lat: 41.2633, lng: 25.62233 },
  //   { lat: 41.263, lng: 25.71737 },
  //   { lat: 41.3082, lng: 22.95892 },
  //   { lat: 41.31041, lng: 23.054 },
  // ];

  // const initState = {
  //   coords: [
  //     { lat: 41.19197, lng: 25.33719 },
  //     { lat: 41.26352, lng: 25.1471 },
  //     { lat: 41.26365, lng: 25.24215 },
  //     { lat: 41.26369, lng: 25.33719 },
  //     { lat: 41.26365, lng: 25.43224 },
  //     { lat: 41.26352, lng: 25.52728 },
  //     { lat: 41.2633, lng: 25.62233 },
  //     { lat: 41.263, lng: 25.71737 },
  //     { lat: 41.3082, lng: 22.95892 },
  //     { lat: 41.31041, lng: 23.054 },
  //   ],
  //   zoom: 7,
  // }

  // const [state, setState] = useState([]);

  // useEffect(() => {
  //   // 連接資料庫
  //   // 設定狀態
  //   // console.log('didmount');
  //   setState(demoDataFromServer);
  // }, []);

  return (
    <MapContainer
      center={[25.033671,121.564427]}
      scrollWheelZoom={true}
      zoom={17}
      style={{ height: '600px', width: '75%', borderRadius: '10px', zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />

      <LocationMarker/>
      <ClinicMaker dataFromSelect={dataFromSelect} />
      {/* {console.log(dataFromSelect)} */}
      <MinimapControl position="topright" />
    </MapContainer>
  );
}

export default ClinicMap;
