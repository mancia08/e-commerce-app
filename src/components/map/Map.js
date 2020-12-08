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
            center: [-104.9876, 39.7405],
            zoom: 12.5,
        });

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        map.on('load', function () {
            // Add an image to use as a custom marker
            map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                function (error, image) {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    // Add a GeoJSON source with 2 points
                    map.addSource('random-points-data', {
                        'type': 'geojson',
                        'data': {
                            'type': 'FeatureCollection',
                            'features': [
                                {
                                    // feature for Mapbox DC
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [
                                            -77.03238901390978,
                                            38.913188059745586
                                        ]
                                    },
                                    'properties': {
                                        'title': 'Hey Teiko!'
                                    }
                                },
                                {
                                    // feature for Mapbox SF
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-122.414, 37.776]
                                    },
                                    'properties': {
                                        'title': 'Llala Zheniya'
                                    }
                                }
                            ]
                        }
                    });

                    // Add a symbol layer
                    map.addLayer({
                        'id': 'random-points-layer',
                        'type': 'symbol',
                        'source': 'random-points-data',
                        'layout': {
                            'icon-image': 'custom-marker',
                            // get the title name from the source's "title" property
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
                // create popup node
                const popupNode = document.createElement('div');
                ReactDOM.render(<Popup feature={feature} />, popupNode);
                // set popup on map
                popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(map);
            }
        });

        return () => map.remove();
    }, []);


    return <div className="map-container" ref={mapContainerRef} />;
}

export default Map;