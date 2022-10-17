const inputs = document.querySelectorAll('input[data-tel-input]');
const buttonOpenModal = document.querySelector('button[data-open-modal]');
const inputName = document.querySelector('input[data-name-input]');

function onClickFocusInput() {
  buttonOpenModal.addEventListener('click', () => {
    setTimeout(() => inputName.focus(), 500);
  });
}

function getInputNumberValue(input) {
  return input.value.replace(/\D/g, '');
}

function onPhoneInput(evt) {
  let input = evt.target;
  let inputNumberValue = getInputNumberValue(input);
  let formattedInputValue = '+7';

  if (!inputNumberValue) {
    input.value = '';
  }

  if (inputNumberValue.length > 1) {
    formattedInputValue += '(' + inputNumberValue.substring(1, 4);
  }

  if (inputNumberValue.length >= 5) {
    formattedInputValue += ')' + inputNumberValue.substring(4, 14);
  }

  input.value = formattedInputValue;
}

function onInputKeyDown(evt) {
  const inputValue = evt.target.value.replace(/\D/g, '');
  if (evt.keyCode === 8 && inputValue.length === 1) {
    evt.target.value = '';
  }
}

function addListenerOnInput() {
  inputs.forEach((input) => {
    input.addEventListener('input', onPhoneInput);
    input.addEventListener('keydown', onInputKeyDown);
  });
}

export {addListenerOnInput, onClickFocusInput};
