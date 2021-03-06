/**************************************/
/* Custom JavaScript files supervisor */
/* //= ./common/material-init.js */
/**************************************/

$(document).ready(function() {

$('.owl-carousel').owlCarousel({
    autoPlay:5000,
    autoplayHoverPause:true,
    margin:30,
    loop:true,
    items:2,
    dotsEach:true
});

$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});

});