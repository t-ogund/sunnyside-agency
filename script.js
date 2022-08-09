const hamburger = document.querySelector('#hamburger');
const hamburgerMenu = document.querySelector('#hamburger-menu');
const transformLearnMore = document.querySelector('#transform-learn-more');
const transformUnderline = document.querySelector('#transform-underline');
const standoutLearnMore = document.querySelector('#stand-out-learn-more');
const standoutUnderline = document.querySelector('#stand-out-underline');

hamburger.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hide');
})

transformLearnMore.addEventListener('mouseenter', () => {
    transformUnderline.style.display = 'block';
})

standoutLearnMore.addEventListener('mouseenter', () => {
    standoutUnderline.style.display = 'block';
})

standoutLearnMore.addEventListener('mouseleave', () => {
    standoutUnderline.style.display = 'none';
})