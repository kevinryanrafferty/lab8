function initMap() {
	L.mapquest.key = 'dq2ck4UrFYh847hPE8ctH4Dn6XJ2uBQ1';

	var map = L.mapquest.map('map', {
		center: [32.90, -117.228],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}