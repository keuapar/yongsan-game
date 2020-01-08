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
        Cookies.set('66', 'False');
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
        Cookies.set('66', 'False');
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
        // print everything upon scrolling
        fastPrint();
    });

    // check for unlockable characters
    if ($('.story').attr('data-med1') == 'Unlocked') {
        if (Cookies.get('med1') == 'Locked') {
            $('.map-button').addClass('map-animation');
        }
        Cookies.set('med1', 'Unlocked');
        console.log('Chef unlocked!');
    }
    if ($('.story').attr('data-med2') == 'Unlocked') {
        if (Cookies.get('med2') == 'Locked') {
            $('.map-button').addClass('map-animation');
        }
        Cookies.set('med2', 'Unlocked');
        console.log('Park Soo-Geun unlocked!');
    }
    if ($('.story').attr('data-med3') == 'Unlocked') {
        if (Cookies.get('med3') == 'Locked') {
            $('.map-button').addClass('map-animation');
        }
        Cookies.set('med3', 'Unlocked');
        console.log('Samgakji artist unlocked!');
    }
    if ($('.story').attr('data-med4') == 'Unlocked') {
        if (Cookies.get('med4') == 'Locked') {
            $('.map-button').addClass('map-animation');
        }
        Cookies.set('med4', 'Unlocked');
        console.log('American soldier unlocked!');
    }
    if ($('.story').attr('data-med5') == 'Unlocked') {
        if (Cookies.get('med5') == 'Locked') {
            $('.map-button').addClass('map-animation');
        }
        Cookies.set('med5', 'Unlocked');
        console.log('Mama-san unlocked!');
    }
    if ($('.story').attr('data-med6') == 'Unlocked') {
        if (Cookies.get('med6') == 'Locked') {
            $('.map-button').addClass('map-animation');
        }
        Cookies.set('med6', 'Unlocked');
        console.log('Photo studio owner unlocked!');
    }

    // color unlocked characters
    if (Cookies.get('med1') == 'Unlocked') {
        $('.med1').addClass('unlocked');
        if (Cookies.get('lang') == 'KR') {
            $('.med1 .med-name').text('대구탕 식당주인');
        } else {
            $('.med1 .med-name').text('Daegutang shop owner');
        }
    }
    if (Cookies.get('med2') == 'Unlocked') {
        $('.med2').addClass('unlocked');
        if (Cookies.get('lang') == 'KR') {
            $('.med2 .med-name').text('박소금');
        } else {
            $('.med2 .med-name').text('Park Soo-Geun');
        }
    }
    if (Cookies.get('med3') == 'Unlocked') {
        $('.med3').addClass('unlocked');
        if (Cookies.get('lang') == 'KR') {
            $('.med3 .med-name').text('대중 미술가');
        } else {
            $('.med3 .med-name').text('Samgakji artist');
        }
    }
    if (Cookies.get('med4') == 'Unlocked') {
        $('.med4').addClass('unlocked');
        if (Cookies.get('lang') == 'KR') {
            $('.med4 .med-name').text('미국 군인');
        } else {
            $('.med4 .med-name').text('American soldier');
        }
    }
    if (Cookies.get('med5') == 'Unlocked') {
        $('.med5').addClass('unlocked');
        if (Cookies.get('lang') == 'KR') {
            $('.med5 .med-name').text('마마산');
        } else {
            $('.med5 .med-name').text('Mama-san');
        }
    }
    if (Cookies.get('med6') == 'Unlocked') {
        $('.med6').addClass('unlocked');
        if (Cookies.get('lang') == 'KR') {
            $('.med6 .med-name').text('사진관 주인');
        } else {
            $('.med6 .med-name').text('Photo studio owner');
        }
    }

    if ($('.condition').length) {
        $('.condition').each(function () {
            var condition = $(this);
            switch (condition.attr('data-condition')) {
                case '22-8':
                    if (Cookies.get('8') == 'True' && Cookies.get('lang') == 'EN') {
                        console.log('A conditional text has been displayed');
                        condition.text('Now, you understand what the chains in the room were for and why Hae-Rin was so bruised.');
                    } else if (Cookies.get('8') == 'True') {
                        console.log('A conditional text has been displayed');
                        condition.text('이제, 너는 방에 있는 체인이 무엇을 위해 있고, 왜 혜린이가 잡혀있는지 이해하게 될거야');
                    }
                    break;
                case '33-6':
                    if (Cookies.get('6') == 'True' && Cookies.get('lang') == 'EN') {
                        console.log('A conditional text has been displayed');
                        condition.text('You are brought back to the house where it all began, but not without a lot of kicking and screaming. Hae-Rin gives you a sad smile as they put you back into that room and teach you what happens when you try to escape.');
                    } else if (Cookies.get('6') == 'True') {
                        console.log('A conditional text has been displayed');
                        condition.text('모든 곳이 시작되었던 집으로 다시 끌려왔고, 하지만 거기에서는 다시 폭력과 비명은 없었다. 이게 지나가면 혜린이 슬픈 미소를 보내온다. 그들은 다시 당신을 방에 넣고 도망치면 어떤일이 일어나는 지를 가르쳐줄 것이다.');
                    }
                    break;
                case '35-63':
                    if (Cookies.get('63') == 'True' && Cookies.get('lang') == 'EN') {
                        console.log('A conditional text has been displayed');
                        condition.text('You meet that girl again and you feel like screaming at her for conning you into this life, but she shrugs. “A girl has to eat,” she tells you. “And Mama pays well.”');
                    } else if (Cookies.get('63') == 'True') {
                        condition.text('당신은 그 여자에게 당신을 속여 이렇게 살게 내버려둔다고 소리치고 싶지만, 그녀는 어깨를 으쓱한다. "그래도 마마는 돈은 잘줘."');
                    }
                    break;
                case '35-66':
                    if (Cookies.get('66') == 'True' && Cookies.get('lang') == 'EN') {
                        console.log('A conditional text has been displayed');
                        condition.text('You meet that girl again and you feel like screaming at her for conning you into this life, but she shrugs. “Sometimes freedom requires a little sacrifice,” she tells you. “If you don’t think about the bad parts, everything else is pretty sweet.”');
                    } else if (Cookies.get('66') == 'True') {
                        console.log('A conditional text has been displayed');
                        condition.text('당신은 그 여자에게 당신을 속여 이렇게 살게 내버려둔다고 소리치고 싶지만, "가끔 자유는 조금의 희생을 요구하지." 라고 마마가 당신에게 말을한다. "만약 부정적인걸 조금만 생각하지 않는다면, 나머지는 굉장히 괜찮은 걸 알게될 거야."');
                    }

                    break;
                case '38-8':
                    if (Cookies.get('8') == 'True' && Cookies.get('lang') == 'EN') {
                        console.log('A conditional text has been displayed');
                        condition.text('“What’s your name? When I get out, I’ll get someone to save you. A smile touches the corners of her mouth. “I’m Hae-Rin. Good luck.”');
                    } else if (Cookies.get('8') == 'True') {
                        console.log('A conditional text has been displayed');
                        condition.text('“이름이 뭐야? 만약 내가 나간다면, 너를 구해줄게. 그녀는 살짝 미소를 띄웠다. "난 혜린이야. 꼭 성공해야돼."');
                    }
                    break;
                case '58-6':
                    if (Cookies.get('6') == 'True' && Cookies.get('lang') == 'EN') {
                        console.log('A conditional text has been displayed');
                        condition.text('Si Won cowers and shoots you an apologetic look as the two men take you away. You are brought back to the house where it all began, but not without a lot of kicking and screaming. Hae-Rin gives you a sad smile as they put you back into that room and teach you what happens when you try to escape.');
                    } else if (Cookies.get('6') == 'True') {
                        console.log('A conditional text has been displayed');
                        condition.text('시원은 미안한 표정으로 널 처다봤고 두 남자는 당신을 다시 데려간다. 당신은 모든 것이 시작되었던 그 집으로 비명과 폭력과 함께 돌아왔다. 혜린은 슬픈 미소를 짓는다, 그들은 당신을 다시 방으로 집어넣고 탈출하게 되면 어떤일이 일어나는지 가르쳐준다.');
                    }
                    break;
                case '64-62':
                    if (Cookies.get('62') == 'True') {
                        console.log('A conditional choice has been displayed');
                        condition.attr('url', '65.html')
                    }
                    break;
            }
        });
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
        } else if ($(this).attr('data-cookiename') == 'feedback') {
            if (Cookies.get('lang') == 'KR') {
                var win = window.open('https://forms.gle/S6vA7aqCkcDZ5s2v7', '_blank');
                win.focus();
            } else {
                var win = window.open('https://forms.gle/n76vPkZDevVY2DfH9', '_blank');
                win.focus();
            }
        } else {
            Cookies.set($(this).attr('data-cookiename'), $(this).attr('data-cookievalue'))
            window.location = $(this).attr('url');
            return false;
        }
    })

    // play audiofile with delay
    if ($('.story-node-audio').length) {
        $('.story-node-audio').each(function () {
            var timerAudio = parseInt($(this).data('timer'));
            var audio = $(this);
            setTimeout(function () {
                if (audio.data('played') == false) {
                    audio.trigger('play');
                    audio.data('played', 'true');
                }
            }, timerAudio);
        });
    }

    // display image with delay
    if ($('.story-node-image').length) {
        $('.story-node-image').each(function () {
            var timerImage = parseInt($(this).data('timer'));
            var image = $(this);
            setTimeout(function () {
                if (image.data('displayed') == false) {
                    image.css({
                        visibility: 'visible',
                    }).animate({
                        opacity: 1
                    }, 300);
                    image.data('displayed', 'true');
                }
            }, timerImage);
        });
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

        // cancel playing audio
        if ($('.story-node-audio').length && $('.story-node-audio').data('played') == false) {
            $('.story-node-audio').data('played', 'true');

        }

        // display image immediately
        if ($('.story-node-image').length) {
            $('.story-node-image').each(function () {
                var image = $(this);
                if (image.data('displayed') == false) {
                    console.log('Printing an image');
                    image.css({
                        visibility: 'visible',
                    }).animate({
                        opacity: 1
                    }, 300);
                    image.data('displayed', 'true');
                }
            });
        }
    }

    // story typewriter
    var timeBetweenLetters = 20,
        timeBetweenParagraphs = 500;

    if ($('.story').length) {
        // on-click, fast print everything
        $(document).click(fastPrint);

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
                    }, 500);
                    console.log('Done printing the choice.');
                    clearInterval(choiceTimerInt);
                    return;
                }
            }, timeBetweenLetters);
        };
    }

    // switch map and back to game
    $('.map-button').click(function () {
        if (Cookies.get('lang') == 'KR') { // switch from GAME to MAP
            if ($('.map-button-text').text() == '지도') {
                $('.map-button-text').text('뒤로');
                $('.map').css({
                    visibility: 'visible',
                    opacity: 0
                }).animate({
                    opacity: 1
                }, 300);
                //$('.map').css('visibility', 'visible');
            } else { // switch from MAP to GAME
                $('.map-button-text').text('지도');
                $('.map').css({
                    opacity: 1
                }).animate({
                    opacity: 0
                }, 300, function () {
                    $('.map').css('visibility', 'hidden');
                });
                //$('.map').css('visibility', 'hidden');
            }
        } else {
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
        }
    });

});
