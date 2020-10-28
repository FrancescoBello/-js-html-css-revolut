
$(document).ready(function() {


 $('.menu li').mouseenter(function() {

      console.log('mouseenter');
         //$('.dropdown-menu').addClass('active');

         // this -> elemento che ha scatenato l'evento
         // children, find -> per trovare un figlio dentro un elemenot
         $(this).children('.dropdown-menu').show();
     });

  $('.menu li').mouseleave(function() {


       $('.dropdown-menu').hide;
    //$('.dropdown-menu').removeClass('active');
   });

});
