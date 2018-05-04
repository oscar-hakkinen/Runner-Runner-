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
var resourcescript = 0;
var mapresourcescript = 1;
                        
var bgColor = 0;


     
$(document).ready(function(){
                



  
    
    
    
                        
                        $("#exitApp").click(function(){
                        navigator.app.exitApp();
                        });
    
                        $("#themeChanger").click(function(){
                        if (bgColor == 1){
                        bgColor = 0;
                        document.getElementById("bg").style.background = "black";
                        $("H1").css("color", "white");    
                        }else{
                        bgColor = 1;
                        document.getElementById("bg").style.background = "white";  
                        $("H1").css("color", "black");    
                            };
                        });
                        $("#themeChanger2").click(function(){
                        if (bgColor == 1){
                        bgColor = 0;
                        document.getElementById("bg").style.background = "black";
                        $("H1").css("color", "white");     
                        $("H2").css("color", "white");      
                        $("p").css("color", "white");      
                         }else{
                         bgColor = 1;
                         document.getElementById("bg").style.background = "white"; 
                            $("H1").css("color", "black");   
                            $("H2").css("color", "black");
                            $("p").css("color", "black"); 
                         };
                        });
                        $("#themeChanger3").click(function(){
                        if (bgColor == 1){
                            bgColor = 0;
                            document.getElementById("bg").style.background = "black";
                            $("H1").css("color", "white"); 
                            $("H2").css("color", "white"); 
                            $("p").css("color", "white"); 
                             }else{
                             bgColor = 1;
                             document.getElementById("bg").style.background = "white"; 
                             $("H1").css("color", "black");  
                             $("H2").css("color", "black");
                             $("p").css("color", "black"); 
                                };
                            });
                        $("#themeChanger4").click(function(){
                        if (bgColor == 1){
                            bgColor = 0;
                            document.getElementById("bg").style.background = "black";
                            $("H1").css("color", "white"); 
                            $("H2").css("color", "white");  
                            $("p").css("color", "white"); 
                             }else{
                             bgColor = 1;
                             document.getElementById("bg").style.background = "white"; 
                             $("H1").css("color", "black");   
                             $("H2").css("color", "black"); 
                             $("p").css("color", "black"); 
                                };
                            });

     
                  
     
                        $("#deleteSave").click(function(){
                            foodscript = 0;
                            barricadescript = 0;
                            armoryscript = 0;
                            scrapscript = 0;
                            resourcescript = 0;
                            mapresourcescript = 1;
                             document.getElementById("foodAmount").innerHTML = "Food:" +foodscript + "/100";
                             document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                             document.getElementById("barricadeAmount").innerHTML = "Barricades:" +barricadescript + "/100";
                             document.getElementById("armoryAmount").innerHTML = "Armory:" + armoryscript + "/100";
                             document.getElementById("scrapAmount").innerHTML = "Scrap:" + scrapscript + "/100";
                        }); 
     
                        $("#deleteSave2").click(function(){
                            foodscript = 0;
                            barricadescript = 0;
                            armoryscript = 0;
                            scrapscript = 0;
                            resourcescript = 0;
                            mapresourcescript = 1;
                            document.getElementById("foodAmount").innerHTML = "Food:" +foodscript + "/100";
                             document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                             document.getElementById("barricadeAmount").innerHTML = "Barricades:" +barricadescript + "/100";
                             document.getElementById("armoryAmount").innerHTML = "Armory:" + armoryscript + "/100";
                             document.getElementById("scrapAmount").innerHTML = "Scrap:" + scrapscript + "/100";
                        }); 
     
                        $("#deleteSave3").click(function(){
                            foodscript = 0;
                            barricadescript = 0;
                            armoryscript = 0;
                            scrapscript = 0;
                            resourcescript = 0;
                            mapresourcescript = 1;
                            document.getElementById("foodAmount").innerHTML = "Food:" +foodscript + "/100";
                             document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                             document.getElementById("barricadeAmount").innerHTML = "Barricades:" +barricadescript + "/100";
                             document.getElementById("armoryAmount").innerHTML = "Armory:" + armoryscript + "/100";
                             document.getElementById("scrapAmount").innerHTML = "Scrap:" + scrapscript + "/100";
                        }); 
     
                        $("#deleteSave4").click(function(){
                            foodscript = 0;
                            barricadescript = 10;
                            armoryscript = 0;
                            scrapscript = 0;
                            resourcescript = 0;
                            mapresourcescript = 1;
                            document.getElementById("foodAmount").innerHTML = "Food:" +foodscript + "/100";
                             document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                             document.getElementById("barricadeAmount").innerHTML = "Barricades:" +barricadescript + "/100";
                             document.getElementById("armoryAmount").innerHTML = "Armory:" + armoryscript + "/100";
                             document.getElementById("scrapAmount").innerHTML = "Scrap:" + scrapscript + "/100";
                        }); 
        
                     
     
        
     
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
     
                     //resource upgrade test 
                     $("#resourceUpgrade").click(function(){
                     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;
                        if(resourcescript<400){
                        resourcescript++;
                        }     
                    });
     
      
                          
                });
$(document).on( "pageinit", "#pagetwo", function() { 
 mapresourcescript = 0
});
$(document).on( "pageinit", "#pagethree", function() {
    
     
  
//$("#mapResourceUpgrade").click(function(){
  //                   document.getElementById("mapResourceAmount").innerHTML = "Resources:" + mapresourcescript;
    //                 document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;      
    //               if(mapresourcescript<400){
    //                        
    //                    mapresourcescript++;
    //                    resourcescript++;    
    //                         
    //                   }
    //       alert(getDistanceFromLatLonInKm(prevLat,prevLong,currentlat,currentLong));
    //                });

 
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
 
function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    currentlat = position.coords.latitude;
    currentLong = position.coords.longitude;
    
     // alert(currentlat + ", " + currentLong);
     //  alert(prevLat + ", " + prevLong);
       
    
    //every time the listener ticks the code refreshes the values and add 1 more value into the resources.
     document.getElementById("mapResourceAmount").innerHTML = "You gained " + mapresourcescript + " resources.";
     document.getElementById("resourceAmount").innerHTML = "Resources:" + resourcescript;    
     mapresourcescript++;
     resourcescript++;    
    

    
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