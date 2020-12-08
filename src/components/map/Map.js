import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
    const mapContainerRef = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-104.9876, 39.7405],
          zoom: 12.5,
        });
    
        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        return () => map.remove();
      }, []);
      return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;