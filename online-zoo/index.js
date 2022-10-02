/* Donation Progress Bar
================================================== */
function changeCheckedRadio() {
  // Makes $100 the default donation option if
  // screen width is less than 921px.
  const radio100 = document.getElementById('100');
  if (window.innerWidth < 921) {
    radio100.setAttribute('checked', 'true');
  }
}

window.addEventListener('load', changeCheckedRadio);
window.addEventListener('resize', changeCheckedRadio);