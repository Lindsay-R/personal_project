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

  $('.geo-container').on('click', 'a', function() {
//    $('.color').css('color', 'red');

    function success(position) {
      var mapcanvas = document.createElement('div');
      mapcanvas.id = 'mapcontainer';
      mapcanvas.style.height = '300px';
      mapcanvas.style.width = '300px';

      document.querySelector('article').appendChild(mapcanvas);

      var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


      var lat=position.coords.latitude;
      var long=position.coords.longitude;

//      printing it out
      $('.geo-container').text('your coordinates: '+ coords +'lat:'+ lat+' long:'+long);

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



  });








});
