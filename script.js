document.getElementById('bookingForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const message = document.getElementById('formMessage');
  message.textContent = 'Thank you! Your appointment request has been received.';
  this.reset();
});
