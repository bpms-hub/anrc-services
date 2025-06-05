//Stroll.js
//// Bind via selectors
//stroll.bind( '#main section' );
// // Bind via element reference
// stroll.bind( document.getElementById( 'some-list' ) );
// // Bind via array of elements / jQuery object
// stroll.bind( $( '#main .some-list' ) );
//SMART TICKER
(function(){$(".target").smarticker({theme:2,direction:"ltr",layout:"horizontal",animation:"default",category:!0,subcategory:!0,titlesection:!0,progressbar:!0,catcolor:!0,subcatcolor:!0,speed:1500,pausetime:3500})})();$(window).load(function(){$("body").fadeIn("slow")});$(document).ready(function(){$(".your-class").slick({arrows:!1,speed:500,slidesToShow:1,slidesToScroll:1,dots:!0,autoplay:!0,autoplaySpeed:5e3})});