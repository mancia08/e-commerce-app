import React, { useRef, useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import mapboxgl from 'mapbox-gl';
import Popup from './popup';
import Tab from './tab';

import { stores } from './helper/fakeData';

import '../Map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const Map = props => {
    const mapContainerRef = useRef(null);
    const popUpRef = useRef(new mapboxgl.Popup({ offset: 15 }));

    const [myMap, setMap] = useState('');

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/light-v10',  //'mapbox://styles/mapbox/streets-v11',
            center: [-0.118092, 51.509865],
            zoom: 11.4,
        });

        setMap(map);

        map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

        const mainMarker = new mapboxgl.Marker({
            color: "#ff6347",
        })
            .setLngLat([-0.118092, 51.509865])
            .setPopup(new mapboxgl.Popup({ closeOnClick: false }).setHTML("<h1>We are here!!!</h1>"))
            .addTo(map);

        stores.features.map((store, i) => {
            return store.properties.key = i;
        });


        //   link.addEventListener('click', function(e){
        //     for (var i=0; i < data.features.length; i++) {
        //       if (this.id === "link-" + data.features[i].properties.id) {
        //         var clickedListing = data.features[i];
        //         flyToStore(clickedListing);
        //         createPopUp(clickedListing);
        //       }
        //     }  
        //     var activeItem = document.getElementsByClassName('active');
        //     if (activeItem[0]) {
        //       activeItem[0].classList.remove('active');
        //     }
        //     this.parentNode.classList.add('active');
        //   });

        map.on('load', function () {
            mainMarker.togglePopup();
            map.loadImage(
                'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
                function (error, image) {
                    if (error) throw error;
                    map.addImage('custom-marker', image);
                    map.addSource('random-points-data', {
                        'type': 'geojson',
                        'data': stores
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
                zoom: 15,
                essential: true
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

    const handleClick = (e) => {
        for (let i = 0; i < stores.features.length; i++) {
            if (e.target.id === "listing-" + stores.features[i].properties.key) {
                const clickedListing = stores.features[i].geometry.coordinates;
                myMap.flyTo({
                    center: clickedListing,
                    zoom: 15,
                    essential: true
                });

                // const popUps = document.getElementsByClassName('mapboxgl-popup');
                // if (popUps[0]) popUps[0].remove();
                
                // const popup = new mapboxgl.Popup({ closeOnClick: false })
                // .setLngLat(stores.features[i].geometry.coordinates)
                // .setHTML(`<h3>${stores.features[i].properties.name}</h3> 
                //     <h4>${stores.features[i].properties.address}</h4>`)
                // .addTo(myMap);

                const feature = stores.features[i];
                const popupNode = document.createElement('div');
                setTimeout(() => {
                    ReactDOM.render(<Popup router={props} feature={feature} />, popupNode);
                    popUpRef.current.setLngLat(feature.geometry.coordinates).setDOMContent(popupNode).addTo(myMap);
    
                }, 1500)
               

                // const feature = stores.features[i];
                // const popup = new mapboxgl.Popup({ closeOnClick: false })
                // .setLngLat(stores.features[i].geometry.coordinates)
                // .setHTML(`<h3>${stores.features[i].properties.name}</h3> 
                //     <h4>${stores.features[i].properties.address}</h4>
                //     ${<Popup router={props} feature={feature} />}
                //     `)
                // .addTo(myMap);
            }
        }
    }

    return (
        <div className="stuff_wrap">
            <div className='sidebar'>
                <div className='heading'>
                    <h1>Our locations</h1>
                </div>
                <div id='listings' className='listings'>
                    {stores.features.map((store) => {
                        const { key, address, city, phone, name } = store.properties;
                        return <Tab
                            id={key}
                            name={name}
                            address={address}
                            city={city}
                            phone={phone}
                            onClick={handleClick}
                        />
                    })}
                </div>
            </div>
            <div className="map-container" ref={mapContainerRef} />
        </div>
    )
}

export default Map;