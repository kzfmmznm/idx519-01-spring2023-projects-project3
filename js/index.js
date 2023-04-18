function initMap() {
  const kaplanLatLng = { lat: 41.8369733, lng: -87.6282752 }

  const opts = {
    zoom: 15,
    center: kaplanLatLng,
  }

  let map = new google.maps.Map(document.getElementById('map'), opts)

  // Add marker with ID logo
  const imagePath = '../media/designer_illustya.png'
  let marker = new google.maps.Marker({
    position: kaplanLatLng,
    map: map,
    icon: imagePath,
    animation: google.maps.Animation.DROP,
  })
}

window.initMap = initMap
