const MENU = document.getElementById('menu');
const VERTICAL_PHONE = document.querySelector('.vertical-phone');
const HORIZONTAL_PHONE = document.querySelector('.horizontal-phone');
MENU.addEventListener('click', (event) => {
  MENU.querySelectorAll('.menu__ref').forEach(el => el.classList.remove('active'));
  event.target.classList.add('active');
});

VERTICAL_PHONE.addEventListener('click', () => document.getElementById('phone1').classList.toggle('display-none'));
HORIZONTAL_PHONE.addEventListener('click', () => document.getElementById('phone2').classList.toggle('display-none'));