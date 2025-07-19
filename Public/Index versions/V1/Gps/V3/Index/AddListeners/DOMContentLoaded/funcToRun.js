import { StartFunc as StartFuncFromSaveButtonId } from './SaveButtonId/entryFile.js';
import { StartFunc as StartFuncFromToggleButtonId } from './ToggleButtonId/entryFile.js';

let StartFunc = () => {
	initMap();
	StartFuncFromSaveButtonId();
	StartFuncFromToggleButtonId();
};

function initMap() {
	map = L.map('map').setView([0, 0], 2);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors'
	}).addTo(map);
};

export { StartFunc };