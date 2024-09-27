
export default function activateDonateWidget() {
  const progressBar = document.querySelector('.donation-widget__progress-bar');
  const anotherAmountInput = document.querySelector('.donation-widget__another-amount input');

  progressBar.addEventListener('click', event => {
    const option = event.target.closest('.progress-bar__option');

    if (option) {
      const optionValue = option.querySelector('input').value;
      anotherAmountInput.value = optionValue;
    }
  });

  anotherAmountInput.addEventListener('input', handleAmountChange);

  function handleAmountChange() {
    if (this.value > 4) {
      this.value = this.value.slice(0, 4);
    }

    const matchingRadio = document.getElementById(this.value);

    if (matchingRadio) {
      matchingRadio.click();
    }
  }
}