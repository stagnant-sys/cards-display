let backdrop = document.querySelector('.backdrop');
let currentCardContainer = document.querySelector('.main-card__container');
let currentCard = document.querySelector('.main-card__frame');

currentCardContainer.addEventListener('click', function() {
  currentCard.classList.remove('animated-card');
  backdrop.style.display = 'block';
  currentCardContainer.classList.add('zoomed-card');
})

backdrop.addEventListener('click', function() {
  backdrop.style.display = 'none';
  currentCardContainer.classList.remove('zoomed-card');
  currentCard.classList.add('animated-card');
})