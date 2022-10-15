const anchor = document.querySelector('a[href="#form"]');
const form = document.querySelector('#form');

function onLinkMove() {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    form.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
export {onLinkMove};
