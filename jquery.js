$(document).ready(function () {

    /* on-load animation
    $('.title').fadeIn(1000).removeClass('hidden');
    $('.line2').fadeIn(1000).removeClass('hidden');
    $('.GO-button').fadeIn(1000).removeClass('hidden');
    $('.line1').fadeIn(1000).removeClass('hidden');
    */

    // scroll to choices
    var once = true;
    $(window).scroll(function () {
        var hT = $('.choice-screen').offset().top,
            hH = $('.choice-screen').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
            //console.log(wS, lastScrollTop);
        if (wS + wH >= hT && once) {
            var bottom = hT + hH;
            $('html, body').animate({scrollTop:bottom}, 3000);
            once = false;
        }
    });

    // start game
    $('.GO-button').click(function () {
        // creating cookies
        Cookies.set('feeling', 'calm');
        Cookies.set('door', 'look');
        Cookies.set('plan', 'considering');
        Cookies.set('sure', 'perhaps');
        window.location = $(this).attr('url');
        return false
        // blackout the screen
    });

    // choice redirect (put url as div parameter)
    $('.choice').click(function () {
        window.location = $(this).attr('url');
        return false
    })

    // switch map and back to game
    $('.map-button').click(function () {
        // switch from GAME to MAP
        if ($('.map-button-text').text() == 'MAP') {
            $('.map-button-text').text('BACK');
            $('.map').css({
                visibility: 'visible',
                opacity: 0
            }).animate({
                opacity: 1
            }, 300);
            //$('.map').css('visibility', 'visible');
        } else { // switch from MAP to GAME
            $('.map-button-text').text('MAP');
            $('.map').css({
                opacity: 1
            }).animate({
                opacity: 0
            }, 300, function () {
                $('.map').css('visibility', 'hidden');
            });
            //$('.map').css('visibility', 'hidden');
        }
    });

});
