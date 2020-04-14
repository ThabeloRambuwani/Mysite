/*
- Author: Thabelo Rambuwani
- Template Name: Personal Website
- Template URL:
*/


$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.sidebar-collapse-btn').fadeIn('slow');
    } else {
        $('.sidebar-collapse-btn').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
});




// - - - Sidebar - - - //
$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});

