const schBtn = document.querySelector('.sch-but');
const closeBtn = document.querySelector('.sch-icon');
const schForm = document.querySelector('.sch-form');

// 열림버튼과 닫기버튼이 분리된 경우
schBtn.addEventListener('click', () => {
  schForm.classList.add('active');
});
closeBtn.addEventListener('click', () => {
  schForm.classList.remove('active');
});