$(document).ready(function () {

    /* on-load animation
    $('.title').fadeIn(1000).removeClass('hidden');
    $('.line2').fadeIn(1000).removeClass('hidden');
    $('.GO-button').fadeIn(1000).removeClass('hidden');
    $('.line1').fadeIn(1000).removeClass('hidden');
    */

    // choice redirect (put url as div parameter)
    $('.choice').click(function () {
        window.location = $(this).attr('url');
        return false
    })

    // start game
    $('.GO-button').click(function () {
        // creating cookies
        Cookies.set('feeling', 'calm');
        Cookies.set('door', 'look');
        Cookies.set('plan', 'considering');
        Cookies.set('sure', 'perhaps');
    });

    // switch map and back to game
    $('.map-button').click(function () {
        // switch from GAME to MAP
        if($('.map-button-text').text() == 'MAP'){
            $('.map-button-text').text('BACK');
            $('.map').css({visibility: 'visible', opacity: 0}).animate({opacity: 1}, 300);
            //$('.map').css('visibility', 'visible');
        } else { // switch from MAP to GAME
            $('.map-button-text').text('MAP');
            $('.map').css({opacity: 1}).animate({opacity: 0}, 300, function() {
                $('.map').css('visibility', 'hidden');
            });
            //$('.map').css('visibility', 'hidden');
        }
    });

});
