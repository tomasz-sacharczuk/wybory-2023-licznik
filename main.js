import './style.css';

import { registerSW } from 'virtual:pwa-register'

registerSW({ 
	immediate: true,
	onOfflineReady() {
		localStorage.setItem('offline-ready', 'true');
		document.getElementById('offline-info').textContent = '✅ Gotowość do działania off-line';
	},
});

if (localStorage.getItem('offline-ready') === 'true') {
	document.getElementById('offline-info').textContent = '✅ Gotowość do działania off-line';
}

// Głosujący
const GLOSUJACY_COUNT_ID = 'glosujacy-count';

function updateVisibleGlosujacyCount(operation) {
	const rawCount = localStorage.getItem(GLOSUJACY_COUNT_ID) ?? '0';
	let convertedCount = Number.parseInt(rawCount, 10);

	switch (operation) {
		case 'add':
			convertedCount++;
			break;
		case 'sub': {
			if (convertedCount === 0) break;

			convertedCount--;
			break;
		}
	}

	localStorage.setItem(GLOSUJACY_COUNT_ID, convertedCount.toString());
	document.getElementById(GLOSUJACY_COUNT_ID).textContent = convertedCount.toString();
}

updateVisibleGlosujacyCount();

document.getElementById('glosujacy-add').onclick = () => {
	updateVisibleGlosujacyCount('add');
};

document.getElementById('glosujacy-sub').onclick = () => {
	updateVisibleGlosujacyCount('sub');
};

// Sejm
const SEJM_COUNT_ID = 'sejm-count';

function updateVisibleSejmCount(operation) {
	const rawCount = localStorage.getItem(SEJM_COUNT_ID) ?? '0';
	let convertedCount = Number.parseInt(rawCount, 10);

	switch (operation) {
		case 'add':
			convertedCount++;
			break;
		case 'sub': {
			if (convertedCount === 0) break;

			convertedCount--;
			break;
		}
	}

	localStorage.setItem(SEJM_COUNT_ID, convertedCount.toString());
	document.getElementById(SEJM_COUNT_ID).textContent = convertedCount.toString();
}

updateVisibleSejmCount();

document.getElementById('sejm-add').onclick = () => {
	updateVisibleSejmCount('add');
};

document.getElementById('sejm-sub').onclick = () => {
	updateVisibleSejmCount('sub');
};

// Senat
const SENAT_COUNT_ID = 'senat-count';

function updateVisibleSenatCount(operation) {
	const rawCount = localStorage.getItem(SENAT_COUNT_ID) ?? '0';
	let convertedCount = Number.parseInt(rawCount, 10);

	switch (operation) {
		case 'add':
			convertedCount++;
			break;
		case 'sub': {
			if (convertedCount === 0) break;

			convertedCount--;
			break;
		}
	}

	localStorage.setItem(SENAT_COUNT_ID, convertedCount.toString());
	document.getElementById(SENAT_COUNT_ID).textContent = convertedCount.toString();
}

updateVisibleSenatCount();

document.getElementById('senat-add').onclick = () => {
	updateVisibleSenatCount('add');
};

document.getElementById('senat-sub').onclick = () => {
	updateVisibleSenatCount('sub');
};

// Referendum
const REFERENDUM_COUNT_ID = 'referendum-count';

function updateVisibleReferendumCount(operation) {
	const rawCount = localStorage.getItem(REFERENDUM_COUNT_ID) ?? '0';
	let convertedCount = Number.parseInt(rawCount, 10);

	switch (operation) {
		case 'add':
			convertedCount++;
			break;
		case 'sub': {
			if (convertedCount === 0) break;

			convertedCount--;
			break;
		}
	}

	localStorage.setItem(REFERENDUM_COUNT_ID, convertedCount.toString());
	document.getElementById(REFERENDUM_COUNT_ID).textContent = convertedCount.toString();
}

updateVisibleReferendumCount();

document.getElementById('referendum-add').onclick = () => {
	updateVisibleReferendumCount('add');
};

document.getElementById('referendum-sub').onclick = () => {
	updateVisibleReferendumCount('sub');
};