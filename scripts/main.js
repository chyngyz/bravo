$(document).ready(function(){$("#fullpage").fullpage({anchors:["home","pub","restaurant","nightclub","contact"],navigation:!0,navigationPosition:"right",navigationTooltips:["Главная","Пивной паб","Ресторан","Диско-клуб","Контакты"],showActiveTooltip:!0,responsiveWidth:768,css3:!0}),""==document.location.hash&&$(".logo").hide(),$(window).on("hashchange",function(){var e=document.location.hash;"#home"===e||""==e?$(".logo").hide():$(".logo").show()}),$("#book-form-link, #book-form-link2").magnificPopup({type:"inline",midClick:!0,showCloseBtn:!1,callbacks:{open:function(){for(var e=[{pin:"",desc:"",lat:42.8436041,"long":74.585852}],t={zoom:16,center:new google.maps.LatLng(42.8436041,74.585852),styles:[{stylers:[{saturation:0},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{weight:.5},{color:"#333333"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{gamma:1},{saturation:50}]}]},i=new google.maps.Map(document.getElementById("map"),t),o=[],l=(new google.maps.InfoWindow,function(e){var t=new google.maps.Marker({map:i,position:new google.maps.LatLng(e.lat,e["long"]),title:e.pin,icon:"images/marker.svg"});t.content='<div class="infoWindowContent">'+e.desc+"</div>",o.push(t)}),s=0;s<e.length;s++)l(e[s])}}}),$("#book-corp-link, #book-corp-link2").magnificPopup({type:"inline",showCloseBtn:!1,midClick:!0,callbacks:{open:function(){for(var e=[{pin:"",desc:"",lat:42.8436041,"long":74.585852}],t={zoom:16,center:new google.maps.LatLng(42.8436041,74.585852),styles:[{stylers:[{saturation:0},{gamma:1}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.business",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"on"},{saturation:50},{gamma:0},{hue:"#50a5d1"}]},{featureType:"administrative.neighborhood",elementType:"labels.text.fill",stylers:[{color:"#333333"}]},{featureType:"road.local",elementType:"labels.text",stylers:[{weight:.5},{color:"#333333"}]},{featureType:"transit.station",elementType:"labels.icon",stylers:[{gamma:1},{saturation:50}]}]},i=new google.maps.Map(document.getElementById("map"),t),o=[],l=(new google.maps.InfoWindow,function(e){var t=new google.maps.Marker({map:i,position:new google.maps.LatLng(e.lat,e["long"]),title:e.pin,icon:"images/marker.svg"});t.content='<div class="infoWindowContent">'+e.desc+"</div>",o.push(t)}),s=0;s<e.length;s++)l(e[s])}}}),$("#inputTel, #inputTel2").mask("+996 (###) ## ## ##"),$("#form").submit(function(){return $.ajax({type:"POST",url:"mail.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро мы с вами свяжемся."),$("#form").trigger("reset")}),!1}),$("#formCorp").submit(function(){return $.ajax({type:"POST",url:"mailCorp.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за заявку! Скоро мы с вами свяжемся."),$("#form").trigger("reset")}),!1}),$("#mobile-menu").click(function(){$(this).toggleClass("open")})});