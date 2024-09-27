
export default function activatePopup() {
  if (window.screen.width > 970) {
    return; // Popup activates only on width <= 970px.
  }

  const overlay = document.createElement('div');
  overlay.className = 'popup__overlay';
  document.querySelector('footer').after(overlay);

  const visibleReviews = [...document.querySelectorAll('.review')].slice(0, 3);

  visibleReviews.forEach(review => {
    review.addEventListener('click', showPopup);
  });


  function showPopup() {
    overlay.classList.add('popup__overlay_active'); // add dark overlay
    document.body.style.overflow = 'hidden';        // forbid scrolling
    
    const popupReview = document.createElement('div');
    popupReview.innerHTML = this.innerHTML;
    popupReview.className = this.className;
    popupReview.classList.add('popup__review');

    overlay.append(popupReview);

    document.addEventListener('click', event => {
      if (event.target === overlay) {
        popupReview.remove() 
        overlay.classList.remove('popup__overlay_active');  
        document.body.style.overflow = 'visible';
      }
    }, true);
  }
}