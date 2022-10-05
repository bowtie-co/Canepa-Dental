
function initMap() {
  var eMap = $("#contact-map");
  var coords = eMap.attr("data-coords").split(",");
  var latlng = {lat: parseFloat(coords[0]), lng: parseFloat(coords[1])};
  var mapOptions = {
     center: latlng,
     scrollwheel: false,
     zoom: 15,
     navigationControl: true,
     mapTypeControl: false,
     scaleControl: false,
     panControl: false,
     streetViewControl: false,
     zoomControl: false,
     draggable: false
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map
  });
}
