// data-detail-pg select-box 
let detailSelect = document.querySelector('.detail-select-box');
let detailSelectList = document.querySelector('.detail-select-box .select-list');
let detailSelectListClose = document.querySelector('.detail-select-box .select-list .close');

detailSelect.addEventListener("click", function () {
    if (!detailSelect.classList.contains('active')) {
        detailSelect.classList.add('active');
        detailSelectList.classList.add('active');
        detailSelectListClose.classList.add('active');
    } else {
        detailSelect.classList.remove('active');
        detailSelectList.classList.remove('active');
        detailSelectListClose.classList.remove('active');
    }
});
// top-btn
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.top-btn').fadeIn();
        } else {
            $('.top-btn').fadeOut();
        }
    });

    $(".top-btn").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

// notice-slider 
var noticeSlider = new Swiper('.notice-slider', {
    loop: true,
    spaceBetween: 30,
    cssMode: true,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// notice slider 
// 모바일 일때 notice slider 생길때 section padding-top 변환
$(window).resize(function() { if($(window).width() <700) { 
    $('.notice-slider-wrap').hasClass('active')
    $('.news-list-pg').css('padding-top', '150px')
 } 
});
// notice slider 생길때 section padding-top 변환
$(function () {
    ($('.notice-slider-wrap').hasClass('active'))
    $('.news-list-pg').css('padding-top', '196px')

});
