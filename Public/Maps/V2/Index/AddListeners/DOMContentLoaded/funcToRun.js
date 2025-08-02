import { StartFunc as StartFuncFromSaveButtonId } from './SaveButtonId/entryFile.js';
import { StartFunc as StartFuncFromToggleButtonId } from './ToggleButtonId/entryFile.js';

let StartFunc = () => {
	initMap();
	StartFuncFromSaveButtonId();
	StartFuncFromToggleButtonId();
};

function initMap() {
	map = L.map('map').setView([16.9490473, 82.2365441], 15);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors',
		maxNativeZoom: 19, // OSM max available zoom is at 19.
		maxZoom: 22 // Match the map maxZoom, or leave map.options.maxZoom undefined.
	}).addTo(map);
};

export { StartFunc };