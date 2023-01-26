import IMask from 'imask';

const element = document.querySelectorAll('.form__input_type_tel');

function initMask() {
  element.forEach((item) => {
    const maskOptions = {
      mask: '+{7}(000)000-00-00',
    };
    const mask = IMask(item, maskOptions);
  });
}

export { initMask };
