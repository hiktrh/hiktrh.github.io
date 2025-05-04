const form = document.getElementById('myForm');
const modal = document.getElementById('popup');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  modal.style.display = 'flex';

  setTimeout(() => {
    modal.style.display = 'none';
    form.submit();
  }, 6000);
});

modal.addEventListener('click', function() {
  popup.style.display = 'none';
  form.submit();
});

const link = document.getElementById('submit-button');
const button = document.getElementById('submit-form');

link.addEventListener('click', (event) => {
  event.preventDefault();
  button.click();
});