var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// script slider

const
  slides = document.querySelectorAll('.slide'),
  controls = document.querySelectorAll('.control');
  
let index = 0;

const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeControl = n => {
  for (control of controls) {
    control.classList.remove('active');
  }
  controls[n].classList.add('active');
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    activeSlide(index);
    activeControl(index);
  } else {
    index++;
    activeSlide(index);
    activeControl(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    activeSlide(index);
    activeControl(index);
  } else {
    index--;
    activeSlide(index);
    activeControl(index);
  }
}

controls.forEach((item, indexControl) => {
  item.addEventListener('click', () => {
    index = indexControl;
    activeSlide(index);
    activeControl(index);
  })
})

if (slides.length != 0) {
  setInterval(nextSlide, 10000);
}

// script accordion

var tree = document.querySelector('.page__tree');

tree.onclick = function(event) {
  if (event.target.tagName != 'H3') return;
  let childrenContainer = event.target.parentNode.querySelector('div');
  console.log("parentNode.tagName == " + event.target.parentNode.tagName);
  console.log(childrenContainer);
  if (!childrenContainer) return;
  childrenContainer.hidden = !childrenContainer.hidden;
  if (childrenContainer.hidden) {
    event.target.classList.add('hide');
    event.target.classList.remove('show');
  }
  else {
    event.target.classList.add('show');
    event.target.classList.remove('hide');
  }
}