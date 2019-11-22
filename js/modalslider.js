// 모달 관련 슬라이더
var modalIdx = 1;
function modalNextBtn() {
  modalIdx++;
  var modalLeft = (modalIdx - 1) * 100;
  document.getElementById('modal_step_' + modalIdx).classList.add("active");
  // console.log(modalLeft);
  document.getElementById('modal_ul').style.marginLeft = "-" + modalLeft + "%";
}

// modalslider
var modalSlider = new Swiper('.modal-slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
// modal 열고 닫기 
let educationOpenBtn = document.querySelector('.education-btn');
let educationBack = document.querySelector('.education-back');
let educationContents = document.querySelector('.education-contents');
let educationSubmit = document.querySelector('.education-contents .submit-btn');
let educationCloseBtn = document.querySelector('.education-close-btn');

 function CloseAll() {
  educationBack.classList.add("a11y");
  educationContents.classList.add("a11y");
}

educationOpenBtn.addEventListener("click", function () {
  educationBack.classList.remove('a11y');
  educationContents.classList.remove('a11y');
});

educationSubmit.addEventListener("click", CloseAll);
educationCloseBtn.addEventListener("click", CloseAll);

// input 기타 클릭시 
let otherLabel = document.querySelector('.other-label');
let otherInput = document.querySelector('.other-input');

otherLabel.addEventListener("click", function () {
  !otherLabel.classList.contains('active')
  otherLabel.classList.add('active')
  otherInput.classList.add('active')
});


// date 호환
$(function() {
  //input을 datepicker로 선언
  $("#datepicker").datepicker({
      dateFormat: 'yy-mm-dd' //Input Display Format 변경
      ,showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
      ,showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
      ,changeYear: true //콤보박스에서 년 선택 가능
      ,changeMonth: true //콤보박스에서 월 선택 가능                
      ,showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
      ,buttonImageOnly: false //기본 버튼의 회색 부분을 없애고, 이미지만 보이게 함            
      ,yearSuffix: "년" //달력의 년도 부분 뒤에 붙는 텍스트
      ,monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'] //달력의 월 부분 텍스트
      ,monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] //달력의 월 부분 Tooltip 텍스트
      ,dayNamesMin: ['일','월','화','수','목','금','토'] //달력의 요일 부분 텍스트
      ,dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'] //달력의 요일 부분 Tooltip 텍스트
      ,minDate: "-1M" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
      ,maxDate: "+1M" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                
  });                    
  
  //초기값을 오늘 날짜로 설정
  $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
});