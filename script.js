const MENU = document.getElementById('menu');
const VERTICAL_PHONE = document.querySelector('.vertical-phone');
const HORIZONTAL_PHONE = document.querySelector('.horizontal-phone');
const PORTFOLIO_IMAGES = document.querySelector('.portfolio__images');
const PORTFOLIO_TAGS = document.querySelector('.portfolio__tags');
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('.menu__ref').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});
PORTFOLIO_IMAGES.addEventListener('click', (event) => {
  PORTFOLIO_IMAGES.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('bordered'));
  event.target.classList.add('bordered');
});
PORTFOLIO_TAGS.addEventListener('click', (event) => {
  PORTFOLIO_TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});
VERTICAL_PHONE.addEventListener('click', () => document.getElementById('phone1').classList.toggle('display-none'));
HORIZONTAL_PHONE.addEventListener('click', () => document.getElementById('phone2').classList.toggle('display-none'));