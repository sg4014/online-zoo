import * as util from './utility.js';
import pets from '../data/pets.json' assert { type: "json" };

export default function activateCarousel() {
  const slidesContainer = document.querySelector('.carousel__slides-container');
  const leftSlide = slidesContainer.querySelector('.carousel__slide-left');
  const centerSlide = slidesContainer.querySelector('.carousel__slide-center');
  const rightSlide = slidesContainer.querySelector('.carousel__slide-right');
  const petsCards = pets.map(pet => getPetCard(pet));

  util.shuffleArray(petsCards);
  centerSlide.append(
    ...petsCards.map(pet => pet.cloneNode(true))
  );

  // If viewport width <640px, don't add carousel.
  if (window.innerWidth < 640) {
    return;
  }

  // ==================================================
  const leftBtn = document.querySelector('.carousel__left-btn');
  const rightBtn = document.querySelector('.carousel__right-btn');
  
  leftBtn.addEventListener('click', moveLeft);
  rightBtn.addEventListener('click', moveRight);

  // ==================================================
  slidesContainer.addEventListener('animationend', animationEvent => {
    if (animationEvent.animationName === 'move-left') {
      slidesContainer.classList.remove('transition-left');
      util.removeChildren(centerSlide);
      centerSlide.append(...leftSlide.children);
    }
    else if (animationEvent.animationName === 'move-right') {
      slidesContainer.classList.remove('transition-right');
      util.removeChildren(centerSlide);
      centerSlide.append(...rightSlide.children);
    }
    else {
      throw new Error(`Unexpected animation name: ${animationEvent.animationName}.
      Expected 'move-left' or 'move-right'`);
    }
    
    leftBtn.addEventListener('click', moveLeft);
    rightBtn.addEventListener('click', moveRight);
  });

  /* Function Declarations
  ================================================== */
  function getPetCard(pet) {
    /**
     * Returns the given pet's card.
     * 
     * @param  {object} pet - Object that contains the pet's data.
     * 
     * @return {node}   card - The node for the card of the given pet. 
     */
    const card = document.createElement('div');
    card.classList.add('carousel__card', 'animal-card');

    card.innerHTML = `
      <div class="animal-card__image">
        <img src="${pet.img}" alt="animal">
      </div>
      <div class="animal-card__info">
        <div class="animal-card__text">
          <div class="animal-card__title">
            ${pet.name}
          </div>
          <div class="animal-card__subtitle">
            ${pet.location}
          </div>
        </div>
        <img class="animal-card__icon" src="${pet.icon}" alt="bananas or meat">
      </div>
    `;

    return card;
  }

  function moveLeft() {
    util.shuffleArray(petsCards);
    leftSlide.append(
      ...petsCards.map(pet => pet.cloneNode(true))
    );

    slidesContainer.classList.add('transition-left');

    leftBtn.removeEventListener('click', moveLeft);
    rightBtn.removeEventListener('click', moveRight);
  }

  function moveRight() {
    util.shuffleArray(petsCards);
    rightSlide.append(
      ...petsCards.map(pet => pet.cloneNode(true))
    );

    slidesContainer.classList.add('transition-right');

    leftBtn.removeEventListener('click', moveLeft);
    rightBtn.removeEventListener('click', moveRight);
  }
}