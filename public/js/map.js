initialize();
function initialize()
{
var myCenter=new google.maps.LatLng(12.990148, 80.250265);

// Set other locations in array first title for marker, second coords
var locations = [
['SPI', 12.990148, 80.250265],
['SPI', 12.959871, 80.243742],
['SPI', 12.951088, 80.242025],
['SPI', 12.941552, 80.183574],
];
//apply location marker to centre on
var mapProp = {
	
  center:myCenter,
  zoom:12,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
position:myCenter,
title: 'My centre location marker'
});

marker.setMap(map);


// apply other location markers
for (i = 0; i < locations.length; i++) {
marker = new google.maps.Marker({
position: new google.maps.LatLng(locations[i][1], locations[i][2]),
map: map,
title: locations[i][0]
});


}
}

