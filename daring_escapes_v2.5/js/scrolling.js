$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    });
    
    $('.xs-nav').on('click', function() {
        $(".navbar-toggle").click();
    });
    
    $('body').scrollspy({
        target: '.navbar',
        offset: 160
    });
    
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $(window).stellar();
});