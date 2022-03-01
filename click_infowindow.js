var MapStart = new google.maps.LatLng(38.634036, -111.785889);

var markers;
var map;
var infowindow = new google.maps.InfoWindow();

function initialize() {
    markers = new Array();
    var mapOptions = {
        zoom: 6,
        center: MapStart,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    map = new google.maps.Map(document.getElementById("map"),
        mapOptions);

    $("#map_list ul li").each(function (index) {

        //Agreagar marcadores
        var marker = new google.maps.Marker({
            // lat long marker 1
            position: new google.maps.LatLng($(this).children(".marker_long").text(), $(this)
                .children(".marker_lat").text()),

            map: map,
            animation: google.maps.Animation.DROP,
            title: $(this).children(".marker_title").text(),
            brief: $(this).children(".marker_brief").text()
        });

        google.maps.event.addListener(marker, 'click', function () {
            //map.panTo(new google.maps.LatLng(marker.position.Sa, marker.position.Ta));
            
            infowindow.setContent(marker.brief);
            infowindow.open(map, marker);
        });

        markers.push(marker);
    });
}

$(document).ready(function () {
    $("#map_list ul li").click(function () {
        marker = markers[this.id];
        console.log("TAXI CLICKK: ",marker)
        markerContent = $("div.marker_brief", this).html();
        varLong = $("div.marker_long", this).html();
        varLat = $("div.marker_lat", this).html();
        map.panTo(new google.maps.LatLng(varLong, varLat));

        infowindow.setContent(markerContent)
        infowindow.open(map, marker);

    });
    console.log("MARKERS::",markers)
});