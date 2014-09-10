// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//require turbolinks
//= require_tree .


$(document).ready(function() {

//  ###GEOLOCATION---------------------------------------------------------------------------------------------------

  $('.geo-container').on('click', 'a', function() {
//    $('.color').css('color', 'red');

    function success(position) {
      var mapcanvas = document.createElement('div');
      mapcanvas.id = 'mapcontainer';
      mapcanvas.style.height = '175px';
      mapcanvas.style.width = '250px';

      document.querySelector('article').appendChild(mapcanvas);

      var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


      var lat=position.coords.latitude;
      var long=position.coords.longitude;




//      --adding lat and long to the input fields--

      $('#harvest_latitude').val($('#harvest_latitude').val() + lat);
      $('#harvest_longitude').val($('#harvest_longitude').val() + long);

//      -------------------------------------------



      var options = {
        zoom: 17,
        center: coords,
        mapTypeControl: true,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var map = new google.maps.Map(document.getElementById("mapcontainer"), options);

      var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title:"You are here!"
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    } else {
      error('Geo Location is not supported');
    }





//----## getting address-------

    //I'm not doing anything else, so just leave
    if(!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(function(pos) {
      geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
      geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          //Check result 0
          var result = results[0];
          //look for locality tag and administrative_area_level_1
          var city = "";
          var state = "";
          for(var i=0, len=result.address_components.length; i<len; i++) {
            var ac = result.address_components[i];
            if(ac.types.indexOf("locality") >= 0) city = ac.long_name;
            if(ac.types.indexOf("administrative_area_level_1") >= 0) state = ac.long_name;
          }
          //only report if we got Good Stuff
          if(city != '' && state != '') {
            $("#city-state").html("Your Location: "+city+", "+state+".");
          }

          //      --adding city, state to the input field --

          $('#harvest_city').val($('#harvest_city').val() + city);
          $('#harvest_state').val($('#harvest_state').val() + state);

          //      -------------------------------------------


        }
      });

    });

//----end ## getting address----




  });
  //  end ###GEOLOCATION---------------------------------------------------------------------------------------------------



});

