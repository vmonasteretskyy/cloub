$(document).ready(function () {
    $(".todown a").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });


    // 2 screen
    $('.take0, .take100').on('click', function (e) {
        e.preventDefault();
    });

    var jx = $('.juxtapose');

    $('.take0').click(function () {
        jx.find('.jx-handle').animate({ 'left': '100%' }, 400);
        jx.find('.jx-left').animate({ 'width': '100%' }, 400);
        jx.find('.jx-right').animate({ 'width': '0%' }, 400);
        $(this).parent().addClass('active');
        $('.take100').parent().removeClass('active');
    });

    $('.take100').click(function () {
        jx.find('.jx-handle').animate({ 'left': '0%' }, 400);
        jx.find('.jx-left').animate({ 'width': '0%' }, 400);
        jx.find('.jx-right').animate({ 'width': '100%' }, 400);
        $(this).parent().addClass('active');
        $('.take0').parent().removeClass('active');
    });

    // burger menu

    $('.burger-btn').click(function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });

    $('.closemenu').click(function () {
        $('.header__menu').removeClass('active');
    });

    // menu

    if ($(window).width() < 1025) {
        $('.header__menu ul li.dropdown span').click(function () {
            $(this).next('.sublist').slideToggle();
        });
        $('.footer__nav>ul>li span').click(function () {
            $(this).next('.footer__submenu').slideToggle();
        });
    }



});