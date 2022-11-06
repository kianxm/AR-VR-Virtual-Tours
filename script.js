const modalBtn = document.querySelector('.dorms-btn');
const modalBg = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');
const viewDormsBtn = document.getElementsByClassName('.main-btn');

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('modal-active');
});
