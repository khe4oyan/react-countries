import React from 'react'
import pin from './pin.png'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Map = ({ latitude, longitude, markerTitle }) => {
  React.useEffect(() => {
    const map = L.map('map').setView([latitude, longitude], 8);

		const customIcon = L.icon({
      iconUrl: pin,
      iconSize: [50, 64],
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([latitude, longitude], { icon: customIcon })
      .addTo(map)
      .bindPopup(markerTitle)
      // .openPopup();
  }, [latitude, longitude]);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
};

export default Map;