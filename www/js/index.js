$(document).ready(function() {

});

var watchID;
var map;
var loc;
var path = [];

var foodscript = 1;
var barricadescript = 1;
var armoryscript = 1;
var scrapscript = 1;
var resourcescript = 1;
                        
                     $(document).ready(function(){
    
                     $("#foodUpgrade").click(function(){
                     document.getElementById("foodAmount").innerHTML = "Food:" +foodscript + "/100";
                        if(foodscript<100){
                        foodscript++;
                        }     
                    });
                         
                    $("#barricadeUpgrade").click(function(){
                     document.getElementById("barricadeAmount").innerHTML = "Barricades:" +barricadescript + "/100";
                        if(barricadescript<100){
                        barricadescript++;
                        }     
                    });   
                         
                          
                    $("#armoryUpgrade").click(function(){
                     document.getElementById("armoryAmount").innerHTML = "Armory:" + armoryscript + "/100";
                        if(armoryscript<100){ 
                       armoryscript++;
                        }     
                    });  
                         
                  $("#scrapUpgrade").click(function(){
                     document.getElementById("scrapAmount").innerHTML = "Scrap:" + scrapscript + "/100";
                        if(scrapscript<100){ 
                       scrapscript++;
                        }     
                    });
                          $("#resourceUpgrade").click(function(){
                     document.getElementById("resourceAmount").innerHTML = "Resources:" +resourcescript;
                        if(resourcescript<100){
                        resourcescript++;
                        }     
                    });
                });
    


    

$(document).on( "pageinit", "#pagethree", function() {
    
    
    watchID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
});

document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {
                    // alert("deviceready");
                    document.getElementById('exitApp').addEventListener('click', function() {
                        navigator.app.exitApp();
                    });
                }


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