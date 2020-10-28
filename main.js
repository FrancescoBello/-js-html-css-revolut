
$(document).ready(function() {


 $('.menu').mouseenter(function() {
         $('.dropdown-menu').addClass('active');
     });

     $('.list').mouseleave(function() {
         $('.dropdown-menu').removeClass('active');
     });

});
