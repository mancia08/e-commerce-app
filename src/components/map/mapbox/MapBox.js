import React, { useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import mapboxgl from 'mapbox-gl';

import Popup from './popup'
import fakeData from './helper/fakeData';

import '../Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = props => {
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-0.118092, 51.509865],
            zoom: 11.4,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
        
        const mainMarker = new mapboxgl.Marker({
            color: "#ff6347",
        })
            .setLngLat([-0.118092, 51.509865])
            .setPopup(new mapboxgl.Popup().setHTML("<h1>We are here!!!</h1>"))
            .addTo(map);
           
            

        map.on('load', function () {
            mainMarker.togglePopup();
            map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                function (error, image) {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    map.addSource('random-points-data', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': fakeData().flat()
                        }
                    });
                    map.addLayer({
                        'id': 'random-points-layer',
                        'type': 'symbol',
                        'source': 'random-points-data',
                        'layout': {
                            'icon-image': 'custom-marker',
                            'text-field': ['get', 'title'],
                            'text-font': [
                                'Open Sans Semibold',
                                'Arial Unicode MS Bold'
                            ],
                            'text-offset': [0, 1.25],
                            'text-anchor': 'top'
                        }
                    });
                }
            );

        });

        map.on('click', 'random-points-layer', e => {
            if (e.features.length) {
                const feature = e.features[0];
                const popupNode = document.createElement('div');
                ReactDOM.render(<Popup router={props} feature={feature} />, popupNode);
                popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
            }
            map.flyTo({
                center: e.features[0].geometry.coordinates,
                zoom: 15
              });
        });

        map.on('mouseenter', 'random-points-layer', e => {
            if (e.features.length) {
                map.getCanvas().style.cursor = 'pointer';
            }
        });

        map.on('mouseleave', 'random-points-layer', () => {
            map.getCanvas().style.cursor = '';
        });

        return () => map.remove();
    }, []);


    return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;