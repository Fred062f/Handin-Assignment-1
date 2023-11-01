// This is the array you have to use!
console.log(ufoSightingsLatLng);

const map = L.map('map').setView([56, 10], 6);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

for (let sights of ufoSightingsLatLng) {
    L.marker([sights.lat, sights.lng]).addTo(map);
}