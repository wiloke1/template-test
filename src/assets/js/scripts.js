(function () {
  'use-strict';

  function init() {
    const buttonElement = document.querySelector('#button');
    if (buttonElement) {
      buttonElement.addEventListener('click', () => {
        console.log('Javascript test');
      });
    }
  }

  window.addEventListener('load', init);
})();
