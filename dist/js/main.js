const menubtn = document.querySelector('.menu-btn');
const menuburger = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menunav = document.querySelector('.menu-nav');
const menunavitem = document.querySelectorAll('.menu-nav-item');

let isShow = false;

menubtn.addEventListener('click', menuToggle);

function menuToggle() {
    if(!isShow) {
        menuburger.classList.add('open');
        menunav.classList.add('open');
        nav.classList.add('open');
        menunavitem.forEach(element => element.classList.add('open'));
        isShow = true;
    }else {
        menuburger.classList.remove('open');
        menunav.classList.remove('open');
        nav.classList.remove('open');
        menunavitem.forEach(element =>element.classList.remove('open'));
        isShow = false;
    }
}