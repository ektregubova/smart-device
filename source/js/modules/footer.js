const footerItemTitles = document.querySelectorAll('[data-title]');
const footerItem = document.querySelectorAll('[data-item]');

footerItem.forEach((item) => {
  item.classList.remove('no-js');
  item.classList.add('is-close');
});

function showItemFooter() {
  footerItemTitles.forEach((footerItemTitle) => footerItemTitle.addEventListener('click', () => {
    const currentItem = footerItemTitle.closest('[data-item]');
    const isOpened = currentItem.classList.contains('is-open');

    footerItem.forEach((item) => {
      item.classList.remove('is-open');
      item.classList.add('is-close');
    });

    if (!isOpened) {
      currentItem.classList.add('is-open');
      currentItem.classList.remove('is-close');
    }
  }));
}

export {showItemFooter};

