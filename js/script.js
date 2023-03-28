// Select section : Broadcasts

document.addEventListener("DOMContentLoaded", function() {
  const selector = document.querySelector(".choices")

  const choices = new Choices(selector, {
    searchEnabled: false,
    classNames: {
      containerOuter: 'choices header_choices',
     },
     shouldSort: false,
     itemSelectText: '',
  });

// Modal Login

  const modal = new GraphModal({
    isOpen: (modal) => {
      console.log('opened');
    },
    isClose: () => {
      console.log('closed');
    }
  });
});

// Accordion section: Guests

new Accordion('.accordion-list',{
  // heightStyle: 'content',
  collapsible: 'true',
  duration: '500',
  elementClass: 'accordion__item',
  triggerClass: 'accordion__btn',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});

// Tabs section: Guests

let tabsBtn = document.querySelectorAll('.guests__name');
let tabsItem = document.querySelectorAll('.guest-content');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('guests__name--active')});
    e.currentTarget.classList.add('guests__name--active');

    tabsItem.forEach(function(element){ element.classList.remove('guest-content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('guest-content--active');
  });
});

// Slider section: About

const container = document.querySelector(".swiper-container")
var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  direction: 'horizontal',
  // loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
    },

    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 30,
    // },

    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    0: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    }
  },
});

// Show more section : Podcasts

const btnMore = document.querySelector('.podcasts__more');
const podcastItems = document.querySelectorAll('.podcast-item');

btnMore.addEventListener('click', () => {
  podcastItems.forEach(el => { el.classList.toggle('podcast-item--visible')});
});

btnMore.addEventListener('click', function handleClick() {
  const initialText = 'Скрыть';

  if (btnMore.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btnMore.textContent = 'Ещё подкасты';
  } else {
    btnMore.textContent = initialText;
  }
});

// Scrolls nav menu

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Form validator

new window.JustValidate('.about__form', {
  colorWrong: 'var(--thunderbird-red)',
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Ошибка',
      minLength: 'Ошибка',
      maxLength: 'Ошибка'
    },
    mail: {
      required: 'Ошибка',
      email: 'Ошибка'
    },
  },
});

// Burger menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

function() {

  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  document.body.classList.toggle('stop-scroll');

}
)

menuLinks.forEach(function(el){
  el.addEventListener('click', function(){

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

// More players mobile

let headerBottom = document.querySelector('.header__bottom-mobile');
let headerMore = document.querySelector('.header__more');
let headerWrap = document.querySelector('.header__bottom-wrapper');

headerMore.addEventListener('click',
function() {
  headerBottom.classList.toggle('header__bottom-mobile--active');
  headerWrap.classList.toggle('header__bottom-wrapper--active');
}
)

// scroll: accordion >> tabs

const guestName = document.querySelector(".guests__name");
const guestInfo = document.querySelector(".tabs-content");
guestName.addEventListener("click", ()=>{
    window.scroll({
        top: guestInfo.offsetTop,
        behavior: 'smooth'
      });
});

// Play / Pause buttons

const headerBtnArchive = document.querySelector('.header-btn--archive');
const BtnPlay = document.querySelector('.header-btn__play');
const BtnPause = document.querySelector('.header-btn__pause');

headerBtnArchive.addEventListener('click',
function() {
  BtnPlay.classList.toggle('header-btn__play--active');
  BtnPause.classList.toggle('header-btn__pause--active');

}
);

const headerBtnLive = document.querySelector('.header-btn--live');
const BtnPlayLive = document.querySelector('.header-btn-live__play');
const BtnPauseLive = document.querySelector('.header-btn-live__pause');

headerBtnLive.addEventListener('click',
function() {
  BtnPlayLive.classList.toggle('header-btn-live__play--active');
  BtnPauseLive.classList.toggle('header-btn-live__pause--active');

}
)


// search btn

const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.header__search');

searchBtn.addEventListener('click',
function() {
  searchInput.classList.toggle('search__input--active');
})