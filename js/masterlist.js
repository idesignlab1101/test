// tab
var masterBtnList = $(".on-click");
var masterContentList = $(".category");

masterBtnList.on("click", function () {
    masterBtnList.removeClass("active");
    masterContentList.removeClass("active");
    $(this).addClass("active");
    var content = $(this).attr("data-target");
    $(content).addClass("active");
});

// question
function questionOpen(idx){
    document.getElementById('question_open_'+idx).classList.add('active');
    document.getElementById('question_wrap_'+idx).classList.add('active');
    document.getElementById('question_close_'+idx).classList.add('active');
}

function questionClose(idx){
    document.getElementById('question_open_'+idx).classList.remove('active');
    document.getElementById('question_wrap_'+idx).classList.remove('active');
    document.getElementById('question_close_'+idx).classList.remove('active');
}

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