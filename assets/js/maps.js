function initMap() {
    var map = new google.maps.Map(document.getElementById("gmap"), {
        zoom: 8,
        center: {
            lat: 51.75629,
            lng: -1.25951
        }
    });

    var labels = "ABC";

    var locations = [{
            lat: 52.196150,
            lng: -2.236620
        },
        {
            lat: 51.431320,
            lng: -0.103030
        },
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}