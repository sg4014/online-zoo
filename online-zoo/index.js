import activateMenu from './js/menu.js';
import activateCarousel from './js/carousel.js';
import activateTestimonialsSlider from './js/testimonialsSlider.js';
import activatePopup from './js/popup.js';

/* Donation Progress Bar
================================================== */
function changeCheckedRadio() {
  // Makes $100 the default donation option if
  // screen width is less than 921px.
  const radio100 = document.getElementById('100');
  if (window.innerWidth < 921) {
    radio100.setAttribute('checked', 'true');
  }
}

window.addEventListener('load', changeCheckedRadio);
window.addEventListener('resize', changeCheckedRadio);

activateMenu();
activateCarousel();
activateTestimonialsSlider();
activatePopup();