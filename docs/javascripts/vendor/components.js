//Stroll.js
//// Bind via selectors
//stroll.bind( '#main section' );

// // Bind via element reference
// stroll.bind( document.getElementById( 'some-list' ) );

// // Bind via array of elements / jQuery object
// stroll.bind( $( '#main .some-list' ) );



//SMART TICKER



 (function()
  {
    $('.target').smarticker({
          theme: 2,
          // Defines SmarTicker Style: 1, 2, 3, 4 ...
          direction: 'ltr',
          layout: 'horizontal',
          animation: 'default', // Defines transition of news titles: default, fade, slide, typing...
          category: true,
          // If change this to false, the Category section will not be created
          subcategory: true,
          // If change this to false, the Subcategory section will not be created
          titlesection: true,
          // Define a title section before news title section
          progressbar: true,   // Add a progress bar
          catcolor: true,
          // Animate category section background color
          subcatcolor: true,
          // Animate sub category section background color
          speed: 1500,
          pausetime: 3500,

    });

  })();

$(window).load(function(){
  // this will ensure that all content has loaded before the div is shown
  // $(".nav-panel").fadeIn( "slow" );
     $("body").fadeIn( "slow" );




});

//SlickMagic



//
$(document).ready(function(){
  $('.your-class').slick({
      arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
          dots: true,
             autoplay: true,
  autoplaySpeed: 5000
  });
});

//ScrollMagic


//PDF
