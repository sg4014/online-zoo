import activateMenu from './js/menu.js';
import activateCarousel from './js/carousel.js';
import activateTestimonialsSlider from './js/testimonialsSlider.js';
import activatePopup from './js/popup.js';
import activateDonateWidget from './js/donateWidget.js';

document.addEventListener('DOMContentLoaded', () => {
  activateMenu();

  if (document.body.classList.contains('petstory')) {
    activateCarousel();
    activateTestimonialsSlider();
    activatePopup();
  } else if (document.body.classList.contains('donation')) {
    activateDonateWidget();
  }
});