$(document).ready(function() {

});

var watchID;
var map;
var loc;
var path = [];


       

$(document).on( "pageinit", "#pagethree", function() {
    
    
    watchID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
});


function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    position.coords.latitude, position.coords.longitude
    
    path.push(loc);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 16,
        disableDefaultUI: true
    });
    
    //sets a path that shows the location the users has travelled 
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#000000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        //creates a custom map marker
    var marker = new google.maps.Marker({
          map: map,
          draggable: false,
         
        
          position: {lat:position.coords.latitude, lng:position.coords.longitude}
        });
     
   
    mapPath.setMap(map);
}

function onLocationFail(error) {
    console.log("Error: " + error.message);
}