const footerItemTitles = document.querySelectorAll('[data-title]');
const footerItem = document.querySelectorAll('[data-item]');

function showItemFooter() {
  footerItemTitles.forEach((footerItemTitle) => footerItemTitle.addEventListener('click', () => {
    const currentItem = footerItemTitle.closest('[data-item]');
    const isOpened = currentItem.classList.contains('is-open');

    footerItem.forEach((item) => {
      item.classList.remove('is-open');
    });

    if (!isOpened) {
      currentItem.classList.add('is-open');
    }
  }));
}

export {showItemFooter};
