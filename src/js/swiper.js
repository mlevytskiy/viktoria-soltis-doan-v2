// import Swiper JS
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
  EffectFade,
  A11y,
} from 'swiper';

// Swiper.use([Navigation, Pagination]);

// import Swiper styles
// import '../../node_modules/swiper/swiper-bundle.css';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination, Autoplay, Keyboard, EffectFade, A11y],

  speed: 800,
  spaceBetween: 100,

  // Optional parameters
  // direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // AutoplayOptions
  autoplay: {
    delay: 3000,
  },

  // keyboard control
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // Fade Effect
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },

  // Accessibility (a11y)
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
});
