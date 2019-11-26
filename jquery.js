$(document).ready(function () {

    /* on-load animation
    $('.title').fadeIn(1000).removeClass('hidden');
    $('.line2').fadeIn(1000).removeClass('hidden');
    $('.GO-button').fadeIn(1000).removeClass('hidden');
    $('.line1').fadeIn(1000).removeClass('hidden');
    */

    // stl_viewer
    if ($('#stl_cont').length) {
        var stl_viewer = new StlViewer(
            document.getElementById("stl_cont"), {
                auto_rotate: false,
                bgcolor: "white",
                camerax: 0,
                cameray: 0,
                models: [{
                    id: 0,
                    filename: "house1.stl"
                }]
            }
        );
        console.log(JSON.stringify(stl_viewer.get_model_info(0)))
    }

    // scroll to choices
    var once = true;
    $(window).scroll(function () {
        var hT = $('.choice-screen').offset().top,
            hH = $('.choice-screen').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        //console.log(wS, lastScrollTop);
        if (wS + wH >= hT && once) {
            once = false;
            var bottom = hT + hH;
            $('html, body').animate({
                scrollTop: bottom
            }, 2000);
        }
    });

    // start game
    $('.GO-button').click(function () {
        // creating cookies
        Cookies.set('feeling', '-');
        Cookies.set('door', '-')
        // start game
        window.location = $(this).attr('url');
        return false;
        // blackout the screen
    });

    // choice redirect (put url as div parameter)
    $('.choice').click(function () {
        // save the choice Cookie
        if ($(this).attr('data-cookiename') == 'reset') {
            Cookies.set('6', 'False');
            Cookies.set('8', 'False');
            console.log('Cookies have been reset');
            window.location = $(this).attr('url');
            return false;
        } else {
            Cookies.set($(this).attr('data-cookiename'), $(this).attr('data-cookievalue'))
            window.location = $(this).attr('url');
            return false;
        }
    })

    // play audiofile
    if ($('.story-node-audio').length) {
        timer = parseInt($('.story-node-audio').data('timer'));
        setTimeout(function () {
            $('.story-node-audio').trigger('play');
        }, timer);
    }

    // story typewriter
    var timeBetweenLetters = 25,
        timeBetweenParagraphs = 500;

    if ($('.story').length) {

        // store text of the story (name, p, choice)
        var name = $('.story-node-name').text(),
            storyNodeText = $('.story-node-text-p').toArray(),
            text = [],
            choice = $('.story-node-choice').text();
        $('.story-node-text-p').each(function () {
            text.push($(this).text())
        });
        // clear all text so it can be printed
        $('.story-node-name').text('');
        $('.story-node-text-p').text('');
        $('.story-node-choice').text('');

        // print the story node name, letter by letter
        var nameTimerInt = setInterval(function () {
            $('.story-node-name').append(name[0]);
            name = name.substring(1);
            if (name.length == 0) {
                console.log('Done printing the title.');
                clearInterval(nameTimerInt);
                setTimeout(function () {
                    textTimer(0);
                }, timeBetweenParagraphs);
                return;
            }
        }, timeBetweenLetters);

        // print story paragraphs, letter by letter
        var numberOfTexts = text.length;
        var textTimer = function (i) {
            if (i == numberOfTexts) {
                choiceTimer();
                return;
            }
            var currentP = $('.story-node-text-p').eq(i);
            var textP = text[i];

            var textTimerInt = setInterval(function () {
                currentP.append(textP[0]);
                textP = textP.substring(1);
                if (textP.length == 0) {
                    console.log('Done printing a text paragraph.');
                    clearInterval(textTimerInt);
                    setTimeout(function () {
                        textTimer(i + 1);
                    }, timeBetweenParagraphs);
                    return;
                }
            }, timeBetweenLetters);
        };

        // print the choice prompt, letter by letter
        var choiceTimer = function () {
            var choiceTimerInt = setInterval(function () {
                $('.story-node-choice').append(choice[0]);
                choice = choice.substring(1);
                if (choice.length == 0) {
                    console.log('Done printing the choice.');
                    clearInterval(choiceTimerInt);
                    return;
                }
            }, timeBetweenLetters);
        };
    }

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
