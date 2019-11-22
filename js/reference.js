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

//   upDownBtn
 let upBtn = document.querySelector('.up-btn');
 let DownBtn = document.querySelector('.down-btn');

 upBtn.addEventListener("click", function () {
    if (!upBtn.classList.contains('active')) {
        upBtn.classList.add('active');
        DownBtn.classList.add('active');
    } else {
        upBtn.classList.remove('active');
        DownBtn.classList.remove('active');
    }
});

DownBtn.addEventListener("click", function () {
    if (!DownBtn.classList.contains('active')) {
        upBtn.classList.add('active');
        DownBtn.classList.add('active');
    } else {
        upBtn.classList.remove('active');
        DownBtn.classList.remove('active');
    }
});