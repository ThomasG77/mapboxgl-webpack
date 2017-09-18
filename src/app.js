import mapboxgl from 'mapbox-gl';
import './style.css';
import './../node_modules/mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzZzc3IiwiYSI6Im5Yc3p3SW8ifQ.FtzS4C8q_UJpOhrVnJfQfg';

// Instanciate a map object
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
    center: [-74.50, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

