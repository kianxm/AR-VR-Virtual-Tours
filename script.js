const modalBtn = document.querySelector('.dorms-btn');
const modalBg = document.querySelector('.modal-container');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', () => {
    modalBg.classList.add('modal-active');
});

modalClose.addEventListener('click', () => {
    modalBg.classList.remove('modal-active');
});

// Room JS
const h = document.querySelector("#h");
const b = document.body;

let base = (e) => {
    var x = e.pageX / window.innerWidth - 0.5;
    var y = e.pageY / window.innerHeight - 0.5;
    h.style.transform = `
        perspective(90vw)
        rotateX(${ y * 4  + 75}deg)
        rotateZ(${ -x * 12  + 45}deg)
        translateZ(-9vw)
    `;
}

b.addEventListener("pointermove", base);


