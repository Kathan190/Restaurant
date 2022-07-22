const navIconEl = document.querySelector('.nav__icon');
const navcloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const overBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
    navList.classList.add('show');
    navBgOverlayEl.classList.add('active');
    document.body.style = 'visibility: visible; hight: 100vh; width:100vw; overflow: hidden;'
}

const navClose = () => {
    navList.classList.remove('show');
    navBgOverlayEl.classList.remove('active');
    document.body.style = 'visiblity: visible; height: initial; width: 100%; overflow-x: hidden';
}

navIconEl.addEventListener('click', navopen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);