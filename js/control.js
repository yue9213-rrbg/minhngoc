// JavaScript Document
$(document).ready(function(){
    $('#slide').owlCarousel({
      items: 3,
      margin: 30,
      loop: true,
      dots: true,
      nav: false,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        1024: { items: 3 }
      }
    });
  });

