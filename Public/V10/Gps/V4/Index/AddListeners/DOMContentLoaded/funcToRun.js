import { StartFunc as StartFuncFromSaveButtonId } from './SaveButtonId/entryFile.js';
import { StartFunc as StartFuncFromToggleButtonId } from './ToggleButtonId/entryFile.js';

let StartFunc = () => {
	initMap();
	StartFuncFromSaveButtonId();
	StartFuncFromToggleButtonId();
};

function initMap() {
	map = L.map('map').setView([20.5937, 78.9629], 4);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors'
	}).addTo(map);
};

export { StartFunc };