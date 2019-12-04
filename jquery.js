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
        // blackout the screen NOPE
    });
    // go to YongsanLegacy.org
    $('.logo').click(function () {
        window.open('https://www.yongsanlegacy.org');
    })

    // scroll to choices on scroll or on click of arrow
    var once = true;
    // on arrow-click
    $('.fa-arrow-alt-circle-down').click(function () {
        once = false;
        var bottom = $('.choice-screen').offset().top + $('.choice-screen').outerHeight();
        $('html, body').animate({
            scrollTop: bottom
        }, 2000);
    })
    // on scroll
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

    // check for unlockable characters
    if ($('.story').attr('data-med1') == 'Unlocked') {
        Cookies.set('med1', 'Unlocked');
        console.log('Chef unlocked!');
    }
    if ($('.story').attr('data-med2') == 'Unlocked') {
        Cookies.set('med2', 'Unlocked');
        console.log('Park Soo-Geun unlocked!');
    }
    if ($('.story').attr('data-med3') == 'Unlocked') {
        Cookies.set('med3', 'Unlocked');
        console.log('Samgakji artist unlocked!');
    }
    if ($('.story').attr('data-med4') == 'Unlocked') {
        Cookies.set('med4', 'Unlocked');
        console.log('American soldier unlocked!');
    }
    if ($('.story').attr('data-med5') == 'Unlocked') {
        Cookies.set('med5', 'Unlocked');
        console.log('Mama-san unlocked!');
    }
    if ($('.story').attr('data-med6') == 'Unlocked') {
        Cookies.set('med6', 'Unlocked');
        console.log('Photo studio owner unlocked!');
    }

    // color unlocked characters
    if (Cookies.get('med1') == 'Unlocked') {
        $('.med1').addClass('unlocked');
        $('.med1 .med-name').text('Daegutang shop owner');
    }
    if (Cookies.get('med2') == 'Unlocked') {
        $('.med2').addClass('unlocked');
        $('.med2 .med-name').text('Park Soo-Geun');
    }
    if (Cookies.get('med3') == 'Unlocked') {
        $('.med3').addClass('unlocked');
        $('.med3 .med-name').text('Samgakji artist');
    }
    if (Cookies.get('med4') == 'Unlocked') {
        $('.med4').addClass('unlocked');
        $('.med4 .med-name').text('American soldier');
    }
    if (Cookies.get('med5') == 'Unlocked') {
        $('.med5').addClass('unlocked');
        $('.med5 .med-name').text('Mama-san');
    }
    if (Cookies.get('med6') == 'Unlocked') {
        $('.med6').addClass('unlocked');
        $('.med6 .med-name').text('Photo studio owner');
    }


    // .choice redirect (put url as div parameter)
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
            $('.fa-arrow-alt-circle-down').css({
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
                        $('.fa-arrow-alt-circle-down').css({
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
