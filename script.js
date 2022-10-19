document.getElementById('open').addEventListener('click', () => {
    document.querySelector('.modal-container').style.display = 'flex';
})

document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.modal-container').style.display = 'none';
})