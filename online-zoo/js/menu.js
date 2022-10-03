export default function activateMenu() {
  const body = document.body;
  const burgerIcon = document.querySelector('.header__burger');
  const closeBtn = document.querySelector('.menu__close');
  const menu = document.querySelector('.menu');
  const overlay = document.querySelector('.overlay');


  /*--Open menu on burger click------------------------------------------------------------------*/
  burgerIcon.addEventListener('click', () => {
    menu.classList.add('menu_active');                     // Slide-in (slide-out) menu
    overlay.classList.toggle('overlay_active');            // Show (hide) overlay
    body.classList.toggle('scroll-locked');                // Prohibit (allow) scrolling
  });
  
  /*--Close menu on a click outside menu------------------------------------------------------------------*/
  document.addEventListener('click', event => {
    console.log(event.target);
    if (
      event.target != burgerIcon &&
      event.target != menu
      ) {
      menu.classList.remove('menu_active');                 // Slide-out menu
      overlay.classList.remove('overlay_active');           // Hide overlay
      body.classList.remove('scroll-locked');               // Allow scrolling
    }
  });

  /* Close menu on X icon click.
  ================================================== */
  closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu_active');                 // Slide-out menu
    overlay.classList.remove('overlay_active');           // Hide overlay
    body.classList.remove('scroll-locked');               // Allow scrolling
  })
}