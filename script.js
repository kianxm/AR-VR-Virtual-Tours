const modalBtn = document.querySelector('.dorms-btn');
const modalBg = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('modal-active');
});

var data = ["Kian", "Matthew", "Eva"];
 
var last = data.pop();
var title = `${data.join(", ")} and ${last}`;
document.getElementById('pageTitle').innerText = title;