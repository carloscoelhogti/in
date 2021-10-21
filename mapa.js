let map;
var image = 'images/sw.png';

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -13.005975, lng: -55.941837 },
    zoom: 18,
    mapTypeId: 'satellite',
  });
}
function switchs(){
map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: -13.005980, lng: -55.801837 },
  zoom: 18,
  mapTypeId: 'satellite',
  icon: image,
});
}