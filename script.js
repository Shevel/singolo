const MENU = document.getElementById('menu');
const VERTICAL_PHONE = document.querySelector('.vertical-phone');
const HORIZONTAL_PHONE = document.querySelector('.horizontal-phone');
const PORTFOLIO_IMAGES = document.querySelector('.portfolio__images');
const PORTFOLIO_TAGS = document.querySelector('.portfolio__tags');
const SUBMIT_BUTTON = document.querySelector('#submit-btn');
const CLOSE_BUTTON = document.querySelector('#close-btn');
const SLIDES = document.querySelectorAll('.slide');
const FORM = document.querySelector('.form');
let currentSlide = 0;
let isEnabled = true;

document.addEventListener('scroll',onScroll);

//Add Border on images in portfolio by click

PORTFOLIO_IMAGES.addEventListener('click', onPortfolioImageClick);

function onPortfolioImageClick(event) {
  PORTFOLIO_IMAGES.querySelectorAll('.portfolio__image').forEach(el => el.classList.remove('bordered'));
  if (event.target.tagName != 'IMG') return;
  event.target.classList.add('bordered');
}

// SORT img in portfolio by tags

PORTFOLIO_TAGS.addEventListener('click', onPortfolioTagClick);

function onPortfolioTagClick(event) {
  PORTFOLIO_TAGS.querySelectorAll('.tag').forEach(el => el.classList.remove('active'));
  if (event.target.tagName != 'SPAN') return;
  if (event.target.textContent == 'Artwork') {
    event.target.classList.add('active');
    const collection = PORTFOLIO_IMAGES.querySelectorAll('.portfolio__image');
    const arrayCollection = Array.prototype.slice.call(collection, 0);
    arrayCollection.sort((a,b) => {
      if (a.src > b.src) {
        return -1;
      }
      if (a.alt < b.alt) {
        return 1;
      }
      return 0;
    });
    PORTFOLIO_IMAGES.innerHTML = '';
    let sortedCollection = toNodeList(arrayCollection);
    while(sortedCollection.length) {
      PORTFOLIO_IMAGES.appendChild(sortedCollection[0]);
    }
  }
  if (event.target.textContent == 'All') {
    event.target.classList.add('active');
    const collection = PORTFOLIO_IMAGES.querySelectorAll('.portfolio__image');
    const arrayCollection = Array.prototype.slice.call(collection, 0);
    arrayCollection.sort((a,b) => {
      if (a.src < b.src) {
        return -1;
      }
      if (a.alt > b.alt) {
        return 1;
      }
      return 0;
    });
    PORTFOLIO_IMAGES.innerHTML = '';
    let sortedCollection = toNodeList(arrayCollection);
    while(sortedCollection.length) {
      PORTFOLIO_IMAGES.appendChild(sortedCollection[0]);
    }
  }
  if (event.target.textContent == 'Web Design') {
    event.target.classList.add('active');
    const collection = PORTFOLIO_IMAGES.querySelectorAll('.portfolio__image');
    const arrayCollection = Array.prototype.slice.call(collection, 0);
    arrayCollection.sort((a,b) => {
      if (a.alt < b.alt) {
        return -1;
      }
      if (a.alt > b.alt) {
        return 1;
      }
      return 0;
    });
    PORTFOLIO_IMAGES.innerHTML = '';
    let sortedCollection = toNodeList(arrayCollection);
    while(sortedCollection.length) {
      PORTFOLIO_IMAGES.appendChild(sortedCollection[0]);
    }
  }
  if (event.target.textContent == 'Graphic Design') {
    event.target.classList.add('active');
    const collection = PORTFOLIO_IMAGES.querySelectorAll('.portfolio__image');
    const arrayCollection = Array.prototype.slice.call(collection, 0);
    arrayCollection.sort((a,b) => {
      if (a.alt > b.alt) {
        return -1;
      }
      if (a.alt < b.alt) {
        return 1;
      }
      return 0;
    });
    PORTFOLIO_IMAGES.innerHTML = '';
    let sortedCollection = toNodeList(arrayCollection);
    while(sortedCollection.length) {
      PORTFOLIO_IMAGES.appendChild(sortedCollection[0]);
    }
  }
}

// Switch on/off image in phones

VERTICAL_PHONE.addEventListener('click', () => document.getElementById('phone1').classList.toggle('display-none'));
HORIZONTAL_PHONE.addEventListener('click', () => document.getElementById('phone2').classList.toggle('display-none'));

// Message in Form by Submit

SUBMIT_BUTTON.addEventListener('click', onSubmitClick);

function onSubmitClick() {
  const subject = document.getElementById('subject').value.toString().trim();
  const describe = document.getElementById('describe').value.toString().trim();
  if (subject) {
    document.getElementById('theme').innerText = `Тема: ${subject}`;
  } else {
    document.getElementById('theme').innerText = 'Без темы';
  }
  if (describe) {
    document.getElementById('description').innerText = `Описание: ${describe}`;
  } else {
    document.getElementById('description').innerText = 'Без описания';
  }
  document.getElementById('message-block').classList.remove('hidden');
}

CLOSE_BUTTON.addEventListener('click', onCloseModal);

function onCloseModal() {
  document.getElementById('theme').innerText = '';
  document.getElementById('description').innerText = '';
  document.getElementById('message-block').classList.add('hidden');
  FORM.reset();
}

//Converting array to nodelist collection

function toNodeList(arrayOfNodes) { 
  let fragment = document.createDocumentFragment();
  arrayOfNodes.forEach(function(item){
    fragment.appendChild(item.cloneNode());
  });
  return fragment.childNodes;
}

 // Slider-carousel
function changeCurrentItem(n) {
  currentSlide = (n + SLIDES.length) % SLIDES.length;
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.slider__arrow.left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentSlide);
  }
});

document.querySelector('.slider__arrow.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentSlide);
  }
});

function hideItem(direction) {
  isEnabled = false;
  SLIDES[currentSlide].classList.add(direction);
  SLIDES[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('visible', direction);
  });
}

function showItem(direction) {
  SLIDES[currentSlide].classList.add('next', direction);
  SLIDES[currentSlide].addEventListener('animationend', function() {
    this.classList.remove('next', direction);
    this.classList.add('visible');
    isEnabled = true;
  });
}
 // ----------------------- activated menu links on scroll
 function onScroll(e) {
   const currentPosition = window.scrollY;
   const blocks = document.querySelectorAll('body > header , body > section ,body > footer ,body > div');
   const links = document.querySelectorAll('#menu a');
   blocks.forEach((element) => {
     if (element.offsetTop <= currentPosition && (element.offsetTop + element.offsetHeight) > currentPosition) {
       links.forEach((a) => {
         a.classList.remove('active');
         if (element.getAttribute('id') === a.getAttribute('href').substring(1)) {
           a.classList.add('active');
         }
       })
     }
   });
 }