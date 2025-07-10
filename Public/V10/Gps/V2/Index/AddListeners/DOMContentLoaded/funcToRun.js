import { StartFunc as StartFuncFromSaveButtonId } from './SaveButtonId/entryFile.js';

let StartFunc = () => {
	StartFuncFromSaveButtonId();
	initMap();
};

function initMap() {
	map = L.map('map').setView([0, 0], 2);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '© OpenStreetMap contributors'
	}).addTo(map);
};

export { StartFunc };