(function($) {
    var $window = $(window);
    var $html = $('html');
    var top = $('#back-to-top');

    $window.resize(function resize(){
        if ($window.width() < 1024) {
            return $html.addClass('mobile');  
        }

        $html.removeClass('mobile');
    }).trigger('resize');

    $('.tile.video').hover(function() {
        $(this).children('video').removeClass('inactive');
        $(this).children('video').addClass('active');
        $(this).children('video')[0].play();
    }, 
    function () {
        var el = $(this).children('video')[0];
        el.pause();
        el.currentTime = 0;
        $(this).children('video').removeClass('active');
        $(this).children('video').addClass('inactive');
    });

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 600) { 
            $(top).fadeIn(); 
        } else { 
            $(top).fadeOut(); 
        } 
    }); 
    $(top).click(function(){ 
        $('html, body').animate({ scrollTop: 0 }, 600); 
        return false; 
    });     
})(jQuery);