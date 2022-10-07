import users from '../data/users.json' assert { type: "json" };
import * as util from './utility.js';

/**
 * TODO:
 *  # Write function to generate a review;
 *  # Write function to append review to reviews container;
 *  # Create a reviews wrapper with overflow: hidden;
 *  # Create a reviews container with fixed width;
 *  # Generate 11 random reviews and append them to the reviews container;
 *  # Add eventListener on input range to change reviews based on the input value.
 *  !!! One step on range adds only one new review !!!
 */

export default function activateTestimonialsSlider() {
  console.log('slider on')

  // Create review nodes
  const times = ['Today', 'Yesterday', 'Last Month'];
  const reviews = users.map(user => getReview(user));
  util.shuffleArray(reviews);

  // Append review nodes to the reviews container
  const reviewsContainer = document.querySelector('.testimonials__reviews-container');
  reviewsContainer.append(...reviews);

  //================================================
  const inputRange = document.querySelector('#line-scroll');
  
  inputRange.addEventListener('change', () => {
    moveTo(inputRange.value);
  })

  function moveTo(value) {
    const reviewWidth = reviewsContainer.querySelector('.review').offsetWidth;
    const gap = 30;
    const factor = reviewWidth + gap;

    reviewsContainer.style.left = (-1 * factor * value) + 'px';
  }

  function getReview(user) {
    const reviewTime = times[util.getRandomInteger(0, times.length)];

    const review = document.createElement('div');
    review.classList.add('review');

    review.innerHTML = `
      <div class="review__meta">
      <div class="review__profile-pic">
        <img src="${user.avatar}" alt="user profile pic">
      </div>
      <div class="review__author">
        ${user.name}
      </div>
      <div class="review__place-time">
        <span class="review__location">
          ${user.location}
        </span>
        <span>	
          &#8226
        </span>
        <span class="review__time">
          ${reviewTime}
        </span>
      </div>
    </div>
    <p class="review__text">
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
      The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.The best online zoo I’ve met. My son delighted very much ljves to watch gouillas. Online zoo is one jf the ways to instill a love for animals.
    </p>
    `;

    return review;
  }
}

