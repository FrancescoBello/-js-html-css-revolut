
$(document).ready(function() {


 $('.menu ').mouseenter(function() {

      console.log('mouseenter');
         //$('.dropdown-menu').addClass('active');

         // this -> elemento che ha scatenato l'evento
         // children, find -> per trovare un figlio dentro un elemenot
         $(this).children('.dropdown-menu').show();
         //.show();
     });

  $('.menu ').mouseleave(function() {

    $(this).children('.dropdown-menu').hide();

    //   $('.dropdown-menu').hide;
    //$('.dropdown-menu').removeClass('active');
   });

});
