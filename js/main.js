// review slider
var swiper = new Swiper('.review-slider', {
  slidesPerView: 2,
  spaceBetween: 30,
  loop: false,
  centeredSlides: true,
  autoplay: {
    delay: 2400,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  }
});
$(".review-slider .swiper-slide").hover(
  function () {
    swiper.autoplay.stop();
  }, function () {
    swiper.autoplay.start();
  }
);


// data-pg event
var windowH = $(window).height();
var marginT = windowH / 2;

// 넘버 카운팅 변수
var counterTrue = false;

let motion = document.querySelector('.data-pg h2');
let dataSection = document.querySelector('.data-pg');
let dataSectionTop = dataSection.offsetTop;
$(window).scroll(function () {
  if ($(this).scrollTop() <= dataSectionTop - marginT) {


    if (!counterTrue) {
      if (!motion.classList.contains('active')) {
        motion.classList.add('active');
      }
      new numberCounter("counter1", 12345);
      new numberCounter("counter2", 12345);
      new numberCounter("counter3", 100);
      counterTrue = true;
    }
  }
  else {
    motion.classList.remove('active');
  }
});


// honor-pg all-slider slider
var allSlider = new Swiper('.category-list1-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var list2Slider = new Swiper('.category-list2-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var list3Slider = new Swiper('.category-list3-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var list4Slider = new Swiper('.category-list4-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// honor-pg tab 
var btnList = $(".on-click");
var contentList = $(".category");

btnList.on("click", function () {
  btnList.removeClass("active");
  contentList.removeClass("active");
  $(this).addClass("active");
  var content = $(this).attr("data-target");
  $(content).addClass("active");
});


// 숫자 카운팅 함수
function numberCounter(target_frame, target_number) {
  this.count = 0; this.diff = 0;
  this.target_count = parseInt(target_number);
  this.target_frame = document.getElementById(target_frame);
  this.timer = null;
  this.counter();
};

numberCounter.prototype.counter = function () {
  var self = this;
  this.diff = this.target_count - this.count;

  if (this.diff > 0) {
    self.count += Math.ceil(this.diff / 5);
  }
  this.target_frame.innerHTML = this.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  if (this.count < this.target_count) {
    this.timer = setTimeout(function () { self.counter(); }, 30);
  } else {
    clearTimeout(this.timer);
  }
};

