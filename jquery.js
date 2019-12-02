$(document).ready(function () {

    /* on-load animation
    $('.title').fadeIn(1000).removeClass('hidden');
    $('.line2').fadeIn(1000).removeClass('hidden');
    $('.GO-button').fadeIn(1000).removeClass('hidden');
    $('.line1').fadeIn(1000).removeClass('hidden');
    */

    // start game
    $('.titleEN').click(function () {
        // creating cookies
        Cookies.set('lang', 'EN');
        Cookies.set('6', 'False');
        Cookies.set('8', 'False');
        Cookies.set('62', 'False');
        Cookies.set('63', 'False');
        Cookies.set('64', 'False');
        Cookies.set('65', 'False');
        Cookies.set('67', 'False');
        Cookies.set('med1', 'Locked');
        Cookies.set('med2', 'Locked');
        Cookies.set('med3', 'Locked');
        Cookies.set('med4', 'Locked');
        Cookies.set('med5', 'Locked');
        Cookies.set('med6', 'Locked');
        // start game
        window.location = $(this).attr('url');
        return false;
        // blackout the screen
    });
    // start game
    $('.titleKR').click(function () {
        // creating cookies
        Cookies.set('lang', 'KR');
        Cookies.set('6', 'False');
        Cookies.set('8', 'False');
        Cookies.set('62', 'False');
        Cookies.set('63', 'False');
        Cookies.set('64', 'False');
        Cookies.set('65', 'False');
        Cookies.set('67', 'False');
        Cookies.set('med1', 'Locked');
        Cookies.set('med2', 'Locked');
        Cookies.set('med3', 'Locked');
        Cookies.set('med4', 'Locked');
        Cookies.set('med5', 'Locked');
        Cookies.set('med6', 'Locked');
        // start game
        window.location = $(this).attr('url');
        return false;
        // blackout the screen
    });
    // go to YongsanLegacy.org
    $('.logo').click(function () {
        window.open('https://www.yongsanlegacy.org');
    })

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
        fastPrint();
    });

    // choice redirect (put url as div parameter)
    $('.choice').click(function () {
        // save the choice Cookie
        if ($(this).attr('data-cookiename') == 'reset') {
            Cookies.set('6', 'False');
            Cookies.set('8', 'False');
            Cookies.set('62', 'False');
            Cookies.set('63', 'False');
            Cookies.set('64', 'False');
            Cookies.set('65', 'False');
            Cookies.set('67', 'False');
            Cookies.set('med1', 'Locked');
            Cookies.set('med2', 'Locked');
            Cookies.set('med3', 'Locked');
            Cookies.set('med4', 'Locked');
            Cookies.set('med5', 'Locked');
            Cookies.set('med6', 'Locked');
            console.log('Cookies have been reset');
            window.location = $(this).attr('url');
            return false;
        } else {
            Cookies.set($(this).attr('data-cookiename'), $(this).attr('data-cookievalue'))
            window.location = $(this).attr('url');
            return false;
        }
    })

    // play audiofile with delay
    if ($('.story-node-audio').length) {
        var audioPlayed = false;
        timer = parseInt($('.story-node-audio').data('timer'));
        var audioPlay = setTimeout(function () {
            $('.story-node-audio').trigger('play');
            audioPlayed = true;
        }, timer);
    }

    // display image with delay
    if ($('.story-node-image').length) {
        var imageDisplayed = false;
        timerImage = parseInt($('.story-node-image').data('timer'));
        var imageDisplay = setTimeout(function () {
            $('.story-node-image').css({
                visibility: 'visible',
            }).animate({
                opacity: 1
            }, 300);
            imageDisplayed = true;
        }, timerImage);
    }

    // called onclick from story typewriter
    function fastPrint() {
        clearInterval(nameTimerInt);
        $('.story-node-name').append(name);
        name = '';
        var i;
        for (i = 0; i < text.length; i++) {
            $('.story-node-text-p').eq(i).append(text[i]);
            text[i] = '';
        }
        $('.story-node-choice').append(choice);
        choice = '';

        // play audio immediately
        if ($('.story-node-audio').length && audioPlayed == false) {
            clearTimeout(audioPlay);
            $('.story-node-audio').trigger('play');
            audioPlayed = true;
        }

        // display image immediately
        if ($('.story-node-image').length && imageDisplayed == false) {
            clearTimeout(imageDisplay);
            $('.story-node-image').css({
                visibility: 'visible',
            }).animate({
                opacity: 1
            }, 300);
            imageDisplayed = true;
        }

        // display the arrow
        setTimeout(function () {
            $('.far').css({
                opacity: 1
            });
        }, 2000);
    }

    // story typewriter
    var timeBetweenLetters = 20,
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

            // on-click, fast print everything
            $(document).click(fastPrint);

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
        var textTimer = function (i) {
            if (i == text.length) {
                choiceTimer();
                return;
            }
            var currentP = $('.story-node-text-p').eq(i);

            var textTimerInt = setInterval(function () {
                if (text[i].length > 0) {
                    currentP.append(text[i][0]);
                }
                text[i] = text[i].substring(1);
                if (text[i].length == 0) {
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
                    setTimeout(function () {
                        $('.far').css({
                            opacity: 1
                        });
                    }, 2000);
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
