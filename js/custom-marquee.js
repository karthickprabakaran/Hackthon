$(function(){
    $('.de-marquee-list').marquee({
        direction: 'left',
        duration: 10000,
        gap: 0,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: true
    });

    $('.wm-carousel').marquee({
        direction: 'left',
        duration: 2000,
        gap: 100,
        delayBeforeStart: 0,
        duplicated: true,
        startVisible: false
    });
});