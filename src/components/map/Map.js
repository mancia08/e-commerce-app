import React, { useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import mapboxgl from 'mapbox-gl';

import Marker from './marker';
import Popup from './popup'
import fetchFakeData from './api/fetchFakeData';

import './Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = () => {
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-0.118092, 51.509865],
            zoom: 12.5,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        map.on('load', function () {
            map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                function (error, image) {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    map.addSource('random-points-data', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': [
                                {
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [
                                            -0.0719384,
                                            51.5289945
                                        ]
                                    },
                                    'properties': {
                                        'name': 'lalala',
                                        'title': 'Teiko',
                                        'description':'hjgdjdghjdjjd'
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-0.1428859, 51.5539548]
                                    },
                                    'properties': {
                                        'name': 'lalala',
                                        'title': 'Llala Zheniya',
                                        'description':'hjgdjdghjdjjd'
                                    }
                                }
                            ]
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

        // map.on('moveend', async () => {
        //     // get new center coordinates
        //     const { lng, lat } = map.getCenter();
        //     // fetch new data
        //     const results = await fetchFakeData(lng, lat);
        //     // update "random-points-data" source with new data
        //     // all layers that consume the "random-points-data" data source will be updated automatically
        //     map.getSource('random-points-data').setData(results);
        // });

        map.on('click', 'random-points-layer', e => {
            if (e.features.length) {
                const feature = e.features[0];
                const popupNode = document.createElement('div');
                ReactDOM.render(<Popup feature={feature} />, popupNode);
                popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
            }
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