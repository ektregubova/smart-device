const aboutText = document.querySelector('[data-text]');
const aboutButton = document.querySelector('[data-button]');
const aboutMobile = document.querySelector('[data-mobile]');

function showMoreText() {
  aboutButton.addEventListener('click', () => {
    const isOpened = aboutText.classList.contains('is-open');
    aboutText.classList.remove('is-open');
    aboutMobile.classList.remove('is-open');
    aboutButton.textContent = 'Подробнее';

    if (!isOpened) {
      aboutText.classList.add('is-open');
      aboutMobile.classList.add('is-open');
      aboutButton.textContent = 'Свернуть';
    }
  });
}

export {showMoreText};
