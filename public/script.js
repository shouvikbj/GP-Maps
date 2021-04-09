mapboxgl.accessToken =
  "pk.eyJ1IjoiZ2FuZ3BheWVlIiwiYSI6ImNrbjl1dHRuejFibDQyb254Znl4NGhrZWQifQ.ARi4BcBoU9Hv2i2i5SwdMA";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([88.263641, 22.59577]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/satellite-v9",
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav, "bottom-right");

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");

  const marker = new mapboxgl.Marker({
    color: "yellow",
    draggable: true,
  })
    .setLngLat(center)
    .addTo(map);

  map.addControl(marker);
}
