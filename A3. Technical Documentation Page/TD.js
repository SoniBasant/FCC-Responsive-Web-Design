
// variables
const open_btn  = document.querySelector('.open-btn');
const close_btn  = document.querySelector('.close-btn');
const nav = document.querySelector('#navbar');
const mainDoc = document.getElementById("main-doc")

// open navbar
open_btn.addEventListener('click', () => {
    nav.classList.add('visible');
});

// close navbar
close_btn.addEventListener('click', () => {
    nav.classList.remove('visible');
});

// close navbar by clicking on the screen (other than navbar)
mainDoc.addEventListener('click', () => {
    nav.classList.remove('visible');
});
