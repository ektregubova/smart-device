import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {showFooterItem} from './modules/footer';
import {onLinkMove} from './modules/anchor';
import {showMoreText} from './modules/about';
import {addListenerOnInput, onClickFocusInput} from './modules/form';


window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  showFooterItem();
  onLinkMove();
  showMoreText();
  addListenerOnInput();
  onClickFocusInput();
  window.addEventListener('load', () => {
    initModals();
  });
});

