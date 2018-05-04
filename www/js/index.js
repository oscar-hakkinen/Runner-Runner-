$(document).ready(function() {

});

var watchID;
var map;
var loc;
var path = [];

var prevLat;
var prevLong;
var currentlat;
var currentLong;


var foodscript = 0;
var barricadescript = 0;
var armoryscript = 0;
var scrapscript = 0;
var resourcescript = 15;
var mapresourcescript = 1;
                        



// grid upgrade buttons
 $(document).ready(function(){
    
                     $("#foodUpgrade").click(function(){
                     document.getElementById("foodAmount").innerHTML = "Food:" +foodscript + "/100";
                     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                        if(foodscript<100 && resourcescript>0){
                        foodscript++;
                        resourcescript--;      
                        }     
                    });
                         
                    $("#barricadeUpgrade").click(function(){
                     document.getElementById("barricadeAmount").innerHTML = "Barricades:" +barricadescript + "/100";
                     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                        if(barricadescript<100 && resourcescript>0){
                        barricadescript++;
                        resourcescript--;      
                        }     
                    });   
                          
                    $("#armoryUpgrade").click(function(){
                     document.getElementById("armoryAmount").innerHTML = "Armory:" + armoryscript + "/100";
                     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                        if(armoryscript<100 && resourcescript>0){ 
                       armoryscript++;
                       resourcescript--;          
                        }     
                    });  
                         
                  $("#scrapUpgrade").click(function(){
                     document.getElementById("scrapAmount").innerHTML = "Scrap:" + scrapscript + "/100";
                     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;      
                        if(scrapscript<100 && resourcescript>0){ 
                       scrapscript++;
                       resourcescript--;    
                        }     
                    });
                          $("#resourceUpgrade").click(function(){
                     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                        if(resourcescript<400){
                        resourcescript++;
                        }     
                    });
     
      
                          
                });







 $(document).on( "pageinit", "#pagethree", function() {
    
     
  
$("#mapResourceUpgrade").click(function(){
                     document.getElementById("mapResourceAmount").innerHTML = "Resources:" + mapresourcescript;
                                 document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;      
                        if(mapresourcescript<400){
                            
                        mapresourcescript++;
                        resourcescript++;    
                             
                        }
           alert(getDistanceFromLatLonInKm(prevLat,prevLong,currentlat,currentLong).toFixed(2));
                    });


function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  
    var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
     
     
     
    watchID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
 });

 document.addEventListener("deviceready", onDeviceReady, false);

//exit button function
function onDeviceReady() {
                    // alert("deviceready");
                    document.getElementById('exitApp').addEventListener('click', function() {
                        navigator.app.exitApp();
                    });
                }

function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    currentlat = position.coords.latitude;
    currentLong = position.coords.longitude;
    
    
    //work out distance between prev and current
    //only if prev has a value
    
    

    
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
    
    prevLat = currentlat;
    prevLong = currentLong;
}







function onLocationFail(error) {
    console.log("Error: " + error.message);
}