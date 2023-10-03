$(document).ready(function(){
    // Mobile Menu Icon
   $('#nav-icon').click(function(){
      $(this).toggleClass('open');
      $('.header-nav nav').slideToggle();
   });

   $(".input_search").click(function () {
      $(".search_box").toggleClass("show");
   });
   $(".Mobile_input_search").click(function () {
      $(".search_box").toggleClass("show");
   });

   // Owl Carousel 
   $(".owl-carousel").owlCarousel({
      loop:true,
      margin:50,
      items:3,
      // autoWidth:true,
      autoplay:true,
      responsive:{
         0:{
               items:1
         },
         575:{
               items:2
         },
         767:{
               items:3
         }
      }
   });
   
});
