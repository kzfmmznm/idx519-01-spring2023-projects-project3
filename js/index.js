let map

function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.1239654, 136.9417741),
  }
  map = new google.maps.Map(document.getElementById('map'), opts)
}

window.initMap = initMap
